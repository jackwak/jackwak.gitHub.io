/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mehmet Yanık",
  title: "Hi all, I'm Mehmet",
  subTitle: emoji(
    "A passionate Game Developer 🚀 with solid experience in Unity and C#, focused on gameplay feel, level design tools, and creating polished hybrid-casual games for mobile platforms."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jackwak",
  linkedin: "https://www.linkedin.com/in/mehmet-yan%C4%B1k-4331b61b3/",
  gmail: "mehmetyaanik@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
  subTitle: "HYBRID CASUAL GAME DEVELOPER FOCUSED ON POLISHED MOBILE EXPERIENCES",
  skills: [
    emoji("⚡ Develop hybrid casual mobile games with smooth and responsive UI"),
    emoji("⚡ Design intuitive interfaces with a strong focus on user experience"),
    emoji("⚡ Optimize visual feel and feedback to enhance player engagement")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Unity",
      image: require("./assets/images/unity.png") // kendi unity logonu buraya ekle
    },
    {
      skillName: "C#",
      image: require("./assets/images/csharp.png")
    },
    {
      //skillName: "python",
      //fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Istanbul Aydin University",
      logo: require("./assets/images/iau.png"),
      subHeader: "Bachelor of Arts in Digital Game Design",
      duration: "September 2021 - June 2025",
      desc: "Graduated in June 2025 with a focus on game design and development.",
      descBullets: [
        "Developed several prototype games using Unity and C#",
        "Gained experience with multiplayer and mobile game development",
        "Worked on team projects involving gameplay mechanics and game design"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Game Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming (C#)",
      progressPercentage: "80%"
    },
    {
      Stack: "Level Design & Tools",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
  role: "Game Developer Intern",
  company: "Midpoly Games",
  companylogo: require("./assets/images/midpoly.png"), // Remember to add this logo image
  date: "November 2023 – January 2024",
  desc: "Contributed to development processes by creating prototypes and working on game mechanics using Unity and C#.",
  descBullets: [
    "Developed 2D and 3D game prototypes with Unity",
    "Worked on game mechanics implementation and bug fixing",
    "Collaborated with the team to support project workflows"
  ]
},
{
  role: "Game Developer",
  company: "Hooligan Games",
  companylogo: require("./assets/images/hooligan.jpeg"), // Remember to add this logo image
  date: "November 2024 – Present",
  desc: "Participating in mobile game projects, contributing to game development and design processes.",
  descBullets: [
    "Developing games using Unity and C#",
    "Designing and implementing in-game features",
    "Performing performance optimizations and debugging"
  ]
}
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "GAMES I’VE DEVELOPED OR CONTRIBUTED TO",
  projects: [
    {
      images: [
      require("./assets/images/savemoney2.webp"),
      require("./assets/images/savemoney.webp"),
      require("./assets/images/savemoney1.webp")
    ],
    projectName: "Save Money",
    projectDesc: "Defend your cash towers from thieves with strategic card play.",
    footerLink: [
      {
        name: "Download on Play Store",
        url: "https://play.google.com/store/apps/details?id=com.hooligan.savemoney"
      }
    ]
    },
    {
      images: [
      require("./assets/images/mergebrawlers.webp"),
      require("./assets/images/mergebrawlers1.webp"),
      require("./assets/images/mergebrawlers2.webp")
    ],
    projectName: "Merge Brawlers",
    projectDesc: "Merge fighters and outsmart rival gangs with strategic card plays.",
    footerLink: [
      {
        name: "Download on Play Store",
        url: "https://play.google.com/store/apps/details?id=com.hooligan.mergebrawlers"
      }
    ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+90 - 537 962 90 62",
  email_address: "mehmetyaanik@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
