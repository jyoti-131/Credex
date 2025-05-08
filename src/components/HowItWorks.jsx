import { useState, useEffect } from "react";

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto cycle through steps every 4 seconds
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  const steps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      ),
      title: "Submit Your License",
      description: "Complete our simple form with your license details. We support all major software providers including Microsoft, Adobe, and AutoCAD.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Receive Your Valuation",
      description: "Our experts evaluate your license and provide the best market rate within 24 hours, ensuring you get maximum value for your asset.",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
        </svg>
      ),
      title: "Get Paid Instantly",
      description: "Accept our offer and receive your payment through your preferred method - bank transfer, PayPal, or cryptocurrency - typically within 48 hours.",
      color: "from-green-400 to-green-600"
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full filter blur-3xl opacity-70 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-indigo-50 rounded-full filter blur-3xl opacity-60 transform -translate-x-1/3 translate-y-1/3"></div>
        
        {/* Connection lines pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotGrid)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined 3-step process makes it easy to convert your unused software licenses into cash quickly and securely.
          </p>
        </div>
        
        {/* Process steps with connecting line */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-indigo-300 to-green-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div 
                  className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-8 h-full relative ${
                    activeStep === index ? 'ring-2 ring-blue-500 shadow-xl transform scale-105' : 'hover:shadow-xl hover:translate-y--1'
                  } transition-all duration-300`}
                >
                  {/* Step number bubble */}
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center border-4 border-white">
                    <span className={`text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                      {index + 1}
                    </span>
                  </div>
                  
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} mx-auto mb-6 flex items-center justify-center text-white shadow-lg`}>
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  {/* Active indicator */}
                  {activeStep === index && (
                    <div className="absolute bottom-4 right-4 flex items-center text-blue-500 text-sm font-medium">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                      Active
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom action strip */}
        <div className={`mt-16 transition-all duration-1000 transform delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-800">Ready to get started?</h3>
              <p className="text-gray-600">It takes less than 5 minutes to submit your license information.</p>
            </div>
            
            <div className="flex space-x-4">
              <button className="bg-white text-blue-600 border border-blue-200 px-5 py-2 rounded-lg shadow-sm hover:shadow transition-all">
                Learn More
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all font-medium">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}