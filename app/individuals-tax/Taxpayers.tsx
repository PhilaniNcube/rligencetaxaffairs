import LeadForm from "@/components/Leads/LeadForm";
import { Banknote, BrainCogIcon, ClockIcon, GraduationCap, PencilRuler, PersonStanding } from "lucide-react";

const benefits = [
  {
    title: "Seamless, On-Time Filing",
    description:
      "Say goodbye to last-minute scrambles and sleepless nights. Our expert team ensures your tax returns are filed promptly and accurately, eliminating the risk of penalties and late submissions.",
      icon : <ClockIcon size={20} className="w-10 h-10" />
  },
  {
    title: "Tailored Solutions for Maximum Returns",
    description:
      "Your finances are unique, and so are your opportunities for tax savings. Trust our seasoned professionals to identify every deduction and credit available to you, ensuring you get the best possible returns.",
      icon: <PencilRuler size={20} className="w-10 h-10" />
  },
  {
    title: "Expert Guidance",
    description:
      "Taxes can be baffling, but fear not! Our experienced consultants will guide you through the entire process, answering your questions and providing invaluable insights to empower you financially.",
      icon: <GraduationCap size={20} className="w-10 h-10" />
  },
  {
    title: "Avoid Costly Mistakes",
    description:
      "Missing out on eligible deductions or making errors on your tax return can cost you dearly. Let our meticulous approach safeguard you from potential pitfalls and setbacks.",
      icon: <Banknote size={20} className="w-10 h-10" />
  },
  {
    title: "Personalized Attention",
    description:
      "We treat every client like a VIP. Receive personalized attention and a customized tax strategy tailored to your unique circumstances, goals, and financial aspirations.",
      icon: <PersonStanding size={20} className="w-10 h-10" />
  },
  {
    title: "Peace of Mind",
    description:
      "Embrace tax season with confidence, knowing that our team has your back. With Rligence Tax Affairs on your side, you can focus on what truly matters, while we handle the complexities of tax compliance.",
      icon: <BrainCogIcon size={20} className="w-10 h-10" />
  },
];

const Taxpayers = () => {
  return (
    <section className="container py-10 text-white">
      <div className="flex flex-col w-full justify-center gap-y-3 items-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Attention, South African Taxpayers!
        </h2>
        <p className="text-center max-w-[80ch]">
          The South African Tax Season is in full swing, and the time to act is
          NOW! Don&apos;t let the complexities of tax filings and looming
          deadlines overwhelm you. At Rligence Tax Affairs, we&apos;re your
          ultimate tax champions, dedicated to helping you conquer this season
          with ease, accuracy, and the promise of maximum returns.
        </p>
      </div>
      <div className="w-full mt-6">
        <h2 className="text-2xl text-center font-semibold">
          Why Choose Rligence Tax Affairs?
        </h2>
        <div className="grid grid-cols-1 mt-4 md:grid-cols-3 gap-4">
          {benefits.map((benefit, i) => (
            <article
              key={i}
              className="w-full rounded-md shadow overflow-clip bg-slate-500 hover:bg-slate-700 transition-colors duration-150 p-4"
            >
              <div className="w-full text-center flex flex-col items-center justify-center">
                <span>{benefit.icon}</span>
                <h3 className="text-lg  font-semibold mt-2">{benefit.title}</h3>
                <p className="sm ">{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 w-full flex items-center justify-center">
          <LeadForm />
        </div>
      </div>
    </section>
  );
};
export default Taxpayers;
