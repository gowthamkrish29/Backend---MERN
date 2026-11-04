import Link from "../utils/Link"
import Logo from "../utils/Logo"
import Button from "../utils/Button"    

const NavBar = () => {
    return(
       <>

        <div className="shadow bg-black w-full font-mono flex justify-between items-center">
            <div>
                <Logo />
            </div>

            <div className="flex gap-15 mx-30">
                <Link />
            </div>

            <div>
                <Button />
            </div>
        </div>

       </>
    )
}

export default NavBar