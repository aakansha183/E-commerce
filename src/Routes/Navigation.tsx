import { useNavigate } from 'react-router-dom';

export const useCartNavigate = () => {
  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate('/Cart');
  };

  return { navigateToCart };
};
export const useCheckoutNavigate = () =>{
    const navigate = useNavigate();

const navigateToCheckout = () =>{
    navigate('/checkout');
};
return {navigateToCheckout}

};

export const useProductNavigate = () => {
  const navigate = useNavigate();

  const navigateToProductDetails = (product: any) => {
    navigate('/ProductDetails', { state: { product } });
    window.scrollTo(0, 0); 
  };

  return { navigateToProductDetails };
};
export const useCategoryNavigate = () => {
    const navigate = useNavigate();
  
    const navigateToCategoryNavigate = () => {
      navigate('/Category');
      window.scrollTo(0, 0); 
    };
  
    return { navigateToCategoryNavigate };
  };

export const useRegisterNavigate = () =>{
    const navigate = useNavigate();

const navigateToRegister = () =>{
    navigate('/register');
};
return {navigateToRegister}

};
export const useHomeNavigate = () =>{
  const navigate = useNavigate();

const navigateToHome = () =>{
  navigate('/Home');
};
return {navigateToHome}

};
export const useLoginNavigate = () =>{
  const navigate = useNavigate();

const navigateToLogin = () =>{
  navigate('/login');
};
return {navigateToLogin}

};
