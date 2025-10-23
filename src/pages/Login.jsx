import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate()
  const [loginForm, setLoginForm] = useState({
    emailId: "",
    password: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log("yes");
    
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/signin",
        loginForm,
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(data));
      navigate("/")
      
    } catch (err) {
      console.log(err);
      
      setError(err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLoginSubmit}>
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    value={loginForm.emailId}
                    name="emailId"
                    className="input"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    name="password"
                    placeholder="Password"
                    value={loginForm.password}
                    onChange={handleChange}
                  />
                  <p className="text-red-500">{error}</p>
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
