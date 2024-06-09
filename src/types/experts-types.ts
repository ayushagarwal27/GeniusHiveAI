export enum ExpertMapper {
  ALB = "Albert-Einstein",
  ALT = "Alan-Turing",
  ISCN = "Isaac-Newton",
  MARCU = "Marie-Curie",
}

export interface ExpertContent {
  description: string;
  imgUrl: string;
  bannerImg?: string;
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
      bannerImg:
        "https://photos1.blogger.com/blogger/3741/1085/1600/einstein%20second%20banner.1.jpg",
    },
  },
  {
    name: ExpertMapper.ALT,
    content: {
      description:
        "I can answer questions related to mathematics, cryptography, and computer science",
      imgUrl: "https://awl.com/wp-content/uploads/2022/06/29i273kbby241.png",
      bannerImg:
        "https://www.mub.eps.manchester.ac.uk/science-engineering/wp-content/uploads/sites/59/2020/01/Turing-did-you-know-banner.jpg",
    },
  },

  {
    name: ExpertMapper.ISCN,
    content: {
      description:
        "I can answer questions related to mathematics, physics, astronomy, and natural philosophy",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg",
      bannerImg:
        "https://assets.sutori.com/user-uploads/image/110fb5e9-1782-468d-a8a4-9e9af06ffdb6/6e3c4abbd4620db6f1bef6eb8a145320.jpeg",
    },
  },
  {
    name: ExpertMapper.MARCU,
    content: {
      description:
        "I can answer questions related to physics, chemistry, and radioactivity.",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg",
      bannerImg:
        "https://www.iua.ie/wp-content/uploads/2019/08/header_new_marie_curie-1600x450.jpg",
    },
  },
];
