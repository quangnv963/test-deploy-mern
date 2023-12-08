import { useNavigate, useLocation } from 'react-router-dom';
import {useState} from "react"
import dblogo from '../assets/dblogo.png'
import ava from '../assets/avahacker.png'
import down from '../assets/downlogo.png'
import logo from '../assets/logo.jpg'
import prologo from '../assets/logoproduct.png'
import searchlogo from '../assets/icon_search.svg'
import { IProducts, } from '../types';

const MainAdd = ({data}:{ data:IProducts[]}) => {
  const [btndata, Setbtndata ] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const cookies = document.cookie.split(';')
  // kiểm tra biến
  const nameCookie = cookies.find(cookie => cookie.trim().startsWith('name='));
  if(!nameCookie){
    navigate('/signin')
    return;
  }
    // get Biến cookie
    const nameValue = nameCookie.split('=')[1];
    console.log(nameValue)
    const path:string = location.pathname
    var content
    var main
    if(path == "/admin"){
      content = <div className="flex  items-center"><img className='w-[80px] px-2' src={dblogo} alt="" />
      <p className='text-white font-sans font-semibold'>Dashboard</p></div>
      main = <div className='w-[90%] mx-auto'><p className='font-sans text-white text-[30px]'>Data analytics and statistics are coming soon !</p></div>
    }
    if(path == "/admin/product"){
      content = <div className="flex  items-center"><img className='w-[80px] px-2' src={prologo} alt="" />
      <p className='text-white font-sans font-semibold'>Product</p></div>
    }
    if(path == "/admin/new"){
      content = <div className="flex  items-center"><img className='w-[80px] px-2' src={dblogo} alt="" />
      <p className='text-white font-sans font-semibold'>New</p></div>
    }
  // const handleDeleteCookie = () => {
  //   document.cookie = 'name=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';
  //   console.log('đẫ đăng xuất ')
  // };

  return (
    <div className='flex 2xl:mx-[300px]'>
        <div className="menu w-[20%] bg-[#2c2e32]">
          <div className='logo w-[50px] sm:w-[70px] lg:w-[100px] mx-4 mt-3 mb-10'>
            <img className='w-full' src={logo} alt="" />
          </div>
          <div className='text-[#939393] mx-4'>Menu</div>
          <div>
            <ul className='text-[#939393]'>
              <li className={path === "/admin" ? 'text-white bg-[#5352ec] rounded-[10px] cursor-pointer m-4 px-4 py-2':'m-4 px-4 py-2 cursor-pointer'}><a  href="/admin">Dashboard</a></li>
              <li className={path === "/admin/product" || path === "/admin/new" ? 'text-white bg-[#5352ec] rounded-[10px] cursor-pointer m-4 px-4 py-2':'m-4 px-4 py-2 cursor-pointer'} onClick={()=>{Setbtndata(!btndata)}}>
                <p>Data Managerment</p>
              </li>
              <ul className={btndata ? 'block fade' : 'hidden'}>
                <li className={path === "/admin/product" ? 'text-white bg-[#5352ec] rounded-[10px] cursor-pointer m-4 px-4 py-2':'m-4 px-4 py-2 cursor-pointer'}><a href="/admin/product">Product</a></li>
                <li className={path === "/admin/new" ? 'text-white bg-[#5352ec] rounded-[10px] cursor-pointer m-4 px-4 py-2':'m-4 px-4 py-2 cursor-pointer'}><a href="">News</a></li>
              </ul>
              
            </ul>
          </div>
        </div>
        <div className=" w-[80%] min-h-screen bg-[#262c44] border-[1px] border-solid border-[#8d9094] ">
          <div className='bg-[#2c2e32] h-[100px] flex justify-between items-center border-[1px] px-5 border-solid border-[#8d9094]'>
            {content}
            <div className='flex items-center'>
              <img className='w-[60px] border-solid rounded-[50%] border-[0.5px]' src={ava} alt="" />
              <img className="w-[30px] h-[30px]" src={down} alt="" />
            </div>
          </div>
          <div className={path === '/admin' ? 'relative py-5 group':'hidden'}>
            <div
              style={{ backgroundImage: `url('https://sru.edu.in/assets/schools/ece/electronic-design-technology-banner-1.png')` }}
              className='w-[90%] mx-auto h-[500px] bg-center rounded-[50px] bg-cover duration-500'
            ></div>
            <div className=' py-1 absolute top-[10%] right-[30%]'>
              <div><p className='text-white font-sans font-semibold text-[40px]'>Welcome back administrator {nameValue}</p></div>
            </div>
          </div>            
          {main}
          <div>
            <div className='m-10 text-center font-sans text-[40px] text-white font-semibold'><h2>Product Managerment</h2></div>
            <div className='mx-5'>
              <div className='flex m-5'>
                <input className='w-[20%]' name='search' type="text" placeholder='Search for...'/>
                <label htmlFor="search"><img src={searchlogo}/></label>
              </div>
              <table className='text-[#B4AEAE]'>
                <thead>
                  <tr>
                    <th className='border-[1px] border-solid border-[#8d9094] w-[5%]'>#</th>
                    <th className='border-[1px] border-solid border-[#8d9094] w-[15%]'>Product Name</th>
                    <th className='border-[1px] border-solid border-[#8d9094] w-[20%]'>Image</th>
                    <th className='border-[1px] border-solid border-[#8d9094] w-[45%]'>Desc</th>
                    <th className='border-[1px] border-solid border-[#8d9094] w-[15%]'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i)=>{
                    return(
                      <tr>
                        <td className='text-center border-[1px] border-solid border-[#8d9094]'>{i+1}</td>
                        <td className='text-center border-[1px] border-solid border-[#8d9094]'>{item.name}</td>
                        <td className='border-[1px] border-solid border-[#8d9094]'><img src={item.img}/></td>
                        <td className='border-[1px] border-solid border-[#8d9094]'>{item.desc}</td>
                        <td className='border-[1px] border-solid border-[#8d9094]'></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
    
  );
};

export default MainAdd;