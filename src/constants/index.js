import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  carrent,
  jobit,
  tripguide,
  threejs,
  skyblaze,
  dweb,
  mta
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Students studying military engineering",
    company_name: "Học Viện Kỹ Thuật Quân Sự (MTA)",
    icon: mta,
    iconBg: "#383E56",
    date: "2015-2020",
    points: [
      "Study at university",
    ],
  },
  {
    title: "Front-end Wed Developer Internship",
    company_name: "DWEB",
    icon: dweb,
    iconBg: "#E6DEDD",
    date: "March 2020 - September 2020",
    points: [
      "Thiết kế giao diện UI",
      "Xây dựng website Bán đồ nội thất bằng wordpress",
      "làm việc với HTML CSS và Jquery",
    ],
  },
  {
    title: "Front-end Wed Developer Internship",
    company_name: "Skyblaze Studios",
    icon: skyblaze,
    iconBg: "#383E56",
    date: "October 2022 - December 2023",
    points: [
      "Engage and gain experience through actual projects.",
      "Contribute to the development of User Interfaces and fixing bugs.",
    ],
  },
  {
    title: "Fresher Front-end Wed Developer",
    company_name: "Skyblaze Studios",
    icon: skyblaze,
    iconBg: "#383E56",
    date: "October 2022 - December 2023",
    points: [
      "Xây dựng dao các ứng dụng web sử dụng reactJS và NextJS và các công nghệ liên quan",
      "Working in tandem with cross-functional teams, including designers, product managers, and fellow developers.",
      "Creating responsive websites and guaranteeing compatibility across different web browsers.",
      "Engaging in code reviews and offering valuable feedback to fellow developers."
    ],
  },
  {
    title: "Junior Frontend Web Developer",
    company_name: "Skyblaze Studios",
    icon: skyblaze,
    iconBg: "#383E56",
    date: "December 2022 - Present",
    points: [
      "Xây dựng các ứng dụng ReactJS và NextJS và các công nghệ liên quan",
      "là Front-end chính cho hầu hết các dự án của công ty",
      "Xây dựng các ứng dụng như Scan qrcode, game kéo thả, Website đăng ký sự kiện, ứng dụng chụp ảnh làm đẹp, app quét mã qrcode ios, và các website có animation khá phức tạp",
      "Thảo luận và đưa ra các phương pháp phù hợp cho từng dự án",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
