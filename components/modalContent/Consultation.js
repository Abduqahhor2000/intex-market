import { https } from '../../axios'
import Image from 'next/image'
import React, { useState } from 'react'
import {useSelector} from "react-redux"

function Order() {
    const lang = useSelector(state => state.intex.market.lang)
    const [response, setResponse] = useState(null)
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const createConsul = async () => {
        try{
            console.log(name, phoneNumber)

            const {data} = await https({
                method: 'post',
                url: `/api/home/consultation`,
                data: {
                    name,
                    phoneNumber,
                }
            })

            console.log(data)
            setResponse(true)
        } catch(e){
            console.log(e)
            setResponse(false)
        }
    }

  return (
    <div className='flex flex-col items-center relative py-8' style={{"width":"330px"}}>
        
        {
            response === true ? <>
                <div className='flex flex-col items-center w-full'>
                    <div className="w-60 h-60 mb-10">
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
            </> :
            response === false ? <>
                Error
            </> : 
            <>
                <div 
                    className='w-28 h-32'
                >   
                    <Image
                        src={"/dispetcher.png"}
                        alt=''
                        width={12}
                        height={13}
                        layout="responsive"
                        
                        objectFit="contain"
                    />
                </div>
                <div className='text-3xl text-center font-semibold mb-7'>{lang === "RU" ? "Получить консультацию" : "Maslahat olish"}</div>
                <div className='w-full flex flex-col'>
                    <input 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='outline-none drop-shadow-lg rounded-2xl w-full h-14 p-5 text-2xl mb-4' 
                        style={{"boxShadow": "0px 0px 14px 0px rgba(0, 0, 0, 0.05)"}}/>
                    <input 
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className='outline-none drop-shadow-lg rounded-2xl w-full h-14 p-5 text-2xl mb-9' 
                        style={{"boxShadow": "0px 0px 14px 0px rgba(0, 0, 0, 0.05)"}}/>
                    <span onClick={()=> createConsul()} className="font-semibold text-2xl hover:cursor-pointer text-center h-12 w-60 pt-1.5 rounded-xl mx-auto" style={{"background" : "rgba(255, 230, 0, 1)"}}>{lang === "RU" ? "Заказать" : "Buyurtma berish"}</span>
                </div>
            </>
        }
    </div>
  )
}

export default Order