import React from "react";
import { Phone, Mail, Globe } from "lucide-react";


const Footer = () => {
  return (
    <div className="mt-20 ml-37 mb-10 w-[1500px] h-100 bg-gray-950 text-white py-10">
      {/* Footer Content */}
      <div className="max-w-6xl  px-4 flex justify-between gap-2">
        
           {/* Contact Column */}
           <div className="w-1/3 pt-20 mr-50 pr-20">
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <ul className="pt-5 space-y-2 gap-10 text-sm text-gray-300">
            <li>Partnerships</li>
            <li>FAQ's</li>
            <li>Get in Touch</li>
            <li>Send us feedback</li>
          </ul>
        </div>
 {/* Support Column */}
 <div className="w-1/3  pt-20 mr-50 pr-20">
          <h2 className="text-lg font-bold mb-4">Support</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Return Policy</li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@example.com
            </li>
          </ul>
        </div>



        
         {/* Company Column */}
         <div className="w-1/3  pt-20 mr-50 pr-20">
          <h2 className="text-lg font-bold mb-4">Company</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About Us</li>
            <li>Careers</li>
            <li>Investors</li>
            <li className="flex items-center gap-2">
              <Globe size={16} /> India
            </li>
          </ul>
        </div>
        {/* icons Column */}
        <div className="w-1/3  pt-20 mr-50 pr-20">
          <h2 className="text-lg text-white font-bold mb-4"><Phone size={16} /> <Mail size={16} /> <Globe size={16} /> India</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About Us</li>
            <li>Careers</li>
            <li>Investors</li>
            <li className="flex items-center gap-2">
              <Globe size={16} /> India
            </li>
          </ul>
        </div>


      </div>
    </div>
  );
};

export default Footer;
