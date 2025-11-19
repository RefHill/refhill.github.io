import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">RefHill</h3>
            <p className="text-gray-500 max-w-md">
              Redefining sports integrity through artificial intelligence.
              <br />
              Join us in shaping the future of the game.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <p className="text-white font-medium mb-4">Get early access</p>
            <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-500 w-full md:w-64 transition-colors"
              />
              <button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} RefHill Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;