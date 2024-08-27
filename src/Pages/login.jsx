import { useContext, useEffect, useState } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/makeContext";
import { Field, Form, Formik, ErrorMessage } from "formik";

const Login = () => {
  const { isLoggedin, login, setIsLoggedin } = useContext(AuthContext);
  const { userDetails } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedin) navigate("/home");
  }, [isLoggedin]);

  const defaultValues = {
    userName: "",
    password: "",
    remember: false,
  };

  const validation = yup.object().shape({
    userName: yup.string().required("Please Enter Username"),
    password: yup.string().required("Please Enter Password"),
  });

  const handleClick = (values) => {
    console.log(values);
    const user = userDetails.filter((element) => {
      return (
        element.userName === values.userName &&
        element.password === values.password
      );
    });
    console.log(user);
    if (user.length === 1) {
      login();
      console.log("login success");
      navigate("/home");
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Formik
        initialValues={defaultValues}
        validationSchema={validation}
        onSubmit={handleClick}
      >
        <Form className="h-screen flex items-center justify-end pr-36 rounded-2xl w-screen bg-[url('./assets/login_bg.jpg')] bg-cover bg-center">
          <div className="bg-red-500 p-4 mt-30 rounded-2xl space-y-3 w-4/12 shadow-2xl h-auto  flex flex-col items-center justify-evenly">
            <h1 className="text-white font-bold text-3xl">WELCOME BACK!</h1>
            {error && (
              <h2 className="text-white font-semibold text-lg">{error}</h2>
            )}
            <div className="flex flex-col items-start justify-center w-full">
              <h2 className="text-white font-bold text-md pb-2 pl-1">
                Username
              </h2>
              <Field
                name="userName"
                type="text"
                placeholder="username"
                className="w-full rounded-md px-2 py-2  focus:outline-none focus:ring-2 focus:ring-white text-red-500 font-semibold text-md placeholder:text-red-300"
              />
              <p className="text-white">
                <ErrorMessage name="userName" />
              </p>
            </div>
            <div className="flex flex-col items-start justify-center w-full">
              <h2 className="text-white font-bold text-md pb-2 pl-1">
                Password
              </h2>
              <Field
                name="password"
                type="text"
                placeholder="password"
                className="w-full rounded-md px-2 py-2  focus:outline-none focus:ring-2 focus:ring-white text-red-500 font-semibold text-md placeholder:text-red-300"
              />
              <p className="text-white">
                <ErrorMessage name="password" />
              </p>
            </div>
            <div className="flex flex-row items-center justify-start w-full ml-2">
              <label className="text-white font-semibold flex flex-row items-center">
                <Field
                  type="checkbox"
                  name="remember"
                  className="text-white h-5 w-5 rounded-lg border-none mr-2 mt-0.5"
                />
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="bg-white rounded-md w-1/5 py-2 text-red-500 font-bold active:scale-95"
            >
              Login
            </button>
            <div className="flex flex-row items-center justify-center w-full">
              <h2 className="text-white font-normal text-sm mt-0.5">
                Don't Have an Account
              </h2>
              <button
                className="text-white font-bold ml-3"
                onClick={() => navigate("/signup")}
              >
                Register
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
