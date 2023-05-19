import { motion } from "framer-motion";

/*Mejor estructura: Crear una carpeta UTILS solamente para configurar la animación y que esta se aplique al componente*/ 

export const ScrollAnimation = ({children, orientation}:scrollAnimation) => {

    return (
        <motion.div className='animatedBox-container'
            initial={{x:0}}
            whileInView={orientation == 'right' ? {x:300} : {x:-300}}
            transition={
                {
                    duration: 2,
                    type: "spring", //tween, spring, inertia
                    bounce: 0.4,
                }
            }
        >
            <>{children}</>
        </motion.div>
    )
}