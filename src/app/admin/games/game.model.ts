export class Game {
    description: string;
    downloadLink: string;
    id: number;
    img_link: string;
    name: string;
    reviewPrice: number;
    developerId: number;
	date: string;
}


export class Genre {
    id: number;
    name: string;
}

export class Category {
    id: number;
    name: string;
}

export class GameGenre{
    gameId: number;
    genreId: number;
}
