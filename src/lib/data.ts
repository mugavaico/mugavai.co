export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  color: string; // accent hex used on the product's own page
  features: { title: string; body: string }[];
  stat: { value: string; label: string };
};

export const products: Product[] = [
  {
    slug: "ta",
    name: "TA",
    tagline: "Smart Time & Attendance Management for Modern Workforces",
    description:
      "TA is a comprehensive workforce management solution that simplifies employee attendance, shift scheduling, leave management, overtime tracking, payroll integration, and workforce analytics. Designed for businesses of all sizes, TA helps improve productivity while ensuring compliance and operational efficiency.",
    category: "Workforce Management",
    color: "#2563EB",
    stat: {
      value: "99.9%",
      label: "Attendance processing accuracy",
    },
    features: [
      {
        title: "Attendance Management",
        body: "Track employee attendance using biometric devices, mobile check-in/out, web punch, QR code, or geofencing with real-time synchronization.",
      },
      {
        title: "Shift & Schedule Management",
        body: "Create flexible work schedules, rotating shifts, holidays, and overtime rules to support any workforce model.",
      },
      {
        title: "Leave & Payroll Integration",
        body: "Manage leave requests, approvals, accruals, and seamlessly integrate attendance data with payroll systems.",
      },
      {
        title: "Employee Self-Service",
        body: "Enable employees to view attendance, apply for leave, submit regularization requests, and access reports from web and mobile apps.",
      },
      {
        title: "Analytics & Reports",
        body: "Generate comprehensive attendance, overtime, absenteeism, productivity, and compliance reports with customizable dashboards.",
      },
      {
        title: "Enterprise Security",
        body: "Built with role-based access control, audit logs, multi-company support, and secure APIs for enterprise environments.",
      },
    ],
  },
];

export const company = {
  name: "Mugavai.co",
  legalName: "Mugavai.co Technologies",
  tagline: "Enterprise software for modern businesses",
  shortDescription:
    "Mugavai.co builds enterprise software and B2B SaaS solutions that help businesses streamline operations, improve productivity, and accelerate digital transformation.",
  founded: "2025",
  address: "Ramanathapuram,Tamil Nadu, India",
  hq: "Ramanathapuram, Tamil Nadu, India",
  devCenter: "Ramanathapuram, Tamil Nadu, India",
  email: "info@mugavai.co", // Replace with your actual business email
  phone: "+91 4567 220136", // Replace with your actual business number
  employees: "10+",
  customers: "Growing",
  social: {
    linkedin: "https://www.linkedin.com/company/mugavai",
    twitter: "https://twitter.com/mugavai",
  },
};

export type Job = {
  id: string;
  title: string;
  location: string;
  type: "Full-Time" | "Part-Time" | "Contract";
  workMode: "On-Site" | "Remote" | "Hybrid";
};

export const jobs: Job[] = [
  {
    id: "24c2f0e8-ac88-46e5-8333-e54b8a444587",
    title: "Social Media Marketer",
    location: "Ramanathapuram, Tamil Nadu, India",
    type: "Full-Time",
    workMode: "Remote"
  },
  {
    id: "1b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e",
    title: "Software Engineer",
    location: "Ramanathapuram, Tamil Nadu, India",
    type: "Full-Time",
    workMode: "Hybrid"
  },
  {
    id: "6e5d4c3b-2a1f-9e8d-7c6b-5a4f3e2d1c0b",
    title: "Talent Acquisition",
    location: "Ramanathapuram, Tamil Nadu, India",
    type: "Full-Time",
    workMode: "On-Site"
  }
];

export function getJobById(id: string): Job | undefined {
  return jobs.find((job) => job.id === id);
}
