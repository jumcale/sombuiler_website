import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle, Sparkles, Code2, Globe, Zap } from 'lucide-react';
import { OperationalBadge } from '@/components/ui-custom/OperationalBadge';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-transparent to-transparent dark:from-emerald-950/20 dark:via-transparent" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-400/15 dark:bg-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/10 dark:bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Operational Status */}
          <div
            className={`flex justify-center mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <OperationalBadge />
          </div>

          {/* Main Content */}
          <div className="text-center mb-12">
            {/* Overline */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Premium Software & Website Development</span>
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-display-xl font-extrabold tracking-tight mb-6 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-slate-900 dark:text-white">
                We Build{' '}
              </span>
              <span className="text-gradient-premium">
                High-Converting
              </span>
              <br />
              <span className="text-slate-900 dark:text-white">
                Software & Websites
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Transform your business ideas into powerful digital assets. 
              From custom software to e-commerce platforms, we deliver 
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold"> premium solutions </span>
              that drive real growth.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {/* Primary CTA - WhatsApp */}
              <a
                href="https://wa.me/252633322511"
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-primary text-base px-8 py-4 w-full sm:w-auto animate-pulse-glow"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Launch on WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary text-base px-8 py-4 w-full sm:w-auto"
              >
                <span>Browse Features</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Feature Pills */}
          <div
            className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {[
              { icon: Code2, label: 'Custom Development' },
              { icon: Globe, label: 'Web Solutions' },
              { icon: Zap, label: 'Rapid Deployment' },
            ].map((feature, index) => (
              <div
                key={feature.label}
                className="flex items-center gap-2.5 px-5 py-3 rounded-2xl glass shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                  <feature.icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div
            className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {[
              { value: '24/6', label: 'Support Hours' },
              { value: '100%', label: 'Custom Solutions' },
              { value: '< 48h', label: 'Initial Delivery' },
              { value: 'Premium', label: 'Quality Assured' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-2xl glass hover:shadow-glass-lg transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
