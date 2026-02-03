import Hero from "@/components/hero";

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
    </main>
  );
}
