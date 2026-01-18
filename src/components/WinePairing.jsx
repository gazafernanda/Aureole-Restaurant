import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WinePairing = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 1.1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const featuredWines = [
        { region: "Burgundy", wine: "Domaine de la Romanée-Conti", year: "2019" },
        { region: "Piedmont", wine: "Giacomo Conterno Barolo", year: "2017" },
        { region: "Wachau", wine: "F.X. Pichler Grüner Veltliner", year: "2021" }
    ];

    return (
        <section className="bg-ivory text-charcoal section-padding overflow-hidden">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="container"
            >
                <div className="flex flex-col md:flex-row items-start gap-16 md:gap-24">
                    {/* Content */}
                    <motion.div variants={itemVariants} className="md:w-5/12">
                        <span className="text-bronze uppercase tracking-ultra text-xs mb-10 block">
                            The Cellar
                        </span>
                        <h2 className="text-5xl md:text-7xl font-serif font-light leading-tight mb-10">
                            Liquid <br />
                            <span className="italic">Poetry</span>
                        </h2>
                        <div className="line-bronze mb-10"></div>
                        <p className="text-xl font-light leading-relaxed opacity-70 mb-8">
                            Our Master Sommelier curates a living archive of European viticulture—
                            from the sun-drenched Wachau slopes to the misty valleys of Barolo.
                        </p>
                        <p className="text-base font-light leading-relaxed opacity-50 mb-10">
                            Each wine in our collection is selected not merely for its pedigree, but for its
                            ability to elevate and illuminate the flavors on your plate. We believe the perfect
                            pairing transforms a meal into a symphony.
                        </p>

                        {/* Quote */}
                        <motion.blockquote
                            variants={itemVariants}
                            className="border-l-2 pl-6 mb-12 opacity-80"
                            style={{ borderColor: 'var(--color-bronze)' }}
                        >
                            <p className="text-lg font-serif italic leading-relaxed mb-4">
                                "A great wine is not merely tasted—it is experienced. It whispers
                                of its terroir, its seasons, its maker's soul."
                            </p>
                            <cite className="text-xs uppercase tracking-widest opacity-50 not-italic">
                                — Mathieu Laurent, Master Sommelier
                            </cite>
                        </motion.blockquote>

                        {/* Stats Grid */}
                        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8 border-t">
                            <div>
                                <span className="text-4xl font-serif text-bronze block mb-2">800+</span>
                                <span className="text-[10px] uppercase tracking-wider opacity-50">Labels</span>
                            </div>
                            <div>
                                <span className="text-4xl font-serif text-bronze block mb-2">12</span>
                                <span className="text-[10px] uppercase tracking-wider opacity-50">Regions</span>
                            </div>
                            <div>
                                <span className="text-4xl font-serif text-bronze block mb-2">8</span>
                                <span className="text-[10px] uppercase tracking-wider opacity-50">Course Pairing</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Image + Featured Wines */}
                    <motion.div variants={imageVariants} className="md:w-7/12">
                        {/* Main Image */}
                        <div className="relative overflow-hidden mb-12">
                            <div
                                className="aspect-[4/5] md:aspect-[4/3] bg-cover bg-center transition-slow hover:scale-105"
                                style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop")'
                                }}
                            />
                            {/* Decorative frames */}
                            <div className="absolute -top-4 -left-4 w-20 h-20 border-l border-t opacity-20 hidden lg:block" style={{ borderColor: 'var(--color-charcoal)' }}></div>
                            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r border-b opacity-30 hidden lg:block" style={{ borderColor: 'var(--color-bronze)' }}></div>
                        </div>

                        {/* Featured Wines */}
                        <motion.div variants={itemVariants}>
                            <span className="text-bronze uppercase tracking-widest text-[10px] mb-6 block">
                                Featured Selections
                            </span>
                            <div className="space-y-0">
                                {featuredWines.map((wine, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-baseline py-4 border-b group cursor-default hover:bg-charcoal hover:bg-opacity-5 transition-medium px-4 -mx-4"
                                        style={{ borderColor: 'rgba(26, 38, 38, 0.1)' }}
                                    >
                                        <div>
                                            <span className="text-xs uppercase tracking-wider text-bronze opacity-60 mr-4">
                                                {wine.region}
                                            </span>
                                            <span className="font-serif text-lg group-hover:text-bronze transition-medium">
                                                {wine.wine}
                                            </span>
                                        </div>
                                        <span className="text-sm opacity-40">{wine.year}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Animated Wine Gallery */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-16 grid grid-cols-3 gap-4"
                        >
                            {[
                                { img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400", label: "Burgundy" },
                                { img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400", label: "Champagne" },
                                { img: "https://images.unsplash.com/photo-1567529692333-de9fd6772897?w=400", label: "Barolo" }
                            ].map((wine, index) => (
                                <motion.div
                                    key={index}
                                    className="relative overflow-hidden group cursor-pointer"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="aspect-[3/4] overflow-hidden">
                                        <motion.div
                                            className="w-full h-full bg-cover bg-center"
                                            style={{ backgroundImage: `url("${wine.img}")` }}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        />
                                    </div>
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent p-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <span className="text-[10px] uppercase tracking-widest text-ivory">{wine.label}</span>
                                    </motion.div>
                                    {/* Animated border on hover */}
                                    <motion.div
                                        className="absolute inset-0 border-2 border-transparent group-hover:border-bronze/30 transition-medium pointer-events-none"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div variants={itemVariants} className="mt-10 text-right">
                            <a href="#" className="inline-flex items-center gap-3 text-xs uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-bronze transition-medium group">
                                View Full Wine List
                                <span className="group-hover:translate-x-2 transition-medium">→</span>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default WinePairing;
