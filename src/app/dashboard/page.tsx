"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, CalendarCheck2, Users2, TrendingUp, ArrowUpRight } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { listSessions } from "@/lib/firestore";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Spinner } from "@/components/ui/Spinner";
import { SessionCard } from "@/components/molecules/SessionCard";
import { timeAgo, parseNaijaDateTime } from "@/lib/utils";
import type { AttendanceSession } from "@/types";

export default function DashboardHomePage() {
  const { user, profile } = useAuth();
  const [sessions, setSessions] = useState<AttendanceSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [now] = useState(() => Date.now());

  useEffect(() => {
    if (!user) return;
    listSessions(user.uid)
      .then(setSessions)
      .finally(() => setLoading(false));
  }, [user]);

  // `status === "active"` alone isn't enough — a session past its endTime
  // may not have been flipped to "ended" yet (the cron runs every 5min at
  // best, and only fires if a lecturer has that specific board open for
  // the client-side auto-end). Filtering on endTime here too means the
  // dashboard never visually shows an expired session as "live", even
  // during that gap, regardless of backend state lag.
  const active = sessions.filter(
    (s) => s.status === "active" && parseNaijaDateTime(s.endTime) > now
  );
  const recent = sessions.filter((s) => s.status === "ended").slice(0, 5);

  const thisMonth = sessions.filter(
    (s) => new Date(s.createdAt).getMonth() === new Date(now).getMonth()
  );
  const weekAgo = now - 7 * 24 * 60 * 60 * 1000;
  const studentsThisWeek = sessions
    .filter((s) => s.createdAt >= weekAgo)
    .reduce((sum, s) => sum + s.studentsMarked, 0);
  const avgAttendance =
    sessions.length > 0
      ? Math.round(
          (sessions.reduce((sum, s) => sum + s.studentsMarked, 0) / sessions.length) * 10
        ) / 10
      : 0;

  const stats = [
    { label: "Sessions this month", value: thisMonth.length, icon: CalendarCheck2 },
    { label: "Students marked this week", value: studentsThisWeek, icon: Users2 },
    { label: "Avg. attendance / session", value: avgAttendance, icon: TrendingUp },
  ];

  return (
    <div className="relative pb-16">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            {profile?.name ? `Welcome back, ${profile.name.split(" ")[0]}` : "Welcome back"}
          </h1>
          <p className="mt-1 text-sm text-text-secondary">
            Here&apos;s what&apos;s happening with your attendance sessions.
          </p>
        </div>
        <Link href="/dashboard/sessions/create" className="hidden sm:block">
          <Button>
            <Plus className="h-4 w-4" />
            New session
          </Button>
        </Link>
      </div>

      {loading ? (
        <Spinner label="Loading dashboard..." />
      ) : (
        <>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-turquoise/10 text-turquoise">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">{label}</p>
                  <p className="mt-0.5 text-2xl font-bold text-teal">{value}</p>
                </div>
              </Card>
            ))}
          </div>

          <section className="mt-8">
            <div className="mb-3 flex items-center gap-2">
              <h2 className="text-sm font-semibold text-text-secondary">Active sessions</h2>
              {active.length > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-turquoise/15 px-1.5 text-[11px] font-semibold text-turquoise">
                  {active.length}
                </span>
              )}
            </div>
            {active.length === 0 ? (
              <Card className="text-center text-sm text-text-secondary">
                No sessions live right now.{" "}
                <Link href="/dashboard/sessions/create" className="text-turquoise">
                  Create one
                </Link>
              </Card>
            ) : (
              <div className="space-y-2.5">
                {active.map((s) => (
                  <SessionCard key={s.id} session={s} />
                ))}
              </div>
            )}
          </section>

          <section className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-text-secondary">Recent activity</h2>
              <Link
                href="/dashboard/records"
                className="flex items-center gap-0.5 text-xs font-medium text-turquoise"
              >
                View all
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            {recent.length === 0 ? (
              <p className="text-sm text-text-secondary">Nothing here yet.</p>
            ) : (
              <div className="overflow-hidden rounded-lg border border-teal/10 bg-card">
                {recent.map((s, i) => (
                  <div
                    key={s.id}
                    className={`flex items-center gap-3 px-3.5 py-3 text-sm ${
                      i !== 0 ? "border-t border-teal/10" : ""
                    }`}
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream text-xs font-semibold text-teal">
                      {s.courseCode.slice(0, 2)}
                    </div>
                    <span className="min-w-0 flex-1 truncate text-teal">
                      {s.studentsMarked} students marked in {s.courseCode}
                    </span>
                    <span className="shrink-0 text-xs text-text-secondary">
                      {timeAgo(s.createdAt)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>
        </>
      )}

      <Link
        href="/dashboard/sessions/create"
        aria-label="Create session"
        className="fixed bottom-20 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-turquoise text-white shadow-lg transition-transform hover:scale-105 sm:hidden"
      >
        <Plus className="h-6 w-6" />
      </Link>
    </div>
  );
}
