import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <main className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="text-lg font-semibold">Please log in to view your profile.</div>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold mb-4">
          {user.name?.charAt(0)?.toUpperCase() || user.email?.charAt(0)?.toUpperCase() || "U"}
        </div>
        <div className="text-2xl font-bold mb-2">{user.name || "No Name"}</div>
        <div className="text-gray-500 mb-4">{user.email}</div>
        <button
          onClick={logout}
          className="px-5 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition font-semibold"
        >
          Logout
        </button>
      </div>
    </main>
  );
};

export default Profile;
