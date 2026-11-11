


const Courses = () => {

  const frontendCourses = [
    { name: "HTML", description: "Learn webpage structure", icon: "🌐", level: "Beginner" },
    { name: "CSS", description: "Style beautiful websites", icon: "🎨", level: "Beginner" },
    { name: "Bootstrap", description: "Build responsive layouts", icon: "🅱️", level: "Beginner" },
    { name: "Tailwind CSS", description: "Master utility-first styling", icon: "💨", level: "Intermediate" },
    { name: "JavaScript", description: "Learn programming for the web", icon: "⚡", level: "Intermediate" },
    { name: "React JS", description: "Build interactive user interfaces", icon: "⚛️", level: "Intermediate" },
  ];

  const backendCourses = [
    { name: "Node.js", description: "JavaScript runtime for backend development", icon: "🟢", level: "Intermediate" },
    { name: "Express.js", description: "Create backend APIs and services", icon: "🚀", level: "Intermediate" },
    { name: "MongoDB", description: "Learn NoSQL database management", icon: "🍃", level: "Beginner" },
    { name: "SQL", description: "Manage and query relational databases", icon: "🗄️", level: "Beginner" },
  ];



  const CourseCard = ({ course }) => (
    <div className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-center justify-between">
        <span className="text-3xl">{course.icon}</span>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          {course.level}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold text-gray-800 group-hover:text-blue-600">
        {course.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {course.description}
      </p>

      <div className="mt-5 border-t border-gray-100 pt-4">
        <span className="text-sm font-semibold text-blue-600">
          Course Material →
        </span>
      </div>

    </div>
  );

  return (
    <>
    
          <div className="min-h-screen bg-slate-100 p-5 md:p-8">

      {/* Header */}
      <div className="mb-10 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 p-8 text-white shadow-lg">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
          Student Learning Portal
        </p>

        <h1 className="mt-3 text-3xl font-bold md:text-4xl">
          Explore Our Courses
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100 md:text-base">
          Improve your technical skills with our frontend and backend
          development courses. Learn, practice and build your future.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-lg bg-white/20 px-4 py-2 text-sm">
            💻 Frontend Development
          </span>

          <span className="rounded-lg bg-white/20 px-4 py-2 text-sm">
            ⚙️ Backend Development
          </span>
        </div>

      </div>

      {/* Frontend Section */}
      <section className="mb-12">

        <div className="mb-6 flex items-center gap-3">
          <div className="h-10 w-1.5 rounded-full bg-blue-600"></div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Frontend Development
            </h2>
            <p className="text-sm text-gray-500">
              Learn to design and develop beautiful websites.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {frontendCourses.map((course) => (
            <CourseCard key={course.name} course={course} />
          ))}
        </div>

      </section>

      {/* Backend Section */}
      <section>

        <div className="mb-6 flex items-center gap-3">
          <div className="h-10 w-1.5 rounded-full bg-purple-600"></div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Backend Development
            </h2>
            <p className="text-sm text-gray-500">
              Learn server-side programming and database management.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {backendCourses.map((course) => (
            <CourseCard key={course.name} course={course} />
          ))}
        </div>

      </section>

      {/* Footer */}
      <div className="mt-12 rounded-xl bg-white p-6 text-center shadow-sm">
        <h2 className="text-xl font-bold text-gray-800">
          Keep Learning, Keep Growing! 🚀
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Every skill you learn brings you one step closer to your goals.
        </p>
      </div>

    </div>
       
    </>
  )
}

export default Courses