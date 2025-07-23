import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juncify Terms & Conditions",
  description:
    "Juncify Terms & Conditions. By accessing or using Juncify, you agree to be bound by these Terms and Conditions and our Privacy Policy.",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

const Terms = () => {
  return (
    <div className="dashboard-container">
      {/* <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5  md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">
            Terms & Conditions
          </h3>
        </div>
      </section> */}
      <Header
        title="Terms & Conditions"
        subtitle="Juncify Terms & Conditions. By accessing or using Juncify, you agree to be bound by these Terms and Conditions and our Privacy Policy."
      />
      <div className="wrapper py-2">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <p className="p-semibold-18 mb-2">1. Acceptance of Terms:</p>
          <p className="p-medium-14 text-gray-600 with-bullets">
            By accessing or using our platform, you agree to be bound by these
            Terms and Conditions and our Privacy Policy.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <p className="p-semibold-18 mb-2">2. User Data Collection:</p>
          <p className="p-medium-14 text-gray-600 with-bullets">
            You acknowledge and agree that we may collect, store, and use your
            personal information as described in our Privacy Policy.
          </p>
          <p className="p-medium-14 text-gray-600 with-bullets">
            You grant us the right to use your data for purposes including but
            not limited to providing services, research, analysis, and
            advertising.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <p className="p-semibold-18 mb-2">3. Limitation of Liability:</p>
          <p className="p-medium-14 text-gray-600 with-bullets">
            To the fullest extent permitted by law, we shall not be liable for
            any direct, indirect, incidental, consequential, or punitive damages
            arising out of or related to your use of our platform or the
            information contained therein.
          </p>
          <p className="p-medium-14 text-gray-600 with-bullets">
            You agree that we shall not be held responsible for any loss or
            damage resulting from the use or misuse of your data by third
            parties.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <p className="p-semibold-18 mb-2">4. Indemnification:</p>
          <p className="p-medium-14 text-gray-600 with-bullets">
            You agree to indemnify and hold us harmless from any claims,
            damages, or losses arising out of your violation of these Terms and
            Conditions or your infringement of any rights of another party.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <p className="p-semibold-18 mb-2">5. Governing Law:</p>
          <p className="p-medium-14 text-gray-600 with-bullets">
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of Ontario, Canada, without regard to its
            conflict of law provisions.
          </p>
          <p className="p-medium-14 text-gray-600 with-bullets">
            Any disputes arising under these terms shall be subject to the
            exclusive jurisdiction of the courts in Ontario, Canada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
