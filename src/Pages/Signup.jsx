import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import AuthContext from "../Context/makeContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { userDetails, setUserDetails } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const defaultValues = {
    userName: "",
    password: "",
    confirmPassword: "",
    email: "",
    gender: "",
  };

  const validation = yup.object().shape({
    userName: yup.string().required("Please Enter Username"),
    password: yup.string().required("Please Enter Password"),
    confirmPassword: yup.string().required("Please Confirm your Password"),
    email: yup.string().required("Please Enter Email").email("Invalid Email"),
    gender: yup.string().required("Please Select Your Gender"),
  });

  const handleClick = (values) => {
    if (values.password === values.confirmPassword) {
      if (
        userDetails.filter(
          (e) => e.email === values.email && e.userName === values.userName
        )
      ) {
        setError("Email & Username already exsits");
      } else {
        setUserDetails([...userDetails, values]);
        navigate("/");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Formik
        initialValues={defaultValues}
        validationSchema={validation}
        onSubmit={handleClick}
      >
        <Form className="bg-[url('./assets/signup_bg.jpg')] bg-cover bg-center flex items-center justify-center p-4 rounded-2xl w-screen">
          <div className="bg-red-500 p-4 mt-10 rounded-2xl space-y-3 w-4/12 shadow-2xl h-auto  flex flex-col items-center justify-evenly">
            <h1 className="text-white font-bold text-3xl">Welcome!</h1>
            {error && (
              <h2 className="text-white font-normal text-md">{error}</h2>
            )}
            <div className="flex flex-col items-start justify-center w-full">
              <h2 className="text-white font-bold text-md pb-2 pl-1">
                Username
              </h2>
              <Field
                name="userName"
                type="text"
                placeholder="Create Username"
                className="w-full rounded-md px-2 py-2  focus:outline-none focus:ring-2 focus:ring-white text-red-500 font-semibold text-md placeholder:text-red-300"
              />
              <p className="text-white text-sm ml-1 mt-1">
                <ErrorMessage name="userName" />
              </p>
            </div>
            <div className="flex flex-col items-start justify-center w-full">
              <h2 className="text-white font-bold text-md pb-2 pl-1">Email</h2>
              <Field
                name="email"
                type="text"
                placeholder="Email"
                className="w-full rounded-md px-2 py-2  focus:outline-none focus:ring-2 focus:ring-white text-red-500 font-semibold text-md placeholder:text-red-300"
              />
              <p className="text-white text-sm ml-1 mt-1">
                <ErrorMessage name="email" />
              </p>
            </div>
            <div className="flex flex-col items-start justify-center w-full">
              <h2 className="text-white font-bold text-md pb-2 pl-1">
                Password
              </h2>
              <Field
                name="password"
                type="text"
                placeholder="Create Password"
                className="w-full rounded-md px-2 py-2  focus:outline-none focus:ring-2 focus:ring-white text-red-500 font-semibold text-md placeholder:text-red-300"
              />
              <p className="text-white text-sm ml-1 mt-1">
                <ErrorMessage name="password" />
              </p>
            </div>
            <div className="flex flex-col items-start justify-center w-full">
              <h2 className="text-white font-bold text-md pb-2 pl-1">
                Confirm Password
              </h2>
              <Field
                name="confirmPassword"
                type="text"
                placeholder="Confirm Password"
                className="w-full rounded-md px-2 py-2  focus:outline-none focus:ring-2 focus:ring-white text-red-500 font-semibold text-md placeholder:text-red-300"
              />
              <p className="text-white text-sm ml-1 mt-1">
                <ErrorMessage name="confirmPassword" />
              </p>
            </div>
            <div className="flex flex-col items-start justify-center w-full">
              <h2 className="text-white font-bold text-md pb-2 pl-1">Gender</h2>
              <Field
                name="gender"
                component="select"
                placeholder="Select Your Gender"
                className="w-full rounded-md px-2 py-2  focus:outline-none focus:ring-2 focus:ring-white text-red-500 font-semibold text-md"
              >
                <option value="" disabled>
                  Select Your Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              <p className="text-white text-sm ml-1 mt-1">
                <ErrorMessage name="gender" />
              </p>
            </div>
            <button
              type="submit"
              className="bg-white rounded-md w-1/5 py-2 text-red-500 font-bold active:scale-95"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
