import logo from "../assets/logo.jpg"
const Footer = () => {
    return(
     <footer>
        <div className="xl:flex block 2xl:mx-[100px] justify-between items-center py-8 font-sans text-[12px] md:text-[18px] lg:text-[22px] xl:text-[24px] 2xl:text-[24px] text-[#212529]">
            <div className="xl:flex block text-center items-center">
                <div className="w-[50px] sm:w-[70px] lg:w-[100px] mx-auto xl:mx-0">
                        <img className="w-full" src={logo} alt="" />
                    </div>
                    <div className="xl:px-[40px] px-[5px] md:px-[16px]">
                        <p>No. 211, Wenhua 2nd Rd., Guishan Dist., Taoyuan City 333, Taiwan </p>
                        <p>+886-3-327-23453</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <a className="hover:text-[#007bff]" href="">Sitemap</a>
                    <p className="xl:px-4 px-1">|</p>
                    <a className="hover:text-[#007bff]" href="">Contact US</a>
                </div>
        </div>
        <div className="bg-[#007bff] w-full h-[50px] md:h-[60px] xl:h-[80px] flex items-center justify-center">
            <p className="text-white font-sans xl:text-[24px] text-[12px] md:text-[14px] lg:text-[18px] py-2">OPM Technology Co Ltd. All Rights Reserved</p>
        </div>
     </footer>
    )
}

export default Footer