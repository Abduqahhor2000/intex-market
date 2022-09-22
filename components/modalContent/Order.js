import { https } from '../../axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Formik } from 'formik';

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

    const onfocusPhoneNumber = () => {
        if (phoneNumber === "") {
          setPhoneNumber(`+998 `);
        } else {
          setPhoneNumber(phoneNumber);
        }
    };

    const CantrolPhoneNumber = (number) => {
        if(number === ""){
            setPhoneNumber("")
        }

        const num = number.split(" ").join("").split("").pop()
        let success = false
        let dfdf = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+"]
        for (let i = 0; i < dfdf.length; i++){
            if(dfdf[i] === num) {
                success = true
            }
        }
        if(!success){
            return;
        }
        
        let arrNumber = number.split(" ").join("").split("");

        if (arrNumber.length < 5) {
          setPhoneNumber(number);
          return;
        }
    
        let justBaseNumber = [];
    
        if (arrNumber.slice(0, 4).join("") === "+998") {
          justBaseNumber = arrNumber.slice(4, arrNumber.length);
        } else if (arrNumber.slice(0, 3).join("") === "+99") {
          justBaseNumber = arrNumber.slice(3, arrNumber.length);
        } else if (arrNumber.slice(0, 2).join("") === "+9") {
          justBaseNumber = arrNumber.slice(2, arrNumber.length);
        } else if (arrNumber.slice(0, 1).join("") === "+") {
          justBaseNumber = arrNumber.slice(1, arrNumber.length);
        } else {
          justBaseNumber = arrNumber.slice(0, arrNumber.length);
        }

        let newNumber = `+998 `;

        for (let i = 0; i < justBaseNumber.length; i++) {
          if (i === 2 || i === 5 || i === 7) {
            newNumber += ` ${justBaseNumber[i]}`;
          } else {
            newNumber += `${justBaseNumber[i]}`;
          }
        }

        setPhoneNumber(newNumber)
    }
    

  return (
    <div className='flex flex-col xl:flex-row items-center xl:justify-between relative w-56 xl:w-[1000px]'> 
        {
            response === true ? <>
                <div className='flex flex-col items-center w-full'>
                    <div className="w-32 h-32 xl:w-60 xl:h-60 mb-6 xl:mb-10">
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
                        <div className='block xl:hidden text-xl xl:text-3xl font-bold text-center mt-4 mb-1'>{product.sale_price} <span className='text-xl'>{lang === "RU" ? "сум" : `so'm`}</span></div>
                        <Formik
                            initialValues={{ name: '', phoneNumber: '', address: '' }}
                            validate={() => {
                              const errors = {};
                              if (!name) {
                                  errors.name = lang === "RU" ? "Заполни поле!" : "Maydonni to'ldiring!";
                              } else if (name.length < 4) {
                                errors.name = lang === "RU" ? "Напиши свое полное имя!" : "To'liq ismingizni yozing!";
                              }
                              if (!phoneNumber) {
                                  errors.phoneNumber = lang === "RU" ? "Заполни поле!" : "Maydonni to'ldiring!";
                              } else if (phoneNumber.length < 17) {
                                errors.phoneNumber = lang === "RU" ? "Напиши свой полный номер!" : "To'liq raqamingizni yozing!";
                              }
                              if (!address) {
                                  errors.address = lang === "RU" ? "Заполни поле!" : "Maydonni to'ldiring!";
                              } else if (address.length < 4) {
                                errors.address = lang === "RU" ? "Напишите полный адрес!" : "To'liq manzilni yozing!";
                              }

                              return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                createOrder()
                                setSubmitting(false);
                            }}
                          >
                            {({
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                              /* and other goodies */
                            }) => (
                                <form onSubmit={handleSubmit}>
                                <div className="relative">
                                    <input 
                                        value={name}
                                        onChange={(e) => {setName(e.target.value); handleChange}}
                                        onBlur={handleBlur}
                                        type="text"
                                        name="name"
                                        required
                                        className={`peer outline-none drop-shadow-lg rounded-2xl w-64 xl:w-80 h-11 xl:h-14 p-5 text-xl xl:text-2xl mt-4 xl:mt-5 border-x border-b-2 ${errors.name && touched.name ? "border-red-500" : "border-transparent"}`} 
                                        style={{"boxShadow": "0px 0px 14px 0px rgba(0, 0, 0, 0.05)"}}/>
                                    <span className='absolute top-6 xl:top-7 left-6 text-lg xl:text-2xl font-bold pointer-events-none text-gray-400 peer-focus:text-green-brand peer-valid:text-green-brand duration-200 peer-focus:text-base peer-valid:text-base peer-focus:-translate-y-5 peer-valid:-translate-y-5 peer-focus:-translate-x-3 peer-valid:-translate-x-3'>{lang === "RU" ? "Ваше имя":"Ismingiz"}</span>
                                    <span className={`absolute text-xs xl:text-base -translate-y-0.5 left-2 text-red-500 ${errors.name && touched.name  ? "block" : "hidden"}`}>{errors.name && touched.name && errors.name}</span>
                                </div>
                                <div className="relative mb-3 mt-3">
                                    <input 
                                        value={phoneNumber}
                                        onChange={(e) => {CantrolPhoneNumber(e.target.value); handleChange}}
                                        onFocus={() => onfocusPhoneNumber()}
                                        onBlur={handleBlur}
                                        name="phoneNumber"
                                        type="text"
                                        maxLength={17}
                                        required
                                        className={`peer outline-none drop-shadow-lg rounded-2xl w-64 xl:w-80 h-11 xl:h-14 p-5 text-xl xl:text-2xl mt-3 xl:mt-4 border-x border-b-2 ${errors.phoneNumber && touched.phoneNumber ? "border-red-500" : "border-transparent"}`} 
                                        style={{"boxShadow": "0px 0px 14px 0px rgba(0, 0, 0, 0.05)"}}/>
                                    <span className='absolute top-5 xl:top-6 left-6 text-lg xl:text-2xl font-bold pointer-events-none text-gray-400 peer-focus:text-green-brand peer-valid:text-green-brand duration-200 peer-focus:text-base peer-valid:text-base peer-focus:-translate-y-5 peer-valid:-translate-y-5 peer-focus:-translate-x-3 peer-valid:-translate-x-3'>{lang === "RU" ? "Ваш номер":"Raqamingiz"}</span>    
                                    <span className={`absolute text-xs xl:text-base -translate-y-0.5 left-2 text-red-500 ${errors.phoneNumber && touched.phoneNumber  ? "block" : "hidden"}`}>{errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}</span>
                                </div>
                                
                                <div className="relative">
                                   <input 
                                       value={address}
                                       onChange={(e) => {setAddress(e.target.value); handleChange}}
                                       onBlur={handleBlur}
                                       name="address"
                                       type="text"
                                       required
                                       className={`peer outline-none drop-shadow-lg rounded-2xl w-64 xl:w-80 h-11 xl:h-14 p-5 text-xl xl:text-2xl mt-3 xl:mt-4 border-x border-b-2 ${errors.address && touched.address  ? "border-red-500" : "border-transparent"}`} 
                                       style={{"boxShadow": "0px 0px 14px 0px rgba(0, 0, 0, 0.05)"}}/>
                                   <span className='absolute top-5 xl:top-6 left-6 text-lg xl:text-2xl font-bold pointer-events-none text-gray-400 peer-focus:text-green-brand peer-valid:text-green-brand duration-200 peer-focus:text-base peer-valid:text-base peer-focus:-translate-y-5 peer-valid:-translate-y-5 peer-focus:-translate-x-3 peer-valid:-translate-x-3'>{lang === "RU" ? "Ваш адрес":"Manzil"}</span>        
                                   <span className={`absolute text-xs xl:text-base -translate-y-0.5 left-2 text-red-500 ${errors.address && touched.address  ? "block" : "hidden"}`}>{errors.address && touched.address && errors.address}</span>
                                </div>
                                <button type="submit" disabled={isSubmitting} className="font-semibold text-xl xl:text-2xl hover:cursor-pointer text-center py-0.5 xl:py-1.5 px-5 rounded-xl flex mt-8 mx-auto" style={{"background" : "rgba(255, 230, 0, 1)"}}>
                                    {lang === "RU" ? "Заказать" : "Buyurtma berish"}
                                </button>
                              </form>
                            )}
                          </Formik>
                    </div>
                </div> 
            </>
        }
    </div>
  )
}

export default Order