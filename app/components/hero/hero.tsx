import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import "./hero.css";

const Hero = () => {
  return (
    <section className="w-full min-h-[600px] md:h-[600px] relative bg-[#F7F9FB] text-white hero">
      <section className="h-full w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl pt-20 pb-20 text-left flex items-center">
        <div className="w-full md:w-3/5 py-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            One Stop Solution To Medicine Procurement And Warehousing
          </h1>
          <p className="mt-6">
            One of India&apos;s Largest and Fastest Growing Healthcare Products{" "}
            <br className="hidden: md:block" /> Distribution Chain
          </p>

          <div className="max-w-fit mt-12 flex items-center gap-8">
            <Link href="/contact" className="group">
              <Button className="w-auto rounded-lg bg-app hover:shadow-md hover:bg-app transition-all duration-300">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition duration-200" />
              </Button>
            </Link>
            <div>
              <p className="text-sm">Give us a call</p>
              <p className="text-sm">+91 88991 17379</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
