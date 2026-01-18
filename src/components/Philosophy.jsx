import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Philosophy = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
    const itemVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="bg-ivory text-charcoal section-padding overflow-hidden">
            <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="container-narrow">
                <motion.div variants={itemVariants} className="text-center mb-24">
                    <span className="inline-block text-bronze uppercase tracking-ultra text-xs mb-8 font-medium">— Our Essence —</span>
                    <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
                        Where <span className="italic font-light">Light</span> Meets <span className="italic font-light">Flavor</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
                    <motion.div variants={itemVariants}>
                        <div className="line-bronze mb-10"></div>
                        <p className="text-2xl md:text-3xl font-serif font-light leading-relaxed mb-8 text-charcoal opacity-90">
                            At Auréole, we believe dining transcends sustenance. It is an <span className="text-bronze">orchestration of senses</span>—light, texture, aroma, and taste converging into moments of pure revelation.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-8">
                        <p className="text-lg font-light leading-relaxed opacity-70">
                            Chef Julian Marc draws from the sharp clarity of Nordic precision and the soulful warmth of Mediterranean tradition.
                        </p>
                        <div className="pt-8 border-t flex gap-16">
                            <div>
                                <span className="block text-4xl font-serif text-bronze mb-2">★★★</span>
                                <span className="text-xs uppercase tracking-wider opacity-50">Michelin Stars</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-serif text-bronze mb-2">19</span>
                                <span className="text-xs uppercase tracking-wider opacity-50">Gault Millau</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Philosophy;
