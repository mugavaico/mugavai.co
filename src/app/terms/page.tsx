import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Read the terms and conditions for using the ${company.name} website and services.`,
  alternates: {
    canonical: "/terms",
  },
};

const updated = "August 9, 2026";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description={`These Terms & Conditions govern your use of the ${company.name} website and your interactions with ${company.legalName}.`}
      updated={updated}
      sections={[
        {
          title: "1. Acceptance of These Terms",
          content: (
            <p>
              By accessing or using this website, you agree to these Terms &
              Conditions and applicable law. If you do not agree, please do not
              use the website.
            </p>
          ),
        },
        {
          title: "2. Website Use",
          content: (
            <p>
              You may use this website for lawful business and informational
              purposes. You must not misuse the website, interfere with its
              operation, attempt unauthorized access, introduce malicious code,
              or use content in a way that violates another person&apos;s rights.
            </p>
          ),
        },
        {
          title: "3. Intellectual Property",
          content: (
            <p>
              The website, including its text, branding, graphics, code, and
              other materials, belongs to {company.legalName} or its licensors
              unless stated otherwise. You may not copy, modify, distribute, or
              commercially exploit these materials without prior written
              permission.
            </p>
          ),
        },
        {
          title: "4. Product and Service Information",
          content: (
            <p>
              Information on this website is provided for general informational
              purposes and may change without notice. A product description or
              website statement does not create a contract, warranty, or
              commitment to provide a particular feature or service. Specific
              services are governed by the applicable written agreement.
            </p>
          ),
        },
        {
          title: "5. User Submissions",
          content: (
            <p>
              If you submit information through a contact form or application,
              you confirm that it is accurate and that you have the right to
              provide it. You grant us permission to use that information to
              respond to your request and operate our business in accordance
              with our Privacy Policy.
            </p>
          ),
        },
        {
          title: "6. Third-Party Links",
          content: (
            <p>
              The website may contain links to third-party websites. We are not
              responsible for their content, availability, security, or privacy
              practices. Visiting a third-party website is at your own risk.
            </p>
          ),
        },
        {
          title: "7. Disclaimers and Limitation of Liability",
          content: (
            <p>
              To the extent permitted by law, this website is provided on an
              &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind.
              {company.legalName} is not liable for indirect, incidental,
              special, consequential, or punitive losses arising from your use
              of the website. Nothing in these terms limits liability that
              cannot legally be limited.
            </p>
          ),
        },
        {
          title: "8. Indemnity",
          content: (
            <p>
              To the extent permitted by law, you agree to indemnify and hold
              harmless {company.legalName} and its representatives from claims,
              losses, and expenses arising from your misuse of the website or
              violation of these terms.
            </p>
          ),
        },
        {
          title: "9. Governing Law",
          content: (
            <p>
              These terms are governed by the laws applicable in India, without
              regard to conflict-of-law principles. Courts with appropriate
              jurisdiction in Tamil Nadu, India will have jurisdiction over
              disputes, subject to mandatory rights under applicable law.
            </p>
          ),
        },
        {
          title: "10. Changes and Contact",
          content: (
            <>
              <p>
                We may update these terms by posting a revised version on this
                page. Your continued use of the website after an update means
                you accept the revised terms.
              </p>
              <p>
                Questions about these terms can be sent to{" "}
                <a href={`mailto:${company.email}`}>{company.email}</a>.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
