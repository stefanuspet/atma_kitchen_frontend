import React, { useEffect, useState } from "react";
import HomePageLayout from "../Layout/HomePageLayout";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { login } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoad(true);
    login(data)
      .then((res) => {
        setIsLoad(false);
        localStorage.setItem("token", res.token);
        localStorage.setItem("abilities", res.abilities);
        if (res.abilities === "ADMIN") {
          navigate("/dashboard-admin");
        } else if (res.abilities === "MO") {
          navigate("/dashboard-manager");
        } else if (res.abilities === "OWNER") {
          navigate("/dashboard-owner");
        } else if (res.abilities === "Customer") {
          navigate("/home");
        }
        console.log(res.token, "Login sukses");
        console.log(res.abilities, "abilities");
      })
      .catch((err) => {
        setIsLoad(false);
        console.log(err);
        toast.error("Login failed");
      });
    console.log(e);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const abilities = localStorage.getItem("abilities");
      if (abilities === "ADMIN") {
        navigate("/dashboard-admin");
      } else if (abilities === "MO") {
        navigate("/dashboard-manager");
      } else if (abilities === "OWNER") {
        navigate("/dashboard-owner");
      } else if (abilities === "Customer") {
        navigate("/home");
      }
    }
  }, []);
  return (
    <HomePageLayout>
      <div className="flex justify-center items-center h-screen w-full">
        <div className="bg-white rounded-3xl p-8 md:w-[40rem] mt-20 bg-opacity-80 w-full">
          <h1 className="text-[#AD773D] font-bold font-serif text-center mb-0.5 text-3xl ">
            LOGIN
          </h1>
          <hr style={{ borderWidth: "1.5px" }} />
          <p
            className="text-[#171832] font-serif text-center mt-1 mb-8"
            style={{ fontSize: "14px" }}
          >
            WELCOME BACK!
          </p>
          <form onSubmit={handleLogin}>
            <div className="flex justify-center mt-5">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                // value={email}
                onChange={handleChange}
                className="bg-[#AD773D] placeholder-slate-950 text-black py-2 px-4 rounded-full w-full md:w-[23rem] flex justify-between items-center"
              />
            </div>
            <div className="flex justify-center mt-5 items-center relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                // value={password}
                onChange={handleChange}
                className="bg-[#AD773D] placeholder-slate-950 text-black py-2 px-4 rounded-full w-full md:w-[23rem] pr-12" // Tambahkan pr-12 untuk memberikan ruang di sebelah kanan input untuk ikon mata
              />
              <div className="absolute right-32 top-1/2 transform -translate-y-1/2">
                {showPassword ? (
                  <FaEyeSlash onClick={togglePasswordVisibility} />
                ) : (
                  <FaEye onClick={togglePasswordVisibility} />
                )}
              </div>
            </div>

            <div className="flex justify-center mt-5">
              <button
                type="submit"
                className="bg-[#011145] hover:bg-[#01071b] text-[#AD773D] py-2 px-4 rounded-full w-96 h-14 "
              >
                {isLoad ? "Loading..." : "Login"}
              </button>
            </div>
            <div className="flex justify-center mt-5">
              <p
                className="text-[#171832] font-serif text-center mt-1 mb-8"
                style={{ fontSize: "14px" }}
              >
                Not have an account ?{" "}
                <Link
                  to="/register"
                  className="text-[#AD773D] font-serif text-center mt-1 mb-8 hover:teks-[#AD773D]"
                  style={{ fontSize: "14px" }}
                >
                  Register
                </Link>
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to="/forgotpassword"
                className="text-[#AD773D] font-serif text-right mt-1 mb-8 hover:teks-[#AD773D]"
                style={{ fontSize: "14px" }}
              >
                Lupa Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </HomePageLayout>
  );
};

export default LoginPage;
