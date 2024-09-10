import { Product } from "../Interfaces/NewArrivalItems";
import BlackTshirt from '../../../../Assests/Images/BlackTshirt.png';
import Jeans from '../../../../Assests/Images/Jeans.png';
import CheckedShirt from '../../../../Assests/Images/CheckT-shirt.png';
import OrangeTshirt from '../../../../Assests/Images/OrangeBlackTshirt.png';
export const products: Product[] = [
    { id: 10, name: 'T-shirt with Tape Details', price: 120, rating: 4.5, image: BlackTshirt },
    { id: 4, name: 'Skinny Fit Jeans', price: 240, originalPrice: 260, discount: '-20%', rating: 3.5, image: Jeans },
    { id: 5, name: 'Checkered Shirt', price: 180, rating: 4.5, image: CheckedShirt },
    { id: 6, name: 'Sleeve Striped T-shirt', price: 130, originalPrice: 160, discount: '-30%', rating: 4.5, image: OrangeTshirt },
  ];