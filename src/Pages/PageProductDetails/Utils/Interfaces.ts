export interface StyledButtonProps {
    name: string;
    isClicked: boolean;
    onClick: (name: string) => void;
  };
  export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    oldPrice?: number;
    discount?: string;
    rating: number;
  };
  export interface Review {
    id: number;
    name: string;
    rating: number;
    date: string;
    review: string;
  };
  export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }