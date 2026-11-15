
import { useState, useEffect } from "react"

const Practice = () => {

    const [isOn, setIsOn] = useState(false)
    const [activeLight, setActiveLight] = useState(0)

    useEffect(() => {

        if (!isOn) {
            setActiveLight(0)
            return
        }

        const timer = setInterval(() => {

            setActiveLight((prev) => (prev + 1) % 3)

        }, 5000)

        return () => clearInterval(timer)

    }, [isOn])


    const handleClick = () => {
        setIsOn(!isOn)
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center">

                
                <div className="bg-black border-6 border-gray-500 h-120 w-50 rounded-4xl m-6 flex flex-col justify-center items-center gap-10">

                    
                    <div className={`p-5 rounded-full w-30 h-30 text-xl font-bold flex justify-center items-center
                        ${isOn && activeLight === 0 ? "bg-red-500" : "bg-gray-700 text-white"}`}>
                        STOP
                    </div>

                    
                    <div className={`p-5 rounded-full w-30 h-30 text-xl font-bold flex justify-center items-center
                        ${isOn && activeLight === 1 ? "bg-orange-500" : "bg-gray-700 text-white"}`}>
                        READY
                    </div>

                    
                    <div className={`p-5 rounded-full w-30 h-30 text-xl font-bold flex justify-center items-center
                        ${isOn && activeLight === 2 ? "bg-green-500" : "bg-gray-700 text-white"}`}>
                        GO
                    </div>

                </div>

                <div className="bg-gray-600 h-50 w-10 relative bottom-6 border-4 border-black border-t-gray-500"></div>

                <button
                    onClick={handleClick}
                    className={` font-bold px-6 py-2 rounded-xl mt-5 relative left-70 bottom-130 text-7xl ${isOn ?"bg-red-600 text-black" : "bg-green-600 text-black"}`}
                >
                    {isOn ? "OFF" : "ON"}
                </button>

            </div>
        </>
    )
}

export default Practice
