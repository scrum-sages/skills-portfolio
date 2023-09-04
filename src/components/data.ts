export interface HeaderLinks extends Array<string> {}

export const headerLinks: HeaderLinks = ['TEAM', 'PROJECTS', 'SKILLS', 'CONTACT'];
export const footerLinks: HeaderLinks = ['BLOG', 'FAQ', 'OUR GITHUB', 'COOKIES'];

export const headerTextColor: string = "black"


export interface SkillsData {
    title: string;
    icon: string;
    details: string;
    experts: string[];
  }

  export const data: SkillsData[] = [
    {
      title: 'HTML',
      icon: 'IconBrandHtml5',
      details: 'Our team is proficient in HTML, the backbone of web development. We use it to structure our web pages effectively.',
      experts: ["Caisa Köhlin", "Mimmi Collin", "Nathanael Blackbourn", "Jennifer Techel"],
    },
    {
      title: 'CSS',
      icon: 'IconBrandCss3',
      details: 'We rely on CSS for crafting responsive and visually appealing designs. Our team ensures that our projects look good on all devices.',
      experts: ["Caisa Köhlin", "Mimmi Collin", "Nathanael Blackbourn", "Jennifer Techel"],
    },
    {
      title: 'JavaScript',
      icon: 'IconBrandJavascript',
      details: 'JavaScript is our go-to for adding dynamic functionality to websites. We have extensive experience in leveraging its capabilities.',
      experts: ["Caisa Köhlin", "Mimmi Collin", "Nathanael Blackbourn", "Jennifer Techel"],
    },
    {
      title: 'TypeScript',
      icon: 'IconBrandTypescript',
      details: 'Our team has used TypeScript in larger, complex projects like e-commerce sites to ensure type safety and enhance code quality.',
      experts: ["Caisa Köhlin", "Mimmi Collin", "Nathanael Blackbourn", "Jennifer Techel"],
    },
    {
      title: 'GitHub',
      icon: 'IconBrandGithub',
      details: 'We collaborate on GitHub to maintain version control and streamline our development workflow, making team projects more efficient.',
      experts: ["Caisa Köhlin", "Mimmi Collin", "Nathanael Blackbourn", "Jennifer Techel"],
    },
    {
      title: 'Figma',
      icon: 'IconBrandFigma',
      details:
        'Figma is our choice for wireframing, prototyping, and visually communicating our ideas, ensuring everyone is on the same page.',
        experts: ["Mimmi Collin", "Jennifer Techel"],
      },
    {
      title: 'Cypress',
      icon: 'IconBrandCypress',
      details: 'We use Cypress for front-end testing, allowing us to identify issues early and assure the reliability of our web applications.',
      experts: ["Nathanael Blackbourn", "Caisa Köhlin"],
    },
    {
      title: 'Socket.io',
      icon: 'IconBrandSocketIo',
      details: 'Socket.io has been instrumental in our chat application projects, enabling real-time communication between users.',
      experts: ["Jennifer Techel", "Mimmi Collin"],
    },
    {
      title: 'MongoDB',
      icon: 'IconBrandMongodb',
      details: 'Our team uses MongoDB for its flexibility and scalability in hosting databases for various applications like e-commerce sites and chat apps.',
      experts: ["Nathanael Blackbourn", "Jennifer Techel"],
    },
    {
      title: 'Mantine UI',
      icon: 'IconBrandMantine',
      details: 'We have leveraged Mantine UI in our e-commerce and chat app projects, achieving a cohesive and user-friendly interface.',
      experts: ["Mimmi Collin", "Caisa Köhlin"],
    },
    {
      title: 'VS Code',
      icon: 'IconBrandVscode',
      details: 'VS Code is our primary IDE, offering an array of extensions and debugging tools that streamline our coding process.',
      experts: ["Caisa Köhlin", "Mimmi Collin", "Nathanael Blackbourn", "Jennifer Techel"],
    },
    {
      title: 'Adobe Suite',
      icon: 'IconBrandAdobe',
      details:
        'Our team uses Adobe Suite for everything from graphic design to wireframing, and even product mock-ups, providing a comprehensive design solution.',
        experts: ["Nathanael Blackbourn", "Mimmi Collin"],
      },
  ];