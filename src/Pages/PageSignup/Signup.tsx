import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/UseAuth";
import { User } from "../PageLogin/Utils/Interfaces/LoginInterfaces";
import { FormData } from '../PageSignup/Interfaces/SignupInterfaces';
import { validationSchemaRegister } from "./ValidationSchemaSignup/SignupValidation";

const Register: React.FC = () => {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const [registrationError, setRegistrationError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchemaRegister),
  });

  const onSubmit: SubmitHandler<FormData> = async (values) => {
    try {
      const newUser: User = {
        id: Date.now().toString(),
        username: values.username,
        password: values.password,
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
      };
      await registerUser(newUser);
      toast.success("Successfully Registered", {
        theme: 'dark'
      });
      navigate("/Home");
    } catch (err) {
      if (err instanceof Error) {
        setRegistrationError(err.message);
      } else {
        setRegistrationError("An unknown error occurred");
      }
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{
        mt: 2,
        mb: -6,
        textAlign: 'center',
      }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: '#000000',
            fontSize: { xs: '30px', sm: '35px', md: '40px' },
            fontWeight: '700',
            fontFamily: 'Poppins',
            marginBottom:'80px'
          }}
        >
          SHOP.CO
        </Typography>
      </Box>

      <Paper
        sx={{
          p: { xs: 3, sm: 4, md: 6 },
          mt: 5,
          borderRadius: '22px',
          backgroundColor: '#ffffff',
          border: 'solid 2px #f0f0f0',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                fullWidth
                {...register("username")}
                error={!!errors.username}
                helperText={errors.username?.message}
                InputProps={{
                  style: {
                    borderRadius: "28px",
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
                InputProps={{
                  style: {
                    borderRadius: "28px",
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                InputProps={{
                  style: {
                    borderRadius: "28px",
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="firstName"
                label="First Name"
                variant="outlined"
                fullWidth
                {...register("firstName")}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                InputProps={{
                  style: {
                    borderRadius: "28px",
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                fullWidth
                {...register("lastName")}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                InputProps={{
                  style: {
                    borderRadius: "28px",
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                disabled={isSubmitting}
                sx={{
                  mt: 2,
                  backgroundColor: '#000000',
                  borderRadius: '40px',
                  height: '50px',
                }}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>

        {registrationError && (
          <Typography
            variant="body1"
            color="error"
            sx={{ mt: 2, textAlign: 'center' }}
          >
            {registrationError}
          </Typography>
        )}

        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <Grid item>
            <Typography variant="body2">
              Already registered?{" "}
              <Link
                component="button"
                sx={{
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/login")}
              >
                Login
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Register;
