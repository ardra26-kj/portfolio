export const profile = {
  name: "Ardra K J",
  role: "Java / Spring Boot Full-Stack Developer",
  tagline:
    "Passionate about building scalable web applications using Java, Spring Boot, REST APIs, MySQL and modern frontend technologies.",
  email: "ardrakj2005@gmail.com",
  github: "https://github.com/ardra26-kj",
  linkedin: "https://linkedin.com/in/ardra-kj-b435582a1",
  resume: "/resume.pdf",
  avatar: "/profile.jpg",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const aboutFocus = [
  "Java Development",
  "Spring Boot",
  "Backend Development",
  "Full-Stack Development",
  "REST API Development",
  "Database Management",
];

export const skillGroups = [
  { title: "Programming", skills: ["Java","JavaScript", "MySQL"] },
  {
    title: "Backend",
    skills: ["Spring Boot", "Spring Security", "REST APIs", "JWT Authentication", "Hibernate / JPA"],
  },
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React.js"] },
  { title: "Database", skills: ["MySQL"] },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA","Eclipse","Railway", "Vercel"],
  },
];

export const projects = [
  {
    name: "CinemaShow",
    subtitle: "Online Movie Ticket Booking System",
    description:
      "A full-stack online movie ticket booking platform that allows users to browse movies, select theatres and shows, choose seats, and manage their bookings.",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "User registration and login",
      "JWT-based authentication",
      "Movie browsing",
      "City and theatre management",
      "Screen and seat management",
      "Show management",
      "Seat selection",
      "Booking history",
      "Admin management panel",
    ],
    github: "https://github.com/ardra26-kj",
    demo: "https://cinema-show-frontend.vercel.app",
    image: "/projects/Cinema.png",
  },
  {
    name: "Calculator",
    subtitle: "Calculator Application",
    description:
      "A full-stack calculator application with a Java Spring Boot backend and a responsive frontend, communicating over REST APIs.",
    tech: ["Java", "Spring Boot", "REST API", "HTML", "CSS", "JavaScript", "Axios"],
    features: [
      "Basic arithmetic operations",
      "REST API integration",
      "Responsive UI",
      "Backend calculation logic",
      "Axios-based API communication",
      "Error handling",
    ],
    github: "https://github.com/ardra26-kj/calculator-backend",
    githubSecondary: "https://github.com/ardra26-kj/calculator-frontend",
    demo: null,
    image: "/projects/calculator_img.png",
  },

  {
    name: "Password Gen",
    subtitle: "Password Generator",
    description:
      "A responsive client-side password generator built with HTML, CSS, and JavaScript that generates customizable passwords based on user-selected length and character types.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Customizable password length",
      "Uppercase and lowercase character options",
      "Number and special character support",
      "Dynamic password generation",
      "Client-side JavaScript logic",
      "Responsive user interface",
      "Deployed on Vercel",
    ],
    github: "https://github.com/ardra26-kj/PasswordGenerater",
    demo: "https://passwordgen-sandy.vercel.app/",
    image: "/projects/Password.png",
  }
];

export const experience = [
  {
    role: "Java Development Intern",
    org: "InMakes",
    orgUrl: "https://inmakes.com/",
    location: "Seethees Plaza, Manjummal Kavala, Cheranalloor, Ernakulam, Kerala - 682034",
    duration: "Nov 2025 - Apr 2026",
    points: [
      "Developed Java applications",
      "Worked with Spring Boot",
      "Created REST APIs",
      "Worked with MySQL",
      "Tested APIs using Postman",
      "Used Git and GitHub for version control",
      "Worked on frontend/backend integration",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Vocation - Mathematics and Artificial Intelligence",
    institution: "St. Joseph's College (Autonomous), Irinjalakuda",
    affiliation: "Affiliated with University of Calicut",
  },
];
