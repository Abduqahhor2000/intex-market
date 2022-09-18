import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from  "../styles/header.module.scss"
import { useSelector, useDispatch } from "react-redux"
import {changeLang, saveCategories, saveBaseInfo} from "../store/siteDataReducer"
import axios from 'axios'
import Link from 'next/link'

const menu_icon = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 22 18" fill="none"><rect width="22" height="2" rx="1" fill="white"/><rect y="16" width="22" height="2" rx="1" fill="white"/><rect y="8" width="22" height="2" rx="1" fill="white"/></svg>

const Header = () => {
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
    <div className='h-20 w-screen px-5 xl:px-16 flex justify-between items-center fixed z-10' style={{"backgroundColor" : "rgb(0, 150, 150)"}}>
      <div className='text-xl font-bold text-white whitespace-nowrap mr-7 sm:text-2xl' style={{"textShadow": "0 4px 10px rgb(0 0 0 / 25%)"}}>INTEX-MARKET.UZ</div>
      <div className={`${styles.categoryScroll} hidden lg:flex overflow-x-auto items-center text-xl text-white`}>
        {
          categories.map(category => {
            return(
                <div key={category.id} className={`${styles.category} py-1 px-4 rounded-md hover:cursor-pointer font-semibold`}><a className='whitespace-nowrap' href={`#${category.id}`}>{category.name_uz}</a></div>
            )
          })
        }
      </div>
      <div className='flex justify-end items-center sm:ml-7'>
           <span className='hover:cursor-pointer hidden xl:inline-block'><Link href={`tel:${baseInfo.phone_number}`}><a className='text-white text-md font-semibold'>{baseInfo.phone_number}</a></Link></span>        <div className='flex items-center ml-5 justify-between hover:cursor-pointer'>
           <a href={baseInfo.telegram_link} className='hidden inline-block xl:hidden min_lg:inline-block w-[24px] h-[24px]' target="_blank" rel="noreferrer">
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
           <a href={baseInfo.telegram_link} className='hidden min_lg:inline-block mt-1.5 ml-3' target="_blank" rel="noreferrer">
            <Image 
              className='hover:cursor-pointer'
              alt="telegram" 
              src="/telegramicon.png"
              width={30}
              height={30}
              priority={true}
           />
           </a>
           <a href={baseInfo.instagram_link} className='hidden mt-1.5 ml-3 sm:inline-block' target="_blank" rel="noreferrer">
            <Image   
              className='hover:cursor-pointer'
              alt="telegram" 
              src="/instagramicon.png"
              width={30}
              height={30}
              priority={true}
           />
           </a>
           
          <div onClick={() => dispatch(changeLang(lang === "UZ" ? "RU" : "UZ"))} className='bg-white rounded-sm hover:cursor-pointer py-0.5 px-1 ml-3 font-bold' style={{"width": "30px", "height": "29px", "color": " rgb(0, 150, 150)"}}>
            {lang}
          </div>

          <div className='ml-5 hover:cursor-pointer xl:hidden'>
            {menu_icon}
          </div>
        </div> 
      </div>
    </div>
    <div className='w-full h-auto pt-20'>
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
  </>
    
  )
}

export default Header