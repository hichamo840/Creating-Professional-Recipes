import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 animate-fade-in">
      <h2 className="text-3xl font-bold text-slate-100 mb-6 text-center">About Us</h2>
      <div className="space-y-4 text-slate-300 leading-relaxed">
        <p>
          Welcome to the <span className="font-semibold text-orange-400">Platform For Creating Professional Recipes</span> dashboard. Our mission is to empower creators, chefs, and food enthusiasts with a suite of powerful, AI-driven tools designed to streamline content creation and spark culinary innovation.
        </p>
        <p>
          Born from a passion for both technology and gastronomy, our platform provides solutions for everything from generating unique recipes and writing compelling articles to optimizing social media presence. We believe that by harnessing the power of artificial intelligence, we can remove creative blocks and handle the repetitive tasks, allowing you to focus on what you do best: creating delicious food and engaging content.
        </p>
        <p>
          Each tool on this dashboard has been carefully crafted to be intuitive, efficient, and effective. Whether you're a professional blogger looking to scale your output or a home cook wanting to explore new flavors, our applications are here to assist you on your journey.
        </p>
        <p>
          Thank you for being a part of our community. We are constantly innovating and look forward to bringing you even more advanced tools in the future.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;