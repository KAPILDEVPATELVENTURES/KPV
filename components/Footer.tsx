
'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-300">
              © 2017 Kapildev Patel Ventures
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-sm">
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
