import Image from 'next/image'
import React from 'react'

const trueSVG = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><g clipPath="url(#clip0_978_43)"><path d="M12.5 24.2188C18.9721 24.2188 24.2188 18.9721 24.2188 12.5C24.2188 6.02791 18.9721 0.78125 12.5 0.78125C6.02791 0.78125 0.78125 6.02791 0.78125 12.5C0.78125 18.9721 6.02791 24.2188 12.5 24.2188Z" fill="#009398"/><path d="M17.9688 5.46875L9.76562 13.9062L7.03125 11.0938L4.29688 13.9062L9.76562 19.5312L20.7031 8.28125L17.9688 5.46875Z" fill="white"/></g><defs><clipPath id="clip0_978_43"><rect width="25" height="25" fill="white"/></clipPath></defs></svg>

function Mean() {
  return (
    <div style={{"backgroundColor": "#f0f0f0"}}>
        <div className='text-center text-5xl text-white font-bold py-5 h-24 mb-20' style={{"backgroundColor":  "rgb(0, 170, 170)", "boxShadow": "0 10px 10px rgba(0, 0, 0, 0.25)"}}>
            Надувной бассейн
        </div>
        <div className='flex justify-center flex-wrap h-auto mb-20 mx-auto' style={{"backgroundColor": "#f0f0f0", "maxWidth": "1150px"}}>
            <div className="relative overflow-hidden pt-12 m-5 pl-8 pb-7 bg-white rounded-b-3xl  rounded-r-3xl drop-shadow-lg" style={{"width": "340px"}}>
                <div className='absolute top-0 left-0 text-white font-semibold text-md pb-0.5 px-4 rounded-br-xl' style={{"background": "rgba(19, 157, 75, 1)"}}>Рекомендуем</div>
                <div className='font-bold text-xl text-center mr-8' style={{"color": "rgb(0, 150, 150)"}}>Metal ramka</div>
                <Image
                    src="/product_img.jpg"
                    alt=""
                    width={11}
                    height={5}
                    layout="responsive"
                    priority={true}
                    objectFit='cover'
                />
                <div className='flex justify-between mt-4 items-end relative p-r-8'>
                    <div className='w-full'>
                        <span className='text-md text-gray-400 relative font-light'>
                            <span className='absolute h-0.5 w-full bg-red-500 rotate-6 mt-3'></span>
                            1.400.000 сум
                        </span>
                        <div className='text-xl font-bold' style={{"marginTop": "-7px"}}>1.090.000 сум</div>
                    </div>
                    <span className='absolute bottom-0 right-0 h-7 px-5 rounded-tr-xl rounded-bl-xl font-semibold mr-9 hover:cursor-pointer' style={{"backgroundColor": "rgba(255, 230, 0, 1)"}}>
                        Заказать
                    </span>
                </div>
            </div>
        </div>
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