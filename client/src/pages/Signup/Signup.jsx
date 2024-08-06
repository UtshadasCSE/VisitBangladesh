import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaUser, FaEye, FaEyeSlash, FaCamera } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiLockPasswordFill } from "react-icons/ri";

import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import axios from "axios";

const Signup = () => {
  const { loading, user, createUser, updateUserInfo } = useAuth();
  const [show, setShow] = useState(true);
  const [showConfiirm, setShowConfirm] = useState(true);
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // show password function
  const handleShowPass = () => {
    setShow(!show);
  };
  const handleShowConfirmPass = () => {
    setShowConfirm(!showConfiirm);
  };

  // Watch password field to compare with confirm password
  const password = watch("password", "");

  // get data from form
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Your account successfully created!`,
          showConfirmButton: false,
          timer: 1500,
        });
        updateUserInfo(data.username, data.profile)
          .then(() => {
            // Profile updated!
          })
          .catch((error) => {
            console.log(error);
          });

        // ==========get access token
        // const email = user.email;
        // axios
        //   .post("http://localhost:3000/jwt", email, {
        //     withCredentials: true,
        //   })
        //   .then((res) => {
        //     if (res.data.success) {
        //       navigate("/");
        //     }
        //   });
        reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
        // ..
      });
  };
  // force user go to home when login and try to signup
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);
  if (user || loading) return;
  return (
    <div className=" h-full py-24 flex flex-col justify-center items-center gap-3 font-popins bg-[#E63946] ">
      <div className=" bg-[#007f4e] shadow-md rounded-lg p-4 max-sm:w-11/12 mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 "
        >
          <h4 className="text-center text-white text-2xl">Sign Up</h4>
          <p className="lg:w-4/5 mx-auto lg:text-center text-white">
            Join now and explore beauty of the bangladesh
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <FaUser />
            <input
              {...register("username", { required: true })}
              type="text"
              className="grow"
              placeholder="Name"
            />
          </label>
          {errors.username && (
            <span className="text-error">This field is required!</span>
          )}
          <label className="input input-bordered flex items-center gap-2">
            <FaCamera />
            <input
              {...register("profile", { required: true })}
              type="text"
              className="grow"
              placeholder="Your profile image URL"
            />
          </label>
          {errors.profile && (
            <span className="text-error">This field is required!</span>
          )}
          <label className="input input-bordered flex items-center gap-2">
            <MdEmail />
            <input
              {...register("email", { required: true })}
              type="email"
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
              <>
                <FaEye onClick={handleShowPass} className="cursor-pointer" />
              </>
            ) : (
              <>
                <FaEyeSlash
                  onClick={handleShowPass}
                  className="cursor-pointer"
                />
              </>
            )}
          </label>
          {errors.password && (
            <span className="text-error">This field is required!</span>
          )}
          <label className="input input-bordered flex items-center gap-2">
            <RiLockPasswordFill />
            <input
              {...register("cPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "The passwords do not match",
              })}
              type={showConfiirm ? "password" : "text"}
              className="grow"
              placeholder="Confirm password"
            />
            {show ? (
              <>
                <FaEye
                  onClick={handleShowConfirmPass}
                  className="cursor-pointer"
                />
              </>
            ) : (
              <>
                <FaEyeSlash
                  onClick={handleShowConfirmPass}
                  className="cursor-pointer"
                />
              </>
            )}
          </label>
          {errors.cPassword && (
            <span className="text-error">{errors.cPassword.message}</span>
          )}
          <label className="flex items-center gap-2 text-white">
            <input {...register("terms", { required: true })} type="checkbox" />
            <p>Accept our terms and conditions</p>
          </label>
          {errors.terms && (
            <span className="text-error">Please accept our T&C</span>
          )}
          <label htmlFor="">
            <button className="btn btn-secondary w-full bg-[#E63946] hover:bg-[#007f4e]">
              Sign Up
            </button>
          </label>
          <div className="flex gap-2 text-white">
            <span>Already have an account?</span>
            <Link to={"/signin"} className="hover:underline font-semibold">
              Sign in
            </Link>
          </div>
        </form>
        <div className="divider text-white">OR</div>
        <div className=" w-full font-popins">
          <button className="btn btn-outline  w-full text-white font-semibold">
            <FcGoogle />
            Continue with google
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Signup;
