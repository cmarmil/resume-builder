import { store } from "@risingstack/react-easy-state";

const appState = store({
  pdfBlob: null,
  activeTemplate: "oneColumn",
  templateColor: "#c5cae9",
  pdfFont: "Merriweather",
  //pdfData is what will render to the final PDF. We seperate this from formData so that we can track new form data onChange, but only re-render the pdf when we have all changed values.
  pdfData: {
    fName: "Jessica",
    lName: "Williams",
    profession: "Web Developer",
    city: "Madison",
    state: "WI",
    phoneNumber: "(123)-456-789",
    email: "yourEmail@gmail.com",
    linkedIn: "",
    website: "",
    summary:
      "Creative Software Engineer with 4 years of experience in computer science, programming, and UX design. Enthusiastic team player and avid learner.",
    skills: [
      "HTML5",
      "CSS3",
      "SASS",
      "Javascript",
      "Node.js",
      "jQuery",
      "React",
      "AJAX/AJAJ",
      "RESTful APIs",
      "MVC",
      "WCAG and Accessibility",
      "Ruby",
      "Git",
      "SVN"
    ],
    workExperience: [
      {
        jobTitle: "Front End Web Developer",
        companyName: "Company Inc.",
        dates: "August 2018 - July 2020",
        description: [
          "Used React to develop beautiful UX experiences to over 50,000 users.",
          "Practiced agile development methodology SCRUM to deliver continuous results to clients.",
          "Engineered WCAG compliant features to ensure a fully accessible experience for all users.",
          "Conducted cross browser testing and debugging to provide a harmonious user experience across browsers, operating systems, and devices."
        ]
      },
      {
        jobTitle: "UI developer and designer",
        companyName: "Company Inc.",
        dates: "February 2014 - June 2018",
        description: [
          "Conducted UX research studies across a pool of 100,000 active users.",
          "Developed UI mockups using Sketch and Webflow.",
          "Designed and Developed a custom UI library using React styled components."
        ]
      }
    ],
    education: [
      {
        schoolName: "Colorado State University",
        degree: "Bachelor of Science",
        areaOfStudy: "Computer Science",
        dates: "2009 - 2012"
      }
    ],
    certsAndLicenses: [
      { name: "Google Ads Certified", date: "2016" },
      { name: "Adobe Certified Expert", date: "2013" }
    ],
    customSections: [
    ]
  },
  formData: {
    fName: "Jessica",
    lName: "Williams",
    profession: "Web Developer",
    city: "Madison",
    state: "WI",
    phoneNumber: "(123)-456-789",
    email: "yourEmail@gmail.com",
    linkedIn: "",
    website: "",
    summary:
      "Creative Software Engineer with 4 years of experience in computer science, programming, and UX design. Enthusiastic team player and avid learner.",
    skills: [
      "HTML5",
      "CSS3",
      "SASS",
      "Javascript",
      "Node.js",
      "jQuery",
      "React",
      "AJAX/AJAJ",
      "RESTful APIs",
      "MVC",
      "WCAG and Accessibility",
      "Ruby",
      "Git",
      "SVN"
    ],
    workExperience: [
      {
        jobTitle: "Front End Web Developer",
        companyName: "Company Inc.",
        dates: "August 2018 - July 2020",
        description: [
          "Used React to develop beautiful UX experiences to over 50,000 users.",
          "Practiced agile development methodology SCRUM to deliver continuous results to clients.",
          "Engineered WCAG compliant features to ensure a fully accessible experience for all users.",
          "Conducted cross browser testing and debugging to provide a harmonious user experience across browsers, operating systems, and devices."
        ]
      },
      {
        jobTitle: "UI developer and designer",
        companyName: "Company Inc.",
        dates: "February 2014 - June 2018",
        description: [
          "Conducted UX research studies across a pool of 100,000 active users.",
          "Developed UI mockups using Sketch and Webflow.",
          "Designed and Developed a custom UI library using React styled components."
        ]
      }
    ],
    education: [
      {
        schoolName: "Colorado State University",
        degree: "Bachelor of Science",
        areaOfStudy: "Computer Science",
        dates: "2009 - 2012"
      }
    ],
    certsAndLicenses: [
      { name: "Google Ads Certified", date: "2016" },
      { name: "Adobe Certified Expert", date: "2013" }
    ],
    customSections: [
    ]
  }
});

export default appState;
