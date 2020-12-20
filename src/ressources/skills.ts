export interface SkillGroup {
  groupName: string;
  subGroup: SkillSubGroup[];
}

export interface SkillSubGroup {
  name: string;
  color: string;
  skills?: Skill[];
}

export interface Skill {
  name: string;
}

const skills: SkillGroup[] = [
  {
    groupName: "Technologies Frontend",
    subGroup: [
      {
        name: "Javacript",
        color: "#F8CF5F",
        skills: [
          {
            name: "React",
          },
          {
            name: "Angular",
          },
          {
            name: "Javascript",
          },
        ],
      },
      {
        name: "CSS",
        color: "#64C97A",
        skills: [
          {
            name: "SCSS",
          },
          {
            name: "LESS",
          },
          {
            name: "Bootstrap",
          },

          {
            name: "AntDesign",
          },
        ],
      },
      { name: "HTML", color: "#D65745" },
    ],
  },
  {
    groupName: "Technologies Backend",
    subGroup: [
      {
        name: "PHP",
        color: "#5098D6",
        skills: [
          {
            name: "Laravel",
          },
          {
            name: "Symfony",
          },
        ],
      },
      {
        name: "NodeJS",
        color: "#64C97A",
        skills: [
          {
            name: "Express",
          },
          {
            name: "LESS",
          },
        ],
      },
      {
        name: "Python",
        color: "#64C97A",
      },
      {
        name: "C#",
        color: "#64C97A",
        skills: [
          {
            name: ".NET",
          },
        ],
      },
    ],
  },
  {
    groupName: "Base de donnée",
    subGroup: [
      {
        name: "Mysql",
        color: "#7FAC56",
        skills: [
          {
            name: "MariaDB",
          },
        ],
      },
      {
        name: "MongoDB",
        color: "#7FAC56",
      },
    ],
  },
  {
    groupName: "Versionning",
    subGroup: [
      {
        name: "Git",
        color: "#16a085",
      },
      {
        name: "SVN",
        color: "#16a085",
      },
      {
        name: "Mercurial",
        color: "#16a085",
      },
    ],
  },
];

export default skills;
