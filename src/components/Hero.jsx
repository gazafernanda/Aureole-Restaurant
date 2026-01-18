import { motion } from 'framer-motion';
import RevealText from './RevealText';

const Hero = () => {
    const particles = [
        { x: '15%', y: '25%', size: 3, delay: 0 },
        { x: '85%', y: '30%', size: 2, delay: 0.5 },
        { x: '75%', y: '70%', size: 4, delay: 1 },
        { x: '20%', y: '75%', size: 2, delay: 1.5 },
    ];

    return (
        <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-charcoal">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'linear-gradient(to bottom, rgba(26, 38, 38, 0.3), rgba(26, 38, 38, 0.85)), url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop")',
                    opacity: 0.9
                }}
            />

            {particles.map((particle, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full pointer-events-none"
                    style={{ left: particle.x, top: particle.y, width: particle.size, height: particle.size, backgroundColor: 'rgba(196, 149, 106, 0.4)' }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1.5, 0.5], y: [0, -30, 0] }}
                    transition={{ duration: 6, delay: particle.delay + 2, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}

            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-16 left-16 w-px h-24 origin-top hidden md:block"
                style={{ background: 'linear-gradient(to bottom, var(--color-bronze), transparent)' }}
            />
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 2.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-16 left-16 h-px w-24 origin-left hidden md:block"
                style={{ background: 'linear-gradient(to right, var(--color-bronze), transparent)' }}
            />

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 text-center px-6"
            >
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1.5 }}
                    className="text-bronze uppercase tracking-ultra text-xs mb-12 block font-light"
                >
                    Michelin Gastronomy
                </motion.span>

                <h1 className="text-7xl md:text-9xl uppercase tracking-widest mb-10 font-serif leading-none opacity-95 overflow-hidden">
                    <RevealText delay={0.6}>Auréole</RevealText>
                </h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 1.2 }}
                    className="flex items-center justify-center gap-8"
                >
                    <div className="w-16 h-px bg-bronze opacity-30"></div>
                    <p className="font-serif italic text-base md:text-xl opacity-50 tracking-wider font-light">
                        The Art of Luminous Dining
                    </p>
                    <div className="w-16 h-px bg-bronze opacity-30"></div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
