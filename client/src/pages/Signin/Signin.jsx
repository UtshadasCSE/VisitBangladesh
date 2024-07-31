import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Signin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className=" h-screen flex flex-col justify-center items-center gap-3 font-popins bg-[#E63946]">
      <div className="bg-[#007f4e] rounded-lg shadow-md  p-9 max-sm:w-11/12 mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2   "
        >
          <h4 className="text-center text-white">Sign Up</h4>
          <p className="lg:w-4/5 mx-auto lg:text-center text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
            rerum?
          </p>

          <label className="input input-bordered flex items-center gap-2">
            <MdEmail />
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <RiLockPasswordFill />
            <input type="text" className="grow" placeholder="Password" />
          </label>

          <label htmlFor="">
            <button className="btn btn-secondary w-full bg-[#E63946] hover:bg-[#007f4e]">
              Sign Up
            </button>
          </label>
        </form>
        <div>
          <button className="btn btn-outline btn-secondary">Secondary</button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
