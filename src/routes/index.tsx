export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="flex items-center justify-between px-6 py-5 border-b border-border">
        <div className="font-bold tracking-tight text-xl">NO ETA</div>

        <nav className="flex gap-6 text-sm text-muted-foreground">
          <a className="hover:text-foreground transition" href="#">Shop</a>
          <a className="hover:text-foreground transition" href="#">Lookbook</a>
          <a className="hover:text-foreground transition" href="#">About</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
          Heavyweight streetwear
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight">
          NO ETA
        </h1>

        <p className="mt-6 max-w-xl text-muted-foreground">
          No schedule. No countdown. No promises. Just drops when they arrive.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition">
            Shop Drop
          </button>
          <button className="px-6 py-3 border border-border text-sm hover:bg-accent transition">
            Lookbook
          </button>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="border-t border-border border-b">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center">
          <div className="p-10">
            <p className="text-sm font-medium">No Schedule</p>
            <p className="text-xs text-muted-foreground mt-2">Drops are unpredictable</p>
          </div>
          <div className="p-10 border-t md:border-t-0 md:border-l border-border">
            <p className="text-sm font-medium">Heavyweight Build</p>
            <p className="text-xs text-muted-foreground mt-2">Premium materials only</p>
          </div>
          <div className="p-10 border-t md:border-t-0 md:border-l border-border">
            <p className="text-sm font-medium">Limited Runs</p>
            <p className="text-xs text-muted-foreground mt-2">No restocks ever</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} NO ETA — All rights reserved
      </footer>
    </div>
  )
}
