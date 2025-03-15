import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      <div className="flex flex-col items-center">
        
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-violet-400 mb-4">Volunteer Hub</h1>

        
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <h2 className="text-lg font-semibold text-center text-gray-500 tracking-wider mb-4">Create a new account</h2>

          <div className="flex space-x-2">
            <input type="text" placeholder="First Name" className="w-1/2 p-2 border rounded-md" />
            <input type="text" placeholder="Last Name" className="w-1/2 p-2 border rounded-md" />
          </div>

          <input type="email" placeholder="Email " className="w-full p-2 border rounded-md my-3" />
          <input type="password" placeholder="New Password" className="w-full p-2 border rounded-md my-3" />

          <div className="my-3">
  <label className="block text-sm font-medium text-gray-700 mb-1">Gender:</label>
  <div className="flex items-center space-x-4">
    
    <label className="flex items-center justify-center w-32 p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100">
      <input type="radio" name="gender" value="male" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
      <span className="ml-2 text-gray-700">Male</span>
    </label>

   
    <label className="flex items-center justify-center w-32 p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100">
      <input type="radio" name="gender" value="female" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
      <span className="ml-2 text-gray-700">Female</span>
    </label>
  </div>
</div>


          <button className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Sign Up
          </button>

          <div className="text-center mt-3">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/" className="text-purple-600">Log in</Link>
            </p>
          </div>
        </div>
      </div>

      
      <Footer />
    </div>
  );
}

export default Signup;
