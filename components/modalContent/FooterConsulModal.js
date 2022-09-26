import React from 'react'
import Image from 'next/image'
import {useSelector} from "react-redux"

function FooterConsulModal({response}) {
  const lang = useSelector(state => state.intex.market.lang)

  return (
    <div className='flex flex-col text-black items-center relative py-7 w-60 md:w-[350px]'> 
        {
            response === true ? <>
                <div className='flex flex-col items-center w-full'>
                    <div className="w-32 h-32 xl:w-60 xl:h-60 mb-10">
                        <Image 
                            src="/true_icon.png"
                            alt=""
                            objectFit="contain"
                            layout="responsive"                    
                            width={1}
                            height={1}
                        />
                    </div>
                    
                    <div className='text-4xl xl:text-6xl font-bold mb-6'>{lang === "RU" ? "Спасибо!" : "Rahmat!"}</div>
                    <div className='text-lg text-center xl:text-2xl'>{lang === "RU" ? "Ваш заказ успешно оформлен. Мь свяжемся с вами в ближайшее время." : "Buyurtmangiz muvaffaqiyatli joylashtirildi. Tez orada siz bilan bog'lanamiz."}</div>
                </div>
            </> : <>
                Error
            </> 
        }
    </div>
  )
}

export default FooterConsulModal