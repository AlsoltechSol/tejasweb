import { CardStack } from "@/components/ui/card-stack";
import sahil from "../../assets/icons/user.svg";

const testimonials = [
  {
    id: 1,
    name: "ROUNAK BANSAL",
    designation: "CEO, Company",
    content:
      " Rounak Bansal is the Chief Executive Officer of Chemist Plus, a leading pharmaceutical company specializing in Competitive Margin Delivery. With a background in Pharmacy Wholesale, Rounak Bansal has steered the company through significant milestones, including adding new products, market expansion, and more. Under his leadership, Chemist Plus consistently excels in market analytics,  new market launches, and remains dedicated to advancing healthcare and retailer's margin",
    icon: sahil,
  },
  // {
  //   id: 2,
  //   name: "Sahil Godara",
  //   designation: "CEO, Company",
  //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   icon: sahil
  // },
  // {
  //   id: 3,
  //   name: "Sahil Godara",
  //   designation: "CEO, Company",
  //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   icon: sahil
  // }
];

const Testimonials = () => {
  return (
    <section className="w-full relative bg-[#FBF6EA]">
      <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl pt-20 pb-20 text-left grid grid-cols-1 md:grid-cols-2">
        <div className="w-full">
          <p className="uppercase font-semibold tracking-widest">
            TESTIMONIALS
          </p>
          <p className="font-bold text-3xl mt-3">What people say about us</p>
          <p className="text-left text-sm mt-6 text-zinc-500">
            Read testimonials given by our buyers
          </p>
        </div>
        <div className="w-full mt-14">
          <CardStack items={testimonials} />
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
