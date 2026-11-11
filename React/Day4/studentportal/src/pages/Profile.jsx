
const Profile = () => {

  const student = {
    name: "Gowtham Krishnan R",
    email: "krish@gmail.com",
    phone: "+91 89397 90907",
    department: "Computer Science",
    course: "B.Sc Computer Science",
    year: "3rd Year",
    college: "Guru Nanak College",
    studentId: "GNC2026CS001",
  };


  return (
    <>
    
      <div className="min-h-screen bg-gray-100 p-6">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          My Profile
        </h1>
        <p className="mt-2 text-gray-500">
          View and manage your personal information.
        </p>
      </div>

      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg">

        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-white text-4xl font-bold text-blue-600">
            {student.name.charAt(0)}
          </div>

          <h2 className="mt-4 text-2xl font-bold">
            {student.name}
          </h2>

          <p className="mt-1 text-blue-100">
            {student.course}
          </p>

          <p className="mt-1 text-sm text-blue-100">
            Student ID: {student.studentId}
          </p>
        </div>

        {/* Personal Information */}
        <div className="p-8">

          <h3 className="mb-5 text-xl font-bold text-gray-800">
            Personal Information
          </h3>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="mt-1 font-semibold text-gray-800">
                {student.name}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="mt-1 font-semibold text-gray-800">
                {student.email}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="mt-1 font-semibold text-gray-800">
                {student.phone}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Department</p>
              <p className="mt-1 font-semibold text-gray-800">
                {student.department}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Academic Year</p>
              <p className="mt-1 font-semibold text-gray-800">
                {student.year}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">College</p>
              <p className="mt-1 font-semibold text-gray-800">
                {student.college}
              </p>
            </div>

          </div>

          <div className="mt-8 border-t pt-6">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Edit Profile
            </button>
          </div>

        </div>
      </div>
    </div>

    </>
  )
}

export default Profile