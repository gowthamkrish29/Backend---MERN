import profileImage from "../assets/Profile/student.png"



const Dashboard = () => {
  return (

    <>

      <div class="" main-container>

        <div class="profile-section"> 

          <div class="profile-image" >
            <img src={profileImage} alt="student-profile" className="w-50 my-30 mx-20" />
          </div>

          <div class="profile-details" className="text-center font-bold text-4xl text-blue-500">
            <h2>NAME : KRISH</h2>
            <h2>AGE  : 20</h2>
            <h2>COURSE : MERN - STACK</h2>
            <h2>EID : 0710</h2>
            <h2>DURATION :  5 MONTHS</h2>
          </div>

        </div>
      

      <div class="grid-container">

        <div class="grid-box">
          <h2>TECH-STACK</h2>
          <p>HTML, CSS, Bootstrap, Tailwindcss, JavaScript, React, SQL  </p>
        </div>

        <div class="grid-box">
          <h2>Course Details</h2>
          <p>70% Course completed</p>
        </div>

        <div class="grid-box">
          <h2>Communication Status</h2>
          <p>Mock Cleared</p>
        </div>

        <div class="grid-box">
          <h2>Aptitude Status</h2>
          <p>Ready for Mock</p>
        </div>


      </div>

      </div>



    </>
  )
}

export default Dashboard