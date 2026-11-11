
const Assignments = () => {


   const assignments = [
    {
      id: 1,
      title: "React JS Project",
      subject: "Web Development",
      description: "Create a student dashboard using React JS and Tailwind CSS.",
      dueDate: "15 November 2026",
      status: "Pending",
    },
    {
      id: 2,
      title: "Database Management",
      subject: "DBMS",
      description: "Write SQL queries for student database management.",
      dueDate: "18 November 2026",
      status: "Submitted",
    },
    {
      id: 3,
      title: "Python Programming",
      subject: "Python",
      description: "Develop a simple calculator using Python functions.",
      dueDate: "20 November 2026",
      status: "Pending",
    },
    {
      id: 4,
      title: "Software Engineering",
      subject: "Software Engineering",
      description: "Prepare a report explaining the Agile development model.",
      dueDate: "25 November 2026",
      status: "Submitted",
    },
  ];





  return (
    <>

         <div className="min-h-screen bg-gray-100 p-6">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          My Assignments
        </h1>
        <p className="mt-2 text-gray-500">
          Manage and track your academic assignments.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        {assignments.map((item) => (
          <div
            key={item.id}
            className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                {item.subject}
              </span>

              <span
                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  item.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {item.status}
              </span>
            </div>

            <h2 className="mt-4 text-xl font-bold text-gray-800">
              {item.title}
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              {item.description}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Due: {item.dueDate}
              </p>

              <button
                disabled={item.status === "Submitted"}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                {item.status === "Pending" ? "Submit" : "Completed"}
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>       
    
    </>
  )
}

export default Assignments