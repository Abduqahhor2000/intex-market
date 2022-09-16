import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from  "../styles/header.module.scss"
import { useSelector, useDispatch } from "react-redux"
import {changeLang, saveCategories} from "../store/siteDataReducer"
import axios from 'axios'

const Header = () => {
  const lang = useSelector(state => state.intex.market.lang)
  const categories = useSelector(state => state.intex.market.categories)
  const dispatch = useDispatch()
  // const [uzLang, setUzLang] = useState(true)

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

  useEffect(()=>{
    getCategory()
  }, [])

  return (<>
    <div className='h-20 w-full px-16 flex justify-between items-center fixed z-10' style={{"backgroundColor" : "rgb(0, 150, 150)"}}>
      <div className='text-2xl font-bold text-white' style={{"textShadow": "0 4px 10px rgb(0 0 0 / 25%)"}}>INTEX-MARKET.UZ</div>
      <div className='flex justify-between items-center text-xl text-white'>
        {
          categories.map(category => {
            return(
                <div key={category.id} className={`${styles.category} py-1 px-4 rounded-md hover:cursor-pointer font-semibold`}>{category.name_uz}</div>
            )
          })
        }
      </div>
      <div className='flex justify-between items-center'>
        <div className='text-white text-md font-semibold hover:cursor-pointer'>{`(90)1288182`}</div>
        <div className='flex items-center ml-5 justify-between w-28 hover:cursor-pointer'>
           <Image 
              className='hover:cursor-pointer'
              alt="telegram" 
              src="/telegramicon.png"
              width={30}
              height={30}
              priority={true}
           />
           <Image   
              className='hover:cursor-pointer'
              alt="telegram" 
              src="/instagramicon.png"
              width={30}
              height={30}
              priority={true}
           />
          <div onClick={() => dispatch(changeLang(lang === "UZ" ? "RU" : "UZ"))} className='bg-white rounded-sm hover:cursor-pointer py-0.5 px-1 font-bold' style={{"width": "30px", "height": "30px", "color": " rgb(0, 150, 150)"}}>
            {lang}
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