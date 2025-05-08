import React, { useEffect, useRef, useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

export default function Landingpage() {
  const images = [
    "hero.webp",
    "hero2.jpg",
    "hero3.png"
  ];

  const testimonials = [
    { name: "Rahul Sharma", message: "The courses were extremely helpful. I landed my first job thanks to EduTeach!", image: "men1.jpg" },
    { name: "Ananya Singh", message: "Great learning platform. Highly recommended for tech enthusiasts!", image: "female1.jpg" },
    { name: "George David", message: "Amazing content and practical projects helped me gain real experience.", image: "men2.jpg" },
    { name: "Asif muhammed", message: "The courses were extremely helpful. I landed my first job thanks to EduTeach!", image: "male3.webp" },
    { name: "Shabaeer Muhammed", message: "Great learning platform. Highly recommended for tech enthusiasts!", image: "male4.jpg" },
    { name: "Stena Vargeese", message: "Amazing content and practical projects helped me gain real experience.", image: "female.avif" }
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [showOffer, setShowOffer] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [companyCount, setCompanyCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev + 3 >= testimonials.length ? 0 : prev + 3
      );
    }, 5000);

    const offerInterval = setInterval(() => {
      setShowOffer(true);
      setTimeout(() => setShowOffer(false), 5000);
    }, 1000);




    return () => {
      clearInterval(interval);
      clearInterval(testimonialInterval);
      clearInterval(offerInterval);
    };
  }, []);

  const companyRef = useRef(null);
  const studentRef = useRef(null);
  const ratingRef = useRef(null);
  const [isCounting, setIsCounting] = useState(false);

  const startCount = () => {
    if (!isCounting) {
      setIsCounting(true);
      const counterInterval = setInterval(() => {
        setCompanyCount((prev) => (prev < 100 ? prev + 1 : 100));
        setStudentCount((prev) => (prev < 10000 ? prev + 100 : 10000));
        setRatingCount((prev) => (prev < 5 ? prev + 0.1 : 5));
      }, 50);

      setTimeout(() => {
        clearInterval(counterInterval);
        setIsCounting(false);
      }, 4000);
    }
  };


  const handleMouseEnter = () => {
    startCount();
  };

  const handleScroll = () => {
    const companyPosition = companyRef.current.getBoundingClientRect().top;
    const studentPosition = studentRef.current.getBoundingClientRect().top;
    const ratingPosition = ratingRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (
      companyPosition < windowHeight &&
      studentPosition < windowHeight &&
      ratingPosition < windowHeight
    ) {
      startCount();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const courseRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#courses") {
      courseRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900  overflow-hidden">
      {/* Small Course Alert */}
      <AnimatePresence>
        {showOffer && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-lg shadow-lg z-50"
          >
            <p className="text-sm">🎉 Enroll now and get <strong>50% off</strong> on your first course!</p>
            <button
              className="mt-2 text-xs bg-white text-blue-600 px-2 py-1 rounded shadow-md hover:bg-gray-200"
              onClick={() => setShowOffer(false)}
            >
              Dismiss
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16 text-center relative h-[400px]">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={images[currentImage]}
            alt="Education banner"
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>
        
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold relative z-10"
        >
          Unlock Your Potential With Quality Education
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-4 text-lg relative z-10"
        >
          Learn in-demand skills and transform your career with our expert-led courses.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 relative z-10"
        >
          Get Started Today join us
        </motion.button>
      </header>


      {/* Courses Section */}
      <section ref={courseRef} id="course" className="py-12 bg-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-8 text-blue-900"
        >
          Our Courses
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 px-6">
          {[
            { name: "Python", img: "Python.webp" },
            { name: "Java", img: "java.png" },
            { name: "React", img: "react.png" },
            { name: "PHP", img: "php.jpg" },
            { name: "Data Science", img: "datascience.webp" },
            { name: "Business Analyst", img: "business.jpg" }
          ].map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-100 rounded-lg shadow-md"
            >
              <img
                src={course.img}
                alt={course.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{course.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

     {/* Testimonial Section */}
     <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-extrabold mb-8 text-blue-900">
          Our Alumni Testimonials
        </h2>
        <div className="overflow-hidden max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {testimonials.slice(currentTestimonial, currentTestimonial + 3).map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3"
                  />
                  <p className="text-gray-600 italic">
                    "{testimonial.message}"
                  </p>
                  <h4 className="text-blue-600 font-semibold mt-3">
                    - {testimonial.name}
                  </h4>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

    {/* Collaboration Section */}
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-extrabold mb-8 text-blue-900">
        Our Achievements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {/* ✅ Company Count Card */}
        <motion.div
          ref={companyRef}
          onMouseEnter={handleMouseEnter}
          className="p-6 bg-gray-100 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-xl"
        >
          <h3 className="text-xl font-bold text-gray-800">
            Companies Collaborated
          </h3>
          <p className="text-2xl font-semibold text-blue-600">
            {companyCount}+
          </p>
        </motion.div>

        {/* ✅ Student Count Card */}
        <motion.div
          ref={studentRef}
          onMouseEnter={handleMouseEnter}
          className="p-6 bg-gray-100 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-xl"
        >
          <h3 className="text-xl font-bold text-gray-800">
            Students Placed
          </h3>
          <p className="text-2xl font-semibold text-blue-600">
            {studentCount}+
          </p>
        </motion.div>

        {/* ✅ Rating Count Card */}
        <motion.div
          ref={ratingRef}
          onMouseEnter={handleMouseEnter}
          className="p-6 bg-gray-100 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-xl"
        >
          <h3 className="text-xl font-bold text-gray-800">Average Rating</h3>
          <p className="text-2xl font-semibold text-blue-600">
            {ratingCount.toFixed(1)} ⭐
          </p>
        </motion.div>
      </div>
    </section>


      {/* Contact Section */}
      <section id="contact" className="py-12 px-6 bg-gray-200 text-center relative">
        <img
          src="image1.jpg"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <h2 className="text-4xl font-extrabold mb-8 text-blue-900 ">Get In Touch</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Tech-Themed Info */}
          <div className="text-left max-w-md bg-white bg-opacity-80 p-6 rounded-2xl shadow-2xl border-t-4 border-blue-500">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">Why Choose Us?</h3>
            <p className="text-gray-600 leading-relaxed">
              Our platform offers world-class courses in Python, Java, React, and Data Science.
              We ensure practical learning with real-time projects.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Our mission is to empower students by providing top-notch education.
              Join us and step into the future of technology!
            </p>
          </div>

          {/* Enhanced Instant Message Form */}
          <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-2xl border-t-4 border-blue-500 transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Send us a message</h3>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 mb-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 mb-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows="3"
              placeholder="Your Message"
              className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              className="mt-3 px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-blue-900 transition-all"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>

     {/* footer */}
     <Footer/>
    </div>
  );
}
