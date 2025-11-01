import { Video, ArrowRight, Store, ScrollText } from 'lucide-react';

export const Home = () => {
  // Array to simulate video reel cards
  const reelVideos = [
    { id: 1, title: 'Spicy Tacos Challenge', views: '1.2M' },
    { id: 2, title: 'Quick 15-Min Pasta', views: '850K' },
    { id: 3, title: 'Dessert Art Tutorial', views: '3.1M' },
    { id: 4, title: 'Street Food Review', views: '540K' },
    { id: 5, title: 'Vegan Sushi Prep', views: '2.5M' },
  ];

  return (
    // Main container uses the specified dark gradient background
    <div className="bg-linear-to-br from-gray-900 via-black to-gray-800 text-white min-h-[calc(100vh-120px)]">
      
      <div className="container mx-auto px-4 py-12 md:py-20">

        {/* 1. HERO SECTION */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500 tracking-tight">
            Discover the World of Food, One Scroll at a Time
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Swipe through bite-sized recipes, viral challenges, and hidden culinary gems. Your next favorite dish is waiting.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="flex items-center space-x-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 shadow-xl transform hover:scale-105">
              <span>Start Watching Now</span>
              <Video className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* 2. REEL FEED SIMULATION SECTION (Scrollable) */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-center text-orange-400 flex items-center justify-center space-x-3">
            <ScrollText className="w-8 h-8"/> <span>Featured Food Reels</span>
          </h2>
          
          <div className="flex overflow-x-scroll snap-x snap-mandatory space-x-6 pb-4 scrollbar-hide">
            {reelVideos.map((video) => (
              <div 
                key={video.id} 
                className="snap-center flex-shrink-0 w-80 h-96 bg-gray-800 rounded-2xl shadow-2xl relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="w-full h-full flex items-center justify-center bg-gray-700/50">
                    <Video className="w-16 h-16 text-orange-400" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 bg-black/60 backdrop-blur-sm">
                  <h3 className="text-xl font-bold truncate">{video.title}</h3>
                  <p className="text-sm text-gray-400">{video.views} Views</p>
                </div>
              </div>
            ))}
            {/* Add a slightly wider card at the end for smooth scrolling experience */}
            <div className="snap-center flex-shrink-0 w-12"></div> 
          </div>

          <style jsx="true">
            {`
            /* Custom Scrollbar Hide for Clean Look */
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            }
            `}
          </style>
        </section>

        {/* 3. BECOME A PARTNER CTA SECTION (Strong Contrast) */}
        <section className="bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-orange-600">
          <div className="md:flex md:items-center md:justify-between space-y-6 md:space-y-0">
            
            <div className="flex items-start space-x-4">
              <Store className="w-10 h-10 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-orange-400">
                  Ready to Grow Your Food Business?
                </h2>
                <p className="mt-2 text-gray-300 text-lg">
                  Become a **Food Partner** and share your unique recipes and dishes with millions of viewers. Reach a global audience instantly.
                </p>
              </div>
            </div>

            <div className="md:ml-8 flex-shrink-0">
              <button className="flex items-center space-x-2 px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-700 transition-all duration-300 shadow-2xl w-full md:w-auto transform hover:scale-105">
                <span>Join Our Partner Program</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
          </div>
        </section>

      </div>
    </div>
  );
};
