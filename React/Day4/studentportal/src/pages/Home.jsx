import Banner from "../components/Banner"



const Home = () => {
  return (
    <>

     <Banner />

        <div>

            <div className="bg-amber-400 m-3 p-4 text-2xl text-center">

                <h1 className="font-sans font-bold text-3xl py-4">WELCOME TO STUDENT PORTAL</h1>

                <p className="font-semibold font-sans">A student portal is an online platform used by educational institutions to
                give students a single place to access academic, financial, and administrative services</p>

            </div>

        </div>
    
    </>
  )
}

export default Home