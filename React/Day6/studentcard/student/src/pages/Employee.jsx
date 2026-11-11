

const Employee = () => {

  const employeeID = "EMP101"
  const Name = "Gowtham"
  const Designation = "React Developer"
  const Salary = 35000
  const company = "Google"




  return (
    <>


      <div className="bg-red-500 p-6 m-10">

        <h1 className="text-4xl font-bold">Employee Details</h1>

          <h2  className="my-3 font-bold">Employee Name: {Name}</h2>
          <h2  className="my-3 font-bold">Employee ID: {employeeID}</h2>
          <h2  className="my-3 font-bold">Designation: {Designation}</h2>
          <h2  className="my-3 font-bold">Salary  : {Salary}</h2>
          <h2  className="my-3 font-bold">Company : {company}</h2>

      </div>


    </>
  )
}

export default Employee