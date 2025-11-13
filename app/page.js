import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Wings from "@/components/wings";

export const metadata = {
  title: "Home",
  description: "OMYTECH - Innovating the Future, Empowering Africa. Leading technology company providing web development, mobile apps, UI/UX design, and digital solutions in Kenya and across Africa.",
  openGraph: {
    title: "OMYTECH - Innovating the Future, Empowering Africa",
    description: "Leading technology company providing web development, mobile apps, UI/UX design, and digital solutions in Kenya and across Africa.",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Wings />
    </main>
  );
}
