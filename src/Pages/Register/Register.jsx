import { useForm } from "react-hook-form";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import SectionTitle from "../Shared/SectionTitle";
import { Helmet } from "react-helmet-async";
import reg from "../../../src/assets/register-icon.json";
import Lottie from "lottie-react";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setError(null);
    reset();
    const name = data.name;
    const email = data.email;
    const photoUrl = data.photoUrl;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    if (password === confirmPassword) {
      createUser(email, password)
        .then((result) => {
          console.log(result);
          updateUserProfile(name, photoUrl).then(() => {
            const savedUser = { name, email, image: photoUrl, role: "student" };
            fetch("https://summer-camp-server-side-six.vercel.app/adduser", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(savedUser),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                navigate("/");
                Swal.fire({
                  icon: "success",
                  title: "Registration successful",
                  showConfirmButton: false,
                  timer: 1500,
                });
              });
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      setError("Password and Confirm Password must be same");
    }
  };
  return (
    <div>
      {" "}
      <SectionTitle title="Register" />
      <div className="flex gap-40 mb-8">
        <div className="w-1/2">
          <Lottie animationData={reg} loop={true} />
        </div>
        <div className="w-96 shadow-2xl bg-base-100">
          <Helmet>
            <title>Register | Edu-Cademy</title>
          </Helmet>

          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                {...register("photoUrl", { required: true })}
                type="text"
                placeholder="Your Photo Url"
                className="input input-bordered"
              />
            </div>
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
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                type="password"
                placeholder="********"
                className="input input-bordered"
              />
              <label className="label">
                {errors.exampleRequired && <span>This field is required</span>}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                {...register("confirmPassword", { required: true })}
                type="password"
                placeholder="********"
                className="input input-bordered"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {error && (
                  <p className="text-red-600">Password Does not match</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </label>
            </div>
            <div className="form-control ">
              <button className="btn btn-info">Register</button>
            </div>
          </form>
          <p className=" text-center ">
            Already Have an Account?
            <Link to="/login" className="text-teal-500">
              Login
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
