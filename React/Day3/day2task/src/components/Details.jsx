import bannerImage1 from "../assets/banner/velociti-test.avif"



const Details = () => {
    return (

        <>

            <div className="m-10 flex flex-col justify-center items-center text-center gap-5">


                <h2 className="font-semibold text-7xl text-gray-900">UA ECHO SLIPSPEED™</h2>

                <p className="text-xl">A UA Echo's new colourway, Vintage Maroon, brings the vibe back
                    . HOVR™ cushioning moves you forward. Slipspeed™ keeps you ready for whatever’s next.</p>

                <button className="bg-black text-2xl mt-5 px-7 py-3 text-white rounded-xl justify-center text-center">Shop Now</button>


            </div>


            <div>
                <img src={bannerImage1} alt="" style={{ width: "100%", height: "auto" }} />
            </div>


            <div className="m-10 flex flex-col justify-center items-center text-center gap-5">

                <h2 className="font-semibold text-7xl text-gray-900">THE RECORD-BREAKING SUPERSHOE.</h2>


                <p className="text-xl">A proprietary underfoot system pairs a micro-tuned carbon fiber plate with supercritical HOVR+™ foam for the ultimate race-day ride. In simple terms? Fast.</p>

                <button className="bg-black text-2xl mt-5 px-7 py-3 text-white rounded-xl justify-center text-center">Shop Now</button>


            </div >

        </>




    )
}

export default Details