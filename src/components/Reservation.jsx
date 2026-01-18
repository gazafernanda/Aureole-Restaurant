import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Reservation = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
    const itemVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } } };

    return (
        <section className="bg-ivory text-charcoal section-padding overflow-hidden">
            <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="container text-center">
                <motion.div variants={itemVariants} className="mb-24">
                    <span className="text-bronze uppercase tracking-ultra text-xs mb-12 block">Join the Experience</span>
                    <h2 className="text-6xl md:text-8xl font-serif font-light leading-none mb-16">
                        An Evening of<br /><span className="italic">Pure Revelation</span>
                    </h2>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-charcoal text-ivory px-16 py-6 uppercase tracking-widest text-xs font-light hover:bg-bronze transition-medium"
                    >
                        Request a Table
                    </motion.button>
                </motion.div>

                <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto pt-16 border-t">
                    <div className="group cursor-default">
                        <span className="text-bronze text-xs uppercase tracking-widest block mb-4 group-hover:opacity-100 opacity-60 transition-medium">Location</span>
                        <p className="text-lg font-serif font-light leading-relaxed">127 L'avenue des Étoiles<br />Paris, 75001</p>
                    </div>
                    <div className="group cursor-default">
                        <span className="text-bronze text-xs uppercase tracking-widest block mb-4 group-hover:opacity-100 opacity-60 transition-medium">Hours</span>
                        <p className="text-lg font-serif font-light leading-relaxed">Tue — Sat · 18:30 — 23:00<br />Closed Sun & Mon</p>
                    </div>
                    <div className="group cursor-default">
                        <span className="text-bronze text-xs uppercase tracking-widest block mb-4 group-hover:opacity-100 opacity-60 transition-medium">Contact</span>
                        <p className="text-lg font-serif font-light leading-relaxed">+33 (0) 1 45 67 89 00<br />concierge@aureole.paris</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Reservation;
