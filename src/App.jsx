const navItems = ['Who we are', 'Programs', 'Get involved', 'News', 'Contact']

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

function App() {
  return (
    <div className="min-h-screen bg-[#f3efe6] text-slate-900 antialiased">
      <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7db3e8] text-sm font-bold text-white">OSS</div>
            <div>
              <div className="text-lg font-semibold tracking-tight">Open South Sudan</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="transition hover:text-slate-950">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+211922702881" className="hidden text-sm text-slate-700 sm:inline">092 270 2881</a>
            <button className="rounded-full bg-[#7db3e8] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5da0d3]">
              Partner with us
            </button>
          </div>
        </div>
      </header>

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
                <button className="rounded-full bg-[#7db3e8] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#5da0d3]">
                  Explore our programs
                </button>
                <button className="rounded-full border border-sky-200 bg-white px-6 py-3.5 text-base font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-sky-50">
                  Partner with us
                </button>
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
            <a href="#" className="hidden text-base font-semibold text-slate-800 hover:text-slate-950 md:inline">See all programs</a>
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
                <a href="#" className="mt-6 inline-flex text-base font-semibold text-sky-700 hover:text-sky-800">Read the story →</a>
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
                  <button className="rounded-full bg-[#7db3e8] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5da0d3]">Donate</button>
                  <button className="rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-sky-700 hover:bg-sky-50">Volunteer</button>
                  <button className="rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-sky-700 hover:bg-sky-50">Partner with us</button>
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
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7db3e8] text-sm font-bold text-white">OSS</div>
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
                <li>Who We Are</li>
                <li>Mission & Values</li>
                <li>Our Team</li>
                <li>Partners</li>
                <li>Careers</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Programs</h4>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li>AlertGuard</li>
                <li>Betna</li>
                <li>Eventy</li>
                <li>Peacebuilding</li>
                <li>Digital Inclusion</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Get involved</h4>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li>Donate</li>
                <li>Volunteer</li>
                <li>Partner With Us</li>
                <li>Get Alerts</li>
                <li>Report a Hazard</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Stay in the loop</h4>
              <p className="mt-5 text-base leading-7 text-slate-300">Monthly updates on our programs, open data and opportunities across South Sudan.</p>
              <div className="mt-5 flex gap-2">
                <input className="w-full rounded-full border border-slate-600 bg-slate-800 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-sky-400" placeholder="Email address" />
                <button className="rounded-full bg-[#7db3e8] px-4 py-3 text-sm font-semibold text-white hover:bg-[#5da0d3]">Subscribe</button>
              </div>
              <p className="mt-4 text-xs text-slate-400">By subscribing you agree to our privacy policy.</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-slate-700 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 Open South Sudan. All rights reserved.</div>
            <div className="flex flex-wrap gap-5">
              <span>Privacy Policy</span>
              <span>Terms of Use</span>
              <span>Safeguarding</span>
              <span>Accessibility</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
