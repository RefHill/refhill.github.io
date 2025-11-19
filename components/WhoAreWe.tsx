import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, ArrowUpRight } from 'lucide-react';

const WhoAreWe = () => {
    const team = [
        {
            name: 'Alex Morgan',
            role: 'CEO & Founder',
            bio: 'Visionary leader. Previously led AI research at DeepMind.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300',
            socials: { twitter: '#', linkedin: '#' },
            colSpan: 'md:col-span-2',
            bg: 'bg-zinc-900'
        },
        {
            name: 'Sarah Chen',
            role: 'CTO',
            bio: 'Neural network architect. 15 patents in computer vision.',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300',
            socials: { github: '#', linkedin: '#' },
            colSpan: 'md:col-span-1',
            bg: 'bg-zinc-800'
        },
        {
            name: 'Marcus Johnson',
            role: 'Head of Design',
            bio: 'Former Apple Industrial Designer. Obsessed with detail.',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300',
            socials: { twitter: '#', linkedin: '#' },
            colSpan: 'md:col-span-1',
            bg: 'bg-zinc-800'
        },
        {
            name: 'Emily Davis',
            role: 'Lead Engineer',
            bio: 'Full-stack wizard. Building the backbone of the metaverse.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300',
            socials: { github: '#', twitter: '#' },
            colSpan: 'md:col-span-2',
            bg: 'bg-zinc-900'
        },
    ];

    return (
        <section id="who-are-we" className="py-32 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
                    >
                        The Minds.
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="h-1 w-20 bg-white mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl leading-relaxed"
                    >
                        We are a collective of dreamers, engineers, and artists united by a single mission: to extend human perception.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${member.colSpan} group relative overflow-hidden rounded-3xl ${member.bg} p-8 hover:bg-zinc-800/80 transition-colors duration-500`}
                        >
                            <div className="flex flex-col h-full justify-between relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-20 h-20 rounded-full object-cover border-2 border-white/10 group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {member.socials.twitter && <a href={member.socials.twitter} className="p-2 bg-white/10 rounded-full hover:bg-white text-white hover:text-black transition-all"><Twitter className="w-4 h-4" /></a>}
                                        {member.socials.linkedin && <a href={member.socials.linkedin} className="p-2 bg-white/10 rounded-full hover:bg-white text-white hover:text-black transition-all"><Linkedin className="w-4 h-4" /></a>}
                                        {member.socials.github && <a href={member.socials.github} className="p-2 bg-white/10 rounded-full hover:bg-white text-white hover:text-black transition-all"><Github className="w-4 h-4" /></a>}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-1 group-hover:text-yellow-400 transition-colors">{member.name}</h3>
                                    <p className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">{member.role}</p>
                                    <p className="text-gray-300 leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative gradient */}
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-yellow-500/10 blur-3xl rounded-full group-hover:bg-yellow-500/20 transition-colors duration-500" />
                        </motion.div>
                    ))}

                    {/* Join Us Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-1 bg-yellow-600 rounded-3xl p-8 flex flex-col justify-between group cursor-pointer hover:bg-yellow-500 transition-colors"
                    >
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                                <ArrowUpRight className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold mb-2">Join the Team</h3>
                            <p className="text-yellow-100">We're always looking for exceptional talent.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhoAreWe;
