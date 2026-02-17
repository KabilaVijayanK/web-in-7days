import { MessageCircle, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-white text-gray-900 py-10 border-t border-gray-200">
    <div className="max-w-6xl mx-auto px-4">

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold mb-2">
            The Bot
          </h3>
          <p className="text-sm text-gray-600">
            Premium websites for businesses that want to grow online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold mb-2 text-gray-800">
            Quick Links
          </h4>
          <div className="space-y-1">
            {["Pricing", "Features", "Portfolio", "Process", "FAQ"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold mb-2 text-gray-800">
            Contact
          </h4>
          <div className="space-y-1 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>harry@thebot.agency.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <span>+91 9892969508</span>
            </div>
          </div>
        </div>

        {/* WhatsApp */}
        <div>
          <h4 className="text-sm font-semibold mb-2 text-gray-800">
            Chat With Us
          </h4>
          <a
            href="https://wa.me/919892969508"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-6 pt-4 border-t border-gray-200 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} The Bot. All rights reserved.
      </div>

    </div>
  </footer>
);

export default Footer;