export interface SkillGroup {
  groupName: string;
  groupDescription: string;
  mainColor: string;
  subGroup: SkillSubGroup[];
  key: number;
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
    key: 0,
    groupName: "Compétences Frontend",
    groupDescription: `
     Ces 2 dernières années, je me suis spécialisé en React.js, 
     qui est une technologie avec laquelle je crée des applications web
     depuis à présent 4 ans.
     Bien que j'apprecie particulièrement travailler avec React, je continue à mettre 
     mes connaissances à jour, comme par exemple Vue.js ou encore Svelte.
     `,
    mainColor: "#f4845f",
    subGroup: [
      {
        name: "Javacript",
        color: "#ffd166",
        skills: [
          {
            name: "React.js",
          },
          {
            name: "Vue.js",
          },
          {
            name: "Svelte",
          },
          {
            name: "Javascript",
          },
        ],
      },
      {
        name: "CSS",
        color: "#ff6d00",
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
      { name: "HTML", color: "#e71d36" },
    ],
  },
  {
    key: 1,
    groupName: "Compétences Backend",
    groupDescription: `
      Bien que je me sois davantage concentré sur la partie frontend 
      sur mes projets personnels, j'ai pu continuer à m'améliorer dans 
      les technologies backend dans un cadre professionnel, notamment en node.js 
      chez CaSolutions et php chez Spartoo.
    `,
    mainColor: "#7bdff2",
    subGroup: [
      {
        name: "PHP",
        color: "#4361ee",
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
        color: "#06d6a0",
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
        color: "#81b29a",
      },
      {
        name: "C#",
        color: "#4cc9f0",
        skills: [
          {
            name: ".NET",
          },
        ],
      },
    ],
  },
  {
    key: 2,
    groupName: "Base de données",
    groupDescription: `
     En entreprise, j'ai été amené à utiliser principalement 2 types 
     de base de données, MySql et ArrangoDB.
     Dans mes projets personnels, j'ai principalement travaillé avec 
     MongoDb et récemment Firebase, qui me permet également 
     d'héberger mes applications web.
    `,
    mainColor: "#73a942",
    subGroup: [
      {
        name: "Mysql",
        color: "#007200",
        skills: [
          {
            name: "MariaDB",
          },
        ],
      },
      {
        name: "MongoDB",
        color: "#ccff33",
        skills: [
          {
            name: "ArrangoDB",
          },
        ],
      },
      {
        name: "Firebase",
        color: "#ffdc5e",
      },
    ],
  },
  {
    key: 3,
    groupName: "Autre",
    groupDescription: `
      Étant passionné d'informatique depuis très jeune, 
      j'ai voulu tester tous les systèmes d'exploitant existants, 
      ce qui me permet aujourd'hui d'être à l'aise pour développer 
      aussi bien sur Windows que Mac ou Linux, avec quand même 
      une préférence pour ce dernier.
      Mon affection pour Linux m'a permis d'apprendre à utiliser 
      Git uniquement dans un shell, et je suis aussi très friand de Docker, 
      qui m'évite autant de problème qu'il ne m'en crée.
    `,
    mainColor: "#9381ff",
    subGroup: [
      {
        name: "Docker",
        color: "#6f2dbd",
      },
      {
        name: "Command line",
        color: "#9d4edd",
        skills: [
          {
            name: "npm",
          },
          {
            name: "Webpack",
          },
        ],
      },
      {
        name: "Git",
        color: "#9381ff",
        skills: [
          {
            name: "SVN",
          },
        ],
      },
    ],
  },
];

export default skills;
