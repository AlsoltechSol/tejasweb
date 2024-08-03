import Image from "next/image";
import Link from "next/link";
import brandLogoDark from "../../assets/icons/brandLogoDark.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.png";
import linkdin from "../../assets/icons/linkedin.png";
import facebook from "../../assets/icons/facebook.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <section className="w-full relative">
      <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl p-10 md:p-20">
        <Link href="/">
          <Image src={brandLogoDark} alt="Tejas Pharma" priority />
        </Link>
        <div className="flex items-center justify-between flex-wrap mt-4">
          <p className="font-medium">
            One of India&apos;s largest and fastest growing healthcare products
            distribution chain
          </p>
          <div className="flex items-center gap-5 pt-5 md:pt-0">
            <Link href="https://www.linkedin.com/company/tejas-pharma/">
              <Image src={linkdin} alt="linkdin" className="w-11 h-11" />
            </Link>

            <Link href="https://www.instagram.com/tejaspharma_official/">
              <Image src={instagram} alt="instagram" className="w-10 h-10" />
            </Link>
            <Link href="https://www.facebook.com/tejaspharma/">
              <Image src={facebook} alt="facebook" className="w-11 h-11" />
            </Link>
            <Link
              href="https://wa.me/7439756018?text=Hello%20there!"
              target="_blank"
            >
              <Image src={whatsapp} alt="whatsapp" className="w-10 h-10" />
            </Link>
          </div>
        </div>
        <div className="flex items-center flex-wrap justify-between mt-8">
          <div className="flex gap-5 flex-wrap items-center">
            <Link href="/" className="font-medium">
              About Us
            </Link>
            .
            <Link href="/" className="font-medium">
              Blogs
            </Link>
            .
            <Link href="/careers" className="font-medium">
              Careers
            </Link>
            .
            <Link href="/" className="font-medium">
              Terms & Conditions
            </Link>
            .
            <Link href="/" className="font-medium">
              Privacy Policy
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.valuesoft.vtejaspharma&pcampaignid=web_share"
              className="font-medium"
            >
              <Button className="rounded-lg bg-app hover:shadow-md hover:bg-app hover:shadow-blue-300 transition-all duration-300">
                Get the app
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition duration-200" />
              </Button>
            </Link>
          </div>
          <div className="flex gap-2 items-center pt-4 md:pt-0">
            <Mail />
            <Link
              href="mailto:sales@tejaspharma.in"
              className="font-medium underline"
            >
              sales@tejaspharma.in
            </Link>
          </div>
        </div>
      </section>
      <div className="w-full mx-auto px-[1rem] py-4 flex items-center gap-8 md:hidden border-t-2">
        <Link href="/contact" className="group">
          <Button className="w-auto rounded-lg bg-app hover:shadow-md hover:bg-app transition-all duration-300">
            Get In Touch
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition duration-200" />
          </Button>
        </Link>
        <div className="text-app">
          <p className="text-sm">Give us a call</p>
          <p className="text-sm font-medium">+91 88991 17379</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
