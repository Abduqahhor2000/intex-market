import { https } from '../../axios'
import Image from 'next/image'
import React, { useState } from 'react'

function Order({product}) {
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
    <div className='flex justify-between relative' style={{"width": "1000px"}}>
        
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
                    
                    <div className='text-6xl font-bold mb-10'>Спасибо!</div>
                    <div className='text-2xl mb-16'>Ваш заказ успешно оформлен. Мь свяжемся с вами в ближайшее время.</div>
                </div>
            </> :
            response === false ? <>
                Error
            </> : 
            <>
                <div 
                    className='bg-white rounded-2xl rounded-tl-none pt-12 px-6'
                    style={{"width": "633px", "height": "505px", "boxShadow": "0px 5px 10px 0px rgba(0, 0, 0, 0.25)"}}
                >   
                    <div className='font-bold text-3xl text-center mr-8 mb-5' style={{"color": "rgb(0, 150, 150)"}}>{product.frame_uz}</div>
                    <Image
                        src={product.image}
                        alt=''
                        width={11}
                        height={5}
                        layout="responsive"
                        
                        objectFit="contain"
                    />
                    <div className='text-3xl font-bold text-center mt-9'>{product.sale_price} <span className='text-xl'>сум</span></div>
                </div>
                <div className="flex items-center">
                    <div className='w-80 flex flex-col'>
                        <input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='outline-none drop-shadow-lg rounded-2xl w-full h-14 p-5 text-2xl mb-4' 
                            style={{"boxShadow": "0px 0px 14px 0px rgba(0, 0, 0, 0.05)"}}/>
                        <input 
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className='outline-none drop-shadow-lg rounded-2xl w-full h-14 p-5 text-2xl mb-4' 
                            style={{"boxShadow": "0px 0px 14px 0px rgba(0, 0, 0, 0.05)"}}/>
                        <input 
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className='outline-none drop-shadow-lg rounded-2xl w-full h-14 p-5 text-2xl mb-8' 
                            style={{"boxShadow": "0px 0px 14px 0px rgba(0, 0, 0, 0.05)"}}/>
                        <span onClick={()=> createOrder()} className="font-semibold text-2xl hover:cursor-pointer text-center h-12 w-60 pt-1.5 rounded-xl mx-auto" style={{"background" : "rgba(255, 230, 0, 1)"}}>Заказать</span>
                    </div>
                </div> 
            </>
        }
    </div>
  )
}

export default Order