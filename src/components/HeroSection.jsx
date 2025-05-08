import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set small delay to ensure smooth animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-900 text-white py-24 md:py-32 px-4 md:px-6">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          <div className={`text-left md:w-3/5 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-indigo-500 bg-opacity-30 backdrop-blur-sm border border-indigo-400 border-opacity-50 mb-6 shadow-lg shadow-indigo-900/20">
              <p className="text-sm font-semibold text-blue-100">Premium License Marketplace</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 tracking-tight">
              <span className="block mb-2">Unlock the Value of Your</span>
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-indigo-200">Unused Software Licenses</span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-10 text-blue-50 max-w-xl font-light leading-relaxed">
              Turn your dormant software investments into immediate revenue with our secure, transparent valuation process and premium marketplace.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="group bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                Get Your Free Valuation
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className={`md:w-2/5 mt-16 md:mt-0 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400 bg-opacity-30 rounded-full filter blur-xl animate-pulse" style={{animationDuration: '8s'}}></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-indigo-300 bg-opacity-40 rounded-full filter blur-lg animate-pulse" style={{animationDuration: '10s', animationDelay: '1s'}}></div>
              
              <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white border-opacity-30">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 font-medium text-lg text-white">Instant Valuation</span>
                  </div>
                  <span className="text-sm text-white font-medium bg-blue-900 bg-opacity-50 px-3 py-1 rounded-full">Within Minutes</span>
                </div>
                
                {/* Enhanced license cards with more visual appeal */}
                {[
                  {name: "Adobe Creative Cloud", value: "$800-1,200", icon: "🎨"},
                  {name: "Microsoft Office 365", value: "$120-350", icon: "📊"},
                  {name: "AutoCAD License", value: "$900-1,500", icon: "✏️"},
                ].map((license, i) => (
                  <div 
                    key={i} 
                    className="mb-4 p-4 bg-gradient-to-r from-indigo-900 to-blue-900 bg-opacity-80 border border-white border-opacity-20 rounded-xl flex items-center justify-between hover:bg-opacity-90 transition-all duration-300 group shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3 bg-white bg-opacity-20 h-10 w-10 flex items-center justify-center rounded-lg shadow-md">{license.icon}</span>
                      <span className="font-medium text-white">{license.name}</span>
                    </div>
                    <span className="font-bold text-green-300 bg-green-900 bg-opacity-50 px-3 py-1 rounded-lg group-hover:bg-opacity-60 transition-colors shadow-md">{license.value}</span>
                  </div>
                ))}
                
                <div className="mt-6 pt-4 border-t border-white border-opacity-30 text-center">
                  <p className="text-white text-sm font-medium">*Based on recent marketplace transactions</p>
                  <button className="mt-4 text-sm text-white bg-indigo-600 bg-opacity-70 hover:bg-opacity-90 transition-all duration-300 px-4 py-2 rounded-lg border border-indigo-400 border-opacity-40 shadow-md">
                    See All License Values
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}