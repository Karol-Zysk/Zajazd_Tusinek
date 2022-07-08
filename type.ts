export type dataType= { services : ({
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
} | {
    id: number;
    name: string;
    title: string;
    desc: string;
    photo: string;
    longDesc: string;
    images: {
        
    }[];
    video?: undefined;
})[]}