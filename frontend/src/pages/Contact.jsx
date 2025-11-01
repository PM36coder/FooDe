import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">

        {/* Contact Hero Section */}
        <section className="text-center mb-20 pt-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 tracking-tight">
            Get In Touch With Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Whether you have a question, feedback, or a partnership inquiry, we'd love to hear from you.
          </p>
        </section>

        {/* Contact Form and Info Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information (Left/Top) */}
          <div className="lg:col-span-1 space-y-8 bg-gray-800/70 p-8 rounded-2xl h-fit">
            <h2 className="text-3xl font-bold text-orange-400 border-b border-gray-700 pb-3 mb-4">Contact Details</h2>
            
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p className="text-gray-400">support@dinetime.com</p>
                <p className="text-gray-400">partnerships@dinetime.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
                <p className="text-gray-400">Mon-Fri, 9am - 5pm EST</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Our Office</h3>
                <p className="text-gray-400">123 Food Street, Suite 400</p>
                <p className="text-gray-400">Culinary City, CA 90210</p>
              </div>
            </div>
          </div>

          {/* Contact Form (Right/Bottom) */}
          <div className="lg:col-span-2 bg-gray-800 p-8 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold text-orange-400 mb-6">Send Us a Message</h2>
            <form className="space-y-5">
              
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full p-4 bg-gray-700/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full p-4 bg-gray-700/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  placeholder="Subject (e.g., Partnership Inquiry)"
                  className="w-full p-4 bg-gray-700/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-4 bg-gray-700/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex items-center justify-center space-x-2 px-8 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-xl w-full"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </section>

      </div>
    </div>
  );
};
