import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Chef = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
    const itemVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } } };
    const imageVariants = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] } } };

    return (
        <section className="bg-charcoal text-ivory section-padding overflow-hidden">
            <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="container">
                <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
                    <motion.div variants={itemVariants} className="md:w-5/12">
                        <span className="text-bronze uppercase tracking-ultra text-xs mb-10 block">The Visionary</span>
                        <h2 className="text-5xl md:text-7xl font-serif font-light leading-tight mb-10">Chef <br /><span className="italic">Julian Marc</span></h2>
                        <div className="line-bronze mb-10"></div>

                        <blockquote className="text-2xl font-serif italic font-light text-bronze leading-relaxed mb-10 opacity-90">
                            "We don't cook ingredients—we capture the transient beauty of seasons and serve it with reverence."
                        </blockquote>

                        <p className="text-base font-light leading-relaxed opacity-60 mb-10">
                            With a lineage spanning Lyon's most decorated kitchens to London's avant-garde, Julian Marc brings Luminous Simplicity to every plate.
                        </p>

                        <div className="flex gap-12 pt-8 border-t opacity-80">
                            <div className="text-center">
                                <span className="text-bronze text-2xl block mb-1">★★★</span>
                                <span className="text-xs uppercase tracking-widest opacity-40">Michelin</span>
                            </div>
                            <div className="text-center">
                                <span className="text-bronze text-2xl block mb-1">19/20</span>
                                <span className="text-xs uppercase tracking-widest opacity-40">Gault Millau</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={imageVariants} className="md:w-7/12 relative group">
                        <div className="relative overflow-hidden">
                            <div
                                className="aspect-[3/4] bg-cover bg-center transition-slow"
                                style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop")',
                                    filter: 'grayscale(100%)',
                                    transition: 'filter 1.2s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                                onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 bg-bronze text-charcoal px-8 py-4">
                            <span className="text-xs uppercase tracking-widest font-medium">Paris · 2026</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Chef;
