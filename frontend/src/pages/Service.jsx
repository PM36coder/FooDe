import { Compass, Camera, Users, ShoppingCart, TrendingUp, Handshake, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const serviceFeatures = [
  { 
    title: "Endless Video Feed", 
    description: "Experience food discovery in a fun, addictive short-form video format. Swipe up to find your next meal idea.", 
    icon: Camera 
  },
  { 
    title: "Partner Registration", 
    description: "Restaurants, home chefs, and food bloggers can easily sign up and monetize their content.", 
    icon: Handshake 
  },
  { 
    title: "Seamless Discovery", 
    description: "Our AI curates content based on your tastes, diet, and location, cutting out the noise.", 
    icon: Compass 
  },
  { 
    title: "Community Building", 
    description: "Connect with followers, respond to comments, and grow your culinary brand within our platform.", 
    icon: Users 
  },
  { 
    title: "Integrated Shopping", 
    description: "See an ingredient you need? We provide links to buy essential goods right from the video feed.", 
    icon: ShoppingCart 
  },
  { 
    title: "Analytics Dashboard", 
    description: "For Partners: Track video performance, viewer engagement, and revenue from your shared content.", 
    icon: TrendingUp 
  },
];

export const Services = () => {
    const navigate = useNavigate()
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">

        {/* Services Hero Section */}
        <section className="text-center mb-20 pt-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 tracking-tight">
            Services Designed for Food Lovers & Creators
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            From seamless viewing to powerful creator tools, we offer everything you need to enjoy and succeed in the food ecosystem.
          </p>
        </section>

        {/* Features Grid */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">Our Key Offerings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-6 rounded-2xl shadow-xl border-b-4 border-transparent hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                <feature.icon className="w-10 h-10 text-orange-500 mb-4 bg-gray-900 p-2 rounded-lg" />
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Partner CTA Reminder */}
        <section className="mt-20 text-center bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <h3 className="text-3xl font-bold text-orange-400 mb-3">Want to Offer Your Own Service?</h3>
            <p className="text-gray-300 mb-6">Join our platform today to get started as a Food Partner and unlock these powerful tools.</p>
            <button onClick={() => { navigate("/partner/signup") }} className="flex items-center space-x-2 mx-auto px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 shadow-xl">
                <span>Become a Partner</span>
                <ArrowRight className="w-5 h-5" />
            </button>
        </section>

      </div>
    </div>
  );
};
