import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ 
  head: () => ({
    meta: [
      { title: 'NO ETA — Arrives when it arrives' },
      {
        name: 'description',
        content:
          'NO ETA. Heavyweight logistics-grade streetwear. Unscheduled drops for the uncharted path.',
      },
      { property: 'og:title', content: 'NO ETA — Arrives when it arrives' },
      {
        property: 'og:description',
        content:
          'Heavyweight logistics-grade streetwear. No drop schedule. No tracking number.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Index,
})

type Product = {
  name: string
  style: string
  price: string
  image: string
  alt: string
  weight: string
  fabric: string
  origin: string
  units: string
}

const products: Product[] = [
  {
    name: 'Cargo Hoodie',
    style: 'DISPATCH-01',
    price: '$140',
    image: 'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=800&h=800&fit=crop',
    alt: 'Oversized black cargo hoodie with industrial text print',
    weight: '620 GSM',
    fabric: 'Loopback Cotton',
    origin: 'Osaka, JP',
    units: '84 / 200',
  },
  {
    name: 'Thermal Cap',
    style: 'SIGNAL-OR',
    price: '$45',
    image: 'https://images.unsplash.com/photo-1588668711204-a0c38b78d665?w=800&h=800&fit=crop',
    alt: 'Heavy knit amber beanie with woven tracking label',
    weight: '240 GSM',
    fabric: 'Merino / Acrylic',
    origin: 'Lisbon, PT',
    units: '12 / 150',
  },
  {
    name: 'Logistics Pant',
    style: 'SHELL-44',
    price: '$185',
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=800&h=800&fit=crop',
    alt: 'Wide-leg charcoal technical trousers with utility pockets',
    weight: '410 GSM',
    fabric: 'Ripstop Nylon',
    origin: 'Kyoto, JP',
    units: '47 / 120',
  },
  {
    name: 'Manifest Tote',
    style: 'BAGGAGE-09',
    price: '$60',
    image: 'https://images.unsplash.com/photo-1590456182675-d23de2f5d3a4?w=800&h=800&fit=crop',
    alt: 'Natural canvas tote with NO ETA barcode print',
    weight: '16 oz',
    fabric: 'Raw Canvas',
    origin: 'Marseille, FR',
    units: '168 / 300',
  },
]

const timeline = [
  { code: '00', label: 'Manifested', status: '06.02.26 — 04:11' },
  { code: '01', label: 'Departed Facility', status: '06.04.26 — 22:48' },
  { code: '02', label: 'In Transit', status: 'ACTIVE', live: true },
  { code: '03', label: 'Customs Hold', status: '—' },
  { code: '04', label: 'Out for Dispatch', status: 'PENDING' },
]

function Ticker() {
  const line =
    'ESTIMATED ARRIVAL — N/A • ORIGIN — UNDISCLOSED • CARRIER — NO ETA • BATCH 004 • CARGO WEIGHT 1,840 KG • '
  return (
    <div className="border-t border-border overflow-hidden bg-foreground text-background">
      <div className="animate-marquee whitespace-nowrap py-1.5 flex">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="px-3 text-[10px] font-mono shrink-0 tracking-widest"
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  )
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      {/* Sticky manifest nav */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="flex justify-between items-center px-4 py-2 font-mono text-[10px] uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span
              className="size-1.5 bg-primary animate-pulse"
              aria-hidden
            />
            <span>STATUS / PENDING</span>
          </div>
          <span className="opacity-60">NE — 004</span>
        </div>
        <Ticker />
      </nav>

      {/* Hero */}
      <header className="relative px-4 pt-6 pb-10 border-b border-border">
        <div className="flex justify-between items-start font-mono text-[10px] uppercase tracking-widest mb-6 opacity-60">
          <span>BILL OF LADING / B-4471</span>
          <span>FW.26</span>
        </div>

        <h1 className="font-display font-black text-[28vw] md:text-[18rem] leading-[0.78] tracking-[-0.06em] uppercase mb-6">
          NO
          <br />
          <span className="inline-flex items-center gap-3">
            E
            <span className="relative inline-block">
              T
              <span
                className="absolute -top-1 -right-2 size-1.5 bg-primary animate-pulse"
                aria-hidden
              />
            </span>
            A
          </span>
        </h1>

        <div className="flex justify-between items-end gap-4 mb-10">
          <div className="max-w-[240px]">
            <p className="text-xs leading-snug mb-4">
              High-visibility logistics gear for the uncharted path. Built
              heavy, shipped late, worn forever.
            </p>
            <button
              type="button"
              className="group relative px-4 py-2.5 bg-foreground text-background text-[11px] font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors duration-300 inline-flex items-center gap-2"
            >
              <span
                className="size-1.5 bg-primary group-hover:bg-foreground transition-colors"
                aria-hidden
              />
              Secure Package
            </button>
          </div>
          <div className="text-right font-mono text-[9px] uppercase leading-relaxed shrink-0 opacity-70">
            <span className="block">LAT 35.6762 N</span>
            <span className="block">LNG 139.6503 E</span>
            <span className="block mt-1 text-primary">◉ LIVE</span>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=1088&h=1344&fit=crop"
            alt="Figure in shell jacket standing in foggy industrial lot"
            width={1088}
            height={1344}
            className="w-full aspect-[4/5] object-cover"
          />
          {/* corner brackets */}
          <span
            className="absolute top-2 left-2 size-4 border-l border-t border-primary"
            aria-hidden
          />
          <span
            className="absolute top-2 right-2 size-4 border-r border-t border-primary"
            aria-hidden
          />
          <span
            className="absolute bottom-2 left-2 size-4 border-l border-b border-primary"
            aria-hidden
          />
          <span
            className="absolute bottom-2 right-2 size-4 border-r border-b border-primary"
            aria-hidden
          />

          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 font-mono text-[10px] font-bold tracking-widest">
            IN TRANSIT
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[9px] uppercase tracking-widest text-background mix-blend-difference">
            <span>DROP 04 / FRAME_001</span>
            <span>ISO 800 — f/2.0</span>
          </div>
        </div>
      </header>

      {/* Routing timeline */}
      <section className="border-b border-border bg-foreground text-background">
        <div className="px-4 py-3 flex justify-between items-center font-mono text-[10px] uppercase tracking-widest border-b border-background/15">
          <span>ROUTING / TIMELINE</span>
          <span className="text-primary">● UPDATING</span>
        </div>
        <ol className="divide-y divide-background/10">
          {timeline.map((t) => (
            <li
              key={t.code}
              className="px-4 py-3 grid grid-cols-[2rem_1fr_auto] items-center gap-3 font-mono text-[11px] uppercase tracking-wider"
            >
              <span className="opacity-40 text-[10px]">{t.code}</span>
              <span className="flex items-center gap-2">
                {t.live && (
                  <span
                    className="size-1.5 bg-primary animate-pulse"
                    aria-hidden
                  />
                )}
                {t.label}
              </span>
              <span className={t.live ? 'text-primary' : 'opacity-50'}>
                {t.status}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Product grid */}
      <section aria-labelledby="inventory" className="border-b border-border">
        <h2 id="inventory" className="sr-only">
          Inventory
        </h2>
        <div className="px-4 py-3 flex justify-between items-center font-mono text-[10px] uppercase tracking-widest border-b border-border">
          <span>INVENTORY / LOG_01</span>
          <span className="text-primary">04 UNITS</span>
        </div>
        <div className="grid grid-cols-2">
          {products.map((p, i) => (
            <article
              key={p.name}
              className={`group relative overflow-hidden ${
                i % 2 === 0 ? 'border-r border-border' : ''
              } ${i >= 2 ? 'border-t border-border' : ''}`}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                />
                {/* serial stamp */}
                <span className="absolute top-2 left-2 font-mono text-[8px] uppercase tracking-widest bg-background/80 backdrop-blur px-1.5 py-0.5">
                  SN/{p.style}
                </span>
                {/* spec sheet overlay */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] bg-foreground text-background p-2.5 font-mono text-[9px] uppercase tracking-wider space-y-1">
                  <div className="flex justify-between">
                    <span className="opacity-60">WT</span>
                    <span>{p.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-60">FAB</span>
                    <span>{p.fabric}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-60">ORG</span>
                    <span>{p.origin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-60">UN</span>
                    <span className="text-primary">{p.units}</span>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="flex justify-between items-start mb-1 gap-2">
                  <h3 className="font-bold text-xs uppercase tracking-tight">
                    {p.name}
                  </h3>
                  <span className="font-mono text-xs shrink-0">{p.price}</span>
                </div>
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  STYLE / {p.style}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="relative px-4 py-20 bg-foreground text-background overflow-hidden">
        {/* faint grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden
        />
        <div className="relative flex flex-col gap-6">
          <span className="font-mono text-[10px] uppercase text-primary tracking-[0.3em]">
            § SYSTEM LOGIC
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-[-0.04em] leading-[0.9]">
            We do not
            <br />
            guarantee a time.
            <br />
            <span className="text-primary">We guarantee</span>
            <br />
            a result.
          </h2>
          <p className="text-sm leading-relaxed text-background/70 max-w-prose mt-2">
            NO ETA is a response to the hyper-scheduled world. A rejection of
            the tracking number as a source of peace. Our garments are pieces
            of a logistics system that has no clock.
          </p>
          <dl className="mt-6 p-4 border border-background/20 font-mono text-[10px] uppercase tracking-widest space-y-2.5">
            <div className="flex justify-between border-b border-background/10 pb-2">
              <dt className="opacity-60">Routing Status</dt>
              <dd className="text-primary">● ACTIVE</dd>
            </div>
            <div className="flex justify-between border-b border-background/10 pb-2">
              <dt className="opacity-60">Inventory Leak</dt>
              <dd>0.00 %</dd>
            </div>
            <div className="flex justify-between border-b border-background/10 pb-2">
              <dt className="opacity-60">Next Dispatch</dt>
              <dd>T.B.D.</dd>
            </div>
            <div className="flex justify-between">
              <dt className="opacity-60">Total Hauled</dt>
              <dd>1,840 KG</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Lookbook */}
      <section className="p-4 border-b border-border" aria-labelledby="lookbook">
        <div className="flex justify-between items-baseline mb-4 font-mono text-[10px] uppercase tracking-widest">
          <h2 id="lookbook">EDITORIAL / 04</h2>
          <span className="text-muted-foreground">PORT — 02:14 AM</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1578932750294-708d9d8a5d76?w=1216&h=1600&fit=crop"
              alt="Figure in red hooded jacket sitting on a shipping crate in rainy port at night"
              width={1216}
              height={1600}
              loading="lazy"
              className="w-full aspect-[3/4] object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 flex justify-between font-mono text-[9px] uppercase tracking-widest text-background mix-blend-difference">
              <span>FRAME_014</span>
              <span>35MM / KODAK PORTRA</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="relative col-span-1 aspect-square bg-foreground text-background flex items-center justify-center overflow-hidden">
              <span className="font-display font-black text-7xl tracking-[-0.08em] text-primary leading-none">
                04
              </span>
              <span className="absolute bottom-1.5 left-1.5 font-mono text-[8px] uppercase tracking-widest opacity-60">
                DROP
              </span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=640&h=640&fit=crop"
              alt="Macro detail of brushed silver buckle on jacket strap"
              width={640}
              height={640}
              loading="lazy"
              className="col-span-2 w-full aspect-square object-cover"
            />
          </div>
        </div>
      </section>

      {/* Barcode strip */}
      <section className="bg-background px-4 py-6 border-b border-border">
        <div
          className="h-16 w-full"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to right, var(--color-foreground) 0 1px, transparent 1px 3px, var(--color-foreground) 3px 5px, transparent 5px 8px, var(--color-foreground) 8px 11px, transparent 11px 13px, var(--color-foreground) 13px 16px, transparent 16px 22px)',
          }}
          aria-hidden
        />
        <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-widest opacity-60">
          <span>SN/NE-004-2026</span>
          <span>* 0 4 1 1 2 0 2 6 *</span>
        </div>
      </section>

      {/* Footer / Receipt */}
      <footer className="p-6 bg-secondary">
        <div className="max-w-sm mx-auto text-center border-2 border-dashed border-foreground/25 p-6">
          <div className="mb-5 flex justify-center">
            <div className="size-12 bg-foreground rounded-full flex items-center justify-center">
              <span className="text-background font-display font-black text-lg leading-none tracking-tighter">
                NE
              </span>
            </div>
          </div>
          <p className="font-mono text-[10px] leading-relaxed uppercase tracking-widest mb-5">
            THANK YOU FOR JOINING THE QUEUE.
            <br />
            YOUR ORDER WILL BE FULFILLED
            <br />
            IN DUE TIME.
          </p>
          <form
            className="flex flex-col gap-2 mb-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="EMAIL@QUEUE.COM"
              className="bg-transparent border-b border-foreground/30 py-2 font-mono text-[10px] text-center placeholder:text-foreground/40 focus:outline-none focus:border-primary uppercase tracking-widest"
            />
            <button
              type="submit"
              className="mt-1 py-2 bg-foreground text-background text-[10px] font-bold font-mono uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              ▶ JOIN MANIFEST
            </button>
          </form>
          <nav aria-label="Social" className="flex justify-center gap-5 font-mono text-[10px] uppercase tracking-widest border-t border-dashed border-foreground/25 pt-4">
            <a href="#" className="hover:text-primary transition-colors">
              INSTAGRAM
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              DISCORD
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              LEGAL
            </a>
          </nav>
          <div className="mt-6">
            <span className="font-mono text-[9px] opacity-40 uppercase tracking-widest">
              © NO ETA LOGISTICS / MMXXVI
            </span>
          </div>
        </div>
      </footer>
    </main>
  )
}
