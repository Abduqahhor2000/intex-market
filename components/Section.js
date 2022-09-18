import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Modal from './Modal'
import { useState } from 'react'
import Order from './modalContent/Order'
import {AnimatePresence} from "framer-motion"

function Section({category}) {
    const lang = useSelector(state => state.intex.market.lang)
    const products = useSelector(state => state.intex.market.products)
    const [product, setProduct] = useState("")

  return (
    <>
        <div className='relative text-center text-5xl text-white font-bold py-5 h-24 mb-20' style={{"backgroundColor":  "rgb(0, 170, 170)", "boxShadow": "0 10px 10px rgba(0, 0, 0, 0.25)"}}>
            <div id={category.id} className="w-full absolute bottom-[172px] duration-300"></div>
            {category.name_uz}
        </div>
        <div className='flex justify-center flex-wrap h-auto mb-20 mx-auto' style={{"backgroundColor": "#f0f0f0", "maxWidth": "1150px"}}>
            {
                products.map(product => {
                    if(product.category_id !== category.id){
                        return;
                    } 
                    return( 
                        <div key={product.id} className="relative overflow-hidden pt-12 m-5 pl-8 pb-7 bg-white rounded-b-3xl  rounded-r-3xl drop-shadow-lg" style={{"width": "340px"}}>
                            {
                                product.status_id === 1 ? <div className='absolute top-0 left-0 text-white font-semibold text-md pb-0.5 px-4 rounded-br-xl' style={{"background": `rgba(38, 177, 69, 1)`}}>{product.status_uz}</div> 
                              : product.status_id === 2 ? <div className='absolute top-0 left-0 text-white font-semibold text-md pb-0.5 px-4 rounded-br-xl' style={{"background": `rgba(255, 214, 0, 1)`}}>{product.status_uz}</div> 
                              : product.status_id === 3 ? <div className='absolute top-0 left-0 text-white font-semibold text-md pb-0.5 px-4 rounded-br-xl' style={{"background": `rgba(237, 32, 32, 1)`}}>{product.status_uz}</div> 
                              : null
                            }
                            <div className='absolute top-0 left-0 text-white font-semibold text-md pb-0.5 px-4 rounded-br-xl' style={{"background": `${product.status_id === 2 ? "rgba(255, 214, 0, 1)" : product.status_id === 1 ? "rgba(38, 177, 69, 1)" : "rgba(237, 32, 32, 1)"}`}}>{product.status_uz}</div>
                            <div className='font-bold text-xl text-center mr-8' style={{"color": "rgb(0, 150, 150)"}}>{product.frame_uz}</div>
                            <Image
                                src={product.image}
                                alt=""
                                width={11}
                                height={5}
                                layout="responsive" 
                                objectFit='cover'
                            />
                            <div className='flex justify-between mt-4 items-end relative p-r-8'>
                                <div className='w-full'>
                                    <span className='text-md text-gray-400 relative font-light'>
                                        <span className='absolute h-0.5 w-full bg-red-500 rotate-6 mt-3'></span>
                                        {product.price} {`so'm`}
                                    </span>
                                    <div className='text-xl font-bold' style={{"marginTop": "-7px"}}>{product.sale_price} {`so'm`}</div>
                                </div>
                                <span onClick={() => setProduct(product)} className='absolute bottom-0 right-0 h-7 px-5 rounded-tr-xl rounded-bl-xl font-semibold mr-9 hover:cursor-pointer' style={{"backgroundColor": "rgba(255, 230, 0, 1)"}}>
                                    Заказать
                                </span>
                            </div>
                        </div> 
                    )
                })
            }
        </div>
        <AnimatePresence>
            {
                product ? <Modal setModal={setProduct}>
                            <Order product={product}/>
                          </Modal>
                        : null
            }
        </AnimatePresence>
       
       
    </>
  )
}

export default Section