import { motion } from "framer-motion"

function Navbar() {
  const navAnimate = {
    hidden:{
      scaleX:0,
    },
    show:{
      scaleX:1,
      transition:{
        duration:0.4,
        ease:'easeOut'
      }
    },
    exit:{
      width:0,
      transition:{
        delay:0.4
      }
    }
  }
  const parentImg = {
    hidden:{
      opacity:0,
    },
    show:{
      opacity:1,
      transition:{
        staggerChildren:0.4,
        delayChildren:0.5
      }
    },
    exit:{
      opacity:0
    },
   
  }
  const coverImg = {
    hidden:{
      height:"100%"
    },
    show:{
      height:0,
      transition:{
        duration:0.2
      }
    },
    exit:{
      height:"100%",
      transition:{
        duration:0.4,
        ease:"easeOut"
      }
    }
  }
  const animateLink = {
    hidden:{},
    show:{
      transition:{
        staggerChildren:0.2,
        delayChildren:1.5
      }
    },
  }
  const linkStagger = {
    hidden:{
      opacity: 0,
      y:30,
    },
    show:{
      opacity: 1,
      y:0,
      transition:{
        ease:'easeInOut'
      }
    },
  }

  return (
      <motion.nav 
        key="box"
        variants={navAnimate} 
        initial="hidden" 
        animate="show" 
        exit="exit" 
        className='fixed top-0 left-0 h-screen w-screen bg-[#242424] z-50 transform origin-right' 
      >
        <div className="relative w-full h-full">
          <motion.div variants={parentImg} initial="hidden" animate="show" exit="exit">
            <motion.div className='absolute left-[100px] top-[100px] w-[300px] transform origin-top'>
              <motion.div className="bg-[#242424] w-full h-full absolute top-0 left-0" variants={coverImg} />
              <img src="/img/img-1.webp" alt="image navbar" className="object-cover" />
            </motion.div>
            <motion.div className='absolute right-[100px] top-[80px] w-[200px] transform origin-top' >
              <motion.div className="bg-[#242424] w-full h-full absolute top-0 left-0" variants={coverImg} />
              <img src="/img/img-2.webp" alt="image navbar" className="object-cover" />
            </motion.div>
            <motion.div className='absolute left-[130px] bottom-[40px] w-[250px] transform origin-top' >
              <motion.div className="bg-[#242424] w-full h-full absolute top-0 left-0" variants={coverImg} />
              <img src="/img/img-3.webp" alt="image navbar"  className="object-cover" />
            </motion.div>
            <motion.div className='absolute right-[50px] bottom-[40px] w-[300px] transform origin-top' >
              <motion.div className="bg-[#242424] w-full h-full absolute top-0 left-0" variants={coverImg} />
              <img src="/img/img-4.webp" alt="image navbar" className="object-cover" />
            </motion.div>
          </motion.div>
          <motion.ul className='h-full flex flex-col items-center justify-center overflow-hidden' variants={animateLink} initial="hidden" animate="show">
            <motion.li className='mb-2 text-yellow-500 hover:text-[#eaeaea] transition-colors ease-in overflow-hidden' variants={linkStagger}>
              <motion.a href="#" className='text-5xl font-semibold'>Home</motion.a>
            </motion.li>
            <motion.li className='mb-2 text-yellow-500 hover:text-[#eaeaea] transition-colors ease-in overflow-hidden' variants={linkStagger}>
              <motion.a href="#" className='text-5xl font-semibold'>Product</motion.a>
            </motion.li>
            <motion.li className='mb-2 text-yellow-500 hover:text-[#eaeaea] transition-colors ease-in overflow-hidden' variants={linkStagger}>
              <motion.a href="#" className='text-5xl font-semibold'>Portfolio</motion.a>
            </motion.li>
            <motion.li className='mb-2 text-yellow-500 hover:text-[#eaeaea] transition-colors ease-in overflow-hidden' variants={linkStagger}>
              <motion.a href="#" className='text-5xl font-semibold'>About</motion.a>
            </motion.li>
            <motion.li className='mb-2 text-yellow-500 hover:text-[#eaeaea] transition-colors ease-in overflow-hidden' variants={linkStagger}>
              <motion.a href="#" className='text-5xl font-semibold'>Contact</motion.a>
            </motion.li>
          </motion.ul>
        </div>
      </motion.nav>
      
  )
}

export default Navbar