import { useEffect, useRef, useState } from 'react';
import {
  ShoppingCart,
  Smartphone,
  Rocket,
  KeyRound,
  Code2,
  Palette,
  Database,
  Shield,
  ArrowRight,
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  gradient: string;
}

const services: Service[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    description:
      'Full-featured online stores with payment integration, inventory management, and conversion-optimized checkout flows.',
    icon: ShoppingCart,
    features: [
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Tracking System',
      'Customer Analytics',
    ],
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'mobile',
    title: 'Mobile-First UX Design',
    description:
      'Responsive, touch-optimized interfaces that deliver seamless experiences across all devices and screen sizes.',
    icon: Smartphone,
    features: [
      'Responsive Design',
      'Touch Optimization',
      'Progressive Web Apps',
      'Cross-Platform Native',
    ],
    gradient: 'from-teal-500 to-cyan-600',
  },
  {
    id: 'deployment',
    title: 'Rapid Deployment',
    description:
      'Streamlined CI/CD pipelines that get your product to market fast without compromising quality or security.',
    icon: Rocket,
    features: [
      'CI/CD Pipelines',
      'Automated Testing',
      'Cloud Deployment',
      'Zero-Downtime Updates',
    ],
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'handover',
    title: 'Turnkey Handover',
    description:
      'Complete documentation, training, and support to ensure your team can manage the solution independently.',
    icon: KeyRound,
    features: [
      'Full Documentation',
      'Team Training',
      '3-Month Support',
      'Knowledge Transfer',
    ],
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'custom',
    title: 'Custom Software',
    description:
      'Bespoke software solutions tailored to your unique business processes, workflows, and growth objectives.',
    icon: Code2,
    features: [
      'Business Analysis',
      'Architecture Design',
      'Agile Development',
      'Ongoing Maintenance',
    ],
    gradient: 'from-indigo-500 to-violet-600',
  },
  {
    id: 'branding',
    title: 'Brand & UI Design',
    description:
      'Stunning visual identities and user interfaces that captivate visitors and reinforce brand recognition.',
    icon: Palette,
    features: [
      'Brand Identity',
      'UI/UX Design',
      'Design Systems',
      'Prototyping',
    ],
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 'database',
    title: 'Database Architecture',
    description:
      'Scalable, secure database designs optimized for performance, reliability, and future growth.',
    icon: Database,
    features: [
      'Schema Design',
      'Performance Tuning',
      'Data Migration',
      'Backup & Recovery',
    ],
    gradient: 'from-purple-500 to-fuchsia-600',
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    description:
      'Enterprise-grade security implementations ensuring your data and users are protected at every layer.',
    icon: Shield,
    features: [
      'SSL/HTTPS Setup',
      'Authentication Systems',
      'Data Encryption',
      'Security Audits',
    ],
    gradient: 'from-fuchsia-500 to-pink-600',
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-700/50 p-6 card-hover transition-all duration-500 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 75}ms` }}
    >
      {/* Gradient border on hover */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}
        style={{ padding: '1px', margin: '-1px' }}
      />

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        <service.icon className="w-6 h-6 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
        {service.description}
      </p>

      {/* Features List */}
      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Hover indicator */}
      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}

export function Services() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative py-20 sm:py-28">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 dark:via-slate-900/30 to-transparent" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-4">
              <Code2 className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-display-md font-bold text-slate-900 dark:text-white mb-4">
              Core Value{' '}
              <span className="text-gradient">Architecture</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              End-to-end software and website development services designed to
              accelerate your digital transformation and maximize ROI.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
