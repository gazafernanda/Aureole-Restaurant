import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-charcoal text-ivory py-20 border-t" style={{ borderColor: 'rgba(250, 248, 245, 0.05)' }}>
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <h2 className="text-4xl uppercase tracking-widest font-serif mb-3">Auréole</h2>
                        <p className="text-xs uppercase tracking-widest opacity-30">© 2026 Auréole Gastronomie · Luminous Simplicity</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="flex gap-10"
                    >
                        {['Instagram', 'Michelin', 'Privacy'].map((link, index) => (
                            <a key={index} href="#" className="text-xs uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-bronze transition-medium">{link}</a>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mt-16 h-px origin-left"
                    style={{ background: 'linear-gradient(to right, transparent, var(--color-bronze), transparent)', opacity: 0.2 }}
                />
            </div>
        </footer>
    );
};

export default Footer;
