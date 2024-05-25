export enum ExpertMapper {
  ALB = "Albert-Einstein",
  ALT = "Alan-Turing",
  ISCN = "Isaac-Newton",
}

export interface ExpertContent {
  description: string;
  imgUrl: string;
}

export interface ExpertsDataType {
  name: ExpertMapper;
  content: ExpertContent;
}

//

export const expertsData: ExpertsDataType[] = [
  {
    name: ExpertMapper.ALB,
    content: {
      description:
        "I can answer questions related to theoretical physics, especially regarding relativity, quantum theory, and statistical mechanics.",
      imgUrl:
        "https://i.natgeofe.com/n/34861553-e7b4-441d-af1f-3f91b21b1755/01-einstein-other-inventions.jpg?w=1280&h=888",
    },
  },
  {
    name: ExpertMapper.ALT,
    content: {
      description:
        "I can answer questions related to mathematics, cryptography, and computer science",
      imgUrl: "https://awl.com/wp-content/uploads/2022/06/29i273kbby241.png",
    },
  },

  {
    name: ExpertMapper.ISCN,
    content: {
      description:
        "I can answer questions related to mathematics, physics, astronomy, and natural philosophy",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg",
    },
  },
];
