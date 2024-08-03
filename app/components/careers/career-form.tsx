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
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import chartIcon from "../../assets/icons/chart.svg";
import magnifyingGlass from "../../assets/icons/magnifyingGlass.svg";
import user from "../../assets/icons/user.svg";
import medal from "../../assets/icons/medal.svg";
import shield from "../../assets/icons/shieldCheck.svg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { UploadButton } from "../uploadthing/uploadthing";
import { toast } from "sonner";

const scheduleFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "Please enter your first name")
    .max(50, "First name must be under 50 characters"),
  lastName: z
    .string()
    .min(2, "Please enter your last name")
    .max(50, "Last name must be under 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  jobRole: z.string().min(2, "Please select a job role"),
  resume: z.any(),
  hiringReason: z.string().optional(),
});

const jobRoles = [
  {
    value: "digital marketing executive",
    label: "Digital Marketing Executive",
  },
  {
    value: "content writer",
    label: "Content Writer",
  },
  {
    value: "social media manager",
    label: "Social Media Manager",
  },
  {
    value: "account manager",
    label: "Account Manager",
  },
  {
    value: "project manager",
    label: "Project Manager",
  },
  {
    value: "business development executive",
    label: "Business Development Executive",
  },
  {
    value: "sales executive",
    label: "Sales Executive",
  },
  {
    value: "customer support executive",
    label: "Customer Support Executive",
  },
  {
    value: "hr executive",
    label: "HR Executive",
  },
  {
    value: "finance executive",
    label: "Finance Executive",
  },
  {
    value: "admin executive",
    label: "Admin Executive",
  },
  {
    value: "office assistant",
    label: "Office Assistant",
  },
];

const CareerForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [resumeUrl, setResumeUrl] = useState<string>("");

  const scheduleForm = useForm<z.infer<typeof scheduleFormSchema>>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      jobRole: "",
      resume: "",
      hiringReason: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof scheduleFormSchema>) => {
    if (!resumeUrl) {
      toast.error("Please upload your resume!.");
      return;
    }
    values.resume = resumeUrl;
    console.log("values", values);
    setLoading(true);
    bookMeeting(values)
      .then(() => {
        setLoading(false);
        setResumeUrl("");
        scheduleForm.reset();
      })
      .catch((error) => {
        console.error("Error booking meeting:", error);
        setLoading(false);
      });
  };

  const bookMeeting = async (values: any) => {
    try {
      const response = await fetch("/api/sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      setLoading(false);
      toast.success("🎉 We have received your details!");
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("We didn't get your details. Please try again.");
    }
  };

  return (
    <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl pt-20 pb-20 text-left">
      <p className="text-left text-3xl font-semibold mt-6">
        Interested? Let&apos;s Talk
      </p>
      <p className="text-left text-sm mt-6 text-zinc-500">
        Enter your details and we will reach out to you.
      </p>
      <div>
        <Form {...scheduleForm}>
          <form
            onSubmit={scheduleForm.handleSubmit(handleSubmit)}
            className="w-full mt-6 grid gap-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={scheduleForm.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name*</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Rohan"
                        {...field}
                        className="rounded-lg h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={scheduleForm.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name*</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Biswas"
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
                control={scheduleForm.control}
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
                control={scheduleForm.control}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={scheduleForm.control}
                name="jobRole"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Choose a role*</FormLabel>
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
                        {jobRoles.map((role) => (
                          <SelectItem key={role.value} value={role.value}>
                            {role.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={scheduleForm.control}
                name="resume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload your resume*</FormLabel>
                    <div className="flex gap-4">
                      <UploadButton
                        className="rounded-lg text-sm w-36 ut-button:bg-app ut-button:rounded-lg ut-button:shadow-md"
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                          // Do something with the response
                          console.log("Files: ", res);
                          setResumeUrl(res[0].url);
                        }}
                        onUploadError={(error: Error) => {
                          // Do something with the error.
                          alert(`ERROR! ${error.message}`);
                        }}
                      />
                      <FormLabel className="mt-2">{resumeUrl}</FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={scheduleForm.control}
              name="hiringReason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Why should we hire you?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here"
                      {...field}
                      className="rounded-lg h-12"
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

export default CareerForm;
