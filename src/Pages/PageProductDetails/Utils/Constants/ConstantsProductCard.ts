import { Product } from "../Interfaces/InterfacesProductCard";
import BlueTshirt from '../../../../Assests/Images/BlueShirt.png';
import PrintedTshirt from '../../../../Assests/Images/PrintedShirt.png';
import PinkTshirt from '../../../../Assests/Images/PinkT-Shirt.png';
import CheckTshirt from '../../../../Assests/Images/CheckT-shirt.png';
export const products: Product[] = [
    {
      id: 10,
      name: 'Polo with Contrast Trims',
      image: BlueTshirt,
      price: 212,
      originalPrice: 242,
      discount: '-20%',
      rating: 4.0,
    },
    {
      id: 15,
      name: 'Gradient Graphic T-shirt',
      image: PrintedTshirt,
      price: 145,
      rating: 3.5,
    },
    {
      id: 1,
      name: 'Polo with Tipping Details',
      image: PinkTshirt,
      price: 180,
      rating: 4.5,
    },
    {
      id: 13,
      name: 'Black Striped T-shirt',
      image: CheckTshirt,
      price: 120,
      originalPrice: 150,
      discount: '-30%',
      rating: 5.0,
    },
  ];