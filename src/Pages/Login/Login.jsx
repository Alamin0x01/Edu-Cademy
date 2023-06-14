import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SectionTitle from "../Shared/SectionTitle";
import { Helmet } from "react-helmet-async";
import reg from "../../../src/assets/register-icon.json";
import Lottie from "lottie-react";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
    const email = data.email;
    const password = data.password;
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Login | Edu-Cademy</title>
      </Helmet>
      <SectionTitle title="Login" />
      <div className="flex gap-40 mb-8 ml-48">
        <div className="w-96">
          <Lottie animationData={reg} loop={true} />
        </div>
        <div>
          <div className=" flex-col ">
            <div className="card shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Your email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="flex items-center">
                    <input
                      {...register("password", { required: true })}
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      className="input input-bordered"
                    />
                    <button
                      type="button"
                      className=" text-xl text-info absolute ml-44"
                      onClick={togglePasswordVisibility}
                    >
                      {!showPassword ? (
                        <FaEye></FaEye>
                      ) : (
                        <FaEyeSlash></FaEyeSlash>
                      )}
                    </button>
                  </div>
                  <label className="label">
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}
                  </label>
                </div>
                <div className="form-control ">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-info "
                  />
                </div>
              </form>
              <p className=" text-center">
                New Here?
                <Link to="/register" className="text-cyan-400">
                  Create an account
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
