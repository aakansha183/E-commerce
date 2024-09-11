import React, { useState } from "react";
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
import * as yup from "yup";
import { useFormik, FormikErrors } from "formik";
import { LoginFormValues } from "./Utils/Interfaces/LoginInterfaces";
import { validationSchemaLogin } from "./Utils/Validation/LoginValidation";
import useAuth from "../../Hooks/UseAuth";
import StarIcon from "../../Assests/ImagesData/StarIcon";

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchemaLogin,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const success = await login(values.username, values.password);
        if (success) {
          navigate("/Home");
          toast.success("Successfully Logged In", { theme: "dark" });
        } else {
          setError("Invalid username or password");
        }
      } catch (err) {
        setError("Invalid username or password.");
      } finally {
        setSubmitting(false);
      }
    },
    validate: async (values) => {
      try {
        await validationSchemaLogin.validate(values, { abortEarly: false });
        return {};
      } catch (validationErrors) {
        const errors: FormikErrors<LoginFormValues> = {};
        if (validationErrors instanceof yup.ValidationError) {
          validationErrors.inner.forEach((error) => {
            if (error.path) {
              (errors as FormikErrors<LoginFormValues>)[
                error.path as keyof LoginFormValues
              ] = error.message;
            }
          });
        }
        return errors;
      }
    },
  });

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: "80px",
          marginBottom: "-250px",
        }}
      >
        <StarIcon />
      </Box>
      <Paper
        sx={{
          boxShadow: 0,
          border: "solid 2px #f0f0f0",
          padding: "128px",
          marginTop: "130px",
          height: "auto",
          maxHeight: "90vh",
          width: "200%",
          borderRadius: "22px",
          marginLeft: "-280px",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            marginBottom: "40px",
            flexGrow: 1,
            color: "#000000",
            fontSize: "40px",
            fontWeight: "bold",
            fontFamily: "Poppins",
            marginTop: "-60px",
            marginLeft: "230px",
          }}
        >
          SHOP.CO
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <TextField
                id="username"
                name="username"
                label="Username"
                variant="outlined"
                fullWidth
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
                InputProps={{
                  style: {
                    borderRadius: "28px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  style: {
                    borderRadius: "28px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                style={{ marginTop: "1rem" }}
                disabled={formik.isSubmitting}
                sx={{
                  backgroundColor: "#000000",
                  borderRadius: "40px",
                  width: "350px",
                  marginLeft: "230px",
                  height: "50px",
                }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
        {error && (
          <Typography
            variant="body1"
            color="error"
            style={{ marginTop: "1rem" }}
          >
            {error}
          </Typography>
        )}
        <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
          <Grid item>
            Don’t have an account?{" "}
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate("/register")}
            >
              Register
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Login;
