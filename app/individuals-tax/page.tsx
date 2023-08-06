import Hero from "./Hero";
import Taxpayers from "./Taxpayers";

export const dynamic = "force-dynamic";

const page = () => {
  return (
    <main className="bg-slate-800">
      <Hero />
      <Taxpayers />
    </main>
  );
};
export default page;
