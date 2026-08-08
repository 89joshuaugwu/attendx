import Link from "next/link";
import Image from "next/image";

export function PublicShell({
  children,
  showNav = true,
  centerContent = true,
  variant = "marketing",
}: {
  children: React.ReactNode;
  showNav?: boolean;
  /** Auth pages need the old centered-column behavior; the landing page lays
   * out its own full-width sections and handles centering internally. */
  centerContent?: boolean;
  /** "marketing" shows nav links + log in/sign up actions (landing page).
   * "auth" shows just the brand mark, since those actions ARE the page. */
  variant?: "marketing" | "auth";
}) {
  return (
    <div className="min-h-screen bg-cream text-teal">
      {showNav && (
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-teal/10 bg-cream/90 px-5 py-4 backdrop-blur md:px-10">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="AttendX" width={28} height={28} priority />
            <span className="text-lg font-bold">AttendX</span>
          </Link>
          {variant === "marketing" && (
            <>
              <nav className="hidden items-center gap-8 text-sm font-medium text-text-secondary md:flex">
                <a href="#how-it-works" className="hover:text-teal">
                  How it works
                </a>
                <a href="#features" className="hover:text-teal">
                  Features
                </a>
              </nav>
              <div className="flex items-center gap-2">
                <Link
                  href="/auth/lecturer-login"
                  className="hidden rounded-lg px-3.5 py-2 text-sm font-medium text-teal hover:bg-teal/5 sm:inline-flex"
                >
                  Log in
                </Link>
                <Link
                  href="/auth/lecturer-signup"
                  className="inline-flex min-h-[40px] items-center rounded-lg bg-turquoise px-4 text-sm font-medium text-white hover:bg-teal"
                >
                  Get started
                </Link>
              </div>
            </>
          )}
        </header>
      )}
      <main className={centerContent ? "flex flex-1 flex-col items-center px-5" : "flex-1"}>
        {children}
      </main>
    </div>
  );
}
