import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Menu = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const courses = [
        { number: "01", title: "Amuse-Bouche", desc: "Heritage tomato, basil essence" },
        { number: "02", title: "Blue Fin Tuna", desc: "Soy-cured ginger, avocado" },
        { number: "03", title: "Hand-Dived Scallops", desc: "Cauliflower, brown butter" },
        { number: "04", title: "Wild Mushroom", desc: "Black truffle, aged parmesan" },
        { number: "05", title: "Highland Venison", desc: "Beetroot, juniper jus" },
        { number: "06", title: "Valrhona Chocolate", desc: "Caramel, hazelnut, gold" }
    ];

    const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
    const itemVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } };

    return (
        <section className="bg-charcoal text-ivory section-padding relative overflow-hidden">
            <div className="absolute left-1/2 top-0 h-full w-px bg-ivory opacity-5 hidden lg:block"></div>

            <div className="container">
                <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="max-w-4xl mx-auto">
                    <motion.div variants={itemVariants} className="text-center mb-24">
                        <span className="text-bronze uppercase tracking-ultra text-xs mb-8 block">Seasonal Tasting</span>
                        <h2 className="text-6xl md:text-8xl font-serif font-light">The Menu</h2>
                    </motion.div>

                    <div className="space-y-0">
                        {courses.map((course, index) => (
                            <motion.div key={index} variants={itemVariants} className="group border-t py-14 md:py-16 flex items-baseline gap-6 md:gap-12 cursor-default hover:bg-ivory hover:bg-opacity-5 transition-medium px-6 -mx-6">
                                <span className="text-bronze text-xs font-medium tracking-wider opacity-50 group-hover:opacity-100 transition-medium">{course.number}</span>
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-serif font-light mb-2 group-hover:text-bronze transition-medium">{course.title}</h3>
                                    <p className="text-sm font-light opacity-40 tracking-wide">{course.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div variants={itemVariants} className="text-center mt-20 pt-12 border-t">
                        <span className="block text-sm font-light opacity-40 mb-6">Eight Course Experience</span>
                        <span className="text-5xl md:text-6xl font-serif text-bronze">€245</span>
                        <span className="block text-xs uppercase tracking-widest opacity-30 mt-4">Per Person · Wine Pairing Available</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Menu;
