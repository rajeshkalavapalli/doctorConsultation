import { useState, } from "react";


export default function Registration() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setpassword] = useState("")

    const handleform =async  (event) => {
        event.preventDefault();

        if (name.trim() === "") {
            alert('please enter valaid name')
            return
        }

        if (!email.includes("@")) {
            alert('please enter valaid email')
            return

        }
        if (phone.length !== 10) {
            alert('please enter valaid mobile number ')
            return

        }

        if (password.length < 7) {
            alert('please enter valaid password')
            return

        }

        const userData = {name,email,phone,password}

        
        try{
            const response = await fetch("http://localhost:5000/api/user/register",{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(userData)
        })
            
            const data = await response.json();
            console.log(data)

        }catch(error){
            alert("some thing went wrong try again"),
            console.log(`error:${error}`)
        }

    }






return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

            <h3 className="text-xl font-semibold text-gray-700 mb-4">
                If you're a new user, please register
            </h3>

            <form className="space-y-4" onSubmit={handleform}>

                <div>
                    <label htmlFor="Name" className="block text-gray-600 mb-1">Name:</label>
                    <input
                        type="text"
                        id="Name"
                        placeholder="Please enter your name"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="emailid" className="block text-gray-600 mb-1">Email:</label>
                    <input
                        type="text"
                        id="emailid"
                        value={email}
                        placeholder="Please enter your email"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                        onChange={(e) => setemail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-gray-600 mb-1">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        placeholder="Please enter your phone number"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-gray-600 mb-1">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder="Please enter password"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                        onChange={(e) => setpassword(e.target.value)}
                    />
                </div>

                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
                    Submit
                </button>

            </form>
        </div>
    </div>
);
}
