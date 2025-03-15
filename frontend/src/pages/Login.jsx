import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      <div className="flex flex-col items-center">
        
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-violet-400 mb-4">Welcome to</h1>
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-violet-400 mb-4">Volunteer Hub</h1>

        
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <h2 className="text-lg font-semibold text-center text-gray-500 tracking-wider mb-4">Log in to Volunteer Hub</h2>

          <input type="email" placeholder="Email" className="w-full p-3 border rounded-md mb-3" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-md mb-3" />

          <button className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Log in
          </button>

          <div className="text-center mt-3">
            <Link to="#" className="text-blue-600 text-sm text-center text-gray-500 tracking-wider mb-4">Forgotten password?</Link>
          </div>

          <hr className="my-3" />

          <div className="text-center">
            <Link
              to="/signup"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Create New Account
            </Link>
          </div>
        </div>
      </div>

      
      <Footer />
    </div>
  );
}

export default Login;
