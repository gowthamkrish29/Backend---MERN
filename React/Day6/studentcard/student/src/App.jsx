import CourseDetails from "./components/CourseDetails"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Employee from "./pages/Employee"
import Product from "./pages/Product"
import Student from "./pages/student"
import StudentList from "./pages/StudentList"


const App = () => {
  return (
    <>
    
    <Student />

    <Employee />

    <Product />

    <StudentList />

    <Header />

    <CourseDetails />

    <Footer />
    
    </>
  )
}

export default App