import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import pillIcon from "../../assets/icons/pill.svg";
import Image from "next/image";

const OnboardingSteps = () => {
  return (
    <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl pt-10 md:pt-20 pb-20 text-left grid grid-cols-1 md:grid-cols-2">
      <div className="w-full">
        <p className="uppercase font-semibold tracking-widest">HOW IT WORKS</p>
        <p className="font-bold text-3xl mt-3">
          4 Steps to onboarding at Tejas Pharma
        </p>
        <div className="max-w-fit mt-8 flex items-center gap-8">
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
      <div className="w-full mt-10 md:mt-0">
        <div className="flex gap-10">
          <div className="flex flex-col items-center gap-4">
            <Image src={pillIcon} alt="pill" className="w-12 h-12 max-w-none" />
            <div className="w-0 h-20 outline outline-1"></div>
          </div>
          <div>
            <p className="text-lg font-semibold">App based onboarding</p>
            <p className="text-sm mt-4">
              You download our mobile app and sign up as a retailer or
              wholesaler.
            </p>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col items-center gap-4">
            <Image
              src={pillIcon}
              alt="pill"
              className="w-12 h-12  max-w-none"
            />
            <div className="w-0 h-20 outline outline-1"></div>
          </div>
          <div>
            <p className="text-lg font-semibold">Submit details</p>
            <p className="text-sm mt-4">
              You give us your important details as your drug license, and your
              business information like your GST number.
            </p>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col items-center gap-4">
            <Image
              src={pillIcon}
              alt="pill"
              className="w-12 h-12  max-w-none"
            />
            <div className="w-0 h-20 outline outline-1"></div>
          </div>
          <div>
            <p className="text-lg font-semibold">Verification</p>
            <p className="text-sm mt-4">
              With your documents and details uploaded, we verify them and run a
              KYC process to verify.
            </p>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col items-center gap-4">
            <Image
              src={pillIcon}
              alt="pill"
              className="w-12 h-12  max-w-none"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">
              Get your orders shipped in 24 hours
            </p>
            <p className="text-sm mt-4">
              Once this is done, you are all set to send orders and get them
              shipped in 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSteps;
