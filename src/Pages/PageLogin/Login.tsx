import React, { useState } from "react";
import {
  Container,
  Link,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormValues } from "./Types/LoginInterfaces";
import { validationSchemaLogin } from "./Utils/Validation/LoginValidation";
import { Translations } from "../../Utils/Translation/Translation";
import { useRegisterNavigate } from "../../Routes/Navigation";
import LoginTextField from "./Components/CommonTextInputField";
import { useLoginHandler } from "./Utils/LoginHandlers";
import { ErrorMessage, MainContainer, SubmitButton, Title } from "../../CommonComponents/LoginCommonComponent";

const Login: React.FC = () => {
  const { navigateToRegister } = useRegisterNavigate();
  const [error, setError] = useState<string>("");
  const { onSubmit } = useLoginHandler();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(validationSchemaLogin),
  });

  return (
    <Container maxWidth="sm">
      <MainContainer>
      
        <Title />

        <form onSubmit={handleSubmit((values) => onSubmit(values, setError))}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <LoginTextField
                id="username"
                label="Username"
                control={control}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <LoginTextField
                id="password"
                label="Password"
                type="password"
                control={control}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <SubmitButton isSubmitting={isSubmitting} />
            </Grid>
          </Grid>
        </form>

        {error && <ErrorMessage error={error} />}

        <Grid container justifyContent="center">
          <Grid size={{ xs: 'auto' }}>
            {Translations.LoginSubHead}{" "}
            <Link component="button" variant="body2" onClick={navigateToRegister}>
              {Translations.Register}
            </Link>
          </Grid>
        </Grid>
      </MainContainer>
    </Container>
  );
};

export default Login;
