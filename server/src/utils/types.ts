export interface ICard {
  name: string;
  description: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  price: number;
  createdAt: Date;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
}
