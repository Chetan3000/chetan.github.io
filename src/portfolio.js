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
  username: "Chetan Kumar",
  title: "Hi all, I'm Chetan",
  subTitle: emoji(
    "A passionate Cloud Engineer 🚀 leveraging AWS, Azure, and GCP to build and manage scalable and secure cloud infrastructure solutions"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Chetan3000",
  linkedin: "https://www.linkedin.com/in/chetan-kumar3000/",
  gmail: "chetandhiman061@gmail.com",
  medium: "https://medium.com/@chetandhiman061",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CLOUD SOLUTIONS ARCHITECT & ENGINEER - BUILDING THE FUTURE IN THE CLOUD",
  skills: [
    emoji(
      "⚡ Design, deploy, and manage robust and scalable cloud infrastructure on platforms like AWS, Azure, and GCP"
    ),
    emoji("⚡ Implement secure and highly available cloud environments optimized for performance and cost-efficiency"),
    emoji(
      "⚡ Expertise in cloud automation, infrastructure-as-code (IaC), and DevOps practices to streamline deployments and operations"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "DevOps",
      fontAwesomeClassname: "fab fa-dev"
    },
    {
      skillName: "Powerscale",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Vast",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Qumulo",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-infinity"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Algonquin College",
      logo: require("./assets/images/version5.png"),
      subHeader: "Computer System technician and Networking",
      duration: "2020",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Services Engineer / Technical Trainer",
      company: "Superna",
      companylogo: require("./assets/images/supernav2.jpeg"),
      date: "2022 – Present",
      desc: "As a Technical Trainer at Superna, I play a crucial role in onboarding and supporting both internal teams and external clients. I am responsible for developing and delivering comprehensive, hands-on training programs for new hires, leveraging my expertise to build and maintain cloud-based lab environments.  My training focuses on Superna's software suite, ensuring new employees quickly become proficient.",
      descBullets: [
        "Design and maintain cloud-based lab environments to facilitate practical training",
        "Provide expert technical onboarding to customers, addressing their software-related issues",
        "Guide customers through the installation process of Superna software in VMware and cloud environments",
        "Technologies used - AWS (S3, Route 53, Amplify, ECS, Guardduty, Lambda, API), Azure, GCP, Docker, Linux Open SUSE, Apache Kafka, Apache Solr, Apache Zookeeper, Cloud Object Storage platforms, TCP/IP, NFS, CIFS, OneFS, VMware"
      ]
    },
    {
      role: "Technical Support Engineer",
      company: "Cogeco Communications",
      companylogo: require("./assets/images/cogeco.png"),
      date: "2021 – 2022",
      desc: "Provide first-level technical support to Cogeco customers, resolving issues with internet, TV, phone, and smart home services.  Diagnose and troubleshoot technical problems, guiding customers through solutions and escalating complex issues.  Maintain a positive customer experience while documenting interactions and adhering to support standards.  Stay up-to-date with service offerings to effectively assist customers and contribute to process improvements.",
      descBullets: [
        "Delivered exceptional customer service, resolving technical issues and providing guidance on service offerings",
        "Troubleshot and resolved technical problems, escalating complex issues to the appropriate team",
        "Documented customer interactions and maintained accurate records of technical issues and solutions",
        "Technologies used- Linux, Internet, TV, Phone, Smart Home Services, Modems, Routers, Wi-Fi, TCP/IP, Set-top boxes, Cable TV, VoIP, Smart Devices"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/resumechallenege.png"),
      projectName: "Cloud Resume Challenge",
      projectDesc: "Completed the Cloud Resume Challenge, a hands-on project involving the design and deployment of a serverless resume website on AWS. This project showcases practical experience in architecting and implementing cloud solutions using key AWS services including S3 for static website hosting, CloudFront for content delivery, API Gateway and Lambda for backend functionality, DynamoDB for database management, and Route53 for DNS configuration.  This challenge demonstrates proficiency in serverless architecture and core AWS cloud technologies",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/Chetan3000/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cloudshare.jpg"),
      projectName: "Training Environments",
      projectDesc: "Developed and deployed scalable virtual training environments on CloudShare, utilizing VMware, Windows Server, OpenSUSE, PowerScale, and Qumulo. These environments provided a platform for hands-on Linux and cybersecurity training, featuring complex internetworking to support diverse scenarios.  Engaging training content was created with RISE Articulate.  Secure access and streamlined management were achieved through Active Directory, Single Sign-On (SSO), and Jenkins/CICD automation.  The project incorporated DNS management and Route 53 for cloud integration, resulting in a highly scalable and effective training solution.",
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
      title: "AWS Certified Solutions Architect - Associate",
      image: require("./assets/images/awsreal.png"),
      imageAlt: "AWS Certified Solutions Architect - Associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/528404d4-8f48-4fdb-9b1a-15b1e392a287/public_url"
        },
      ]
    },
    {
      title: "CCNAv7: Introduction to Networks",
      image: require("./assets/images/ccna.png"),
      imageAlt: "CCNAv7: Introduction to Networks",
      footerLink: [
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/chetan3000/"
        }
      ]
    },

    {
      title: "Aws Certified Cloud Practitioner",
      image: require("./assets/images/awspra.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {name: "Certification", url: "https://www.credly.com/badges/101fff65-277e-4043-a199-24cf52c1cb76/linked_in_profile"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@chetandhiman061",
      title: "Coming Soon",
      description:
        "Hello World! I am Chetan."
    },
    {
      url: "https://medium.com/@chetandhiman061",
      title: "Comng Soon",
      description:
        "Hello World! I am Chetan."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
    "Discuss a opportuinity or just want to say hi? My Inbox is open for all.",
  email_address: "chetandhiman061@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
