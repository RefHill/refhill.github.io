import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Products = () => {
    const products = [
        {
            id: 'vision-pro-x',
            name: 'Vision Pro X',
            tagline: 'Reality, reimagined.',
            description: 'The most advanced AR headset ever created. Featuring dual 8K micro-OLED displays, spatial audio, and a titanium alloy frame that disappears the moment you put it on.',
            price: 'From $999',
            image: '/images/vision-pro-x.png',
            align: 'left'
        },
        {
            id: 'vision-lens',
            name: 'Vision Lens',
            tagline: 'Invisible intelligence.',
            description: 'Smart contact lenses that overlay your digital life onto the physical world. Bio-compatible, all-day comfort, and powered by the heat of your eyes.',
            price: 'From $499',
            image: '/images/vision-lens.png',
            align: 'right'
        },
        {
            id: 'vision-watch',
            name: 'Vision Watch',
            tagline: 'Control at your fingertips.',
            description: 'The perfect companion. Control your Vision devices with subtle gestures. A holographic display that floats above your wrist.',
            price: 'From $299',
            image: '/images/vision-watch.png',
            align: 'left'
        },
    ];

    return (
        <section id="products" className="bg-black text-white py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        The Collection.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl text-gray-400 font-light"
                    >
                        Tools for the next generation of visionaries.
                    </motion.p>
                </div>

                <div className="space-y-40">
                    {products.map((product, index) => (
                        <div key={product.id} className={`flex flex-col ${product.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-24`}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent opacity-20 blur-3xl rounded-full" />
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="relative z-10 w-full h-auto drop-shadow-2xl rounded-2xl"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: product.align === 'left' ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex-1 space-y-8"
                            >
                                <div>
                                    <h3 className="text-yellow-500 font-semibold text-lg mb-2 tracking-wide uppercase">{product.name}</h3>
                                    <h4 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{product.tagline}</h4>
                                    <p className="text-xl text-gray-400 leading-relaxed font-light">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-8 pt-4">
                                    <span className="text-2xl font-medium text-white">{product.price}</span>
                                    <button className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
                                        Buy Now
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <a href="#" className="group flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors">
                                        Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
