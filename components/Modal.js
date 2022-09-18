import { motion } from 'framer-motion'
import React from 'react'

const exit_icon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="2.66431" y="6.10352e-05" width="41.4454" height="3.76776" rx="1.88388" transform="rotate(45 2.66431 6.10352e-05)" fill="#B9B9B9"/><rect y="29.3063" width="41.4454" height="3.76776" rx="1.88388" transform="rotate(-45 0 29.3063)" fill="#B9B9B9"/></svg>

function Modal(props) {
    const setModal = props.setModal
  return (
    <>
        <motion.dev 
            onClick={() => setModal("")}
            initial={{
               opacity: 0
              }}
            animate={{
               opacity: 1
              }}
            exit={{
               opacity: 0
            }}
            className="fixed h-screen w-screen z-10 top-0 left-0" 
            style={{"background": "rgba(0, 0, 0, 0.19)", "backdrop-filter": "blur(2px)"}}>
        </motion.dev>
        <motion.dev 
            initial={{
                opacity: 0,
                x: 0,
                y: 0,
                scale: 0.6,
              }}
            animate={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                transition: {
                    duration: 0.3,
                }
              }}
            exit={{
                opacity: 0,
                x: 0,
                y: 0,
                scale: 0.4,
                transition: {
                    duration: 0.2,
                }
              }}
            className="fixed top-0 left-0 right-0 bottom-0 z-10 m-auto rounded-2xl pt-9 pl-11 pb-11 pr-11" 
            style={{"max-width": "fit-content" ,"max-height": "fit-content", "background": "rgba(248, 248, 248, 1)"}}
        >
            <motion.dev
                initial={{
                    
                }}
                animate={{
                    
                }}
                className="relative"
            >
                <span onClick={() => setModal("")} className='absolute z-20 hover:cursor-pointer top-[-14px] right-[-12px]'>{exit_icon}</span>
                {props.children}
            </motion.dev>
        </motion.dev>
    </>
  )
}

export default Modal