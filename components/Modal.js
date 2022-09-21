import { motion } from 'framer-motion'
import React from 'react'

const exit_icon = <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none"><rect x="2.66431" y="6.10352e-05" width="41.4454" height="3.76776" rx="1.88388" transform="rotate(45 2.66431 6.10352e-05)" fill="#B9B9B9"/><rect y="29.3063" width="41.4454" height="3.76776" rx="1.88388" transform="rotate(-45 0 29.3063)" fill="#B9B9B9"/></svg>

function Modal(props) {
    const setModal = props.setModal
  return (
    <>
        <motion.div 
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
            style={{"background": "rgba(0, 0, 0, 0.19)", "backdropFilter": "blur(2px)"}}>
        </motion.div>
        <motion.div 
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
                    duration: 0.2,
                }
              }}
            exit={{
                opacity: 0,
                x: 0,
                y: 0,
                scale: 0.4,
                transition: {
                    duration: 0.1,
                }
              }}
            className="fixed top-0 left-0 right-0 bottom-0 z-10 m-auto rounded-2xl pt-9 pl-11 pb-6 pr-11" 
            style={{"maxWidth": "fit-content" ,"maxHeight": "fit-content", "background": "rgba(248, 248, 248, 1)"}}
        >
            <motion.div
                initial={{
                    
                }}
                animate={{
                    
                }}
                className="relative"
            >
                <span onClick={() => setModal("")} className='absolute top-[-20px] right-[-30px] xl:top-0 xl:right-0 z-20 w-5 h-5 xl:w-8 xl:h-8 hover:cursor-pointer'>{exit_icon}</span>
                {props.children}
            </motion.div>
        </motion.div>
    </>
  )
}

export default Modal