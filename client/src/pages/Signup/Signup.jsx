import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import { useState } from "react";

const Signup = () => {
  const [show, setShow] = useState(true);
  const [showConfiirm, setShowConfirm] = useState(true);
  const {
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
  };
  return (
    <div className=" h-screen flex flex-col justify-center items-center gap-3 font-popins bg-[#E63946]">
      <div className=" bg-[#007f4e] shadow-md rounded-lg p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 p-9  max-sm:w-11/12 mx-auto"
        >
          <h4 className="text-center text-white">Sign Up</h4>
          <p className="lg:w-4/5 mx-auto lg:text-center text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
            rerum?
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
          <label className="">
            <input
              {...register("profile", { required: true })}
              type="file"
              className="file-input w-full "
            />
          </label>
          {errors.profile && (
            <span className="text-error">This field is required!</span>
          )}
          <label className="input input-bordered flex items-center gap-2">
            <MdEmail />
            <input
              {...register("emaiil", { required: true })}
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
        </form>
        <div>
          <h2>Hello</h2>
        </div>
      </div>
    </div>
  );
};

export default Signup;
