const MandatoryDisclosure = () => {
  return (
    <div className="w-full">
      <section
        className="w-full py-12 px-4"
        style={{ backgroundColor: "#800000" }}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-roman font-bold text-white mb-2">
            Mandatory Disclosure
          </h1>
          <p className="text-lg text-gray-200">
            Transparency & Compliance Information
          </p>
        </div>
      </section>
      {/* PDF Preview Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex items-center justify-between p-4 bg-gray-100">
                <h3 className="text-lg font-roman font-bold text-primary">
                  Mandatory Disclosure - PDF Preview
                </h3>
              </div>
              <iframe
                src="/docs/MANDATORY PUBLIC DISCLOSURE.pdf#toolbar=1&navpanes=0&scrollbar=1"
                title="Mandatory Disclosure PDF"
                className="w-full"
                style={{ height: "700px", border: "none" }}
              />
            </div>
        </div>
      </section>
    </div>
  );
};

export default MandatoryDisclosure;
