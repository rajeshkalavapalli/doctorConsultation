import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-sm text-center">

        <h1 className="text-2xl font-semibold mb-6 text-gray-700">
          Welcome to Medexa
        </h1>

        <div className="flex flex-col gap-4">
          
          <Link to="/login">
            <button
              className="w-full py-3 bg-green-600 text-white rounded-xl text-lg font-medium 
                         hover:bg-green-700 transition-all duration-200"
            >
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button
              className="w-full py-3 bg-blue-600 text-white rounded-xl text-lg font-medium 
                         hover:bg-blue-700 transition-all duration-200"
            >
              Signup
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}
