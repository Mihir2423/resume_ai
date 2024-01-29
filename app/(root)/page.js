import About from "@/components/root/about";
import Hero from "@/components/root/hero";
import Intro from "@/components/root/intro";

export default async function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <About />
    </>
  );
}
