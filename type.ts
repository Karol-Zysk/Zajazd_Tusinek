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

export type AllProdusts = { buyProducts:
  ({
    id: number;
    name: string;
    title: string;
    opis: string;
    dlugiOpis: string;
    cennik: ({
        id: number;
        name: string;
        price: string;
        qty: string;
    } | {
        id: number;
        name: string;
        qty: string;
        price?: undefined;
    })[];
    images: {
        
    }[];
} | {
   
} | {
    
})[]
}