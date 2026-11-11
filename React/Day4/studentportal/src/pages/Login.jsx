import { useNavigate } from "react-router-dom"

const Login = () => {

    const navigate = useNavigate()

        const handlePage = (e)=>{
            e.preventDefault();
            navigate("/Home")
        }




  return (
    <>
    
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white w-full max-w-md mx-3 p-8 rounded-2xl shadow-2xl border border-gray-200">

                <div className="text-center mb-8 ">

                <h1 className="text-blue-500 text-4xl font-bold mb-3">LOGIN HERE</h1>

                <p className="text-gray-600 text-lg font-medium">Welcome! Please enter your details.</p>

            </div>

            <div className="bg-white flex w-100 items-center justify-center font-bold text-2xl border-4 ">

                <form action="" className="flex flex-col gap-5 mt-10">

                    <input type="text" name="" id="" placeholder="Enter your Name" className="w-full border-2 border-black rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-5 focus:ring-blue-100"/>

                    <input type="email" name="" id="" placeholder="Enter your Email"className="w-full border-2 border-black rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-5 focus:ring-blue-100"/>

                    <input type="password" name="" id="" placeholder="Enter your Password"className="w-full border-2 border-black rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-5 focus:ring-blue-100"/>

                    <button onClick={handlePage} className="w-full bg-blue-500 text-white font-bold text-lg py-3 rounded-lg hover:bg-blue-700 transition duration-300 my-8">LOGIN</button>

                </form>

            </div>


            </div>

            
            
        </div>

    </>
  )
}

export default Login