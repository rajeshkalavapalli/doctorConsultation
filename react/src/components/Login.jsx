import { useState } from "react";

export default function Login() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const loginHandler = async (event) => {
        event.preventDefault();

        try {
            if (!email.includes('@')) {
                alert('Invalid email. Please login with correct email');
                return;
            }

            if (password.length < 6) {
                alert('Invalid password. Try with correct password');
                return;
            }

            const login = await fetch("http://localhost:5000/api/user/login", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const response = await login.json();
            console.log(response);

        } catch (error) {
            console.log("Something went wrong. Please try again.", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

                <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                    If you're already registered, please login
                </h1>

                <form onSubmit={loginHandler} className="space-y-5">

                    <div>
                        <label htmlFor="email" className="block text-gray-600 mb-1">
                            Email:
                        </label>
                        <input
                            value={email}
                            type="text"
                            placeholder="Please enter email"
                            id="email"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            onChange={(e) => setemail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="login-password" className="block text-gray-600 mb-1">
                            Password:
                        </label>
                        <input
                            value={password}
                            type="password"
                            id="login-password"
                            placeholder="Enter password"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Login
                    </button>

                </form>

            </div>
        </div>
    );
}
