import React, { useEffect, useState } from "react";
import LoginInputs from "../../components/LoginInputs/LoginInputs";
import LoginButton from "../../components/LoginButton/LoginButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import authService from "../../services/authService";
import { useAuth } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const {user} = useAuth();
  const auth = useAuth();
  const [loginError, setLoginError] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      username: "kminchelle",
      password: "0lelplR",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required."),
      password: Yup.string().required("Password is required."),
    }),
    onSubmit: async (values) => {
      try {
        await auth.login(values.username, values.password);
        navigate("/dashboard");
        setLoginError("");
      } catch (error) {
        console.error("Login error:", error);
        setLoginError("Username or password is incorrect");
      }
    },
  });

  return (
    <div className="scope flex justify-center items-center min-h-screen bg-blue-100">
      <div className="login-container flex flex-col justify-center items-center border rounded-lg p-5 w-1/3 space-y-4 bg-white">
        <form
          action=""
          className="w-11/12 flex flex-col gap-4"
          onSubmit={formik.handleSubmit}
        >
          <h2 className="text-2xl text-center text-indigo-500">Login</h2>
          {loginError && (
            <div className="text-red-500 text-sm">{loginError}</div>
          )}
          <LoginInputs
            type="text"
            placeholder="Username"
            value={formik.values.username}
            onChange={formik.handleChange("username")}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-500 text-sm">{formik.errors.username}</div>
          ) : null}
          <LoginInputs
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          ) : null}
          <LoginButton value="Login" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
