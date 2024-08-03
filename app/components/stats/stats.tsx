const stats = [
  {
    title: "1,200+",
    body: "Wholesellers",
    footer: "fulfilling supply from us"
  },
  {
    title: "10,000+",
    body: "Retailers",
    footer: "delivering to customers"
  },
  {
    title: "15,000+",
    body: "Unique SKUs",
    footer: "available anytime for delivery"
  },
  {
    title: "30+",
    body: "Years",
    footer: "in pharma business"
  },
  {
    title: "50+",
    body: "Retail Pharma Chains",
    footer: "fulfilling supply from us"
  },
  {
    title: "500+",
    body: "Districts covered",
    footer: "across India"
  },
]

type StatsCardProps = {
  title: string
  body: string
  footer: string
}

const StatsCard = ({ title, body, footer }:StatsCardProps) => {
  return (
    <div className="md:min-w-56 border-l p-2 md:pl-6 md:pt-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm font-semibold mt-1">{body}</p>
      <p className="text-sm text-slate-400 mt-1 text-balance">{footer}</p>
    </div>
  )
}

const Stats = () => {
  return (
    <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl py-10 md:py-20 text-left">
      <p className="text-left text-3xl font-semibold font-epilogue mt-6">
        Our Growing Stats And Numbers Since Day 1
      </p>
      <p className="text-left text-sm mt-6 text-zinc-500">
        One of India&apos;s largest and fastest growing healthcare products distribution chain
      </p>
      <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-20 mt-20 mb-10 md:mb-0">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
    </section>
  )
}

export default Stats