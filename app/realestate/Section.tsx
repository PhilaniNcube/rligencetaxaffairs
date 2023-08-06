import LeadForm from "@/components/Leads/LeadForm";

const Section = () => {
  return (
    <section className="py-10 container text-white">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full">
          <h2 className="text-2xl font-bold">Tax for Real Estate Investors</h2>
          <p className="text-md font-medium">
            Here at Rligence Tax Affairs, we understand the complexities of
            property ownership and the evolving tax landscape. Our team of
            seasoned professionals is dedicated to helping you navigate through
            the intricacies, ensuring that you keep more of your hard-earned
            money while staying entirely compliant with SARS regulations.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <LeadForm />
        </div>
      </div>
    </section>
  );
};
export default Section;
