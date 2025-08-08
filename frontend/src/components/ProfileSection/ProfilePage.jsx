import React from "react";


const UserProfile = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 p-6">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={user.profilePic || "https://api.dicebear.com/7.x/initials/svg?seed=" + user.username}
            alt="Profile"
            className="rounded-full w-24 h-24 object-cover"
          />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">{user.fullName}</h2>
          <p className="text-sm text-gray-500">@{user.username}</p>

          <div className="mt-2">
            <span className="badge badge-primary">{user.category}</span>
          </div>

          <div className="mt-4 w-full">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Email</span>
              <span className="text-sm text-gray-600">{user.email}</span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Rating</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-yellow-400 ${i < (user.star || 1) ? "opacity-100" : "opacity-30"}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            {user.review && user.review.length > 0 && (
              <div className="mt-4 text-left">
                <h3 className="font-semibold mb-1">Reviews</h3>
                <ul className="list-disc list-inside text-sm">
                  {user.review.slice(0, 3).map((rev, idx) => (
                    <li key={idx}>{rev?.message || "Review content"}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="card-actions mt-6">
            <button className="btn btn-outline btn-primary text-sm">
              Forgot your password? Reset the password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
