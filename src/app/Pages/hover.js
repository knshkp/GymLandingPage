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
    title: "Daily Membership",
    price:100,
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Weekend Membership",
    price:150,
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Monthly Membership",
    price:2000,
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Quarterely Membership",
    price:5000,
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "HalfYearly Membership",
    price:7000,
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Yearly Membership",
    price:12000,
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
