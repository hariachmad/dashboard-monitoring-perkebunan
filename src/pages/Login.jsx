import { useContext, useState } from "react";
import { AuthContext } from "../store/AuthContext";
import { useNavigate } from "react-router";

export const Login = () => {
  const { login, flashMessage, clearFlashMessage } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const response =await login(formData.username, formData.password);
    if(response){
        
        navigate('/main');
    }
  };

  return (
    <>
      <div class="flex justify-center items-center h-screen bg-gradient-to-r from-green-900  via-green-700 to-green-300">
        <div class="w-96 p-6 shadow-lg bg-white rounded-md">
        {flashMessage != null ? <>
            <div className="bg-blue-200  text-red-400 border px-4 py-3 rounded relative mb-4 text-center transition-all duration-200 ease-in-out">
                <h1>{flashMessage}</h1>
            </div>
        </> : <></>}
          <h1 class="text-3xl block text-center font-semibold">
            <i class="fa-solid fa-user"></i> Login
          </h1>
          <form onSubmit={handleSubmit}>
            <hr class="mt-3" />
            <div class="mt-3">
              <label for="username" class="block text-base mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Enter Username..."
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div class="mt-3">
              <label for="password" class="block text-base mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Enter Password..."
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div class="mt-3 flex justify-between items-center">
              <div>
                <input type="checkbox" />
                <label>Remember Me</label>
              </div>
              <div>
                <a href="#" class="text-indigo-800 font-semibold">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div class="mt-5">
              <button
                type="submit"
                class="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
              >
                <i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
