import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from  "../styles/header.module.scss"
import { useSelector, useDispatch } from "react-redux"
import {changeLang, saveCategories, saveBaseInfo} from "../store/siteDataReducer"
import {AnimatePresence} from "framer-motion"
import Menu from './modalContent/Menu'
import MenuModal from './MenuMadal'
import axios from 'axios'
import Link from 'next/link'

const menu_icon = <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 18" fill="none"><rect width="22" height="2" rx="1" fill="white"/><rect y="16" width="22" height="2" rx="1" fill="white"/><rect y="8" width="22" height="2" rx="1" fill="white"/></svg>

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const lang = useSelector(state => state.intex.market.lang)
  const categories = useSelector(state => state.intex.market.categories)
  const baseInfo = useSelector(state => state.intex.market.baseInfo)
  const dispatch = useDispatch()

  const getCategory = async () => {
    try{
      const {data} = await axios({
        method: "GET",
        url: "https://market-index.herokuapp.com/api/home/category"
      })
      dispatch(saveCategories(data.data))
      console.log(data)
    }catch(e){
      console.log(e)
    }
  }

  const getBaseInfo = async () => {
    try{
      const {data} = await axios({
        method: "GET",
        url: "https://market-index.herokuapp.com/api/home/site"
      })
      dispatch(saveBaseInfo(data.data[0]))
      console.log(data)
    }catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{ 
    getCategory()
    getBaseInfo()
  }, [])

  return (<>
    <div className='h-12 min_md:h-16 min_lg:h-20 w-screen px-2 min_md:px-4 min_lg:px-5 xl:px-16 flex justify-between items-center fixed z-10' style={{"backgroundColor" : "rgb(0, 150, 150)"}}>
      <div className='text-lg min_md:text-xl font-bold text-white whitespace-nowrap sm:text-2xl' style={{"textShadow": "0 4px 10px rgb(0 0 0 / 25%)"}}>INTEX-MARKET.UZ</div>
      <div className={`${styles.categoryScroll} hidden xl:flex overflow-x-auto items-center text-xl text-white`}>
        {
          categories.map(category => {
            return(
                <div key={category.id} className={`${styles.category} py-1 px-4 rounded-md hover:cursor-pointer font-semibold`}><a className='whitespace-nowrap' href={`#${category.id}`}>{category[`name_${lang.toLowerCase()}`]}</a></div>
            )
          })
        }
      </div>
      <div className='flex justify-end items-center sm:ml-7'>
           <span className='hover:cursor-pointer hidden xl:inline-block'><Link href={`tel:${baseInfo.phone_number}`}><a className='text-white text-md font-semibold'>{baseInfo.phone_number}</a></Link></span>        <div className='flex items-center ml-5 justify-between hover:cursor-pointer'>
           <a href={`tel:${baseInfo.phone_number}`} className='w-6 h-6 inline-block xl:hidden mt-0.5 min_lg:inline-block sm:w-[31px] sm:h-[31px]' rel="noreferrer">
            <Image 
              className='hover:cursor-pointer'
              alt="telegram" 
              src="/phone_icon.png"
              width={30}
              height={30}
              priority={true}
              layout="responsive"
              objectFit="contain"
           />
           </a>
           <a href={baseInfo.telegram_link} className='w-6 h-6 min_lg:inline-block mt-0.5 ml-1.5 min_lg:ml-3 sm:mt-1 sm:w-8 sm:h-8' target="_blank" rel="noreferrer">
            <Image 
              className='hover:cursor-pointer'
              alt="telegram" 
              src="/telegramicon.png"
              width={30}
              height={30}
              priority={true}
           />
           </a>
           <a href={baseInfo.instagram_link} className='hidden mt-1.5 ml-2.5 sm:inline-block' target="_blank" rel="noreferrer">
            <Image   
              className='hover:cursor-pointer'
              alt="telegram" 
              src="/instagramicon.png"
              width={30}
              height={30}
              priority={true}
           />
           </a>
           
          <div onClick={() => dispatch(changeLang(lang === "UZ" ? "RU" : "UZ"))} className='bg-white rounded-sm hover:cursor-pointer text-center text-sm sm:text-lg ml-1.5 min_lg:ml-3 mt-0.5 sm:pt-0 sm:pb-1 font-bold w-6 h-6 sm:w-[30px] sm:h-[29px]' style={{"color": " rgb(0, 150, 150)"}}>
            {lang === "UZ" ? "RU" : "UZ"}
          </div>

          <div onClick={()=> setIsMenuOpen(true)} className='ml-4 min_lg:ml-5 hover:cursor-pointer xl:hidden w-6 h-6 sm:w-[30px] sm:h-[30px]'>
            {menu_icon}
          </div>
        </div> 
      </div>
    </div>
    <div className='w-full h-auto pt-12 min_md:pt-16 min_lg:pt-20 '>
      <Image 
        layout='responsive'
        height={2}
        width={4}
        objectFit="cover"
        src="/fon_img.jpg"
        alt="Bu yerda rasm bor edi!"
        priority={true}
      />
    </div>
    <AnimatePresence>
            {
                isMenuOpen ? <MenuModal setModal={setIsMenuOpen}>
                               <Menu setIsMenuOpen={setIsMenuOpen} />
                             </MenuModal>
                           : null
            }
        </AnimatePresence>
  </>  
  )
}

export default Header