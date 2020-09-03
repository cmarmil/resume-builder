  
import { store } from '@risingstack/react-easy-state';
import templates from './templates.js';

const appState = store({
  pdfBlob: null,
  template: templates.basicTemplate,
  //initial values
  pdfData: {
    name: 'Amy Smith',
    profession: 'Web Developer',
    location: 'Madison, WI',
    phoneNumber: '(123)-456-789',
    email: 'youremail@email.com',
    linkedIn: 'https://linkedIn.com/yourLinkedInProfile',
    website: 'https://yourWebsite.website',
    summary: "Creative Software Engineer with 4 years of experience in computer science, programming, and UX design. Enthusiastic team player and avid learner.",
    skills: [{skillCategory: 'Languages and Architecture', skills: 'HTML5, CSS3, SASS, Javascript, Node.js, jQuery, React, AJAX/AJAJ, RESTful APIs, MVC, WCAG and Accessibility, Ruby.'}, {skillCategory: 'Tools and Process', skills: 'Git, SVN, CLI, Webpack, Babel, Jira, Agile, SCRUM.'}],
    workExperience: [{jobTitle: 'Front End Web Developer', companyName: 'CoolCompany Inc.', dates: 'August 2018 - July 2020', description: ['Used React to develop beautiful UX experiences to over 50,000 users.', 'Practiced agile development methodology SCRUM to deliver continuous results to clients.', 'Engineered WCAG compliant features to ensure a fully accessible experience for all users.', 'Conducted cross browser testing and debugging to provide a harmonious user experience across browsers, operating systems, and devices.']}],
    customDataSections: []
  }
});

export default appState;