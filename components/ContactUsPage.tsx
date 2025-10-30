import React from 'react';

const ContactUsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 animate-fade-in">
      <h2 className="text-3xl font-bold text-slate-100 mb-6 text-center">Contact Us</h2>
      <div className="space-y-6 text-slate-300 leading-relaxed text-center">
        <p>
          We'd love to hear from you! Whether you have a question about our tools, feedback, or a partnership inquiry, please don't hesitate to reach out.
        </p>
        
        <div>
          <h3 className="text-xl font-semibold text-orange-400 mb-2">General Inquiries</h3>
          <p>For all general questions, please email us at:</p>
          <a href="mailto:hichamo.arabi@gmail.com" className="text-blue-400 hover:underline">
            hichamo.arabi@gmail.com
          </a>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-orange-400 mb-2">Support</h3>
          <p>If you need technical assistance with any of our applications, contact our support team:</p>
          <a href="mailto:hichamo.arabi@gmail.com" className="text-blue-400 hover:underline">
            hichamo.arabi@gmail.com
          </a>
        </div>

        <div>
            <h3 className="text-xl font-semibold text-orange-400 mb-2">Follow Us</h3>
            <p>Stay up-to-date with our latest news and tool releases on social media.</p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Facebook</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;