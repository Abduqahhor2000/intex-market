import Image from 'next/image'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveProducts } from '../store/siteDataReducer'
import axios from 'axios'
import Section from './Section'

const trueSVG = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><g clipPath="url(#clip0_978_43)"><path d="M12.5 24.2188C18.9721 24.2188 24.2188 18.9721 24.2188 12.5C24.2188 6.02791 18.9721 0.78125 12.5 0.78125C6.02791 0.78125 0.78125 6.02791 0.78125 12.5C0.78125 18.9721 6.02791 24.2188 12.5 24.2188Z" fill="#009398"/><path d="M17.9688 5.46875L9.76562 13.9062L7.03125 11.0938L4.29688 13.9062L9.76562 19.5312L20.7031 8.28125L17.9688 5.46875Z" fill="white"/></g><defs><clipPath id="clip0_978_43"><rect width="25" height="25" fill="white"/></clipPath></defs></svg>

function Mean() {
    const products = useSelector(state => state.intex.market.products)
    const dispatch = useDispatch()
    const categories = useSelector(state => state.intex.market.categories)

    const getProducts = async () => {
        try{
          const {data} = await axios({
            method: "GET",
            url: "https://market-index.herokuapp.com/api/home/product"
          })
          dispatch(saveProducts(data.data))
          console.log(products)
        }catch(e){
          console.log(e)
        }
      }
    
    useEffect(()=>{
        getProducts()
    }, [])

  return (
    <div style={{"backgroundColor": "#f0f0f0"}}>
        {categories.map(category => {
            return(
                <Section category={category} key={category.id} />
            )
        })}
        <div className='h-60 mb-24 px-5 text-center flex flex-col items-center text-white' style={{"background": "rgb(0, 170, 170)"}}>
            <h2 className='mt-6 mb-8 font-bold text-5xl'>
                Tekin yetkazib berish
            </h2>
            <p className='text-2xl'>{`Toshkent shahri ichida yetkazib berish bepul (shahar tashqarisida yetkazib berish alohida to'lanadi)`}</p>
            <span className='text-xl text-black pb-1 mt-8 px-10 rounded-3xl font-semibold hover:cursor-pointer' style={{"backgroundColor": "rgba(255, 230, 0, 1)"}}>Buyurtma berish</span>
        </div>
        <div className='h-24 text-5xl font-bold py-5 text-center' style={{"background": "rgba(226, 239, 239, 1)", "color": "rgb(0, 150, 150)"}}>
            Mijozlarni qadirlash
        </div>
        <div className='h-80 flex justify-center items-center'>
            <div className='flex justify-between items-center mx-4'>
                <div className='w-24 h-24 mr-5'>
                    <Image 
                       src="/usta.png"
                       alt=""
                       width="1"
                       height="1"
                       objectFit='cover'
                       priority={true}
                       layout="responsive"  
                    />
                </div>
                <div className='w-48'>
                    <h3 className='text-4xl font-semibold'> Tajriba </h3>
                    <p className="text-2xl"> Xodimlarimizning professionalligi </p>
                </div>
            </div>
            <div className='flex justify-between items-center mx-4'>
                <div className='w-24 h-24 mr-5'>
                    <Image 
                       src="/track.png"
                       alt=""
                       width="1"
                       height="1"
                       objectFit='cover'
                       layout="responsive"
                       priority={true}
                    />
                </div>
                <div className='w-64'>
                    <h3 className='text-4xl font-semibold'> Yetkazib berish </h3>
                    <p className="text-2xl"> Shahar bo’ylab bepul yetkazib berish </p>
                </div>
            </div>
            <div className='flex justify-between items-center mx-4'>
                <div className='w-24 h-24 mr-5'>
                    <Image 
                       src="/true.png"
                       alt=""
                       width="1"
                       height="1"
                       objectFit='cover'
                       layout="responsive"
                       priority={true}
                    />
                </div>
                <div className='w-48'>
                    <h3 className='text-4xl font-semibold'> Sifat </h3>
                    <p className="text-2xl"> Chidamli, sifatli basseynlar </p>
                </div>
            </div>
        </div>
        <div className='h-24 text-5xl font-bold py-5 text-center' style={{"background": "rgba(226, 239, 239, 1)", "color": "rgb(0, 150, 150)"}}>
            Intex basseynlari Toshkentda
        </div>
        <div className='flex justify-center py-20'>
            <div className='text-2xl mx-9' style={{"width":"500px"}}>
                {`Intex basseynlari - bu butun oila uchun yoqimli dam olish uchun mo'ljallangan arzon,
                yuqori sifatli, ishonchli va ekologik toza mahsulotlar. Basseyn har qanday hovliga
                to'liq o'rnatilishi va yozda faol foydalanilishi mumkin. Basseyn sizga yorqin his-tuyg'ularni
                beradi va issiq yoz kunlarida sizni jaziramadan qutqaradi.`}
            </div>
            <div className='flex flex-col mx-9 text-2xl' style={{"width": "535px"}}>
                <p>
                    {`Intex Basseynlari afzalliklarning kengligi bilan ajralib turadi, quyida ulardan eng muhimlarini ajratib ko'rsatish mumkin:`}
                </p>
                <span className='flex items-center mt-4'><span className='mt-0.5'>{trueSVG}</span> <span>Chidamlilik oson</span></span>
                <span className='flex items-center'><span className='mt-0.5'>{trueSVG}</span> <span>{`O'rnatish uchun oson`}</span></span>
                <span className='flex items-center'><span className='mt-0.5'>{trueSVG}</span> <span>Chiroyli va yorqin ranglar</span></span>
                <span className='flex items-center'><span className='mt-0.5'>{trueSVG}</span> <span>Zamonaviy dizayn</span></span>
                <span className='flex items-center'><span className='mt-0.5'>{trueSVG}</span> <span>Yuqori sifatli</span></span>
            </div>
        </div>
    </div>
  )
}

export default Mean