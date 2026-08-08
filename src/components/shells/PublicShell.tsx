import Link from "next/link";
import Image from "next/image";

export function PublicShell({
  children,
  showNav = true,
}: {
  children: React.ReactNode;
  showNav?: boolean;
}) {
  return (
    <div className="min-h-screen bg-cream text-teal">
      {showNav && (
        <header className="flex items-center justify-between px-5 py-4 md:px-10">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="AttendX" width={28} height={28} priority />
            <span className="text-lg font-bold">AttendX</span>
          </Link>
        </header>
      )}
      <main className="flex flex-1 flex-col items-center px-5">{children}</main>
    </div>
  );
}
