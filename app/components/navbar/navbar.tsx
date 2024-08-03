import Image from "next/image";
import brandLogo from "../../assets/icons/brandLogo.svg";
import { ArrowRight, ArrowUpRightFromSquare, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="sticky h-20 top-0 z-50 w-full bg-white">
      <div className="w-full mx-auto px-[1rem] md:px-[2rem] flex h-20 max-w-screen-2xl items-center justify-between">
        <div className=" flex-grow">
          <Link href="/">
            <Image src={brandLogo} alt="Tejas Pharma" priority />
          </Link>
        </div>
        <div className="hidden md:flex">
          <div className="hidden flex-grow md:flex justify-center items-center gap-10">
            <Link
              href="/#about-us"
              className="text-sm hover:font-medium transition-all duration-300"
            >
              About Us
            </Link>
            <Link
              href="/careers"
              className="text-sm hover:font-medium transition-all duration-300"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="text-sm hover:font-medium transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
          <div className="hidden md:flex items-center ml-10">
            <div className="group">
              <Link href="/contact">
                <Button className="rounded-lg bg-app hover:shadow-md hover:bg-app hover:shadow-blue-300 transition-all duration-300">
                  Get In Touch{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition duration-200" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Sheet>
          <SheetTrigger>
            <Button className="md:hidden" variant="ghost">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-3 pt-10">
            <SheetHeader className="text-left">
              <div className="flex flex-col gap-5">
                <Link
                  href="/#about-us"
                  className="text-sm hover:font-medium transition-all duration-300"
                >
                  About Us
                </Link>
                <Link
                  href="/#careers"
                  className="text-sm hover:font-medium transition-all duration-300"
                >
                  Blogs
                </Link>
                <Link
                  href="/#contact-us"
                  className="text-sm hover:font-medium transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
