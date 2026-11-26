import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {



  const aboutref = useRef(null)
  const courseref = useRef(null)
  const serviceref = useRef(null)
  const contactref = useRef(null)

  const handleClick = (datas) => {

    datas.current.scrollIntoView({
      behavior: "smooth",
      block: "start"

    })

  }

  const handleMove = ()=>{

    aboutref.current.scrollIntoView({

      behavior:"smooth"

    })

  }

  return (
    <>

      <div className='p-2 text-white'>
        <nav className='flex justify-between p-5 bg-teal-600 text-xl items-center fixed w-screen'>
          <div className='font-bold font-serif mx-3  tracking-[5px] italic'>
            XYZ INSTITUE
          </div>

          <div className='flex gap-5 mx-3 font-semibold text-center'>

            <button onClick={() => handleClick(aboutref)}
            className='hover:text-amber-400 hover:font-extrabold'>ABOUT</button>

            <button onClick={() => handleClick(courseref)}
              className='hover:text-amber-400 hover:font-extrabold'>COURSES</button>

            <button onClick={() => handleClick(serviceref)} 
            className='hover:text-amber-400 hover:font-extrabold'>SERVICES</button>

            <button onClick={() => handleClick(contactref)}
              className='hover:text-amber-400 hover:font-extrabold'>CONTACT</button>

          </div>
        </nav>
      </div>


      <div className='flex flex-col text-2xl'>
        <section ref={aboutref}>
          <h1 className='font-bold text-center mb-3 mt-25'>XYZ Institute</h1>
          <h4 className='font-semibold text-center mb-4'>Empowering Students Through Quality Education</h4>

          <p className='m-4 text-center'>XYZ Institute is dedicated to providing quality education and professional training to
            students who aspire to build successful careers. We focus on developing technical knowledge,
            practical skills, and confidence through industry-oriented learning.</p>

          <p className='m-4 text-center'>Our goal is to bridge the gap between academic education and industry requirements by providing
            hands-on training, experienced guidance, and career development opportunities.</p>

          <p className='ml-10 mb-3'>Our Mission </p>

          <ul className='ml-10 mb-5 list-disc'>
            <li className='mb-3'>Deliver quality education and practical training.</li>
            <li className='mb-3'>Develop technical and professional skills.</li>
            <li className='mb-3'>Prepare students for real-world challenges.</li>
          </ul>


          <h3 className='ml-10 mb-3'>Our Vision </h3>
          <p className='m-4 text-center'> To become a leading educational institution that
            empowers students with knowledge, skills, and opportunities for a brighter future.
            Our goal is to bridge the gap between academic education and industry requirements by providing hands-on training, experienced guidance, and career development opportunities</p>


        </section>
      </div>



      <div className='flex flex-col text-2xl'>
        <section ref={courseref}>
          <h1 className='font-bold text-center m-5'>Our Courses</h1>

          <h4 className='font-semibold text-center mb-4'>
            Learn Today, Lead Tomorrow
          </h4>

          <p className='m-4 text-center'>
            Explore our industry-oriented courses designed to help students
            develop in-demand technical skills and achieve their career goals.
            Our courses focus on practical learning, programming concepts,
            and real-world applications.
          </p>

          <h3 className='ml-10 mb-3 font-semibold'>Available Courses</h3>

          <ul className='ml-10 mb-5 list-disc'>
            <li className='mb-3'>Full Stack Development</li>
            <li className='mb-3'>Python Programming</li>
            <li className='mb-3'>Java Programming</li>
            <li className='mb-3'>Data Science</li>
            <li className='mb-3'>Web Designing</li>
            <li className='mb-3'>Database Management</li>
          </ul>

          <h3 className='ml-10 mb-3 font-semibold'>Why Choose Our Courses?</h3>

          <p className='m-4 text-center'>
            Our courses include practical sessions, real-time projects,
            expert guidance, and hands-on training to prepare students
            for industry requirements.
          </p>
        </section>
      </div>



      <div className='flex flex-col text-2xl'>
        <section ref={serviceref}>
          <h1 className='font-bold text-center m-5'>Our Services</h1>

          <h4 className='font-semibold text-center mb-4'>
            Beyond Education, We Build Careers
          </h4>

          <p className='m-4 text-center'>
            We provide comprehensive learning and career support services
            to help students improve their knowledge, develop professional
            skills, and succeed in their future careers.
          </p>

          <h3 className='ml-10 mb-3 font-semibold'>Our Services Include</h3>

          <ul className='ml-10 mb-5 list-disc'>

            <li className='mb-3'>
              Practical Training
              <p className='text-xl mt-2'>
                Hands-on learning experiences with real-time projects
                and practical assignments.
              </p>
            </li>

            <li className='mb-3'>
              Internship Opportunities
              <p className='text-xl mt-2'>
                Opportunities to gain practical industry exposure
                and workplace experience.
              </p>
            </li>

            <li className='mb-3'>
              Career Guidance
              <p className='text-xl mt-2'>
                Professional guidance to help students identify
                suitable career paths.
              </p>
            </li>

            <li className='mb-3'>
              Placement Assistance
              <p className='text-xl mt-2'>
                Resume preparation, interview training, and
                placement support.
              </p>
            </li>

            <li className='mb-3'>
              Project Development
              <p className='text-xl mt-2'>
                Guidance and support for academic and real-world
                project development.
              </p>
            </li>

            <li className='mb-3'>
              Technical Workshops
              <p className='text-xl mt-2'>
                Interactive workshops to improve technical knowledge
                and practical skills.
              </p>
            </li>

          </ul>
        </section>
      </div>



      <div className='flex flex-col text-2xl'>
        <section ref={contactref}>
          <h1 className='font-bold text-center m-5'>Contact Us</h1>

          <h4 className='font-semibold text-center mb-4'>
            Let's Start Your Learning Journey Together!
          </h4>

          <p className='m-4 text-center'>
            Have questions about our courses, training programs, or
            admissions? Feel free to contact us. Our team is always
            ready to assist you.
          </p>

          <h3 className='ml-10 mb-3 font-semibold'>Get In Touch</h3>

          <ul className='ml-10 mb-5 list-disc'>

            <li className='mb-4'>
              Address
              <p className='text-xl mt-2'>
                XYZ Institute, Chennai, Tamil Nadu, India.
              </p>
            </li>

            <li className='mb-4'>
              Phone Number
              <p className='text-xl mt-2'>
                +91 98765 43210
              </p>
            </li>

            <li className='mb-4'>
              Email Address
              <p className='text-xl mt-2'>
                info@xyzinstitute.com
              </p>
            </li>

            <li className='mb-4'>
              Working Hours
              <p className='text-xl mt-2'>
                Monday - Saturday, 9:00 AM - 6:00 PM
              </p>
            </li>

          </ul>

          <h3 className='ml-10 mb-3 font-semibold'>
            We Are Happy To Help You!
          </h3>

          <p className='m-4 text-center'>
            Contact us today to learn more about our courses and
            take the first step towards building a successful career.
          </p>

        </section>
      </div>

      <div className='text-center text-m hover:text-teal-400 font-extrabold  m-5'>
        <button onClick={handleMove}>Move To Top </button>
      </div>

    </>
  )
}

export default Dashboard