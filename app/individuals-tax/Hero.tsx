import Image from "next/image";

const Hero = () => {
  return (
    <section className=" h-screen lg:min-h-[70vh] lg:max-h-[72vh]">
      <div className="w-full h-full container py-10">
        <div className="grid h-full grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex h-full flex-col justify-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Maximize Your Tax Season Triumph with Rligence Tax Affairs!
            </h1>
          </div>
          <div className="w-full">
            <Image src="/images/individual-tax.jpg" width={640} height={450} alt="Individual Tax" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
