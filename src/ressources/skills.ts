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
     qui est une technologie avec laquel je créé des applications web
     depuis à présent 4 ans.
     Bien que j'apprecie particulierement travailler avec React, je continue a mettre 
     mes connaissances a jours, comme par exemple Vue.js ou encore Svelte.
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
      Bien que je me sois davantagee consentre sur la partie frontend 
      sur mes projets personnels, j'ai pu continuer a m'ameliorer dans 
      les technologies backend dans un cadre professionel, notamment en node.js 
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
     En entreprise, j'ai ete amener a utiliser principalement 2 types 
     de base de donnees, MySql et ArrangoDB.
     Dans mes prejets personnelles, j'ai principalement travaille avec 
     MongoDb et recemment Firebase, qui me permet egalement 
     d'heberger mes applications web.
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
      Étant passionné d'informatique depuis tout petit, 
      j'ai voulu tester tous les systèmes d'exploitant existants, 
      ce qui me permet aujourd'hui d'être à l'aise pour développer 
      aussi bien sur Windows que Mac ou Linux, avec quand même 
      une préférence pour ce dernier.
      Mon affection pour Linux m'a permis d'apprendre à utiliser 
      Git uniquement dans un shell, et je suis aussi très friand de Docker, 
      qui m'évite autant de problème qu'il ne m'en créé.
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
