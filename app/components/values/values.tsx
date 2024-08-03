import Image from 'next/image'
import chartIcon from '../../assets/icons/chart.svg';
import magnifyingGlass from '../../assets/icons/magnifyingGlass.svg';
import user from '../../assets/icons/user.svg';
import medal from '../../assets/icons/medal.svg';
import shield from '../../assets/icons/shieldCheck.svg';

const values = [
  {
    title: "Authenticity",
    desc: "We are individually responsible towards fulfillment of our promises made to customers and suppliers",
    icon: shield
  },
  {
    title: "Integrity",
    desc: "Adhering to ethical principles is at the core of our decision-making process",
    icon: medal
  },
  {
    title: "Customer First",
    desc: "Our customers are at the center of everything we do, and we believe our success is derived from their success",
    icon: user
  },
  {
    title: "Transparency",
    desc: "Trust gained through transparent practices, policies and interactions forms the bedrock of our business",
    icon: magnifyingGlass
  }
];

const ValueCard = ({ title, desc, icon }:any) => {
  return (
    <div className="w-full p-6 outline outline-1 outline-gray-100 rounded-xl">
      <Image src={icon} alt={title} className="w-12" />
      <h3 className="text-xl font-semibold mt-14">{title}</h3>
      <p className="text-sm mt-2">{desc}</p>
    </div>
  )
}

const Values = () => {
  return (
    <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl pt-20 pb-20 text-left">
      <p className="text-left text-3xl font-semibold mt-6">
        Our Core Values
      </p>
      <p className="text-left text-sm mt-6 text-zinc-500">
      At Tejas Pharma, the way of doing business is just as important as the business itself. Our employees understand the responsibility and shares the common goal of serving the healthcare ecosystem in an ethical, complaint and transparent way.
      </p>
      <div className="h-full w-full bg-app rounded-xl py-10 px-6 mt-12 flex flex-col justify-between">
        <Image src={chartIcon} alt='growth' className='w-12' />
        <div className='text-white'>
          <p className="text-left text-3xl font-semibold mt-6">
            Higher Margins, Delivered!
          </p>
          <p className="text-left text-sm mt-6">
            We deal with the company officials directly, and make bulk procurement to give you above market discounts.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {values.map((value, index) => (
          <ValueCard key={index} {...value} />
        ))}
      </div>
    </section>
  )
}

export default Values