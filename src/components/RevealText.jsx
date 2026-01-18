import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RevealText = ({ children, delay = 0, className = '' }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const characters = typeof children === 'string' ? children.split('') : [];

    return (
        <span ref={ref} className={`inline-block whitespace-nowrap overflow-hidden ${className}`}>
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={inView ? { y: 0 } : { y: "100%" }}
                    transition={{
                        duration: 1.0,
                        delay: delay + index * 0.03,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block"
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </span>
    );
};

export default RevealText;
