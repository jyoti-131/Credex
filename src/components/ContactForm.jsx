import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });
  
  const [focused, setFocused] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field) => {
    setFocused({ ...focused, [field]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(formData);
      setLoading(false);
      setSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          licenseType: "",
          message: "",
        });
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Ready to Unlock the Value of Your Software?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you within 24 hours with a free valuation.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">For any questions about our services</p>
              <a href="mailto:info@softselllicenses.com" className="text-blue-600 hover:text-blue-800 font-medium">info@softselllicenses.com</a>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Our Guarantee</h3>
              <ul className="space-y-3">
                {[
                  "Best market value for your licenses",
                  "Secure and confidential process",
                  "Payment within 48 hours",
                  "No hidden fees or charges"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-200" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">Thank you for reaching out. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className={`absolute left-4 transition-all duration-200 ${focused.name || formData.name ? 'text-xs -top-2.5 bg-white px-1 text-blue-600' : 'text-gray-500 top-3'}`}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={() => handleBlur('name')}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      />
                    </div>
                    
                    <div className="relative">
                      <label className={`absolute left-4 transition-all duration-200 ${focused.email || formData.email ? 'text-xs -top-2.5 bg-white px-1 text-blue-600' : 'text-gray-500 top-3'}`}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className={`absolute left-4 transition-all duration-200 ${focused.company || formData.company ? 'text-xs -top-2.5 bg-white px-1 text-blue-600' : 'text-gray-500 top-3'}`}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => handleFocus('company')}
                        onBlur={() => handleBlur('company')}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      />
                    </div>
                    
                    <div className="relative">
                      <label className={`absolute left-4 transition-all duration-200 ${focused.licenseType || formData.licenseType ? 'text-xs -top-2.5 bg-white px-1 text-blue-600' : 'text-gray-500 top-3'}`}>
                        License Type
                      </label>
                      <select
                        name="licenseType"
                        required
                        value={formData.licenseType}
                        onChange={handleChange}
                        onFocus={() => handleFocus('licenseType')}
                        onBlur={() => handleBlur('licenseType')}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition appearance-none bg-white"
                      >
                        <option value=""></option>
                        <option value="Windows">Windows</option>
                        <option value="Adobe">Adobe</option>
                        <option value="Office365">Office 365</option>
                        <option value="AutoCAD">AutoCAD</option>
                        <option value="VMware">VMware</option>
                        <option value="Oracle">Oracle</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute right-4 top-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-200 ${focused.message || formData.message ? 'text-xs -top-2.5 bg-white px-1 text-blue-600' : 'text-gray-500 top-3'}`}>
                      Tell us about your licenses
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={() => handleBlur('message')}
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                      I agree to the <a href="#" className="text-blue-600 hover:underline">privacy policy</a> and <a href="#" className="text-blue-600 hover:underline">terms</a>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center ${loading ? 'opacity-80' : ''}`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}