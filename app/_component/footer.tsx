import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#092e60] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <img src="/logo.png" alt="Logo" className="h-20" />
        </div>

        {/* Important Links */}
        <div>
          <h3 className="font-bold text-lg">Important Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:underline">Travel Guide</a></li>
            <li><a href="#" className="hover:underline">Table Booking</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* #PELADubai2024 */}
        <div>
          <h3 className="font-bold text-lg">#PELADubai2024</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Projects</a></li>
            <li><a href="#" className="hover:underline">Team Member</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg">Contact</h3>
          <p className="mt-4">
            <a href="mailto:Info@premierenergymea.com" className="hover:underline">Info@premierenergymea.com</a>
          </p>
          <p className="mt-2">+233 247415140</p>
          <p className="mt-2">+971 557909643</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-400 mt-8 pt-4 text-center text-sm">
        Premier Energy Leadership Middle East & Africa © 2024 Created by RADComm Digital
      </div>
    </footer>
  );
};

export default Footer;
