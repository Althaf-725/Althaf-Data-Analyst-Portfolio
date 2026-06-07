import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
        >
          <div className="text-xs font-bold tracking-[0.2em] mb-12 md:mb-20 uppercase opacity-90">
           Let's Connect
          </div>

          <div className="flex flex-col gap-12 md:gap-16 w-full">
           <div className="grid md:grid-cols-2 gap-12">

  <div>
    <h2 className="text-4xl md:text-5xl font-black mb-8">
      Get In Touch
    </h2>

    <p className="text-lg text-white/90 leading-relaxed mb-8">
      I'm currently seeking Data Analyst Internship, Junior Data Analyst roles,
      and Business Intelligence opportunities. Feel free to reach out.
    </p>

    <div className="space-y-6">

      <div>
        <h3 className="text-sm uppercase tracking-widest text-white/70 mb-1">
          Email
        </h3>
        <p className="text-xl font-semibold">
          shaikalthaf0310@gmail.com
        </p>
      </div>

      <div>
        <h3 className="text-sm uppercase tracking-widest text-white/70 mb-1">
          Phone
        </h3>
        <p className="text-xl font-semibold">
          +91 6303590409
        </p>
      </div>

      <div>
        <h3 className="text-sm uppercase tracking-widest text-white/70 mb-1">
          Location
        </h3>
        <p className="text-xl font-semibold">
          Kurnool, Andhra Pradesh
        </p>
      </div>

    </div>
  </div>

  <div className="flex flex-col gap-6 justify-center">

    <a
      href="https://github.com/Althaf-725"
      target="_blank"
      rel="noreferrer"
      className="px-6 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-all"
    >
      GitHub Profile
    </a>

    <a
      href="https://www.linkedin.com/in/shaik-althaf-basha-data-analyst/"
      target="_blank"
      rel="noreferrer"
      className="px-6 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-all"
    >
      LinkedIn Profile
    </a>

    <a
      href="/resume.pdf"
      target="_blank"
      rel="noreferrer"
      className="px-6 py-4 bg-black border border-white rounded-xl font-bold hover:bg-white hover:text-black transition-all"
    >
      Download Resume
    </a>

  </div>

</div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
