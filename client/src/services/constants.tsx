export interface ICard {
  _id: string;
  name: string;
  description: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  length: number;
  price: number;
  createdAt: Date;
}
export interface ICardPayloadData {
  data: ICard;
  length: number;
}
