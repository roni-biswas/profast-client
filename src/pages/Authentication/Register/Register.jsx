import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useAuth();

  const onSubmit = (data) => {
    const { email, password } = data;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err.code);
      });
  };

  return (
    <div className="card bg-base-100 w-full md:max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-2xl font-bold">Create an Account Now</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
          {/* Name Field */}
          <label className="label">Fullname</label>
          <input
            type="text"
            {...register("fullName", { required: true })}
            className="input"
            placeholder="Fullname"
          />
          {errors.fullName?.type === "required" && (
            <p className="text-red-500">Full Name is Required</p>
          )}
          {/* Email Field */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is Required</p>
          )}
          {/* Password Field */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                message:
                  "Password must include uppercase, lowercase, and a digit",
              },
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
