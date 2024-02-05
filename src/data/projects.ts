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
    link: "",
  },
  {
    title: "Tinder for Dogs - TinDog",
    techs: ["HTML", "CSS", "Bootstrap"],
    link: "",
  },
];

export default projects;
