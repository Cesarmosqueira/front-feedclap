export class Review {
    id: number;
    description: string;
    rating: number;
	state: string;
	gameId: number;
	userId: number;
}

export class ReviewPost {
  cost: number;
  date: string;
  description: string;
  gameId: number;
  id: number;
  rating: number;
  state: string;
  userId: number;
}
