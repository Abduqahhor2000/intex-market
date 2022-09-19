import { https } from '../../axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Order({product}) {
    const lang = useSelector(state => state.intex.market.lang)
    const [response, setResponse] = useState(null)
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")

    const createOrder = async () => {
        try{
            console.log(product.id,
                name,
                phoneNumber,
                address)
            const {data} = await https({
                method: 'post',
                url: `/api/home/order`,
                data: {
                    productId: product.id,
                    name,
                    phoneNumber,
                    address
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
    <div className='flex flex-col xl:flex-row items-center xl:justify-between relative w-56 xl:w-[1000px]'> 
        {
            response === true ? <>
                <div className='flex flex-col items-center w-full'>
                    <div className="w-44 h-44  xl:w-60 xl:h-60 mb-6 xl:mb-10">
                        <Image 
                            src="/true_icon.png"
                            alt=""
                            objectFit="contain"
                            layout="responsive"                    
                            width={1}
                            height={1}
                        />
                    </div>
                    
                    <div className='text-4xl xl:text-6xl font-bold mb-6 xl:mb-10'>{lang === "RU" ? "Спасибо!" : "Rahmat!"}</div>
                    <div className='text-lg text-center xl:text-2xl mb-0 xl:mb-16'>{lang === "RU" ? "Ваш заказ успешно оформлен. Мь свяжемся с вами в ближайшее время." : "Buyurtmangiz muvaffaqiyatli joylashtirildi. Tez orada siz bilan bog'lanamiz."}</div>
                </div>
            </> :
            response === false ? <>
                Error
            </> : 
            <>
                <div 
                    className='bg-white rounded-2xl rounded-tl-none pt-6 xl:pt-12 px-6 w-60 h-40 xl:w-[633px] xl:h-[505px]'
                    style={{"boxShadow": "0px 5px 10px 0px rgba(0, 0, 0, 0.25)"}}
                >   
                    <div className='font-bold w-full text-base xl:text-3xl text-center mr-8 mb-0 xl:mb-5' style={{"color": "rgb(0, 150, 150)"}}>{product[`frame_${lang.toLowerCase()}`]}</div>
                    <Image
                        src={product.image}
                        alt=''
                        width={11}
                        height={5}
                        layout="responsive"
                        
                        objectFit="contain"
                    />
                    <div className='hidden xl:block text-3xl font-bold text-center mt-9'>{product.sale_price} <span className='text-xl'>сум</span></div>
                </div>
                <div className="flex items-center">
                    <div className='w-80 flex flex-col items-center'>
                        <div className='block xl:hidden text-3xl font-bold text-center mt-8 mb-5'>{product.sale_price} <span className='text-xl'>{lang === "RU" ? "сум" : `so'm`}</span></div>
                        <input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='outline-none drop-shadow-lg rounded-2xl w-64 xl:w-80 h-11 xl:h-14 p-5 text-2xl mb-3 xl:mb-4' 
                            style={{"boxShadow": "0px 0px 14px 0px rgba(0, 0, 0, 0.05)"}}/>
                        <input 
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className='outline-none drop-shadow-lg rounded-2xl w-64 xl:w-80 h-11 xl:h-14 p-5 text-2xl mb-3 xl:mb-4' 
                            style={{"boxShadow": "0px 0px 14px 0px rgba(0, 0, 0, 0.05)"}}/>
                        <input 
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className='outline-none drop-shadow-lg rounded-2xl w-64 xl:w-80 h-11 xl:h-14 p-5 text-2xl mb-5 xl:mb-8' 
                            style={{"boxShadow": "0px 0px 14px 0px rgba(0, 0, 0, 0.05)"}}/>
                        <span onClick={()=> createOrder()} className="font-semibold text-xl xl:text-2xl hover:cursor-pointer text-center h-9 xl:h-12 pt-0.5 xl:pt-1.5 px-5 rounded-xl mx-auto" style={{"background" : "rgba(255, 230, 0, 1)"}}>{lang === "RU" ? "Заказать" : "Buyurtma berish"}</span>
                    </div>
                </div> 
            </>
        }
    </div>
  )
}

export default Order