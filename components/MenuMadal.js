import { motion } from 'framer-motion'
import React from 'react'

const exit_icon = <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none"><rect x="2.66431" y="6.10352e-05" width="41.4454" height="3.76776" rx="1.88388" transform="rotate(45 2.66431 6.10352e-05)" fill="#B9B9B9"/><rect y="29.3063" width="41.4454" height="3.76776" rx="1.88388" transform="rotate(-45 0 29.3063)" fill="#B9B9B9"/></svg>

function MenuModal(props) {
    const setModal = props.setModal
  return (
    <>
        <motion.dev 
            onClick={() => setModal(false)}
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
                x: -300,
                y: 0,
              }}
            animate={{
                x: 0,
                transition: {
                    duration: 0.5,
                }
              }}
            exit={{ 
                x: -300,
                transition: {
                    duration: 0.2,
                }
              }}
            className="fixed top-0 left-0 z-10 h-screen w-72" 
            style={{"background": "#009398"}}
        >
            <motion.dev
                initial={{
                    
                }}
                animate={{
                    
                }}
                className="relative w-full h-full"
            >
                {props.children}
            </motion.dev>
        </motion.dev>
    </>
  )
}

export default MenuModal