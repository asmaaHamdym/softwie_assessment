import { useState, useRef } from "react";
import logo from "../assets/logo.png";
import googleImg from "../assets/google.png";
import togglePassword from "../assets/tooglePassword.png";
import loginImg from "../assets/todo-lists.jpg";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const api = import.meta.env.VITE_APP_API_URL;

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [isLoginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [keepLoggedin, setKeepLoggedin] = useState(false);

  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });
    for (const [key, value] of Object.entries(formData)) {
      if (value) {
        setErrors({
          ...errors,
          [key]: "",
        });
      }
    }
  };

  const validateForm = (field) => {
    setErrors({
      ...errors,
      [field]: `${field} is required`,
    });
  };

  const handleSubmit = (e) => {
    const emailRegex = new RegExp(
      `^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$`
    );

    e.preventDefault();
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        validateForm(key);
        return;
      } else if (key === "email") {
        if (!emailRegex.test(value)) {
          setErrors({
            ...errors,
            email: "Email is not valid",
          });
          return;
        }
      }
    }

    setLoginLoading(true);

    axios
      .post(`${api}/auth/login`, formData)
      .then((res) => {
        console.log(res.data.data);
        // rest of the code to post the authenticate the user
        if (keepLoggedin) {
          localStorage.setItem("user", JSON.stringify(res.data.data.user));
        }
        navigate();
      })
      .catch((err) => {
        console.log(err.response.data.error);
        setLoginLoading(false);
        setLoginError(err.response.data.error);
      });
  };
  return (
    <div className="h-screen overflow-y-hidden">
      <div className="flex">
        <div
          className="w-1/3 hidden md:block h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${loginImg})`,
            backgroundSize: "cover",
            backgroundPosition: "20% 50%",
          }}
        >
          <div className="flex">
            <Link onClick={() => navigate(-1)}>
              <FaArrowAltCircleLeft
                className="arrow-icon mt-8 ml-8 cursor-pointer"
                fill="white"
                size={45}
              />
            </Link>
            <img
              src={logo}
              alt="Logo Icon"
              className="px-2 ml-8 mt-8 w-40 hover:cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
        </div>
        <div className="md:w-[65%] w-full py-6 px-8 h-screen overflow-y-auto">
          <form className="mt-3" onSubmit={handleSubmit}>
            <div className="py-6 ">
              <h1 className="text-[#131B22] text-lg font-bold">
                Welcome Back!
              </h1>

              <p className="text-[#586675] text-sm font-normal mt-1">
                Kindly input your details below to log in to your account
              </p>
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-[#212D3A] text-sm mb-1 font-medium "
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                onChange={handleChange}
                id="email"
                name="email"
                value={formData.email}
                className="border-2 p-4 w-full rounded-md"
              />
              <span className="text-[#E33629] m-4">{errors.email}</span>
            </div>
            <label
              htmlFor="password"
              className="block text-[#212D3A] text-sm mb-1 font-medium mt-8"
            >
              Password
            </label>
            <div className="flex  justify-between">
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                name="password"
                minLength={8}
                value={formData.password}
                className="border-2 p-4 w-full rounded-md"
                onChange={handleChange}
                ref={passwordRef}
              />
              <button type="button" className="-ml-16 pr-4">
                <img
                  src={togglePassword}
                  alt="toggle password "
                  className="w-6"
                  onClick={() => {
                    passwordRef.current.type =
                      passwordRef.current.type === "text" ? "password" : "text";
                  }}
                />
              </button>
            </div>
            <span className="text-[#E33629] m-4">{errors.password}</span>

            <div className="flex justify-between pb-4">
              <div className="mt-8">
                <input
                  type="checkbox"
                  className="rounded-md text-[#412234]"
                  id="checkbox"
                  value={keepLoggedin}
                  onChange={() => {
                    setKeepLoggedin(!keepLoggedin);
                  }}
                />
                <label htmlFor="checkbox" className="pl-3">
                  Keep me Logged in
                </label>
              </div>
              <p className="font-semibold">Forgot Password?</p>
            </div>
            <div className="pb-4 text-center text-lg text-[#E33629]">
              {loginError}
            </div>

            <button
              type="submit"
              className={`mb-8 w-full py-4 bg-[#412234] text-white font-semibold rounded-lg shadow-md text-center ${
                isLoginLoading ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              disabled={isLoginLoading}
            >
              {isLoginLoading ? "Loading..." : "Log into Account"}
            </button>

            <div className="pb-2">
              <button
                type="button"
                className="flex justify-center border-2 border-button-border w-full bg-white text-[#412234] font-semibold rounded-lg mb-8 px-8 py-4"
              >
                <img src={googleImg} alt="google icon" className="w-[24px] " />
                <p className="ml-2">Continue with Google</p>
              </button>
            </div>
          </form>

          <div className="flex justify-center flex-col items-center">
            <p>
              Don&apos;t have an account?
              <Link to="/create-account" className="ml-2 font-semibold">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
