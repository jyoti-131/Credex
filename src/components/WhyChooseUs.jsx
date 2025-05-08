import { useState, useEffect } from "react";

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Optional: add intersection observer here for scroll animations
  }, []);
  
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      title: "Instant Payouts",
      description: "Receive payments within 24 hours once your license valuation is approved, with multiple secure payment options.",
      color: "from-yellow-400 to-orange-500",
      iconBg: "bg-yellow-100",
      delay: 100
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
      ),
      title: "Secure Process",
      description: "End-to-end encryption with enterprise-grade security protocols protecting your data and transactions.",
      color: "from-green-400 to-emerald-500",
      iconBg: "bg-green-100",
      delay: 200
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
        </svg>
      ),
      title: "Easy to Use",
      description: "Simple submission process with our intuitive interface, quick response, and hassle-free experience.",
      color: "from-blue-400 to-indigo-500",
      iconBg: "bg-blue-100",
      delay: 300
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      ),
      title: "Trusted by Professionals",
      description: "Join hundreds of IT managers and businesses who trust SoftSell for their software license reselling needs.",
      color: "from-purple-400 to-pink-500",
      iconBg: "bg-purple-100",
      delay: 400
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-50 rounded-full opacity-70 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full">Our Advantages</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Why Choose SoftSell</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a seamless experience for monetizing your unused software licenses with industry-leading security and reliability.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${feature.delay}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative z-10 h-full">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 h-full group transition-all duration-300 hover:shadow-xl">
                  <div className={`w-16 h-16 ${feature.iconBg} rounded-lg mb-6 flex items-center justify-center text-gray-800 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-blue-600">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  
                  {hoveredIndex === index && (
                    <div className="absolute bottom-6 right-6 h-2 w-2 bg-blue-600 rounded-full animate-ping"></div>
                  )}
                </div>
              </div>
              
              {/* Decorative gradient backdrop that appears on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl opacity-0 group-hover:opacity-5 transform scale-95 group-hover:scale-105 transition-all duration-300 blur-lg -z-10`}
                style={{ opacity: hoveredIndex === index ? 0.15 : 0 }}
              ></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA section */}
        <div className={`mt-16 text-center transition-all duration-1000 transform delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Unlock Your Software Value?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied customers who have already monetized their unused software licenses.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                  Get Your Free Quote
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}