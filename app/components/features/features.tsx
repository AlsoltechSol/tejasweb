import Image from "next/image";
import arrow from "../../assets/icons/arrow.svg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import "./features.css";

const Features = () => {
  return (
    <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl md:pb-20 text-left grid grid-cols-1 lg:grid-cols-2 gap-x-20">
      <div className="flex flex-col justify-center order-2 md:order-1 py-10 md:pt-0 border-b md:border-0 border-gray-100">
        <h2 className="text-3xl md:text-5xl font-bold leading-snug">
          We Are Tejas Pharma
        </h2>
        <p className="mt-6 text-zinc-500">
          We were established in 2020, aims to build a cohesive healthcare
          product distribution network across India, leveraging technology for
          enhanced efficiency and value in the healthcare ecosystem.
        </p>

        <div className="max-w-fit mt-12 flex items-center gap-8">
          <Link href="/contact" className="group">
            <Button className="w-auto rounded-lg bg-app hover:shadow-md hover:bg-app transition-all duration-300">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition duration-200" />
            </Button>
          </Link>
          <div className="text-app">
            <p className="text-sm">Give us a call</p>
            <p className="text-sm">+91 88991 17379</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-0 order-1 md:order-2">
        <div className="w-full lg:min-w-64 h-full min-h-80 p-6"></div>
        <div className="w-full lg:min-w-64 h-full min-h-80 p-6 relative border border-gray-100">
          <p className="text-app text-sm">Reach</p>
          <p className="underline font-medium mt-2">Service pan india</p>
          <Image src={arrow} alt="arrow" className="absolute bottom-6 left-6" />
        </div>
        <div className="w-full lg:min-w-64 h-full min-h-80 p-6 relative border border-gray-100">
          <p className="text-app text-sm">Stock</p>
          <p className="underline font-medium mt-2">
            Over 15,000+ Samples Available Anytime
          </p>
          <Image src={arrow} alt="arrow" className="absolute bottom-6 left-6" />
        </div>
        <div
          className="w-full lg:min-w-64 h-full min-h-80 p-6 border border-gray-100"
          id="meds"
        ></div>
      </div>
    </section>
  );
};

export default Features;
