const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Solutions", imgPath: "/images/concepts.svg" },
  { text: "Experiences", imgPath: "/images/designs.svg" },
  { text: "Products", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Solutions", imgPath: "/images/concepts.svg" },
  { text: "Experiences", imgPath: "/images/designs.svg" },
  { text: "Products", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 4, suffix: "+", label: "Satisfied Clients" },
  { value: 8, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Client Satisfaction Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Work",
    desc: "Producing reliable, high quality work with careful attention to detail",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Languanges: Spring Boot(Java), React, SQL",
    imgPath: "/images/PB.png",
    logoPath: "/images/Providus.png",
    title: "Systems Support Engineer",
    date: "January 2026 - Present",
    responsibilities: [
      "Supported enterprise infrastructure and backend systems to ensure reliable banking operations.",
      "Collaborated with Mobile and Backend Engineering teams on application support, testing, and integration.",
      "Contributed to the performance and stability of digital banking platforms through system monitoring and optimization."    ],
  },
  {
    review: "Languanges: Java, Xml",
    imgPath: "/images/NNPC_Company.png",
    logoPath: "/images/NNPC.png",
    title: "IT Support Engineer",
    date: "January 2024 - June 2024",
    responsibilities: [
      "Diagnosed and resolved hardware, software, and connectivity issues for end users across multiple departments.",
      "Assisted in maintaining organizational IT infrastructure, ensuring the availability and performance of critical systems",
      "Participated in system upgrades, network support, and routine IT operations to improve service reliability.",
    ],
  },
  {
    review: "Languanges: C, C++, Python, Java, Dart, Kotlin",
    imgPath: "/images/Babcock1.png",
    logoPath: "/images/Babcock_Logo.jpg",
    title: "Mobile App and Backend Developer",
    date: "September 2023 - July 2025",
    responsibilities: [
      "Collaborated with Mobile and Backend Engineering teams to support the development, testing, and debugging of banking applications, contributing to API integration and feature validation.",
      "Used programming logic to analyze system behavior, resolve data related issues, and improve application reliability",
      "Practiced Data Structures and Algorithms (DSA), building strong foundations in problem-solving and backend system design principles",
    ],
  },

   {
    review: "Languanges: C++, Python, Spring Boot(Java), Kotlin, Node.js, React",
    imgPath: "/images/Joseph.jpeg",
    logoPath: "/images/Sj.jpeg",
    title: "Freelance Developer",
    date: "January 2024 - Present",
    responsibilities: [
      "Develop and deliver Android applications with clean, user-focused UI and reliable performance.",
      "Debug, maintain, and optimize existing applications to improve functionality and user experience.",
      "Translate client requirements into scalable mobile and software solutions."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
