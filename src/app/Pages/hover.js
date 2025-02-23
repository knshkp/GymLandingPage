import { HoverEffect } from "../../components/ui/cards-hover-effects";

export default function CardHoverEffectDemo() {
  return (
    (<div className="max-w-5xl mx-auto ml-[250px] mt-[100px]">
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [

  {
    title: "1-Month Membership",
    price:2000,
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title:"3Month Membership",
    price:5000,
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://meta.com",
  },
  {
    title: "HalfYearly",
    price:7000,
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Yearly",
    price:10000,
    description:
      "A streaming service that offers a wide variety of ",
    link: "https://netflix.com",
  },
  
];
