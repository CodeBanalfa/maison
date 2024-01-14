import React, { useState } from "react";
import { Button, Card, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css";
interface Props {
  onLogin: Function;
}
const loginSchema = Yup.object().shape({
  login: Yup.string()
    .min(4, "Le login doit contenir au moins 4 caractères")
    .required("Le login est requis"),
  password: Yup.string()
    .min(4, "Le mot de passe doit contenir au moins 4 caractères")
    .required("Le mot de passe est requis"),
});

const Login = ({ onLogin }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  const initialValues = {
    login: "",
    password: "",
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            if (values.login === "toto" && values.password === "titi") {
              // Indiquer à l'application que l'utilisateur est connecté
              setIsAuthenticated(true);
            } else {
              // Afficher un message d'erreur
              setError(true);
            }
          }}
        >
          <Form className="login">
            <Field
              as={TextField}
              id="outlined-basic"
              name="login"
              label="Login"
              variant="outlined"
              style={{ margin: "2px", border: "solid white" }}
            />
            <ErrorMessage name="login" component="div" />

            <Field
              as={TextField}
              id="outlined-password-input"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              style={{ margin: "2px", border: "solid white" }}
            />
            <ErrorMessage name="password" component="div" />

            <Button
              type="submit"
              size="small"
              variant="contained"
              style={{
                borderRadius: "2em",
                padding: "2px",
                margin: "3px",
                marginLeft: "30%",
              }}
            >
              Entre
            </Button>
          </Form>
        </Formik>
      </Card>
    </>
  );
};

export default Login;
