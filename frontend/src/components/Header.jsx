import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
      
      <div className="text-2xl font-bold">
        <Link to="/home">Volunteer Connect</Link>
      </div>

      
      <nav>
        <ul className="flex space-x-6">
          <li><Link to="/home" className="hover:text-gray-200">Home</Link></li>
          <li><Link to="/profile" className="hover:text-gray-200 font-semibold">Upcoming Events</Link></li>
          <li><Link to="/profile" className="hover:text-gray-200 font-semibold">Profile</Link></li>
          <li><Link to="/logout" className="hover:text-gray-200">Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
