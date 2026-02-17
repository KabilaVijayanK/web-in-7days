import { MessageCircle, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t-4 border-primary bg-background py-12">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold gradient-text mb-3">The Bot</h3>
          <p className="text-sm text-muted-foreground">
            Premium websites for businesses that want to grow online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
          <div className="space-y-2">
            {["Pricing", "Features", "Portfolio", "Process", "FAQ"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">Contact Us</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>harry@thebot.agency.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 9892969508</span>
            </div>
          </div>
        </div>

        {/* WhatsApp */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">Chat With Us</h4>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} TheBot. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
