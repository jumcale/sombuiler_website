import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  ArrowUpRight,
  Heart,
} from 'lucide-react';

const contactInfo = {
  whatsapp: '+252 63 332 2511',
  whatsappLink: 'https://wa.me/252633322511',
  email: 'info@sombuiler.online',
  phone: '+252 63 332 2511',
  address: 'Road Number 1, Hargeisa, Somaliland',
  mapLink: 'https://maps.google.com/?q=Road+Number+1+Hargeisa',
};

const operatingHours = [
  { day: 'Saturday', hours: 'Open 24 Hours' },
  { day: 'Sunday', hours: 'Open 24 Hours' },
  { day: 'Monday', hours: 'Open 24 Hours' },
  { day: 'Tuesday', hours: 'Open 24 Hours' },
  { day: 'Wednesday', hours: 'Open 24 Hours' },
  { day: 'Thursday', hours: 'Open 24 Hours' },
  { day: 'Friday', hours: 'Closed' },
];

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Book Appointment', href: '#appointment' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'E-Commerce Development',
  'Custom Software',
  'Mobile App Development',
  'UI/UX Design',
  'Database Architecture',
  'Security & Compliance',
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contact" className="relative bg-slate-900 dark:bg-slate-950 text-white">
      {/* Top gradient border */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />

      <div className="w-full section-padding py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-glow-emerald">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <span className="font-bold text-lg text-white">Sombuiler</span>
                  <span className="text-emerald-400 text-xs ml-1 font-medium tracking-wider uppercase">
                    Online
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Premium software and website development services. We transform
                ideas into high-converting digital assets that drive real
                business growth.
              </p>
              {/* Social / Contact Actions */}
              <div className="flex items-center gap-3">
                <a
                  href={contactInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                Services
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((service) => (
                  <li key={service}>
                    <span className="text-slate-400 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                Contact Us
              </h4>
              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={contactInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">
                      WhatsApp
                    </div>
                    <div className="text-sm text-slate-300 group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                      {contactInfo.whatsapp}
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </a>

                {/* Address */}
                <a
                  href={contactInfo.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-slate-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">
                      Office Location
                    </div>
                    <div className="text-sm text-slate-300 group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                      {contactInfo.address}
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-slate-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                      Working Hours
                    </div>
                    <div className="space-y-1">
                      {operatingHours.slice(0, 3).map((item) => (
                        <div
                          key={item.day}
                          className="flex items-center justify-between gap-4 text-sm"
                        >
                          <span className="text-slate-400">{item.day}</span>
                          <span
                            className={`font-medium ${
                              item.hours === 'Closed'
                                ? 'text-amber-400'
                                : 'text-emerald-400'
                            }`}
                          >
                            {item.hours}
                          </span>
                        </div>
                      ))}
                      <div className="text-xs text-slate-500 pt-1">
                        + 4 more days (see details)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Sombuiler Online. All rights
              reserved.
            </p>
            <p className="flex items-center gap-1 text-sm text-slate-500">
              Crafted with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Hargeisa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
