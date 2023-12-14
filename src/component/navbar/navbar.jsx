import { IoGlobeOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
const Navbar = () => {
  return (
    <nav className='h-[110px] md:h-[140px]   grid grid-rows-2 '>
        <div className='  px-5 text-[14px] font-[700] md:text-[18px] md:font-[500] flex justify-end md:justify-center md:items-center gap-4 pr-2'>
            <p className='text-center  '>We’re Bankrate’s #1 app for saving <br className="md:hidden "/> money in 2023</p>
            <div className="flex gap-2 md:text-gray-500 ">
                <a href="#" className="md:font-[800]"> Learn more</a> 
                <LiaTimesSolid size={20} className="md:hidden"/>
            </div>
        </div>
        <div className=' px-5 flex justify-between k md:justify-evenly md:gap-20   '>
            <div className='flex gap-8 md:w-4/12  md:items-center'>
                <h2 className="text-[30px] font-[700] md:text-[30px]">Oportun</h2>
                <a href="#" className="hidden links md:block">Loans  </a>
                <a href="#" className="hidden links md:block">Save  </a>  
                <a href="#" className="hidden links md:block">Credit cards  </a>
            </div>
            
            <div className="md:w-4/12   hidden md:block ">
                <div className="flex justify-end items-center gap-14 w-full h-full">
                    <a href="#" className="links"> Log in </a>
                    <button className="bg-black text-[18px] no-underline flex justify-center items-center h-full p-3 times text-white rounded-[20px] w-[140px] hover:bg-white hover:text-black hover:border-black hover:border-2 hover:font-[800]  font-[600]"> Apply now </button>
                    <div className="flex items-center gap-3">
                        <IoGlobeOutline size={30}/>
                        <p className="links text-blue-500">Espanyol</p>
                    </div>
                </div>
            </div>
            <button className="border-2 md:hidden flex justify-center items-center mr-7"> Get App </button>
        </div>
    </nav>
  )
}

export default Navbar