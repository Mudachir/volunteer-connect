import { useState, useEffect } from "react";
import Header from "../components/Header";

function Profile() {
  
  const [user, setUser] = useState({
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    gender: "Male",
    date_of_birth: "1995-08-20",
    phone_number: "0123456789",
    profile_picture: "", 
    skills: ["Teaching", "Programming"],
    causes_supported: ["Education", "Healthcare"],
    volunteer_history: [
      { event_name: "Tree Plantation", date: "2024-03-10", hours: 5 },
      { event_name: "Blood Donation", date: "2024-01-15", hours: 3 },
    ],
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <Header />

      <div className="container mx-auto py-10">
        {/* Profile Card */}
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          {/* Profile Picture & Name */}
          <div className="flex items-center space-x-4">
            <img
              src={user.profile_picture || "https://via.placeholder.com/100"}
              alt="Profile"
              className="w-24 h-24 rounded-full border"
            />
            <div>
              <h2 className="text-2xl font-bold">{user.first_name} {user.last_name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-500">{user.gender}</p>
            </div>
          </div>

          {/* Profile Info */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Personal Details</h3>
            <p><strong>Date of Birth:</strong> {user.date_of_birth}</p>
            <p><strong>Phone Number:</strong> {user.phone_number}</p>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Skills</h3>
            <ul className="flex flex-wrap gap-2">
              {user.skills.map((skill, index) => (
                <li key={index} className="px-3 py-1 bg-blue-200 rounded-full">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Causes Supported */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Causes Supported</h3>
            <ul className="flex flex-wrap gap-2">
              {user.causes_supported.map((cause, index) => (
                <li key={index} className="px-3 py-1 bg-green-200 rounded-full">
                  {cause}
                </li>
              ))}
            </ul>
          </div>

          {/* Volunteer History */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Volunteer History</h3>
            <ul>
              {user.volunteer_history.map((event, index) => (
                <li key={index} className="border-b py-2">
                  <strong>{event.event_name}</strong> - {event.date} ({event.hours} hours)
                </li>
              ))}
            </ul>
          </div>

          {/* Edit Profile Button */}
          <div className="mt-6 text-right">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
