import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 lg:px-24 xl:px-32 pt-16 pb-6 mt-32 text-sm">
      {/* Top section */}
      <div className="flex flex-wrap justify-between gap-10 border-b border-gray-700 pb-10">
        {/* Brand Info */}
        <div className="max-w-xs">
          <h1 className="text-2xl font-bold mb-3">
            <span className="text-[#FFD700]">Kibur</span> Car Rental
          </h1>
          <p className="mb-5">
            Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
          </p>
          <div className="flex gap-4">
            <a href="#"><img src={assets.facebook_logo} alt="Facebook" className="w-5 h-5" /></a>
            <a href="#"><img src={assets.instagram_logo} alt="Instagram" className="w-5 h-5" /></a>
            <a href="#"><img src={assets.twitter_logo} alt="Twitter" className="w-5 h-5" /></a>
            <a href="#"><img src={assets.gmail_logo} alt="Gmail" className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold uppercase mb-3 text-[#FFD700]">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">Browse Cars</a></li>
            <li><a href="#">List your car</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="font-semibold uppercase mb-3 text-[#FFD700]">Resources</h2>
          <ul className="space-y-2">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Insurance</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold uppercase mb-3 text-[#FFD700]">Contact</h2>
          <ul className="space-y-2">
            <li><a href="#">1234 Luxury Drive</a></li>
            <li><a href="#">San Francisco, CA 94107</a></li>
            <li><a href="#">+1 234 567 890</a></li>
            <li><a href="#">info@example.com</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-3">
        <p>© {new Date().getFullYear()} Kibur Car Rental. All rights reserved.</p>
        <ul className="flex items-center gap-4">
          <li><a href="#">Privacy</a></li>
          <li className="text-gray-500">|</li>
          <li><a href="#">Terms</a></li>
          <li className="text-gray-500">|</li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
