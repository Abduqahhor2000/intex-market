import { https } from '../../axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Formik } from 'formik';
import styles from "../../styles/Home.module.css"

function Order({product}) {
    const lang = useSelector(state => state.intex.market.lang)
    const [response, setResponse] = useState(null)
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const createOrder = async () => {
      setIsLoading(true)
        try{
            await https({
                method: 'post',
                url: `/api/home/order`,
                data: {
                    productId: product.id,
                    name,
                    phoneNumber,
                    address
                }
            })
            setResponse(true)
          } catch(e){
            console.log(e)
            setResponse(false)
          }
          setIsLoading(false)
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
    <div className='flex flex-col text-black xl:flex-row items-center xl:justify-between relative w-72 min_md:w-330 max-h-screen overflow-y-auto xl:w-orderWidth pt-9 px-8 xl:pl-11 xl:pr-4 pb-6 xl:pb-11'> 
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
                    className='bg-white rounded-cardRadius pt-6 xl:pt-12 px-6 w-full h-40 xl:w-633 xl:h-505 shadow-cardShadow'
                    
                >   
                    <div className='font-bold w-full text-base xl:text-3xl text-center mr-8 mb-0 xl:mb-5 text-green-main' >{product[`frame_${lang.toLowerCase()}`]}</div>
                    <Image
                        src={product.image}
                        alt=''
                        width={11}
                        height={5}
                        layout="responsive"
                        
                        objectFit="contain"
                    />
                    <div className='hidden xl:block text-3xl font-bold text-center mt-9'>{product.sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='text-xl ml-1'>{lang === "RU" ? ` сум` : ` so'm`}</span></div>
                </div>
                <div className="flex items-center xl:ml-4 w-full xl:w-fit">
                    <div className='w-full xl:w-inputWidth flex flex-col items-center'>
                        <div className='flex justify-end xl:hidden text-xl xl:text-3xl font-bold text-center mt-4 mb-1'>
                          {product.sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                          <span className='text-xl ml-1'>{lang === "RU" ? ` сум` : ` so'm`}</span>
                        </div>
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
                                <div className="relative mt-2">
                                    <input 
                                        value={name}
                                        onChange={(e) => {setName(e.target.value); handleChange}}
                                        onBlur={handleBlur}
                                        type="text"
                                        name="name"
                                        autocomplete="off"
                                        required
                                        className={`peer bg-white outline-none shadow-inputShadow rounded-2xl w-full xl:w-80 h-11 xl:h-14 p-5 text-xl xl:text-2xl border-x border-b-2 ${errors.name && touched.name ? "border-red-500" : "border-transparent"}`} 
                                        />
                                    <span className='absolute top-1.5 xl:top-2.5 left-6 text-lg xl:text-2xl font-bold pointer-events-none text-gray-400 peer-focus:text-green-brand peer-valid:text-green-brand duration-100 peer-focus:text-base peer-valid:text-base peer-focus:-translate-y-5 peer-valid:-translate-y-5 peer-focus:-translate-x-3 peer-valid:-translate-x-3'>{lang === "RU" ? "Ваше имя":"Ismingiz"}</span>
                                    <span className={`absolute text-xs xl:text-base -translate-y-0.5 left-2 text-red-500 ${errors.name && touched.name  ? "block" : "hidden"}`}>{errors.name && touched.name && errors.name}</span>
                                </div>
                                <div className="relative mb-6 mt-6">
                                    <input 
                                        value={phoneNumber}
                                        onChange={(e) => {CantrolPhoneNumber(e.target.value); handleChange}}
                                        onFocus={() => onfocusPhoneNumber()}
                                        onBlur={handleBlur}
                                        name="phoneNumber"
                                        type="text"
                                        autocomplete="off"
                                        maxLength={17}
                                        required
                                        className={`peer bg-white outline-none shadow-inputShadow rounded-2xl w-full xl:w-80 h-11 xl:h-14 p-5 text-xl xl:text-2xl border-x border-b-2 ${errors.phoneNumber && touched.phoneNumber ? "border-red-500" : "border-transparent"}`} 
                                        />
                                    <span className='absolute top-1.5 xl:top-2.5 left-6 text-lg xl:text-2xl font-bold pointer-events-none text-gray-400 peer-focus:text-green-brand peer-valid:text-green-brand duration-100 peer-focus:text-base peer-valid:text-base peer-focus:-translate-y-5 peer-valid:-translate-y-5 peer-focus:-translate-x-3 peer-valid:-translate-x-3'>{lang === "RU" ? "Ваш номер":"Raqamingiz"}</span>    
                                    <span className={`absolute text-xs xl:text-base -translate-y-0.5 left-2 text-red-500 ${errors.phoneNumber && touched.phoneNumber  ? "block" : "hidden"}`}>{errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}</span>
                                </div>
                                
                                <div className="relative mb-6">
                                   <input 
                                       value={address}
                                       onChange={(e) => {setAddress(e.target.value); handleChange}}
                                       onBlur={handleBlur}
                                       name="address"
                                       type="text"
                                       autocomplete="off"
                                       required
                                       className={`peer bg-white outline-none shadow-inputShadow rounded-2xl w-full xl:w-80 h-11 xl:h-14 p-5 text-xl xl:text-2xl border-x border-b-2 ${errors.address && touched.address  ? "border-red-500" : "border-transparent"}`} 
                                       />
                                   <span className='absolute top-1.5 xl:top-2.5 left-6 text-lg xl:text-2xl font-bold pointer-events-none text-gray-400 peer-focus:text-green-brand peer-valid:text-green-brand duration-100 peer-focus:text-base peer-valid:text-base peer-focus:-translate-y-5 peer-valid:-translate-y-5 peer-focus:-translate-x-3 peer-valid:-translate-x-3'>{lang === "RU" ? "Ваш адрес":"Manzil"}</span>        
                                   <span className={`absolute text-xs xl:text-base -translate-y-0.5 left-2 text-red-500 ${errors.address && touched.address  ? "block" : "hidden"}`}>{errors.address && touched.address && errors.address}</span>
                                </div>
                                <button type="submit" disabled={isSubmitting} className="font-semibold text-xl xl:text-2xl hover:cursor-pointer text-center pb-0.5 xl:py-1.5 px-5 rounded-oformit flex mx-auto shadow-dropShadow  bg-yellow-btn " >
                                    {
                                      isLoading ? <div className={styles.loadingiospinnerellipsiszon7txr7fkp}>
                                                    <div className={styles.ldiopn062kit6cr}>
                                                      <div></div>
                                                      <div></div>
                                                      <div></div>
                                                      <div></div>
                                                      <div></div>
                                                    </div>
                                                  </div> 
                                                : <> {lang === "RU" ? "Заказать" : "Buyurtma berish"} </>
                                    }
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