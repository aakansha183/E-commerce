import { Box, Button, Paper, Typography } from "@mui/material";
import { loginStyles } from "../Pages/PageLogin/StyleLogin/StyleLogin";
import { Translations } from "../Utils/Translation/Translation";

export const MainContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Box sx={loginStyles.container}>
      <Paper sx={loginStyles.paper}>{children}</Paper>
    </Box>
  );
  
  export const Title: React.FC = () => (
    <Typography variant="h4" gutterBottom sx={loginStyles.title}>
      {Translations.SHOP_CO}
    </Typography>
  );
  
  export const SubmitButton: React.FC<{ isSubmitting: boolean }> = ({ isSubmitting }) => (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
      size="large"
      disabled={isSubmitting}
      sx={loginStyles.button}
    >
      {Translations.Login}
    </Button>
  );
  
export const ErrorMessage: React.FC<{ error: string }> = ({ error }) => (
  <Typography variant="body1" color="error" sx={loginStyles.errorText}>
    {error}
  </Typography>
);
