import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveProducts } from '../store/siteDataReducer'
import axios from 'axios'
import Section from './Section'
import Consultation from './modalContent/Consultation'
import { AnimatePresence } from "framer-motion"
import Modal from './Modal'

const trueSVG = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><g clipPath="url(#clip0_978_43)"><path d="M12.5 24.2188C18.9721 24.2188 24.2188 18.9721 24.2188 12.5C24.2188 6.02791 18.9721 0.78125 12.5 0.78125C6.02791 0.78125 0.78125 6.02791 0.78125 12.5C0.78125 18.9721 6.02791 24.2188 12.5 24.2188Z" fill="#009398"/><path d="M17.9688 5.46875L9.76562 13.9062L7.03125 11.0938L4.29688 13.9062L9.76562 19.5312L20.7031 8.28125L17.9688 5.46875Z" fill="white"/></g><defs><clipPath id="clip0_978_43"><rect width="25" height="25" fill="white"/></clipPath></defs></svg>

function Mean() {
    const lang = useSelector(state => state.intex.market.lang)
    const dispatch = useDispatch()
    const categories = useSelector(state => state.intex.market.categories)
    const [consul, setConsul] = useState("")

    
    
    useEffect(()=>{
        async function getProducts() {
            try{ 
              const {data} = await axios({
                method: "GET",
                url: "https://market-index.herokuapp.com/api/home/product"
              })
              dispatch(saveProducts(data.data))
              console.log(data)
            }catch(e){
              console.log(e)
            }
          }
        getProducts()
    }, [dispatch])

  return (
    <div style={{"backgroundColor": "#f0f0f0"}}>
        {categories.map(category => {
            return(
                <Section category={category} key={category.id} />
            )
        })}
        <div className='mb-10 sm:mb-24 px-5 pb-7 sm:pb-8 text-center flex flex-col items-center text-white' style={{"background": "rgb(0, 170, 170)"}}>
            <h2 className='mt-5 sm:mt-6 mb-4 sm:mb-8 font-bold text-2xl sm:text-5xl'>
                {lang === "RU" ? "Бесплатная доставка" : "Tekin yetkazib berish"}
            </h2>
            <p className='text-sm sm:text-2xl'>{lang === "RU" ? "Бесплатная доставка осуществляется в пределах города Ташкент (за пределами города доставка оплачивается отдельно)" : `Toshkent shahri ichida yetkazib berish bepul (shahar tashqarisida yetkazib berish alohida to'lanadi)`}</p>
            <span onClick={() => setConsul(true)} className='text-md sm:text-xl text-black pb-1 mt-6 sm:mt-8 px-10 rounded-3xl font-semibold hover:cursor-pointer drop-shadow-lg' style={{"backgroundColor": "rgba(255, 230, 0, 1)"}}>{lang === "RU" ? "Оформить заказ" : "Buyurtma berish"}</span>
        </div>
        <div className='sm:h-24 text-2xl sm:text-5xl font-bold py-5 text-center' style={{"background": "rgba(226, 239, 239, 1)", "color": "rgb(0, 150, 150)"}}>
        {lang === "RU" ? "Ценности наших клиентов" : "Mijozlarni qadirlash"}
        </div>
        <div className='w-min md:w-full m-auto flex flex-col flex-wrap md:flex-row justify-center items-start md:items-center pt-10 pb-3'>
            <div className='flex justify-between items-center mx-4 mb-7'>
                <div className='w-24 h-24 mr-5'>
                    <Image 
                       src="/usta.png"
                       alt=""
                       width="1"
                       height="1"
                       objectFit='cover'
                       layout="responsive"  
                    />
                </div>
                <div className='w-40 min_lg:w-48'>
                    <h3 className='text-2xl min_lg:text-3xl sm:text-4xl font-semibold'>{lang === "RU" ? "Опыт" : "Tajriba"}</h3>
                    <p className="text-base min_lg:text-xl sm:text-2xl">{lang === "RU" ? "Профессионализм наших сотрудников" : "Xodimlarimizning professionalligi"}</p>
                </div>
            </div>
            <div className='flex justify-between items-center mx-4 mb-7'>
                <div className='w-24 h-24 mr-5'>
                    <Image 
                       src="/track.png"
                       alt=""
                       width="1"
                       height="1"
                       objectFit='cover'
                       layout="responsive"
                    />
                </div>
                <div className='w-40 min_lg:w-64'>
                    <h3 className='text-2xl min_lg:text-3xl sm:text-4xl font-semibold'>{lang === "RU" ? "Доставка" : "Yetkazib berish"}</h3>
                    <p className="text-base min_lg:text-xl sm:text-2xl"> {lang === "RU" ? "Бесплатная доставка по городу" : "Shahar bo’ylab bepul yetkazib berish "}</p>
                </div>
            </div>
            <div className='flex justify-between items-center mx-4 mb-7'>
                <div className='w-24 h-24 mr-5'>
                    <Image 
                       src="/true.png"
                       alt=""
                       width="1"
                       height="1"
                       objectFit='cover'
                       layout="responsive"
                    />
                </div>
                <div className='w-40 min_lg:w-48'>
                    <h3 className='text-2xl min_lg:text-3xl sm:text-4xl font-semibold'>  {lang === "RU" ? "Качество" : "Sifat"}  </h3>
                    <p className="text-base min_lg:text-xl sm:text-2xl"> {lang === "RU" ? "Прочные, качественные бассейны" : "Chidamli, sifatli basseynlar"} </p>
                </div>
            </div>
        </div>
        <div className='text-xl min_lg:text-2xl sm:text-3xl md:text-5xl font-bold py-5 text-center' style={{"background": "rgba(226, 239, 239, 1)", "color": "rgb(0, 150, 150)"}}>
            {lang === "RU" ? "Бассейны от intex в Ташкенте" : "Intex basseynlari Toshkentda"}  

        </div>
        <div className='flex flex-col md:flex-row text-base min_lg:text-xl sm:text-2xl justify-center py-8 md:py-20'>
            <div className='px-5 min_lg:px-5 mb-8 w-full md:w-[500px]'>
                {lang === "RU" ? "Бассейны от intex - доступная по цене, качественная, надежная и экологически чистая продукция, которая предназначена для приятного отдыха всей семьи. Бассейн можно установить совершенно на любом участке и активно пользоваться им в летний период. Бассейн подарит вам яркие эмоции и спасет от жары в знойные летние дни." 
                               : `Intex basseynlari - bu butun oila uchun yoqimli dam olish uchun mo'ljallangan arzon, yuqori sifatli, ishonchli va ekologik toza mahsulotlar. Basseyn har qanday hovliga to'liq o'rnatilishi va yozda faol foydalanilishi mumkin. Basseyn sizga yorqin his-tuyg'ularni beradi va issiq yoz kunlarida sizni jaziramadan qutqaradi.`}
            </div>
            <div className='flex flex-col px-5 min_lg:px- w-full md:w-[500px]'>
                <p>
                    {lang === "RU" ? "Бассейны от intex отличаются обширным перечнем преимуществ, из которых можно выделить самые важные:" 
                                   : `Intex Basseynlari afzalliklarning kengligi bilan ajralib turadi, quyida ulardan eng muhimlarini ajratib ko'rsatish mumkin:`}
                </p>
                <span className='flex items-center mt-4'><span className='mt-0.5 mr-1'>{trueSVG}</span> <span>{lang === "RU" ? "Прочность" : "Chidamlilik oson"}</span></span>
                <span className='flex items-center'><span className='mt-0.5 mr-1'>{trueSVG}</span> <span>{lang === "RU" ? "Простота установки" : `O'rnatish uchun oson`}</span></span>
                <span className='flex items-center'><span className='mt-0.5 mr-1'>{trueSVG}</span> <span>{lang === "RU" ? "Красивые и ярки цвета" : "Chiroyli va yorqin ranglar"}</span></span>
                <span className='flex items-center'><span className='mt-0.5 mr-1'>{trueSVG}</span> <span>{lang === "RU" ? "Стильный дизайн" : "Zamonaviy dizayn"}</span></span>
                <span className='flex items-center'><span className='mt-0.5 mr-1'>{trueSVG}</span> <span>{lang === "RU" ? "Высокое качество" : "Yuqori sifatli"}</span></span>
            </div>
        </div>
        <AnimatePresence>
            {
                consul  ?   <Modal setModal={setConsul}>
                                <Consultation />
                            </Modal>
                            : null
            }
        </AnimatePresence>
    </div>
  )
}

export default Mean