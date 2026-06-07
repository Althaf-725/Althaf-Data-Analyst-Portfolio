import React from "react";

const Projects = () => {
  const projects = [
  {
    title: "E-Commerce Sales Dashboard Using Advanced Excel",
    tech: "Advanced Excel, Pivot Tables, Power Query",
    description:
      "Created a dynamic dashboard using Excel tools for sales reporting, trend analysis, and business insights.",
    icon: "📈"
  },

  {
    title: "Customer Churn Prediction Using Machine Learning",
    tech: "Python, Pandas, Scikit-Learn, EDA",
    description:
      "Developed a machine learning model to predict customer churn through data cleaning, feature engineering, exploratory data analysis, and predictive modeling.",
    icon: "🧑🏻‍💼"
  },

  {
    title: "E-Commerce Sales Analysis Dashboard",
    tech: "Python, SQL, Power BI, Excel",
    description:
      "Built a dashboard to monitor sales performance, customer behavior, and product-level trends for data-driven decision making.",
    icon: "📊"
  },

  {
    title: "Deloitte Data Analytics Virtual Experience",
    tech: "Excel, SQL, Business Intelligence",
    description:
      "Completed Deloitte Australia Forage simulation involving data analysis, business reporting, and dashboard-driven insights.",
    icon: "💼"
  }
];

  return (
    <section
      id="projects"
      className="bg-black py-24 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">

  <span className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white">
    Featured Projects
  </span>

  <h2 className="text-5xl md:text-6xl font-black mt-6">
    My Projects
  </h2>

  <p className="text-gray-500 mt-4">
    Data Analytics • Machine Learning • Business Intelligence
  </p>

</div>

        <div className="grid md:grid-cols-2 gap-8">{projects.map((project, index) => (
<div
key={index}
data-aos="fade-up"
data-aos-delay={index * 100}
className="
group
bg-white/10
backdrop-blur-xl
border border-white/20
rounded-[2rem]
p-8
transition-all
duration-500
hover:scale-105
hover:border-red-400
hover:shadow-[0_0_40px_rgba(255,42,42,0.35)]
"
>

  <div className="flex justify-between items-start mb-6">
    <span className="text-red-500 text-5xl font-black">
      0{index + 1}
    </span>

    <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-2xl">
  {project.icon}
</div>
  </div>

  <h3 className="text-2xl font-bold text-white mb-4">
    {project.title}
  </h3>

  <p className="text-red-500 font-semibold mb-4">
    {project.tech}
  </p>

  <p className="text-white-600 leading-relaxed mb-6">
    {project.description}
  </p>

  <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 rounded-full bg-[#ff2a2a] text-white font-semibold hover:scale-105 transition-all duration-300"
>
  View Project →
</a>

</div>

))}

</div>
          
        </div>

    
    </section>
  );
};

export default Projects;