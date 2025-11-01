import { Sparkles, Users, Heart, MapPin, Target, Zap } from 'lucide-react';

const teamMembers = [
  { name: 'Pravesh Yadav', role: 'Founder & CEO', bio: 'Visionary behind the scrollable food discovery platform.', icon: Sparkles },
  { name: 'Priya Jangir', role: 'Head of Content', bio: 'Ensures a steady flow of high-quality, engaging food reels.', icon: Target },
  { name: 'Amit Singh', role: 'Partner Relations', bio: 'Manages and supports our growing network of Food Partners.', icon: Users },
];

export const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">

        {/* About Hero Section */}
        <section className="text-center mb-20 pt-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 tracking-tight">
            Our Story: Fueling Culinary Discovery
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            We are building the future of food exploration—fast, dynamic, and deeply connected to creators.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="mb-20 bg-gray-800 p-8 rounded-2xl shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <Target className="w-12 h-12 text-orange-500 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold text-orange-400 mb-2">Our Core Mission</h2>
              <p className="text-gray-300 text-lg">
                To simplify the path between inspiration and plate. We empower home cooks and professional chefs alike to share their passion through short, engaging videos, transforming passive viewing into active culinary action.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-10 text-orange-400">Values That Guide Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-gray-800/70 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-orange-500 transition-all duration-300">
              <Heart className="w-8 h-8 text-orange-500 mb-3" />
              <h3 className="text-2xl font-semibold mb-2">Community First</h3>
              <p className="text-gray-400">We prioritize a positive and supportive community for both viewers and Food Partners.</p>
            </div>
            {/* Value 2 */}
            <div className="bg-gray-800/70 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-orange-500 transition-all duration-300">
              <Zap className="w-8 h-8 text-orange-500 mb-3" />
              <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-400">Constantly improving the discovery feed and creation tools to make sharing seamless.</p>
            </div>
            {/* Value 3 */}
            <div className="bg-gray-800/70 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-orange-500 transition-all duration-300">
              <MapPin className="w-8 h-8 text-orange-500 mb-3" />
              <h3 className="text-2xl font-semibold mb-2">Authenticity</h3>
              <p className="text-gray-400">Promoting real food, real recipes, and real connections across cultures.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-10 text-orange-400">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="text-center bg-gray-800 p-6 rounded-xl shadow-2xl border-t-4 border-orange-500"
              >
                <div className="mx-auto w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mb-4 border-4 border-gray-600">
                  <member.icon className="w-10 h-10 text-orange-400" />
                </div>
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-orange-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 italic text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
