import { useState, useEffect } from "react";

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    // Animation on mount
    setIsVisible(true);
    
    // Automatic rotation of highlighted testimonial
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const testimonials = [
    {
      name: "Aarav Patel",
      role: "IT Manager",
      company: "TechNova",
      message: "SoftSell made it incredibly easy to sell our unused licenses. The process was fast and the payout was immediate!",
      avatar: "A",
    },
    {
      name: "Meera Singh",
      role: "Founder",
      company: "InnoSoft",
      message: "I was skeptical at first, but SoftSell exceeded my expectations. Totally hassle-free and secure!",
      avatar: "M",
    },
    {
      name: "Rajan Kumar",
      role: "CFO",
      company: "GlobalTech",
      message: "We recovered over $50,000 from licenses we weren't using. The ROI is unbeatable and the process was seamless.",
      avatar: "R",
    },
    {
      name: "Elena Martinez",
      role: "Head of Operations",
      company: "InnovateCorp",
      message: "SoftSell provided the most competitive valuation in the market and handled everything professionally from start to finish.",
      avatar: "E",
    },
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-100 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses of all sizes to maximize the value of their unused software licenses.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2 relative">
          {/* Featured testimonial */}
          <div className={`col-span-1 lg:col-span-1 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 h-full relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full transform translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full transform -translate-x-10 translate-y-10"></div>
              
              <div className="relative z-10">
                <svg className="h-12 w-12 text-blue-300 opacity-50 mb-6" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8c-2.2 0-4 1.8-4 4v10h10V12h-6c0-1.1 0.9-2 2-2h2V8h-4zm14 0c-2.2 0-4 1.8-4 4v10h10V12h-6c0-1.1 0.9-2 2-2h2V8h-4z"/>
                </svg>
                
                <blockquote className="text-xl md:text-2xl leading-relaxed text-white font-light mb-8">
                  "We've recovered over <span className="font-bold">$120,000</span> worth of value from dormant software licenses in just 3 months. The SoftSell platform is truly a game-changer for IT asset management."
                </blockquote>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    J
                  </div>
                  <div className="ml-4">
                    <div className="text-white font-semibold">Jennifer Lee</div>
                    <div className="text-blue-200">CIO, Enterprise Solutions Inc.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial grid */}
          <div className="col-span-1 lg:col-span-1 space-y-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 transition-all duration-500 ${
                  activeIndex === index 
                    ? 'transform scale-105 border-blue-200 shadow-xl' 
                    : 'opacity-70 hover:opacity-100 hover:shadow-md'
                } ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
                onClick={() => handleDotClick(index)}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-medium ${
                      ['bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-green-500'][index % 4]
                    }`}>
                      {testimonial.avatar}
                    </div>
                  </div>
                  
                  <div className="ml-4 flex-1">
                    <p className="text-gray-700 mb-3">{testimonial.message}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                      </div>
                      
                      {activeIndex === index && (
                        <div className="h-3 w-3 bg-blue-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Pagination dots */}
            <div className="flex justify-center space-x-2 pt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index ? 'w-6 bg-blue-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats/Trust indicators */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 transform delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "$12M+", label: "Value Recovered" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "24hrs", label: "Average Payout Time" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-lg bg-white bg-opacity-70 shadow-sm border border-gray-100">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}