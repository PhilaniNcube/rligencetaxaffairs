import Image from "next/image";

const Hero = () => {
  return (
    <header className="relative">
      <Image
        src="/images/realestate.jpg"
        width={640}
        height={427}
        alt="Real Estate"
        className="w-full object-cover md:aspect-[5/2]"
      />
      <div className="absolute inset-0 bg-slate-50/70 md:bg-slate-100/50">
        <div className="container flex flex-col justify-center items-start h-full">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 max-w-[25ch]">
            Maximizing Profits: Expert Tax Services Tailored for Real Estate
            Investors
          </h1>
          <p className="max-w-[60ch] text-sm md:text-md lg:text-lg font-medium text-slate-700">
            Are you aware that the South African Revenue Service (SARS) is set
            to access information from the Deeds office to track property
            owners? Don&apos;t let this prospect overwhelm you! Instead, seize
            this opportunity to maximize your tax savings and achieve complete
            tax compliance with our expert tax consultancy services!
          </p>
        </div>
      </div>
    </header>
  );
};
export default Hero;
