


const StudentList = () => {


    const details = ["Arun", "Swetha", "Gowtham", "Ananya", "Victor"];


    return (
        <>

            <div className="bg-orange-600 m-10 p-3">

                <h1 className="text-3xl font-bold">Student List</h1>

                <ul>
                    {details.map((student , index ) =>{
                        return (
                            <li key={index} className="p-4 font-bold">{student}</li>
                        )
                    })}
                </ul>


            </div>

        </>
    )
}


export default StudentList