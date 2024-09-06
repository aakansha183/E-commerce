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
import {FormData} from '../PageSignup/Interfaces/SignupInterfaces'
import { validationSchemaRegister } from "./ValidationSchemaSignup/SignupValidation";
import StarIcon from "../../Assests/ImagesData/StarIcon";
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
      toast.success("Successfully Registered");
      navigate("/login");
    } catch (err) {
      if (err instanceof Error) {
        setRegistrationError(err.message);
      } else {
        setRegistrationError("An unknown error occurred");
      }
    }
  };

  return (
  
    <Container maxWidth="xs">
      <Box sx = {{
        marginTop:'80px',
        marginBottom:'-250px'
      }}>
       <StarIcon/>
       </Box>
      <Paper
     
        sx={{
          boxShadow: 0,
          border: 'solid 2px #f0f0f0',
          padding: "128px",
          marginTop: "130px",
          height: "auto",
          maxHeight: "90vh",
          width:'200%',
          borderRadius:'22px',
          marginLeft:'-280px',
          backgroundColor:'#ffffff'

        }}
      >
         
          <Typography
         
            variant="h4"
            gutterBottom
            sx={{ marginBottom:'40px',flexGrow: 1, color: '#000000', fontSize: '40px', fontWeight: 'bold', fontFamily: 'Poppins',marginTop:'-60px',marginLeft:'230px' }}
            
          >
            SHOP.CO
          </Typography>
          
         
          
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
                    style:{
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
                    style:{
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
                    style:{
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
                    style:{
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
                    style:{
                    borderRadius: "28px",
                    borderColor:'black',
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
                  style={{ marginTop: "1rem" }}
                  disabled={isSubmitting}
                  sx= {{
                    backgroundColor:'#000000',
                    borderRadius:'40px',
                    width:'350px',
                    marginLeft:'230px',
                    height:'50px'
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
              style={{ marginTop: "1rem", width: "100%" }}
              align="center"
            >
              {registrationError}
            </Typography>
          )}
          <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
            <Grid item>
              <Typography variant="body2">
                Already registered?{" "}
                <Link
                  component="button"
                 
                  sx= {{
                    
                    textDecoration: "underline",
                    marginBottom:'5px'
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