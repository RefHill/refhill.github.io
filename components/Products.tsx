import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Products = () => {
    const products = [
        {
            id: 'sofa',
            name: 'SOFA',
            tagline: 'Step on Foot Analyzer',
            description: 'An intelligent assistant for referees that automatically detects step-on-foot fouls. It analyzes match footage to objectively identify when a player steps on an opponent\'s foot, helping to ensure fair play and reduce game interruptions caused by long VAR reviews.',
            price: 'Coming Soon',
            image: '/images/sofa-logo.png',
            align: 'left'
        }
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
                                <div className="absolute inset-0 bg-gradient-to-b from-[#FF5722]/10 to-transparent opacity-20 blur-3xl rounded-full" />
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
                                    <h3 className="text-[#FF5722] font-semibold text-lg mb-2 tracking-wide uppercase">{product.name}</h3>
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
                                    <a href="#" className="group flex items-center gap-2 text-[#FF5722] hover:text-[#F4511E] transition-colors">
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
