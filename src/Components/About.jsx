import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FaBriefcase, FaSuitcase, FaHandshake, FaGlobe, FaBook, FaLaptopCode, FaUserGraduate, FaLightbulb, FaBullseye } from "react-icons/fa";
import { SiTcs, SiWipro } from "react-icons/si";
import { motion } from "framer-motion";
import Navbar from './Navbar';
import Footer from './Footer';
const data = [
    { year: '2002', students: 100 },
    { year: '2005', students: 500 },
    { year: '2010', students: 1500 },
    { year: '2015', students: 3000 },
    { year: '2020', students: 5000 },
    { year: '2025', students: 8000 },
];

export default function About() {
    const achievementVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.3, duration: 0.6 }
        })
    };
    return (
        <div>
            <Navbar />
            <h1 className='text-3xl text-blue-900 font-semibold p-2'>About Us - Edutech Pvt. Ltd</h1>
            <div className='p-4'>
                {/* About Section */}
                <div className='flex gap-5'>
                    <img
                        src="public/Images/about1.webp"
                        alt=""
                        className='size-80 w-1/2 rounded-lg shadow-md'
                    />
                    <p className='text-gray-600 text-xl'>
                        Established in 2002, Edutech Pvt. Ltd. has been a pioneering force in transforming
                        education through technology. Over the past two decades, we have built a solid reputation
                        as one of the most trusted educational institutes in Kerala, committed to delivering
                        quality education and empowering students to achieve academic and professional excellence.
                    </p>
                </div>

                {/* Our Journey Section */}
                <div className='grid grid-cols-2 gap-10 mt-10'>
                    <div>
                        <h3 className='text-2xl text-blue-900 font-semibold mb-2'>Our Journey</h3>
                        <p className='text-gray-600 text-xl'>
                            From humble beginnings in 2002, Edutech started as a small educational platform with a
                            vision to bridge the gap between traditional learning and modern technology. Over the
                            years, we have expanded our services to various educational sectors, offering practical
                            learning methods, skill development courses, career guidance, and corporate training
                            programs.

                            Today, Edutech Pvt. Ltd. is recognized as one of the leading educational institutes in
                            Kerala, known for our high academic standards, excellent faculty, and exceptional training
                            modules. Our institute has proudly shaped the careers of thousands of students, many of
                            whom now hold prominent positions in top multinational companies (MNCs) worldwide.
                        </p>
                    </div>

                    {/* Progress Chart */}
                    <div className='shadow-lg p-4 bg-white rounded-lg'>
                        <h3 className='text-2xl text-blue-900 font-semibold mb-4'>Our Growth Over the Years</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={data}>
                                <XAxis dataKey="year" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="students" fill="#4F46E5" barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Our Achievements Section */}
                <div className='grid grid-cols-2 gap-10 mt-10'>
                    {/* Left Side - Animated Flowchart */}
                    <div className='relative flex flex-col space-y-6'>
                        <div className='relative flex flex-col space-y-6'>
                            <div className='border-l-4 border-blue-700 relative'>
                                {[
                                    { year: "2002", text: "Founded Edutech Pvt. Ltd with just 100 students." },
                                    { year: "2010", text: "Crossed 10,000+ students enrollment mark." },
                                    { year: "2015", text: "Started partnerships with top MNCs." },
                                    { year: "2020", text: "Achieved 50,000+ alumni working globally." },
                                    { year: "2025", text: "Crossed 100,000+ students and global partnerships." }
                                ].map((achievement, index) => (
                                    <motion.div
                                        key={index}
                                        className='pl-4 flex flex-col space-y-1 mt-5 relative'
                                        custom={index}
                                        variants={achievementVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <motion.div
                                            className='w-4 h-4 bg-blue-700 rounded-full absolute -left-2'
                                            animate={{ scale: [0.8, 1.2, 1] }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        />
                                        <motion.h4
                                            className='text-lg font-semibold text-blue-800'
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {achievement.year}
                                        </motion.h4>
                                        <motion.p
                                            className='text-gray-600'
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {achievement.text}
                                        </motion.p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Side - Achievements List */}
                    <motion.div
                        className="p-6 bg-white rounded-xl shadow-md"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className='text-2xl text-blue-900 font-semibold mb-2'>Our Achievements</h3>
                        <ul className='text-gray-600 text-xl space-y-3'>
                            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>✅ Over 22 years of excellence in the educational industry.</motion.li>
                            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>✅ Trained more than 50,000 students across various educational streams.</motion.li>
                            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>✅ Collaborated with top corporate companies for recruitment and training.</motion.li>
                            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>✅ Strong network of renowned alumni working in top multinational companies.</motion.li>
                            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>✅ Partnerships with over 200+ reputed companies for industrial training.</motion.li>
                            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>✅ Recognized by major educational boards for providing world-class education.</motion.li>
                        </ul>
                    </motion.div>
                </div>

                {/* Our Aluminie */}
                <div className='flex '>
                    <div>
                        <h3 className='text-2xl text-blue-900 font-semibold mb-2'>Our Alumni Network</h3>
                        <p className='text-gray-600 text-xl'>
                            Our alumni network is one of our greatest strengths. We are proud to mention that many of our former students are now serving as:

                            <li> Software Engineers in top companies like Google, Microsoft, Amazon, TCS, Wipro, Infosys, etc.</li>
                            <li>Entrepreneurs running successful businesses and startups.</li>
                            <li>Government officials, professors, and researchers contributing to the nation's growth.</li>
                            <li>Professionals in over 15 countries, spreading the legacy of Edutech Pvt. Ltd..</li>
                        </p>
                    </div>
                    <div>
                        <img src="/public/Images/alumini1.jpg" alt="" />
                    </div>
                </div>
                <div className="flex flex-col items-center mt-10">
                    <h3 className="text-2xl text-blue-900 font-semibold mb-4">Our Corporate Collaborations</h3>

                    {/* Collaboration Icons */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-14 items-center text-blue-900 text-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Company Icons with Hover Effects */}
                        {[
                            { icon: <SiTcs />, label: "TCS" },
                            { icon: <FaBriefcase />, label: "Infosys" },
                            { icon: <FaSuitcase />, label: "Capgemini" },
                            { icon: <FaHandshake />, label: "Cognizant" },
                            { icon: <FaGlobe />, label: "Tech Mahindra" },
                            { icon: <SiWipro />, label: "Wipro" },
                        ].map((company, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center cursor-pointer hover:text-blue-700 transition-transform transform hover:scale-110"
                                whileHover={{ scale: 1.2 }}
                            >
                                {company.icon}
                                <span className="text-sm mt-1">{company.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <div className="mt-10">
                    <h3 className="text-2xl text-blue-900 font-semibold mb-6 text-center">Why Choose Us?</h3>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        
                    >
                        {[
                            { icon: <FaBook className="text-4xl text-blue-600" />, title: "22+ Years of Excellence", desc: "Providing quality education since 2002." },
                            { icon: <FaBriefcase className="text-4xl text-green-600" />, title: "High Placement Rates", desc: "Top MNCs hire our students with attractive packages." },
                            { icon: <FaLaptopCode className="text-4xl text-purple-600" />, title: "Modern Learning Methods", desc: "Technology-driven education for a better future." },
                            { icon: <FaGlobe className="text-4xl text-yellow-600" />, title: "Global Recognition", desc: "Recognized worldwide for our education and training." },
                            { icon: <FaHandshake className="text-4xl text-red-600" />, title: "Strong Industry Tie-Ups", desc: "Collaborations with 200+ companies for career growth." },
                            { icon: <FaUserGraduate className="text-4xl text-indigo-600" />, title: "Expert Faculty", desc: "Highly skilled mentors with real-world experience." },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex justify-center mb-3">{item.icon}</div>
                                <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                                <p className="text-gray-600 mt-2">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <div>
                    <div className="mt-10">
                        <h3 className="text-2xl text-blue-900 font-semibold text-center mb-6">Our Mission & Vision</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* Mission Card */}
                            <motion.div
                                className="bg-white p-6 rounded-t-xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <div className="flex justify-center mb-3">
                                    <FaBullseye className="text-4xl text-blue-700" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-800 text-center">Our Mission</h4>
                                <p className="text-gray-600 mt-2 text-center">
                                    To empower students with **technology-driven education**, equipping them with the skills
                                    and knowledge to excel in their academic and professional careers. We strive to create
                                    **innovative learning environments** that foster creativity, critical thinking, and lifelong success.
                                </p>
                            </motion.div>

                            {/* Vision Card */}
                            <motion.div
                                className="bg-white p-6 rounded-t-xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <div className="flex justify-center mb-3">
                                    <FaLightbulb className="text-4xl text-yellow-600" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-800 text-center">Our Vision</h4>
                                <p className="text-gray-600 mt-2 text-center">
                                    To be a **global leader in education**, bridging the gap between traditional learning and modern
                                    technology. Our vision is to transform the education sector by providing **quality, accessible,
                                    and innovative learning experiences**, creating future-ready professionals and leaders.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                </div>

                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
