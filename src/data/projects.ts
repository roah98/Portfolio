export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Custom T-Shirt Logo",
    techs: ["ReactJS", "Dall.E", "JavaScript"],
    // link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "Tinder for Dogs - TinDog",
    techs: ["HTML", "CSS", "Bootstrap"],
    // link: "https://www.linablidi.fr/",
  },
];

export default projects;
