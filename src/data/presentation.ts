type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "rohith.srinivas1998@gmail.com",
  title: "Hi, I’m Rohith 👋",
  // profile: "/profile.webp",
  description:
    "Full Stack Developer with a passion for crafting seamless digital experiences. Beyond coding, I find joy in exploring immersive gaming universes, where creativity and problem-solving converge.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/roah019",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/roah017",
    },
    {
      label: "Github",
      link: "https://github.com/roah98",
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/roah.js",
    },
    {
      label: "Steam",
      link: "https://steamcommunity.com/id/roah98/",
    },
  ],
};

export default presentation;
