import Link from "next/link";
import {
  ShieldCheck,
  Smartphone,
  BarChart3,
  ScanLine,
  ArrowRight,
  MonitorSmartphone,
  QrCode,
  CheckCircle2,
} from "lucide-react";
import { PublicShell } from "@/components/shells/PublicShell";
import { Button } from "@/components/ui/Button";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Geofence + QR",
    body: "Rotating QR codes plus optional live-location matching make proxy attendance practically impossible.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    body: "Built for the phone in your pocket — fast to load, easy to tap, works on any campus network.",
  },
  {
    icon: BarChart3,
    title: "Real-time analytics",
    body: "See trends as they happen and catch at-risk students before the semester report does.",
  },
];

const STEPS = [
  {
    icon: MonitorSmartphone,
    title: "Start a session",
    body: "Open AttendX on your laptop or phone and start a session for the course you're teaching.",
  },
  {
    icon: QrCode,
    title: "Students scan",
    body: "A rotating QR code appears on your screen. Students scan it with their own camera — no app to install.",
  },
  {
    icon: CheckCircle2,
    title: "Watch it fill in live",
    body: "Each submission appears on your screen instantly. End the session and export to CSV or PDF.",
  },
];

export default function LandingPage() {
  return (
    <PublicShell centerContent={false}>
      {/* Hero */}
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:items-center md:gap-8 md:py-24 md:px-10">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-turquoise/30 bg-turquoise/10 px-3 py-1 text-xs font-medium text-turquoise">
            <ScanLine className="h-3.5 w-3.5" />
            Built for Nigerian universities
          </div>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            Attendance. <span className="text-turquoise">Reimagined.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-text-secondary md:text-lg">
            Fast, fraud-proof QR-based attendance for lecturers and students — no more shouting out
            reg numbers, no more signing for your coursemate.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/auth/lecturer-signup">
              <Button className="px-8">
                Get started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/auth/lecturer-login">
              <Button variant="secondary" className="px-8">
                I already have an account
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-xs text-text-secondary">
            Free for lecturers. No app download required for students.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="rounded-2xl border border-teal/10 bg-white p-6 shadow-sm shadow-teal/5 md:p-8">
            <div className="flex items-center justify-between border-b border-teal/10 pb-4">
              <div>
                <p className="text-xs text-text-secondary">CSC 301 — Data Structures</p>
                <p className="text-sm font-semibold text-teal">Session live</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-turquoise/10 px-2.5 py-1 text-xs font-medium text-turquoise">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-turquoise" />
                Active
              </span>
            </div>
            <div className="mx-auto my-6 flex h-40 w-40 items-center justify-center rounded-xl bg-cream">
              <QrCode className="h-20 w-20 text-teal" strokeWidth={1.2} />
            </div>
            <div className="space-y-2">
              {["Chidinma A.", "Tunde O.", "Fatima B."].map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-between rounded-lg bg-cream px-3 py-2 text-sm"
                >
                  <span className="text-teal">{name}</span>
                  <CheckCircle2 className="h-4 w-4 text-turquoise" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-y border-teal/10 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20">
          <h2 className="text-center text-2xl font-bold md:text-3xl">How it works</h2>
          <p className="mx-auto mt-2 max-w-md text-center text-sm text-text-secondary md:text-base">
            From opening a session to a completed attendance list, in three steps.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
            {STEPS.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="relative text-center md:text-left">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-turquoise/10 text-turquoise md:mx-0">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-turquoise">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 font-semibold text-teal">{title}</h3>
                <p className="mt-1.5 text-sm text-text-secondary">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto w-full max-w-6xl px-5 py-14 md:px-10 md:py-20">
        <h2 className="text-center text-2xl font-bold md:text-3xl">Why lecturers switch</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-lg border border-teal/10 bg-card p-5 transition-colors hover:border-turquoise/40"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-turquoise/10 text-turquoise">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1.5 font-semibold text-teal">{title}</h3>
              <p className="text-sm text-text-secondary">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-teal">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-14 text-center md:flex-row md:justify-between md:px-10 md:text-left">
          <div>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              Ready to stop calling out reg numbers?
            </h2>
            <p className="mt-1.5 text-sm text-white/80">
              Set up your first course and run a session in under five minutes.
            </p>
          </div>
          <Link href="/auth/lecturer-signup">
            <Button variant="secondary" className="whitespace-nowrap px-8">
              Get started free <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-6xl px-5 py-6 text-center text-xs text-text-secondary md:px-10">
        <p>© {new Date().getFullYear()} AttendX. Built by Joshuazaza.</p>
      </footer>
    </PublicShell>
  );
}
