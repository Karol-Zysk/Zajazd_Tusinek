import { type } from "os";

export type dataType = {
  services: (
    | {
        id: number;
        name: string;
        title: string;
        desc: string;
        video: string;
        photo: string;
        longDesc: string;
        images: {
          id: number;
          url: string;
        }[];
      }
    | {
        id: number;
        name: string;
        title: string;
        desc: string;
        photo: string;
        longDesc: string;
        images: {}[];
        video?: undefined;
      }
  )[];
};

export type productType = {
  products: {
    id: number;
    name: string;
    title: string;
    desc: string;
    video: string;
    photo: string;
    longDesc: string;
    images: {
      id: number;
      url: string;
    }[];
  };
};

export type AllProdusts = {
  buyProducts: {
    [x: string]: any;
    id: number;
    name: string;
    title: string;
    opis: string;
    dlugiOpis: string;
    cennik: {
      id: number;
      name: string;
      price?: string;
      qty?: string;
      info?: string;
    }[];
    images: {
      id: number;
      url: string;
    }[];
  }[];
};

export type CategoryType = {
  category: {
    [x: string]: any;
    id: number;
    name: string;
    title: string;
    opis: string;
    dlugiOpis: string;
    cennik: {
      id: number;
      name: string;
      price?: string | undefined;
      qty?: string | undefined;
      info?: string | undefined;
    }[];
    images: {}[];
  };
};
export type AccomodationsType = {
  accomodations: {
    nr: string;
    info: string;
  }[];
  images?: {
    id: number;
    url: string;
  }[];
};
export type AwardsType = {
  awardsList: {
    id: number;
    rok: number;
    nagroda: string;
  }[];
  images: {
    id: number;
    url: string;
  }[];
};

export type RestaurantDataType = {
  restaurantData: {
    id: number;
    name: string;
    photos: {
      id: number;
      img: string;
      title: string;
      subtitle: string;
      comment: string;
      text?: string;
      cena?: string;
    }[];
  }[];
  menuIndex?:number;
  imgIndex:number;
};

export type MenuCategoryType ={ menuCategory: {
  id: number;
  name: string;
  photos: {
      id: number;
      img: string;
      title: string;
      subtitle: string;
      comment: string;
      text?: string | undefined;
      cena?: string | undefined;
  }[];
}}
