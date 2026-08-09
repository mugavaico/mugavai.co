import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  GraduationCap,
  Code2,
  TrendingUp,
  Users,
  BookOpen,
} from "lucide-react";

const differentiators = [
  {
    title: "Hands-on Project Experience",
    description:
      "Work on live client and internal projects while learning industry best practices.",
    icon: Rocket,
  },
  {
    title: "Expert Mentorship",
    description:
      "Learn directly from experienced engineers through code reviews and one-to-one guidance.",
    icon: GraduationCap,
  },
  {
    title: "Modern Tech Stack",
    description:
      "Gain experience with the latest tools, frameworks, cloud platforms, and development workflows.",
    icon: Code2,
  },
  {
    title: "Career Growth",
    description:
      "Outstanding interns are considered for full-time opportunities after successful completion.",
    icon: TrendingUp,
  },
  {
    title: "Collaborative Culture",
    description:
      "Work in an open environment where ideas are welcomed and innovation is encouraged.",
    icon: Users,
  },
  {
    title: "Continuous Learning",
    description:
      "Regular technical sessions, workshops, and knowledge-sharing events throughout the internship.",
    icon: BookOpen,
  },
];

const internshipTracks = [
  {
    id: "01",
    title: "Software Development",
    description:
      "Build scalable enterprise software using C#, .NET, SQL Server, REST APIs, Azure, Git, and modern software engineering practices.",
    image: "/internship/software-development.png",
  },
  {
    id: "02",
    title: "Web Development",
    description:
      "Create responsive and modern web applications using HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, and REST APIs.",
    image: "/internship/web-development.png",
  },
  {
    id: "03",
    title: "Mobile Development",
    description:
      "Develop Android and iOS applications using Flutter or React Native with real backend integrations and production-ready architecture.",
    image: "/internship/mobile-development.png",
  },
  {
    id: "04",
    title: "DevOps & Cloud Engineering",
    description:
      "Learn modern DevOps practices by working with CI/CD pipelines, Docker, Kubernetes, Azure, AWS, Infrastructure as Code, monitoring, automation, and cloud-native application deployment.",
    image: "/internship/devops.png",
  },
  {
    id: "05",
    title: "AI & Machine Learning",
    description:
      "Work on AI-powered applications using Python, Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI technologies.",
    image: "/internship/aiml.png",
  }
];

const requirements = [
  "Final-year students or recent graduates in Computer Science, Information Technology, AI & ML, Software Engineering, or related disciplines.",
  "Strong programming fundamentals and problem-solving skills.",
  "Basic understanding of data structures and algorithms.",
  "Interest in Software Development, Web Development, Mobile Development, or AI & ML.",
  "Good communication and teamwork skills.",
  "Passion for learning new technologies.",
];

const photos = {
  hero: "/mugavai-program-1.jpg",
  overview: [
    "/mugavai-program-1.jpg",
    "/mugavai-program-2.jpg",
    "/mugavai-program-3.jpg",
  ],
};
export default function InternshipPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-[140px]" />

        <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-purple-300/20 blur-[140px]" />

      </div>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border  border-pink-200 bg-pink-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-700">
              Internship Program
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Launch Your Career With Mugavai.co
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join our internship program and gain practical experience by
              working alongside experienced engineers on real-world products.
              Learn modern technologies, improve your technical skills, and
              prepare yourself for a successful career in the software industry.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/jobs"
                className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
              >
                View Open Positions
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={photos.hero}
              alt="Mugavai Internship"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold">
              About Our Internship Program
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our internship program is designed to bridge the gap between
              academics and industry. Interns receive structured training,
              mentorship from experienced professionals, and opportunities to
              contribute to live development projects using modern technologies.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {photos.overview.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={image}
                  alt={`Internship ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Mugavai */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold">
              Why Choose Our Internship?
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Our internship provides much more than classroom learning. You'll
              work on real products while being guided by experienced mentors.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-pink-600" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Internship Tracks */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold">Internship Tracks</h2>

            <p className="mt-6 text-lg text-gray-600">
              Choose your preferred specialization and build practical skills
              through hands-on experience.
            </p>
          </div>

          {/* Horizontal Scroll */}
          <div className="mt-16 overflow-x-auto scrollbar-custom">
            <div className="flex gap-8 p-12">
              {internshipTracks.map((track) => (
                <div
                  key={track.id}
                  className="w-[360px] min-w-[360px] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-100 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={track.image}
                      alt={track.title}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="p-8">
                    <span className="inline-flex rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-pink-600">
                      Track {track.id}
                    </span>

                    <h3 className="mt-5 text-2xl font-bold truncate">
                      {track.title}
                    </h3>

                    <p className="mt-4 text-gray-600 leading-7 line-clamp-3">
                      {track.description}
                    </p>

                    <button className="mt-8 inline-flex items-center gap-2 font-semibold text-pink-600 transition hover:gap-3">
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold">
              Who Can Apply?
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              We welcome passionate students and fresh graduates who are eager
              to learn, innovate, and build a successful career in technology.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-4xl rounded-3xl bg-white p-10 shadow-lg ring-1 ring-gray-100">
            <ul className="space-y-5">
              {requirements.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4"
                >
                  <span className="mt-1 flex h-7 w-7 items-center aspect-square justify-center rounded-md bg-green-100 text-green-600">
                    ✓
                  </span>

                  <span className="text-lg leading-7 text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex rounded-full bg-pink-50 px-4 py-1 text-sm font-semibold text-pink-600">
            Start Your Career
          </span>

          <h2 className="mt-6 text-4xl font-bold text-black md:text-5xl">
            Ready to Begin Your Internship Journey?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Join Mugavai.co and gain real-world experience through hands-on
            projects, expert mentorship, and modern technologies. Build your
            future with one of our internship tracks.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/jobs"
              className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
            >
              Apply Now
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
            >
              Contact Us
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}