"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import pillIcon from "../../assets/icons/pill.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import map from "../../assets/images/map.PNG";
// import Map from "../map/map";
const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name")
    .max(50, "Full name name must be under 50 characters"),
  companyName: z
    .string()
    .min(2, "Please enter your company's name")
    .max(50, "Company's name must be under 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  profession: z.string().min(2, "Please select your profession"),
  message: z.string().optional(),
});

const topics = [
  {
    value: "product",
    label: "Product Inquiry",
  },
  {
    value: "retai",
    label: "Retail Onboarding",
  },
  {
    value: "wholesale",
    label: "Wholesale Onboarding",
  },
  {
    value: "genaral",
    label: "Genaral Inquiry",
  },
  {
    value: "Careers",
    label: "Careers",
  },

  {
    value: "other",
    label: "Other",
  },
];

const professions = [
  {
    value: "retailer",
    label: "Retailer",
  },
  {
    value: "wholesaler",
    label: "Wholesaler",
  },
  {
    value: "e-pharmacy",
    label: "E-Pharmacy",
  },
  {
    value: "other",
    label: "Other",
  },
];

const ContactForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phoneNumber: "",
      profession: "",
      message: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof contactFormSchema>) => {
    console.log("values", values);
    setLoading(true);
    submitContact(values)
      .then(() => {
        setLoading(false);
        contactForm.reset();
      })
      .catch((error) => {
        console.error("Error submitting contact form:", error);
        setLoading(false);
      });
  };

  const submitContact = async (values: any) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      setLoading(false);
      toast.success("Thank you for contacting! We'll get back to you soon.");
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("We didn't get your details. Please try again.");
    }
  };

  return (
    <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl pt-10 md:pt-20 pb-20 text-left grid grid-cols-1 md:grid-cols-2">
      <div className="w-full">
        <p className="font-bold text-4xl mt-3">Contact Tejas Pharma</p>
        <p className="text-left text-sm mt-6 text-zinc-500">
          Our team would love to hear from you.
        </p>
        <div className="max-w-fit mt-8 flex flex-col gap-5 text-sm mb-10">
          <div className="flex items-center gap-3">
            <Mail color="#000000" size={20} />
            hello@tejaspharma.com
          </div>
          <div className="flex items-center gap-3">
            <Phone color="#000000" size={20} />
            +91 88991 17379
          </div>
          <Link
            href={
              "https://www.google.com/maps/dir//F+,+Room+no+-+10,+Frontier+Warehousing+Limited,+Block,+153F,+SM+Bose+Rd,+Senbagan,+Mallic+Layan,+Agarpara,+Kolkata,+Panihati,+West+Bengal+700114/@22.6961323,88.3168611,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39f89e1d149f6fe9:0x988dbce039a2ffb6!2m2!1d88.3796933!2d22.6895018?entry=ttu"
            }
          >
            <div className="flex items-center gap-3 underline cursor-pointer">
              <MapPin color="#000000" size={20} />
              TEJAS PHARMA
              <br />
              ROOM NO. 10, BLOCK F (BACK SIDE)
              <br />
              C/O FRONTIER WAREHOUSING LIMITED
              <br />
              153F, S M BOSE ROAD
              <br />
              KOLKATA - 700114
            </div>
          </Link>
        </div>
        <Image src={map} alt="map" className="w-[20rem] h-[20rem] rounded" />
      </div>
      <div className="w-full mt-10 md:mt-0">
        <Form {...contactForm}>
          <form
            onSubmit={contactForm.handleSubmit(handleSubmit)}
            className="w-full mt-6 grid gap-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={contactForm.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name*</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Rohan Biswas"
                        {...field}
                        className="h-12 rounded-lg"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={contactForm.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name*</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="TCS"
                        {...field}
                        className="rounded-lg h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={contactForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="example@gmail.com"
                        {...field}
                        className="rounded-lg h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={contactForm.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone number*</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="+91 88991 17379"
                        {...field}
                        className="rounded-lg h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <FormField
                control={contactForm.control}
                name="profession"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Choose a topic*</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="rounded-lg">
                          <SelectValue placeholder="Select one..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-lg">
                        {topics.map((topic) => (
                          <SelectItem key={topic.value} value={topic.value}>
                            {topic.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={contactForm.control}
                name="profession"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Which best describes you?*</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-1 md:grid-cols-2"
                      >
                        {professions.map((profession, idx) => (
                          <FormItem
                            className="flex items-center space-x-3 space-y-0"
                            key={idx}
                          >
                            <FormControl>
                              <RadioGroupItem value={profession.value} />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {profession.label}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={contactForm.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here..."
                      {...field}
                      className="rounded-lg h-12 max-h-48"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-fit bg-app rounded-lg hover:bg-app/90 hover:shadow-md"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin h-6 w-6 mr-2" />
                  Please wait...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;
