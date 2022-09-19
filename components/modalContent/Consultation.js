import { https } from '../../axios'
import Image from 'next/image'
import React, { useState } from 'react'

function Order() {
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
    <div className='flex flex-col items-center relative py-8' style={{"width":"440px"}}>
        
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
                    <div className='text-2xl text-center'>Ваш заказ успешно оформлен. Мь свяжемся с вами в ближайшее время.</div>
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
                <div className='text-3xl font-semibold mb-7'>Получить консультацию</div>
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
                    <span onClick={()=> createConsul()} className="font-semibold text-2xl hover:cursor-pointer text-center h-12 w-60 pt-1.5 rounded-xl mx-auto" style={{"background" : "rgba(255, 230, 0, 1)"}}>Заказать</span>
                </div>
            </>
        }
    </div>
  )
}

export default Order