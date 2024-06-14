// Main Card Images
import einsteinMain from "../assets/images/albert-einstein.jpeg";
import alanTuringMain from "../assets/images/alanTuring.webp";
import marieCurieMain from "../assets/images/marie-curie.jpg";
import isaacNewtonMain from "../assets/images/isaac-newton.jpeg";

// Banner Images
import einsteinBanner from "../assets/images/albert-einstein-banner.jpg";
import alanTuringBanner from "../assets/images/alan-turing-banner.jpeg";
import marieCurieBanner from "../assets/images/marie-curie-bannner.jpeg";
import isaacNewtonBanner from "../assets/images/isaac-newton-banner.jpeg";

export enum ExpertMapper {
  ALB = "Albert-Einstein",
  ALT = "Alan-Turing",
  ISCN = "Isaac-Newton",
  MARCU = "Marie-Curie",
}

export interface ExpertContent {
  description: string;
  imgUrl: any;
  bannerImg?: any;
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
      imgUrl: einsteinMain,
      bannerImg: einsteinBanner,
    },
  },
  {
    name: ExpertMapper.ALT,
    content: {
      description:
        "I can answer questions related to mathematics, cryptography, and computer science",
      imgUrl: alanTuringMain,
      bannerImg: alanTuringBanner,
    },
  },

  {
    name: ExpertMapper.ISCN,
    content: {
      description:
        "I can answer questions related to mathematics, physics, astronomy, and natural philosophy",
      imgUrl: isaacNewtonMain,
      bannerImg: isaacNewtonBanner,
    },
  },
  {
    name: ExpertMapper.MARCU,
    content: {
      description:
        "I can answer questions related to physics, chemistry, and radioactivity.",
      imgUrl: marieCurieMain,
      bannerImg: marieCurieBanner,
    },
  },
];
