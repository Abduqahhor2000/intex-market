import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const oclock_icon = <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 34 34" fill="none"><g clipPath="url(#clip0_978_75)"><path d="M17 0C7.61016 0 0 7.61016 0 17C0 26.3898 7.61016 34 17 34C26.3898 34 34 26.3898 34 17C34 7.61016 26.3898 0 17 0ZM17 31.1645C9.17734 31.1645 2.83555 24.8227 2.83555 17C2.83555 9.17734 9.17734 2.83555 17 2.83555C24.8227 2.83555 31.1645 9.17734 31.1645 17C31.1645 24.8227 24.8227 31.1645 17 31.1645ZM18.4145 5.66445H15.5789V17L21.9539 23.375L24.0789 21.25L18.4145 15.5855V5.66445Z" fill="white"/></g><defs><clipPath id="clip0_978_75"><rect width="34" height="34" fill="white"/></clipPath></defs></svg>

function Footer() {
    const baseInfo = useSelector(state => state.intex.market.baseInfo)
    const lang = useSelector(state => state.intex.market.lang)
    
  return (
    <div className='py-3' style={{"background": "rgb(0, 150, 150)"}}>
        <div className='mx-auto flex flex-wrap items-start justify-center lg:justify-between px-5 max-w-[1120px]'>
            <div className='flex flex-col items-center w-full sm:w-80 mx-0 min_md:mx-5 min_lg:mx-20 sm:mx-32 md:mx-52 lg:mx-0 mb-10 lg:mb-0'>
                <h2 className='leading-7 mb-4 text-xl sm:text-2xl text-center mx-5 font-semibold text-white'>{lang === "RU" ? "Получить бесплатную консультацию" : "Bepul konsultatsiya olish"}</h2>
                <input placeholder='' className='mb-5 w-full text-xl h-10 rounded-lg'/>
                <input placeholder='' className='mb-5 w-full text-xl h-10 rounded-lg'/>
                <span className='h-9 pt-2 min_sm:pt-1.5 px-5 text-xs min_sm:text-sm sm:px-10 rounded-lg font-semibold hover:cursor-pointer' style={{"background": "rgba(255, 230, 0, 1)"}}>{ lang === "RU" ? "Хочу проконсультироваться" : "Konsultatsiya olish"}</span>
            </div>
            <div className='w-1/2 md:w-64 text-white text-xl'>
                <span className='flex items-center font-semibold text-base sm:text-xl text-white'><span className='mr-3'>{oclock_icon}</span> <span>{ lang === "RU" ? "Рабочее время" : "Ish vaqti"}</span></span>
                <span className='font-semibold text-xs sm:text-xl leading-3'>{baseInfo[`work_time_${lang.toLowerCase()}`]}</span>
                <div className='sm:mt-3'>
                    <a href={`tel:${baseInfo.phone_number}`} className="inline-block w-10 min_lg:w-16 h-10 min_lg:h-16 mr-1">
                        <Image 
                          className='hover:cursor-pointer' 
                          src="/phone.png" 
                          alt="" 
                          width={60} 
                          height={60}
                          layout={"responsive"}
                          objectFit={"continue"}
                        />
                    </a>
                    <a href={baseInfo.telegram_link} className='inline-block w-10 min_lg:w-16 h-10 min_lg:h-16 mt-1.5 mr-1' target="_blank" rel="noreferrer">
                        <Image 
                          className='hover:cursor-pointer'
                          alt="telegram" 
                          src="/telegram.png"
                          width={60}
                          height={60}
                          layout={"responsive"}
                          objectFit={"continue"}
                       />
                    </a>
                    <a href={baseInfo.instagram_link} className='inline-block w-10 min_lg:w-16 h-10 min_lg:h-16 mt-1.5' target="_blank" rel="noreferrer">
                        <Image   
                          className='hover:cursor-pointer'
                          alt="telegram" 
                          src="/instagram.png"
                          width={60}
                          height={60}
                          layout={"responsive"}
                          objectFit={"continue"}
                       />
                    </a>
                </div>
            </div>
            <div className='w-1/2 lg:w-64 ml-0 md:ml-20 lg:ml-0 pl-3 text-xs sm:text-xl text-white font-semibold'>
                <div>Intex-market.uz</div>
                <Link href={`tel:${baseInfo.phone_number}`} className='hover:cursor-pointer'><a className='inline-block text-white text-md font-semibold mb-3'>{baseInfo.phone_number}</a></Link>
                <div>{baseInfo[`address_${lang.toLowerCase()}`]}</div>
                <div className="font-semibold sm:text-sm mt-5">Разработано в Support Solutions. Все права защищены.</div>
            </div>
        </div>
       
    </div>
  )
}

export default Footer