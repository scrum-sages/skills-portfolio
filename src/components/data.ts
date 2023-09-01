export interface HeaderLinks extends Array<string> {}

export const headerLinks: HeaderLinks = ['TEAM', 'PROJECTS', 'SKILLS', 'CONTACT'];
export const footerLinks: HeaderLinks = ['BLOG', 'FAQ', 'OUR GITHUB', 'COOKIES'];

export const headerTextColor: string = "black"


export interface SkillsData {
    title: string;
    icon: string;
    details: string;
  }

  export const data: SkillsData[] = [
    {
      title: 'HTML',
      icon: 'IconBrandHtml5',
      details: 'HTML.',
    },
    {
      title: 'CSS',
      icon: 'IconBrandCss3',
      details: 'CSS.',
    },
    {
      title: 'JavaScript',
      icon: 'IconBrandJavascript',
      details: 'JavaScript.',
    },
    {
      title: 'TypeScript',
      icon: 'IconBrandTypescript',
      details: 'TypeScript has been used in several bigger projects, such as e-commerce sites.',
    },
    {
      title: 'GitHub',
      icon: 'IconBrandGithub',
      details: 'We have used GitHub to work on group projects.',
    },
    {
      title: 'Figma',
      icon: 'IconBrandFigma',
      details:
        'We have used Figma to design wireframes and make prototypes as well as visually communicate ideas.',
    },
    {
      title: 'Cypress',
      icon: 'IconBrandCypress',
      details: 'Cypress has been used for testing our front end web applications.',
    },
    {
      title: 'Socket.io',
      icon: 'IconBrandSocketIo',
      details: 'Used to build a chat application for the web.',
    },
    {
      title: 'MongoDB',
      icon: 'IconBrandMongodb',
      details:
        'Database hosting for e-commerce site, chat app and twitter copy. Hosts user info like username, encrypted password, posts or products as well as additional metadata associated with these.',
    },
    {
      title: 'Mantine UI',
      icon: 'IconBrandMantine',
      details: 'Design system used in e-commerce and chat app projects.',
    },
    {
      title: 'VS Code',
      icon: 'IconBrandVscode',
      details: 'Vs Code ',
    },
    {
      title: 'Adobe Suite',
      icon: 'IconBrandAdobe',
      details:
        'Illustrator, Photoshop and InDesign were used to create graphic profiles and wireframes as well as mock ups of logos on products.',
    },
  ];