import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-normal">
      <Hero />
      <Cards />
      <Services />
    </main>
  );
}
