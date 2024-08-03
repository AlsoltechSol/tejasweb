import Image from "next/image";
import cobra from "../../assets/images/cobra.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import mobile from "../../assets/images/mobile.svg";
import tick from "../../assets/images/tick.svg";

const FooterBanner = () => {
  return (
    <section className="w-full mx-auto px-[1rem] md:px-[2rem] pt-10 text-center bg-[#FBFBFB] relative overflow-y-hidden">
      <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl text-left grid grid-cols-1 md:grid-cols-2 z-20">
        <div className="w-full">
          <p className="font-bold text-3xl mt-3">
            Your Pharma Supply Demands, Fulfilled!
          </p>
          <p className="text-left text-sm mt-6 text-zinc-500">
            Download our mobile app to make seamless purchases.
          </p>
          <Link
            href="https://play.google.com/store/apps/details?id=com.valuesoft.vtejaspharma&pcampaignid=web_share"
            className="font-medium"
          >
            <Button className="rounded-lg bg-app mt-[2rem] hover:shadow-md hover:bg-app hover:shadow-blue-300 transition-all duration-300">
              Get the app
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition duration-200" />
            </Button>
          </Link>
        </div>
        <div className="w-full relative overflow-hidden h-80 mt-10 md:mt-0">
          <Image
            src={mobile}
            alt="Mobile"
            className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
          />
        </div>
      </section>
      <Image src={tick} alt="Tick" className="absolute bottom-0 right-0 z-0" />
    </section>
  );
};

export default FooterBanner;
