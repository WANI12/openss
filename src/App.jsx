const navItems = [
  ['Who we are', '/who-we-are'],
  ['Programs', '/programs'],
  ['Get involved', '/contact'],
  ['News', '/news'],
  ['Contact', '/contact'],
]

const stats = [
  { value: '10', label: 'states reached' },
  { value: '3+', label: 'core programs' },
  { value: '1.5K+', label: 'young people connected' },
  { value: '24/7', label: 'alert monitoring' },
]

const programs = [
  {
    name: 'AlertGuard',
    description:
      'A web and mobile early warning system that monitors hazards in real time and sends timely alerts to vulnerable communities — so people can move before disaster strikes.',
    features: ['Real-time hazard monitoring', 'SMS & app alerts', 'Geospatial forecasting'],
    accent: 'from-emerald-700 to-emerald-900',
    image:
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Betna · Our Home',
    description:
      'An online skills-development connector and crowdsourcing platform where South Sudanese collaborate, share data and solve community problems together.',
    features: ['Skills matching', 'Open data crowdsourcing', 'Peer learning circles'],
    accent: 'from-amber-500 to-orange-600',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Eventy',
    description:
      'A simple way for communities, hubs and organisations to publish, discover and manage events — from trainings and hackathons to peace dialogues.',
    features: ['Event publishing', 'RSVPs & reminders', 'Offline-friendly'],
    accent: 'from-sky-500 to-cyan-700',
    image:
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80',
  },
]

const storyQuotes = [
  {
    quote:
      'The alert came two days before the water reached us. We moved the grain and the children first. That has never happened before.',
    person: 'Community monitor',
    location: 'Bor County, Jonglei',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
  },
  {
    quote:
      'I found my first paying client through Betna. It was the first time anyone asked what I could do — not where I came from.',
    person: 'Betna member',
    location: 'Juba, Central Equatoria',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
  },
  {
    quote:
      'Having the data open meant our radio station could broadcast facts instead of rumours. That changed the whole conversation.',
    person: 'Partner radio producer',
    location: 'Community Radio Network',
    image:
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80',
  },
]

const articles = [
  {
    meta: 'FEATURED PRODUCT',
    date: '12 Aug 2025',
    readTime: '4 min read',
    title: 'AlertGuard expands to three new counties ahead of the rainy season',
    detail:
      'How community monitors and geospatial data are cutting warning times from days to hours — and what comes next.',
  },
  {
    meta: 'COMMUNITY',
    date: '28 Jul 2025',
    readTime: '3 min read',
    title: 'Betna crosses 1,500 young people connected to skills and work',
    detail:
      'A look at what happens when skills, not geography, decide who gets the opportunity.',
  },
  {
    meta: 'PARTNERSHIP',
    date: '05 Jul 2025',
    readTime: '2 min read',
    title: 'New partnership to open up hazard data for local radio stations',
    detail: 'Open data means facts, not rumours, reach communities first.',
  },
]

const partners = ['Ministry of Peace Building', 'UNDP', 'National Communication Authority', 'MTN South Sudan', 'University of Juba', 'Community Radio Network']

function SiteHeader() {
  return (
    <header className="w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3 text-slate-900">
          <img src="/open-south-sudan-logo.png" alt="" className="h-11 w-14 rounded-lg object-contain" />
          <span className="text-lg font-semibold tracking-tight">Open South Sudan</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={`${label}-${href}`} href={href} className="transition hover:text-sky-700">{label}</a>)}
        </nav>
        <a href="/contact" className="hidden rounded-full bg-[#7db3e8] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5da0d3] sm:inline-flex">Partner with us</a>
      </div>
      <nav className="flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-100 px-4 py-3 text-sm font-medium text-slate-700 md:hidden" aria-label="Mobile navigation">
        {navItems.map(([label, href]) => <a key={`${label}-${href}`} href={href}>{label}</a>)}
      </nav>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-700 bg-[#0f172a] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <a href="/" className="text-xl font-bold">Open South Sudan</a>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">A non-profit using technology, data and community-driven innovation to build a safer, stronger South Sudan.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-3">
            <h2 className="font-semibold uppercase tracking-wider text-slate-400">Explore</h2>
            <a className="block hover:text-sky-200" href="/who-we-are">Who we are</a>
            <a className="block hover:text-sky-200" href="/programs">Programs</a>
            <a className="block hover:text-sky-200" href="/news">News</a>
          </div>
          <div className="space-y-3">
            <h2 className="font-semibold uppercase tracking-wider text-slate-400">Contact</h2>
            <a className="block hover:text-sky-200" href="mailto:hello@open-ss.org">hello@open-ss.org</a>
            <a className="block hover:text-sky-200" href="tel:+211922702881">092 270 2881</a>
            <a className="block hover:text-sky-200" href="/contact">Juba, South Sudan</a>
          </div>
        </div>
        <p className="border-t border-slate-700 pt-5 text-xs text-slate-400 md:col-span-2">© 2026 Open South Sudan. All rights reserved.</p>
      </div>
    </footer>
  )
}

function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f3efe6] text-slate-900 antialiased">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}

function PageHeading({ eyebrow, title, description }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">{eyebrow}</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-6xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">{description}</p>
    </section>
  )
}

function WhoWeArePage() {
  const values = [
    ['Community first', 'We begin by listening and build alongside the people closest to each challenge.'],
    ['Openness', 'We share knowledge and tools so communities can learn, adapt and create their own solutions.'],
    ['Data integrity', 'We use information responsibly and make decisions with care, context and transparency.'],
    ['Build and learn', 'We test ideas, learn from experience and improve what we make.'],
  ]

  return (
    <PageLayout>
      <PageHeading eyebrow="About Open South Sudan" title="A home for South Sudanese problem-solvers." description="We are a non-profit using technology, data and community-driven innovation to build a safer, stronger South Sudan." />
      <main className="mx-auto max-w-7xl space-y-8 px-4 pb-8 sm:px-6 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Our vision</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight">A connected South Sudan.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">Every community has the information and connections it needs to prepare, respond and prosper.</p>
          </article>
          <article className="rounded-[2rem] bg-[#0f3d2e] p-8 text-white sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Our mission</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight">Technology in service of community.</h2>
            <p className="mt-4 text-lg leading-8 text-emerald-50/90">We leverage technology, innovation and community-led solutions to address the social, economic and humanitarian challenges facing South Sudan.</p>
          </article>
        </section>
        <section className="py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">What guides us</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Our values, in practice.</h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([title, detail], index) => (
              <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#edf6ff] font-bold text-sky-800">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{detail}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="rounded-[2rem] border border-slate-200 bg-[#edf6ee] p-8 sm:p-10">
          <h2 className="text-2xl font-black tracking-tight">Locally rooted. Open to collaboration.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">From Juba, we work with communities, local organisations and partners to make useful, accessible tools and share knowledge that helps people act.</p>
          <a href="/contact" className="mt-6 inline-flex rounded-full bg-[#7db3e8] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5da0d3]">Meet us and partner</a>
        </section>
      </main>
    </PageLayout>
  )
}

function ProgramsPage() {
  return (
    <PageLayout>
      <PageHeading eyebrow="What we do" title="Programs built for real life in South Sudan." description="We pair local knowledge with practical technology to help communities stay informed, connected and ready to act." />
      <main className="mx-auto max-w-7xl space-y-7 px-4 pb-8 sm:px-6 lg:px-8">
        {programs.map((program, index) => (
          <article key={program.name} className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
            <div className={`relative min-h-64 ${index % 2 ? 'lg:order-2' : ''}`}>
              <img src={program.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-br ${program.accent} opacity-60`} />
              <span className="absolute bottom-6 left-6 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900">{String(index + 1).padStart(2, '0')} / Program</span>
            </div>
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-black tracking-tight text-slate-950">{program.name}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">{program.description}</p>
              <ul className="mt-6 space-y-3">
                {program.features.map((feature) => <li key={feature} className="flex items-center gap-3 text-slate-800"><span className="h-2.5 w-2.5 rounded-full bg-[#7db3e8]" />{feature}</li>)}
              </ul>
              <a href="/contact" className="mt-8 inline-flex rounded-full bg-[#7db3e8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5da0d3]">Ask about this program</a>
            </div>
          </article>
        ))}
        <section className="rounded-[2rem] bg-[#0f3d2e] p-8 text-white sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Build with us</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">Have a challenge your community is ready to solve?</h2>
          <p className="mt-4 max-w-2xl leading-7 text-emerald-50/90">We welcome community groups, practitioners and partners who want to make useful, locally led technology.</p>
          <a href="/contact" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0f3d2e] hover:bg-emerald-50">Start a conversation</a>
        </section>
      </main>
    </PageLayout>
  )
}

function NewsPage() {
  return (
    <PageLayout>
      <PageHeading eyebrow="Stories & updates" title="News from the work." description="Field notes, program updates and ideas from the people building a safer, stronger South Sudan." />
      <main className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article key={article.title} className="flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${programs[index % programs.length].accent}`}>
                <img src={programs[index % programs.length].image} alt="" className="h-full w-full object-cover opacity-80" />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-800">{article.meta}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm text-slate-500">{article.date} <span aria-hidden="true">·</span> {article.readTime}</p>
                <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-950">{article.title}</h2>
                <p className="mt-4 flex-1 leading-7 text-slate-700">{article.detail}</p>
                <a href="/contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-sky-700 hover:text-sky-900">Ask us about this story <span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
        </div>
        <aside className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Stay connected</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">Follow what communities are building.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-700">For updates, media enquiries or to share a story from your community, get in touch with the Open South Sudan team.</p>
          <a href="/contact" className="mt-6 inline-flex rounded-full bg-[#7db3e8] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5da0d3]">Contact our team</a>
        </aside>
      </main>
    </PageLayout>
  )
}

function ContactPage() {
  function submitContact(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Website enquiry from ${form.get('name')}`)
    const body = encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\n\n${form.get('message')}`)
    window.location.href = `mailto:hello@open-ss.org?subject=${subject}&body=${body}`
  }

  return (
    <PageLayout>
      <PageHeading eyebrow="Get in touch" title="Let’s build something that matters." description="Have a question, partnership idea or community challenge? We would love to hear from you." />
      <main className="mx-auto grid max-w-7xl gap-8 px-4 pb-8 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <section className="space-y-5">
          <div className="rounded-[2rem] bg-[#0f3d2e] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Open South Sudan</p>
            <h2 className="mt-4 text-2xl font-bold">We’re based in Juba and work with communities across South Sudan.</h2>
            <p className="mt-4 leading-7 text-emerald-50/90">Reach out to explore partnerships, programs, volunteering or media enquiries.</p>
          </div>
          <a href="mailto:hello@open-ss.org" className="block rounded-2xl border border-slate-200 bg-white p-5 hover:border-sky-300">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email</span>
            <span className="mt-1 block text-lg font-semibold text-sky-800">hello@open-ss.org</span>
          </a>
          <a href="tel:+211922702881" className="block rounded-2xl border border-slate-200 bg-white p-5 hover:border-sky-300">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Phone</span>
            <span className="mt-1 block text-lg font-semibold text-sky-800">092 270 2881</span>
          </a>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Location</span>
            <span className="mt-1 block text-lg font-semibold text-slate-900">Juba, Central Equatoria, South Sudan</span>
          </div>
        </section>
        <form onSubmit={submitContact} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
          <h2 className="text-2xl font-black tracking-tight">Send us a message</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">Submitting opens your email app with your message addressed to our team.</p>
          <label className="mt-6 block text-sm font-semibold text-slate-800">Your name
            <input required name="name" autoComplete="name" className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-sky-500 focus:bg-white" />
          </label>
          <label className="mt-4 block text-sm font-semibold text-slate-800">Email address
            <input required name="email" type="email" autoComplete="email" className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-sky-500 focus:bg-white" />
          </label>
          <label className="mt-4 block text-sm font-semibold text-slate-800">How can we help?
            <textarea required name="message" rows="6" className="mt-2 w-full resize-y rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-sky-500 focus:bg-white" />
          </label>
          <button type="submit" className="mt-6 rounded-full bg-[#7db3e8] px-6 py-3 font-semibold text-white transition hover:bg-[#5da0d3]">Continue to email</button>
        </form>
      </main>
    </PageLayout>
  )
}

function HomePage() {
  return (
    <div className="min-h-screen bg-[#f3efe6] text-slate-900 antialiased">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pt-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-[#dfeefb] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#4c8fc5]">
                Tech for good
              </p>

              <h1 className="max-w-xl text-5xl font-black tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-[5rem]">
                Technology for a safer, stronger South Sudan.
              </h1>

              <h2 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-[#214d3f] sm:text-3xl">
                A home for South Sudanese problem-solvers.
              </h2>

              <p className="mt-5 max-w-lg text-lg leading-8 text-slate-700">
                We believe the best solutions to South Sudan&apos;s challenges will be built by South Sudanese.
                Our job is to give them the tools, data and platforms to do it.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/programs" className="rounded-full bg-[#7db3e8] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#5da0d3]">
                  Explore our programs
                </a>
                <a href="/contact" className="rounded-full border border-sky-200 bg-white px-6 py-3.5 text-base font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-sky-50">
                  Partner with us
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-6 text-sm text-slate-700 sm:text-base">
                <div className="flex items-center gap-2"><span className="inline-flex h-3 w-3 rounded-full bg-[#7db3e8]" /> Registered non-profit</div>
                <div className="flex items-center gap-2"><span className="inline-flex h-3 w-3 rounded-full bg-[#8ec5ff]" /> Open-source by default</div>
                <div className="flex items-center gap-2"><span className="inline-flex h-3 w-3 rounded-full bg-[#b9dfff]" /> Community-led design</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-[#dbe9d5] blur-3xl" />
              <div className="absolute -right-2 bottom-4 h-32 w-32 rounded-full bg-[#f3c98b] blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(15,61,46,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80"
                  alt="Community members collaborating"
                  className="h-[560px] w-full rounded-[1.4rem] object-cover"
                />
              </div>

              <div className="absolute -bottom-3 left-4 right-4 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-xl backdrop-blur">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Live flagship program</p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">AlertGuard</h3>
                  </div>
                  <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700">ACTIVE</span>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-500">Flood risk</div>
                    <div className="mt-2 text-lg font-semibold text-slate-900">High</div>
                    <div className="mt-1 text-sm text-slate-600">Nile corridor, Bor County · 48h outlook</div>
                  </div>
                  <div className="rounded-xl bg-amber-50 p-3">
                    <div className="text-xs uppercase tracking-[0.16em] text-amber-700">Heat advisory</div>
                    <div className="mt-2 text-lg font-semibold text-slate-900">39°C</div>
                    <div className="mt-1 text-sm text-slate-600">Juba · peak expected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-4xl font-black tracking-[-0.06em] text-[#0f3d2e]">{stat.value}</div>
                <div className="mt-3 text-base font-medium text-slate-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Our vision</p>
              <h3 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950">A connected South Sudan.</h3>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Every community has the information it needs to prepare, respond and prosper.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-[#7db3e8] p-8 text-white shadow-sm lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">Our mission</p>
              <h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">Technology in service of community.</h3>
              <p className="mt-4 max-w-xl text-lg leading-8 text-emerald-50/90">
                To leverage technology, innovation and community-driven solutions to address the social, economic and humanitarian challenges facing South Sudan.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Our values</p>
            <h3 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950">What we stand for.</h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {['Openness', 'Data integrity', 'Community first', 'Build & learn'].map((value, index) => (
              <div key={value} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf6ff] text-lg font-bold text-[#4c8fc5]">
                  {index + 1}
                </div>
                <h4 className="mt-6 text-2xl font-bold text-slate-900">{value}</h4>
                <p className="mt-3 text-slate-600">We work openly, responsibly, and with communities at the center of every decision.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Programs</p>
              <h3 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950">Programs built for real life in South Sudan.</h3>
            </div>
            <a href="/programs" className="hidden text-base font-semibold text-slate-800 hover:text-slate-950 md:inline">See all programs</a>
          </div>

          <div className="space-y-8">
            {programs.map((program) => (
              <div key={program.name} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
                  <div className="relative min-h-[260px]">
                    <img src={program.image} alt={program.name} className="h-full w-full object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${program.accent} opacity-80`} />
                    <div className="absolute bottom-6 left-6 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900">
                      {program.name}
                    </div>
                  </div>

                  <div className="p-8 lg:p-10">
                    <h4 className="text-3xl font-black tracking-[-0.05em] text-slate-900">{program.name}</h4>
                    <p className="mt-5 text-lg leading-8 text-slate-700">{program.description}</p>

                    <div className="mt-6 space-y-4">
                      {program.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-base font-medium text-slate-800">
                          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#7db3e8]" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <button className="mt-8 rounded-full bg-[#7db3e8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5da0d3]">
                      {program.name === 'Eventy' ? 'Browse events' : `Join ${program.name.split(' ·')[0]}`}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-[#edf6ee] p-8 shadow-sm lg:p-10">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Our impact</p>
                <h3 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950">Small team. Real numbers. Growing every season.</h3>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              <div className="rounded-2xl bg-white p-5">
                <div className="text-3xl font-black text-slate-950">0</div>
                <div className="mt-2 text-slate-700">People reached with alerts & information</div>
              </div>
              <div className="rounded-2xl bg-white p-5">
                <div className="text-3xl font-black text-slate-950">0</div>
                <div className="mt-2 text-slate-700">States with active community monitors</div>
              </div>
              <div className="rounded-2xl bg-white p-5">
                <div className="text-3xl font-black text-slate-950">0</div>
                <div className="mt-2 text-slate-700">Youth trained in digital skills</div>
              </div>
              <div className="rounded-2xl bg-white p-5">
                <div className="text-3xl font-black text-slate-950">0</div>
                <div className="mt-2 text-slate-700">Active partners & institutions</div>
              </div>
            </div>

            <p className="mt-6 text-sm italic text-slate-600">Figures are illustrative placeholders — update with verified OSS data before launch.</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">How we work</p>
            <h3 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950">Community-led, evidence-driven, open by default.</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { step: '01', title: 'Listen', text: 'We start in the community — mapping the problem with the people who live it, in their language and on their terms.' },
              { step: '02', title: 'Build', text: 'We prototype lightweight tools that work on low bandwidth, basic devices and across multiple South Sudanese languages.' },
              { step: '03', title: 'Test', text: 'We pilot with local partners, measure what actually changes and iterate fast until the numbers — and the people — say it works.' },
              { step: '04', title: 'Scale & share', text: 'We open-source the code, publish the data and hand ownership to communities — so the solution outlives us.' },
            ].map((item) => (
              <div key={item.step} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Step {item.step}</div>
                <h4 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900">{item.title}</h4>
                <p className="mt-4 text-base leading-7 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-2xl font-semibold tracking-[-0.04em] text-slate-900">Our promise: no pilot without a plan to hand it over.</p>
            <p className="mt-3 max-w-2xl text-lg text-slate-700">Every project ships with documentation, training and a local owner.</p>
            <button className="mt-6 rounded-full bg-[#7db3e8] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5da0d3]">See it in our work</button>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Stories from the field</p>
            <h3 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950">What changes when information arrives on time.</h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {storyQuotes.map((story) => (
              <article key={story.person} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <img src={story.image} alt={story.person} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <p className="text-lg leading-8 text-slate-800">“{story.quote}”</p>
                  <div className="mt-6 border-t border-slate-200 pt-4">
                    <div className="font-semibold text-slate-900">{story.person}</div>
                    <div className="text-sm text-slate-600">{story.location}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#7db3e8] text-white shadow-xl">
            <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
              <div className="p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">AlertGuard</p>
                <h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">Get alerts. Report a hazard. Save a life.</h3>
                <p className="mt-5 max-w-xl text-lg leading-8 text-emerald-50/90">
                  Sign up to receive early warnings for your area by SMS or app — and help your community by reporting hazards you see on the ground.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {['SMS alerts', 'Location based', 'Works on any phone'].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/15 bg-white/5 p-4 text-sm font-medium text-emerald-50">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 text-slate-900 lg:p-10">
                <h4 className="text-2xl font-bold">Sign up for alerts</h4>
                <p className="mt-2 text-sm text-slate-600">Free. No data charges for SMS alerts.</p>

                <form className="mt-6 space-y-4">
                  <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none placeholder:text-slate-400 focus:border-emerald-500" placeholder="Full name" />
                  <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none placeholder:text-slate-400 focus:border-emerald-500" placeholder="Phone number" />
                  <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none placeholder:text-slate-400 focus:border-emerald-500" placeholder="State / county" />
                  <label className="flex items-center gap-3 text-sm text-slate-600">
                    <input type="checkbox" className="h-4 w-4 accent-emerald-700" />
                    I agree to receive hazard alerts by SMS and accept the privacy policy.
                  </label>
                  <button type="button" className="w-full rounded-full bg-[#7db3e8] px-5 py-3.5 text-base font-semibold text-white hover:bg-[#5da0d3]">
                    Get alerts
                  </button>
                </form>

                <p className="mt-6 text-sm text-slate-600">
                  Saw something happening? <a href="tel:+211922702881" className="font-semibold text-sky-700">Call 092 270 2881</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Latest from Open South Sudan</p>
            <h3 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950">Stories, milestones and field notes from the work.</h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  <span>{article.meta}</span>
                  <span>{article.date}</span>
                </div>
                <div className="mt-5 text-sm font-medium text-slate-500">{article.readTime}</div>
                <h4 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-slate-900">{article.title}</h4>
                <p className="mt-4 text-base leading-7 text-slate-700">{article.detail}</p>
                <a href="/news" className="mt-6 inline-flex text-base font-semibold text-sky-700 hover:text-sky-800">Read the story →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Get involved</p>
                <h3 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950">There&apos;s a seat for you in this room.</h3>
                <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
                  Whether you code, fund, teach, report or simply care — Open South Sudan is built on people who show up. Choose how you want to help.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/contact" className="rounded-full bg-[#7db3e8] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5da0d3]">Donate</a>
                  <a href="/contact" className="rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-sky-700 hover:bg-sky-50">Volunteer</a>
                  <a href="/contact" className="rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-sky-700 hover:bg-sky-50">Partner with us</a>
                </div>
              </div>

              <div className="rounded-[2rem] bg-[#edf6ee] p-6">
                <div className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Working alongside</div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {partners.map((partner) => (
                    <div key={partner} className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">{partner}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-slate-200 bg-[#0f172a] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr_1.1fr]">
            <div>
              <div className="flex items-center gap-3">
                <img src="/open-south-sudan-logo.png" alt="" className="h-11 w-14 rounded-lg object-contain" />
                <div className="text-xl font-bold tracking-tight text-white">Open South Sudan</div>
              </div>
              <p className="mt-5 max-w-sm text-base leading-7 text-slate-300">
                A non-profit using technology, data and community-driven innovation to build a safer, stronger South Sudan.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div>Juba, Central Equatoria</div>
                <div>South Sudan</div>
                <a href="tel:+211922702881" className="block">092 270 2881</a>
                <a href="mailto:hello@open-ss.org" className="block">hello@open-ss.org</a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">About</h4>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li><a href="/who-we-are" className="hover:text-white">Who We Are</a></li>
                <li><a href="/who-we-are" className="hover:text-white">Mission & Values</a></li>
                <li><a href="/who-we-are" className="hover:text-white">Our Team</a></li>
                <li><a href="/who-we-are" className="hover:text-white">Partners</a></li>
                <li><a href="/contact" className="hover:text-white">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Programs</h4>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li><a href="/programs" className="hover:text-white">AlertGuard</a></li>
                <li><a href="/programs" className="hover:text-white">Betna</a></li>
                <li><a href="/programs" className="hover:text-white">Eventy</a></li>
                <li><a href="/programs" className="hover:text-white">Peacebuilding</a></li>
                <li><a href="/programs" className="hover:text-white">Digital Inclusion</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Get involved</h4>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li><a href="/contact" className="hover:text-white">Donate</a></li>
                <li><a href="/contact" className="hover:text-white">Volunteer</a></li>
                <li><a href="/contact" className="hover:text-white">Partner With Us</a></li>
                <li><a href="/contact" className="hover:text-white">Get Alerts</a></li>
                <li><a href="/contact" className="hover:text-white">Report a Hazard</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Stay in the loop</h4>
              <p className="mt-5 text-base leading-7 text-slate-300">Monthly updates on our programs, open data and opportunities across South Sudan.</p>
              <a href="/news" className="mt-5 inline-flex rounded-full bg-[#7db3e8] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5da0d3]">Read our latest news</a>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-slate-700 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 Open South Sudan. All rights reserved.</div>
            <a href="/contact" className="hover:text-white">Contact Open South Sudan</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/who-we-are') return <WhoWeArePage />
  if (path === '/programs') return <ProgramsPage />
  if (path === '/news') return <NewsPage />
  if (path === '/contact') return <ContactPage />
  return <HomePage />
}

export default App
