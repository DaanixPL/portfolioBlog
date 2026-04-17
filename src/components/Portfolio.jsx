import { useState } from 'react'
import PortfolioCard from './PortfolioCard'

const portfolioItems = [
  {
    id: 1,
    title: 'Jak zwiększyć ruch na stronie lokalnej firmy',
    tag: 'SEO',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur magna et lorem hendrerit, sed luctus justo blandit. Integer id libero in nunc hendrerit convallis.',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida justo et mi commodo, vel congue metus posuere. Suspendisse potenti. Donec dictum, turpis sed accumsan feugiat, risus turpis laoreet risus, nec feugiat lectus est at sem.',
      'Mauris ultrices sem et sem dignissim, in blandit velit consequat. Morbi malesuada, est a ultrices faucibus, tortor libero vulputate lorem, vitae malesuada odio metus eget nunc. Nullam faucibus consequat lorem, eget fermentum est molestie non.',
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eu luctus nibh. Cras ut dui vel sapien faucibus varius et in mi.',
    ],
  },
  {
    id: 2,
    title: 'Blog firmowy w branży B2B: od czego zacząć',
    tag: 'Strategia',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Curabitur finibus viverra justo, sed volutpat ligula malesuada ac.',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et tortor nec risus condimentum tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
      'Etiam suscipit, mauris at tincidunt gravida, purus sapien aliquet turpis, vel tristique elit nunc sit amet nibh. Donec eget feugiat enim. Donec pellentesque elementum ipsum, nec dignissim nibh lacinia non.',
      'Aliquam erat volutpat. Proin feugiat nisi et metus vestibulum, eu fermentum lacus luctus. Nunc id sodales ligula. Phasellus eget risus at massa condimentum tempor.',
    ],
  },
  {
    id: 3,
    title: 'Jak pisać treści eksperckie bez nadęcia',
    tag: 'Copywriting',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non urna dapibus, tincidunt urna vel, faucibus magna. Nulla facilisi.',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut elit sed massa fermentum consectetur. Morbi pharetra, velit a bibendum posuere, libero nisl fringilla augue, non eleifend mi sem a odio.',
      'Donec sit amet cursus mauris. Integer eget arcu in risus porta commodo. Sed pellentesque efficitur arcu, vel feugiat lorem porta vel. Fusce iaculis sapien at bibendum laoreet.',
      'Suspendisse nec pretium odio. Nulla vel dui ac lorem posuere pulvinar. Proin dictum urna nec neque tempor finibus. Vivamus vehicula iaculis tristique.',
    ],
  },
  {
    id: 4,
    title: 'Checklista publikacji wpisu pod Google',
    tag: 'SEO',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae magna non massa volutpat consequat. Aenean sed volutpat arcu.',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium pharetra turpis, vel feugiat risus lacinia et. Sed in ex quis sem lacinia scelerisque ac in sem.',
      'Vivamus efficitur eu augue a porta. Aenean at justo sem. Etiam at faucibus metus, quis posuere neque. Duis ut nibh non mauris condimentum lacinia.',
      'Nam ac ante consequat, aliquet libero vitae, rutrum tellus. Curabitur sodales feugiat metus, ac molestie dui gravida a. Morbi posuere congue nibh.',
    ],
  },
  {
    id: 5,
    title: 'Co daje regularne publikowanie na blogu',
    tag: 'Marketing treści',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula varius arcu, ac faucibus eros feugiat et. Quisque porta nisl eget est egestas feugiat.',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac diam et augue pretium ornare. Curabitur efficitur consequat dolor et aliquet.',
      'Ut sit amet orci condimentum, vulputate dui eu, dictum lorem. Integer eleifend sapien ut elementum placerat. Vestibulum volutpat tortor et sem pretium posuere.',
      'Fusce in pellentesque lorem. Nunc aliquet dignissim ultrices. Curabitur gravida convallis eros, in mattis est posuere vel. Nam venenatis sem sed justo hendrerit vulputate.',
    ],
  },
  {
    id: 6,
    title: 'Artykuł poradnikowy, który prowadzi do zapytania',
    tag: 'Lead generation',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu neque id nisl luctus vulputate. Sed ac aliquet turpis, non luctus augue.',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida ante in massa feugiat, vitae condimentum lorem congue. Cras volutpat fermentum purus sed tincidunt.',
      'Praesent faucibus tellus nisl, at bibendum mi pharetra in. Aenean facilisis leo ligula, at imperdiet tortor volutpat a. Cras id purus luctus, consequat massa vitae, fringilla magna.',
      'Ut eget velit ullamcorper, efficitur nibh non, placerat massa. Vestibulum eget urna nunc. Donec sit amet justo et massa sollicitudin varius.',
    ],
  },
]

function Portfolio() {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <section id="portfolio" className="scroll-mt-24 border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          Realizacje
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          Portfolio
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Poniżej pokazuję przykładowe realizacje w formie roboczej. Kliknij kartę,
          a rozwinę pełny fragment tekstu.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              isExpanded={expandedId === item.id}
              onToggle={() =>
                setExpandedId((currentId) =>
                  currentId === item.id ? null : item.id,
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
