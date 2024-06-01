import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-normal">
      <Hero />
      <Cards />
      <Testimonials />
    </main>
  );
}
