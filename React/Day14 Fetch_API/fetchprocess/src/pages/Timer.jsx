import { useEffect, useState } from "react"

const Timer = () => {

  const [seconds, setSeconds] = useState(0)

  const [isRunning, setIsRunning] = useState(false)

  const handleTimer = () => {

    setIsRunning((p) => !p)

  }

  useEffect(() => {

    if (isRunning) {

      const timer = setInterval(() => {

        setSeconds((p) => p + 1)

      }, 1000)

      return () => {

        clearInterval(timer)

      }

    }

  }, [isRunning])

  return (
    <>

      <div>

        
        <h1 className={`flex justify-center text-3xl m-10 font-bold ${isRunning ? "text-green-500" : "text-red-500"}`}>Timer : {seconds}</h1>

        

        <div className="flex justify-center">

          <button onClick={handleTimer}
            className={`px-5 py-1 rounded-xl font-bold border-3 ${isRunning ? "bg-red-500" : "bg-green-500"}`}>{isRunning ? "Stop" : "Start"}</button>

        </div>




      </div>



    </>
  )
}

export default Timer