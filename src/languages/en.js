export const tabs = [
  "Home",
  "About",
  "Services",
  /* "Portfolio", */
  /* "testimonial", */
  "Contact",
];
const en = {
  definitions: {
    hello: "Hello",
    iam: "I am",
    specialized: "Specialized in",
  },
  languages: {
    title: "Change Language",
    hebrew: "Hebrew",
    english: "English",
  },
  data: {
    name: "Idan Lazar",
    description: "Full Stack Web Developer",
    skills: [
      "Front-End Development",
      "Back-End Development",
      "React JS",
      "Node JS",
      "UX/UI",
      "HTML + CSS + JS",
    ],
    about: {
      header: "About Me",
      title: "Hey, I am Idan Lazar. Nice to meet you.",
      content:
        "Since the beginning of my journey as a freelance Web Developer nearly 3 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my skills one step at a time.",
      resume: {
        title: "View Resume",
        link:
          "https://drive.google.com/file/d/1SQXUT1AVyrrbO_XkHGtM6Vnfspy7PGg-/view?usp=sharing",
      },
      hireMe: "Hire Me",
    },
    social: {
      github: "https://github.com/lazarid",
      whatsapp: "https://wa.me/972548370965",
    },
    ContactElement: "Contact",
  },
  services: {
    header: "What I'm Doing",
    title: "My services:",
    myServices: [
      {
        icon: "icon-desktop",
        title: "Web Design",
        content:
          "My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.",
      },
      {
        icon: "icon-pencil",
        title: "Development",
        content:
          "Front & back development, Interaction design with the most advanced technologies on the market: HTML5, CSS3, React Js, Node Js, Express, Mongo DB, Firebase and many more that I know to provide service with them, and build the best site for your need",
      },
      {
        icon: "icon-tools",
        title: "Experienced",
        content:
          "Full Stack Web Developer with 2+ years of experience in full-stack web development. Strong experience in the development of web applications with the latest technologies on the market.",
      },
      {
        icon: "icon-linegraph",
        title: "Strategy",
        content:
          "Work together to build a complete strategy for the way forward to build the best site for your own need.",
      },
      {
        icon: "icon-gears",
        title: "Support",
        content:
          "Full support for website maintenance and providing a solution to any problem that may arise along the way.",
      },
      {
        icon: "icon-presentation",
        title: "Responsive and Fast",
        content:
          "Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.",
      },
    ],
  },
  tabs,
  portfolio: {
    header: "My Portfolio",
    title: "I love what I do. I take great pride in what I do.",
    projects: [
      {
        name: "Zira1 - Real Estate Platform",
        image: "/images/zira1.png",
        description: "Build With: React + Node JS + Express + MongoDB",
        link: "https://www.zira1.com/",
        code_link: "",
      },
      {
        name: "Zira1",
        image: "/images/zira1.png",
        description:
          "Build With: React + TypeScript + Node JS + Express + MongoDB",
        link: "",
        code_link: "",
      },
      {
        name: "Zira1",
        image: "/images/zira1.png",
        description:
          "Build With: React + TypeScript + Node JS + Express + MongoDB",
        link: "",
        code_link: "",
      },
      {
        name: "Zira1",
        image: "/images/zira1.png",
        description:
          "Build With: React + TypeScript + Node JS + Express + MongoDB",
        link: "",
        code_link: "",
      },
    ],
  },
  contact: {
    info: {
      title: "Contact Info",
      details: [
        {
          icon: "https://unpkg.com/@icon/elegant-icons/icons/icon_pin_alt.svg",
          title: "Address: Yavne, Israel",
        },
        {
          icon: "https://unpkg.com/@icon/elegant-icons/icons/icon_phone.svg",
          title: "Phone: 054-8370965",
        },
        {
          icon: "https://unpkg.com/@icon/elegant-icons/icons/icon_mail.svg",
          title: "Email: Idanlazar8241@Gmail.com",
        },
      ],
    },
    message: {
      title: "Contact Me",
      body: {
        name: "Your Name*",
        email: "Your Email*",
        subject: "Subject (Site Project, Fix Bugs,etc)*",
        context: "Your Message ...",
        send: "Send Message",
        success: "The request has been sent, I will contact you soon",
      },
    },
  },
};
export default en;
