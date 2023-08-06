import Image from "next/image";

const About = () => {
  return (
    <section className="py-10 container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 @container">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4 text-slate-700">About Us</h2>
          <p className="text-sm @md:text-md font-medium leading-7 text-slate-600">
            You should be concentrating on the core business activities of your
            company. Let us take care of your accounting and tax needs. We are a
            team of qualified accountants and tax advisors with over many years
            of experience in the industry. We are dedicated to helping our
            clients with all their tax needs. We understand that taxes can be
            complex and confusing, so we make it our goal to provide our clients
            with clear and concise advice.
          </p>
          <p className="text-sm @md:text-md font-medium leading-7 mt-2 text-slate-600">
            We will work with you to ensure that you are compliant with all your tax obligations, freeing up your time so your business can grow and prosper. Because when our clients win, so do we.
          </p>
        </div>
        <Image
          src="/images/consultant.jpg"
          width={620}
          height={427}
          alt="Consultant"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
};
export default About;
