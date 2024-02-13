import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BsArrowLeft, BsSearch, BsChevronDown, BsFillImageFill, BsReverseLayoutTextSidebarReverse, BsPerson } from "react-icons/bs";

import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineSetting,AiOutlineMail ,AiOutlineLogout } from "react-icons/ai";

import { RiDashboardLine } from "react-icons/ri";


function App() {
  const [count, setCount] = useState(0)
  const [open,setOpen] = useState(true);
  const [submenuOpen,setSubmenuOpen] = useState(false);
  const Menus = [
    {title: "Dashboard" },
    {title: "Pages", icon: <AiOutlineFileText/> },
    {title: "Media", spacing: true, icon: <BsFillImageFill/> },
      
    {title: "Projects", 
    icon: <BsReverseLayoutTextSidebarReverse/>,
    submenu: true,
    submenuItems:[
      {title: "submenu 1" },
      {title: "submenu 2" },
      {title: "submenu 3" },
    ],
  },
  {title: "Analytics", icon: <AiOutlineBarChart/>},
  {title: "Inbox", icon: <AiOutlineMail/>},
  {title: "Profile",spacing: true, icon: <BsPerson/>},
  {title: "Setting", icon: <AiOutlineSetting/>},
  {title: "Logout" , icon: <AiOutlineLogout/>},
];

  return (
    <>
     <div className='flex'>
       <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
         <BsArrowLeft className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border-2 border-dark-purple cursor-pointer ${!open  && "rotate-180"}`} 
         onClick={() => setOpen (!open)}/>

          <div className='inflex-flex'> 
            <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"} `}/>

            <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"} `}>Tailwind</h1>
          </div>
         
          <div 
          className={`flex items-center rounded-md bg-light-white  mt-6 ${!open ? "px-2.5" : " px-4"}  py-2`}>

          <BsSearch 
          className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`}/>

          <input 
          type={"Search"} 
          placeholder="Search"
          className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"} `} />
          </div>
           
          <ul className='pt-2'>
             {Menus.map((menu,index) =>(
              <>

              <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? "mt-9":"mt-2"} `}>

              <span className='text-2xl block float-left '>
                {menu.icon ? menu.icon :<RiDashboardLine />}</span>
              
                <span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}
                `}>{menu.title}
                </span>
                     {menu.submenu && open && (
                      <BsChevronDown className={`${submenuOpen && "rotate-180" }`} onClick={() => setSubmenuOpen(!submenuOpen)} />
                     )}
              </li>
              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) =>(
                    <li key={index} className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white px-5 rounded-md '>
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
              </>
             ))}
           </ul>   
       </div>
       <div className='p-7'>
        <h1 className='text-2xl font-semibold'>Home Page</h1>
       </div>
     </div>
     
    </>
  )
}

export default App
