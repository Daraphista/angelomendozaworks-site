import Image from "next/image";

const LOGO_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDLyqGTL3si82QJ2FnPcAXjVInhpnA_-tHsto1BfHc2uB7L7N8fzh7yQdA2bdRogcB_DU3yhpmkzCdVBjl3TyWy0wr9W_49zEaZQEE3sBWLISJGLt3dPg8V0DNmFrbQjgbK9fKgxSumbf9BCUNX45n4GBu6pCGgU6rMuIGllczD5nlAThhs5987BgHEylLgrR0o2qJSryVZqsHRzHqTDbgvGq_CSYD5M9Y0PpDdieyPVTugFrKqrZ3Wz-U8lpUNzYDvDKekxLoQfGRt";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-20 border-t border-white/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-stack-lg">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <Image
              alt="AM Logo"
              className="w-8 h-8 rounded-full"
              src={LOGO_SRC}
              width={32}
              height={32}
            />
            <span className="font-headline text-2xl text-white font-bold">
              Angelo Mendoza
            </span>
          </div>
          <p className="font-body-md opacity-70">
            Results-driven digital strategy and full-stack development.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-bold text-primary uppercase tracking-widest mb-2">
            Navigation
          </h4>
          <a
            className="opacity-70 hover:opacity-100 transition-opacity"
            href="#services"
          >
            Services
          </a>
          {/* TODO: restore once the Portfolio section is re-enabled
          <a
            className="opacity-70 hover:opacity-100 transition-opacity"
            href="#portfolio"
          >
            Portfolio
          </a>
          */}
          <a
            className="opacity-70 hover:opacity-100 transition-opacity"
            href="#about"
          >
            About
          </a>
          <a
            className="opacity-70 hover:opacity-100 transition-opacity"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-bold text-primary uppercase tracking-widest mb-2">
            Legal
          </h4>
          <a className="opacity-70 hover:opacity-100 transition-opacity" href="#">
            Privacy Policy
          </a>
          <a className="opacity-70 hover:opacity-100 transition-opacity" href="#">
            Terms of Service
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-bold text-primary uppercase tracking-widest mb-2">
            Connect
          </h4>
          <a
            className="opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2"
            href="#"
          >
            LinkedIn
          </a>
          <p className="mt-8 text-sm opacity-50">
            © 2026 Angelo Mendoza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
