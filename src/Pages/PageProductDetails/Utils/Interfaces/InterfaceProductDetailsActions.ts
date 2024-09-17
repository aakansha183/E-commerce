export interface ProductDetailsActionsProps {
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
    selectedSize: string | null;
    handleAddToCart: () => void;
    productId: string;  
  }