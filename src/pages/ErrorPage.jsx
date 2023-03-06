import React from 'react'
import { useNavigate , useParams,Link} from 'react-router-dom'
import * as RiIcons from 'react-icons/ri'
import Navbar from '../components/navbar/Navbar'
function ErrorPage() {
  return (
    <>
    <Navbar/>
     <div className="min-h-[89.5vh] dark:text-white p-8  md:p-24 bg-veryLightGrey text-black dark:bg-veryDarkBlue">
                <Link style={{color:'#fff'}} className="flex items-center gap-4 cursor-pointer bg-white dark:bg-darkBlue rounded-lg w-28 p-4 mb-16 shadow-lg" to='/' onClick={() => navigate('/')}>
                    <RiIcons.RiArrowLeftLine />
                    Back
                </Link>
     <div className="flex flex-col items-center ]">
     <h2 className='text-7xl mb-8  font-black'> ERROR 404</h2>
        <p className='text-3xl'>Page Not Found</p>
     </div>
    </div>
    </>
  )
}

export default ErrorPage