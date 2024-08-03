import Link from "next/link";
import women from "../../assets/images/women.png";
import Image from "next/image";

const readingList = [
  {
    title: "Why medicine distribution is important?",
    desc: "The importance of medicine distribution in the healthcare ecosystem",
    author: "Eric Ries",
    link: "https://www.google.com/search?q=Why+medicine+distribution+is+important"
  },
  {
    title: "How medicine distribution works?",
    desc: "How the medicine distribution process works in the healthcare ecosystem",
    author: "Eric Ries",
    link: "https://www.google.com/search?q=How+medicine+distribution+works"
  },
  {
    title: "The future of medicine distribution",
    desc: "The future of medicine distribution in the healthcare ecosystem",
    author: "Eric Ries",
    link: "https://www.google.com/search?q=The+future+of+medicine+distribution"
  }
]

const Reading = () => {
  return (
    <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl pt-10 md:pt-20 pb-20 text-left">
      <p className="font-bold text-3xl mt-3">What To Read Next</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {readingList.map((reading, index) => (
          <div key={index} className="">
            <Image src={women} alt="women" className="w-full rounded-lg" />
            <br />
            <Link href={reading.link} className="text-xl font-semibold">{reading.title}</Link>
            <p className="text-sm mt-2">{reading.desc}</p>
            <p className="text-sm mt-2">By {reading.author}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reading