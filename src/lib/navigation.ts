export const navigation = [
  {
    label: "Company",
    children: [
      {
        href: "/about",
        label: "About Us",
        description: "Learn about Mugavai.co and our mission.",
        icon: "building",
      },
      {
        href: "/internship",
        label: "Internship",
        description: "Kick-start your career with our internship program.",
        icon: "graduation",
      },
      {
        href: "/careers",
        label: "Careers",
        description: "Explore opportunities to join our growing team.",
        icon: "briefcase",
      },
    ],
  },
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/contact",
    label: "Contact",
  },
] as const;