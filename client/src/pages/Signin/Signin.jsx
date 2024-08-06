import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Signin = () => {
  const { loading, user, googleLogin, loginUser } = useAuth();
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Welcome back",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });

        // get access token
        // const userEmail = user.email;
        // const email = { userEmail };
        // axios
        //   .post("http://localhost:3000/jwt", email, { withCredentials: true })
        //   .then((res) => {
        //     console.log(res.data);
        //     if (res.data.success) {
        //
        //     }
        //   });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
      });
  };

  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Welcome back ${user.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
        // ===============get access token
        // const email = user.email;
        // axios
        //   .post("http://localhost:3000/jwt", email, { withCredentials: true })
        //   .then((res) => {
        //     console.log(res.data);
        //   });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
      });
  };
  // force user to go hhome when try to login
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);
  if (user || loading) {
    return;
  }
  // show and hide password
  const handleShowPassword = () => {
    setShow(!show);
  };
  return (
    <div className=" h-screen flex flex-col justify-center items-center gap-3 font-popins bg-[#E63946]">
      <div className="bg-[#007f4e] rounded-lg shadow-md  p-9 max-sm:w-11/12 mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2   "
        >
          <h4 className="text-center text-white text-2xl">Sign In</h4>
          <p className="lg:w-4/5 mx-auto lg:text-center text-white">
            Welcome Back
          </p>

          <label className="input input-bordered flex items-center gap-2">
            <MdEmail />
            <input
              {...register("email", { required: true })}
              type="text"
              className="grow"
              placeholder="Email"
            />
          </label>
          {errors.email && (
            <span className="text-error">This field is required!</span>
          )}
          <label className="input input-bordered flex items-center gap-2">
            <RiLockPasswordFill />
            <input
              {...register("password", { required: true })}
              type={show ? "password" : "text"}
              className="grow"
              placeholder="Password"
            />
            {show ? (
              <FaEye onClick={handleShowPassword} className="cursor-pointer" />
            ) : (
              <FaEyeSlash
                onClick={handleShowPassword}
                className="cursor-pointer"
              />
            )}
          </label>
          {errors.password && (
            <span className="text-error">This field is required!</span>
          )}
          <label htmlFor="">
            <button className="btn btn-secondary w-full bg-[#E63946] hover:bg-[#007f4e]">
              Sign In
            </button>
          </label>
          <div className="flex gap-2 text-white">
            <span>Dont have an account?</span>
            <Link to={"/signup"} className="hover:underline font-semibold">
              Sign up
            </Link>
          </div>
        </form>
        <div className="divider text-white">OR</div>
        <div className="py-2 w-full font-popins">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline  w-full text-white font-semibold"
          >
            <FcGoogle />
            Continue with google
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Signin;
