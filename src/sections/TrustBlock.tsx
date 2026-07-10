import { useEffect, useRef, useState } from 'react';
import {
  Accessibility,
  Shield,
  Clock,
  Award,
  Headphones,
  Handshake,
  TrendingUp,
  Lock,
} from 'lucide-react';

const trustItems = [
  {
    icon: Accessibility,
    title: 'Wheelchair Accessible',
    description:
      'Our office on Road Number 1, Hargeisa is fully wheelchair accessible with ramp entry and accessible restrooms.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'SSL encryption, secure authentication, and regular security audits protect your data and your customers.',
  },
  {
    icon: Clock,
    title: '24/6 Availability',
    description:
      'Round-the-clock operations Saturday through Thursday. Online appointments ensure dedicated attention.',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description:
      'Every project undergoes rigorous testing and quality assurance before deployment to production.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description:
      'Post-launch support and maintenance packages to keep your digital assets running smoothly.',
  },
  {
    icon: Handshake,
    title: 'Transparent Process',
    description:
      'Clear timelines, milestone-based deliveries, and open communication throughout the project lifecycle.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Focused',
    description:
      'Solutions architected for scalability, performance, and conversion optimization from day one.',
  },
  {
    icon: Lock,
    title: 'IP Protection',
    description:
      'Your intellectual property is protected with clear ownership terms and confidentiality agreements.',
  },
];

export function TrustBlock() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 dark:from-slate-900/30 via-transparent to-slate-50/50 dark:to-slate-900/30" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              <span>Why Trust Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-display-md font-bold text-slate-900 dark:text-white mb-4">
              Built on{' '}
              <span className="text-gradient">Trust & Excellence</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              From our accessible physical office to our secure development
              practices, every detail is designed to earn your confidence.
            </p>
          </div>

          {/* Trust Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustItems.map((item, index) => (
              <div
                key={item.title}
                className={`group flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 hover:border-emerald-300 dark:hover:border-emerald-700/50 transition-all duration-500 hover:shadow-glass-lg hover:-translate-y-1 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 75}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
