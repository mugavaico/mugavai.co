import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Learn how ${company.name} collects, uses, and protects personal information.`,
  alternates: {
    canonical: "/privacy",
  },
};

const updated = "August 9, 2026";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description={`This Privacy Policy explains how ${company.legalName} collects, uses, and protects information when you visit ${company.name}'s website or contact us.`}
      updated={updated}
      sections={[
        {
          title: "1. Information We Collect",
          content: (
            <>
              <p>
                We may collect information you provide directly, such as your
                name, email address, phone number, company name, and message
                when you contact us or submit an application.
              </p>
              <p>
                We may also receive basic technical information required to
                operate and secure the website, such as browser type, device
                information, approximate location, and pages requested.
              </p>
            </>
          ),
        },
        {
          title: "2. How We Use Information",
          content: (
            <ul>
              <li>Respond to questions, requests, and applications.</li>
              <li>Provide, maintain, and improve our website and services.</li>
              <li>Protect the website against abuse, fraud, and security threats.</li>
              <li>Meet legal, regulatory, and operational obligations.</li>
            </ul>
          ),
        },
        {
          title: "3. Sharing Information",
          content: (
            <p>
              We do not sell personal information. We may share information
              with service providers that help us operate the website, process
              communications, or maintain security. Those providers may use
              information only to perform services for us. We may also disclose
              information when required by law or necessary to protect our
              rights, users, or business.
            </p>
          ),
        },
        {
          title: "4. Data Retention and Security",
          content: (
            <p>
              We retain information only for as long as reasonably necessary
              for the purposes described in this policy, including responding to
              requests, maintaining business records, and meeting legal
              requirements. We use reasonable administrative and technical
              safeguards, but no online service can guarantee absolute security.
            </p>
          ),
        },
        {
          title: "5. Your Choices and Rights",
          content: (
            <p>
              Depending on where you live, you may have rights to request access
              to, correction of, deletion of, or restriction of processing of
              your personal information. To make a request, contact us using
              the details below. We may need to verify your identity before
              completing a request.
            </p>
          ),
        },
        {
          title: "6. Children's Privacy",
          content: (
            <p>
              Our website is not directed to children under the age required by
              applicable law. We do not knowingly collect personal information
              from children.
            </p>
          ),
        },
        {
          title: "7. Changes to This Policy",
          content: (
            <p>
              We may update this Privacy Policy from time to time. The revised
              version will be posted on this page with an updated date.
            </p>
          ),
        },
        {
          title: "8. Contact Us",
          content: (
            <p>
              For privacy questions or requests, email{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a> or write
              to {company.legalName}, {company.address}.
            </p>
          ),
        },
      ]}
    />
  );
}
