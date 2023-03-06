import React,{useState,useEffect} from 'react'
import * as MdIcons from 'react-icons/md'
// import './Navbar.css'

function Navbar(props) {
  const [theme, setTheme] = useState('light')

  useEffect(() =>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  },[])

  useEffect(() => {
    if (theme === 'dark' ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  
  }, [theme])
  

  const changeTheme =() =>{
    setTheme(theme === 'dark' ? 'light' : 'dark')
}
  return (
    <>
        <nav className='flex items-center py-8 px-16 justify-between dark:bg-darkBlue dark:text-white font-nunito md:px-16 bg-white text-black shadow-lg '>
            <h3 className='text-2xl font-black md:4xl '>Where in the world</h3>
            <button className="theme flex items-center gap-2  cursor-pointer text-xl md:text-2xl " onClick={changeTheme}>
              {theme === 'dark' ? <MdIcons.MdOutlineWbSunny /> : <MdIcons.MdDarkMode/> }
                
                <p  >{theme === 'dark' ? 'Light' : 'Dark'} mode</p>
            </button>
        </nav>
    </>
  )
}

export default Navbar