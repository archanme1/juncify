import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juncify Privacy & Policy",
  description:
    "Juncify Privacy & Policy. Juncify is committed to protecting your privacy and providing a safe online experience for all of our users.",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

const Privacy = () => {
  return (
    <div className="dashboard-container">
      {/* <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5  md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Privacy & Policy</h3>
        </div>
      </section> */}
      <Header
        title="Privacy & Policy"
        subtitle="Juncify Privacy & Policy. Juncify is committed to protecting your privacy and providing a safe online experience for all of our users."
      />
      <div className="wrapper py-2">
        <div className="bg-white rounded-lg shadow-md p-5 mb-6">
          <p className="p-semibold-18 mb-2">1. Information We Collect:</p>
          <p className="p-medium-14 text-gray-600 mb-1 with-bullets">
            When you create an account, we may collect personal information such
            as your name, email address, date of birth, and profile picture.
          </p>
          <p className="p-medium-14 text-gray-600 mb-1 with-bullets">
            We may also collect information about your interactions with our
            platform, such as posts, comments, likes, and messages.
          </p>
          <p className="p-medium-14 text-gray-600 with-bullets">
            Additionally, we may collect information about your device,
            including IP address, browser type, and operating system.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-5 mb-6">
          <p className="p-semibold-18 mb-2">2. How We Use Your Information:</p>
          <p className="p-medium-14 text-gray-600 mb-1 with-bullets">
            We use your personal information to provide and improve our
            services, customize your experience, and communicate with you.
          </p>
          <p className="p-medium-14 text-gray-600 mb-1 with-bullets">
            Your data may also be used for research, analysis, and advertising
            purposes to enhance our platform and deliver relevant content to
            you.
          </p>
          <p className="p-medium-14 text-gray-600 with-bullets">
            We may share anonymized and aggregated data with third parties for
            marketing, analytics, and other purposes.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-5 mb-6">
          <p className="p-semibold-18 mb-2">3. Data Security:</p>
          <p className="p-medium-14 text-gray-600 with-bullets">
            We employ industry-standard security measures to protect your
            personal information from unauthorized access, disclosure,
            alteration, or destruction.
          </p>
          <p className="sm:p-medium-14 p-medium-16 text-gray-600 with-bullets">
            However, please be aware that no method of transmission over the
            internet or electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-5 mb-6">
          <p className="p-semibold-18 mb-2">4. Third-Party Links:</p>
          <p className="p-medium-14 text-gray-600 with-bullets">
            Our platform may contain links to third-party websites or services
            that are not controlled or operated by us. We are not responsible
            for the privacy practices or content of these third parties.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-5 mb-6">
          <p className="p-semibold-18 mb-2">
            5. Changes to this Privacy Policy:
          </p>
          <p className="p-medium-14 text-gray-600 with-bullets">
            We reserve the right to update or revise this Privacy Policy at any
            time. We will notify you of any changes by posting the new Privacy
            Policy on this page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
