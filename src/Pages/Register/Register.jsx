import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&_-]{8,}$/;

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, event) => {
    console.log(data);
    event.preventDefault();
    setSuccess("");
    setError("");

    if (!data.phone.startsWith("01")) {
      setError("Start with 01 (BD phone number only allowed)");
      return;
    }
    if (data.phone.length !== 11) {
      setError("Give 11 digit Bangladeshi mobile number");
      return;
    }
    if (!/^\d+$/.test(data.phone)) {
      setError("Only digit allowed!");
      return;
    }

    if (!strongPasswordRegex.test(data.password)) {
      setError(
        "Password should be 8 characters long and include at least one digit, one uppercase, one lowercase, one special character!"
      );
      return;
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">House Hunter</h1>
            <h1 className="text-lg text-gray-500 font-bold">
              Register and get house updates!
            </h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <select
                  {...register("role", { required: true })}
                  className="select select-bordered w-full text-[15px] font-medium"
                >
                  <option disabled selected>
                    Choose a role
                  </option>
                  <option>House Owner</option>
                  <option>House Renter</option>
                </select>
                {/* {errors.role && <p className='text-red-400 text-[15px]'>Enter Your Role!</p>} */}
              </div>
              <div className="form-control">
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  {...register("phone", { required: true })}
                  type="number"
                  placeholder="Phone No [BD-Only]"
                  className="input input-bordered w-full focus:outline-none"
                />
                {errors.phone && (
                  <p className="text-red-400 text-[15px]">Enter Your Phone!</p>
                )}
              </div>

              <div className="form-control">
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {errors.password && (
                  <p className="text-red-400 text-[15px]">
                    Enter Your Password!
                  </p>
                )}
                {error && (
                  <p className="text-red-400 text-justify text-[15px] w-[300px]">
                    {error}
                  </p>
                )}
                {success && (
                  <p className="text-green-500 text-[15px] py-3">
                    Registration Complete You can{" "}
                    <Link
                      to="/login"
                      className=" text-blue-500 underline font-medium"
                    >
                      Login Here
                    </Link>
                  </p>
                )}
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="mt-2 text-[15px]">
                Already have an account ? Please...{" "}
                <Link to="/login" className="underline text-blue-500">
                  Login Now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
