import { useState, useRef, useEffect } from 'react';
import type { FormEvent } from 'react';
import { Calendar, Send, CheckCircle, Loader2, MessageCircle, Mail, Phone, User, Building2, Wallet, FileText } from 'lucide-react';
import type { FormData, FormErrors, BusinessType, BudgetTier } from '@/types';

const businessTypes: { value: BusinessType; label: string }[] = [
  { value: 'ecommerce', label: 'E-Commerce Store' },
  { value: 'saas', label: 'SaaS Platform' },
  { value: 'portfolio', label: 'Portfolio / Agency' },
  { value: 'corporate', label: 'Corporate Website' },
  { value: 'startup', label: 'Startup MVP' },
  { value: 'education', label: 'Education Platform' },
  { value: 'healthcare', label: 'Healthcare System' },
  { value: 'other', label: 'Other' },
];

const budgetTiers: { value: BudgetTier; label: string; range: string }[] = [
  { value: 'basic', label: 'Basic', range: '$500 - $2,000' },
  { value: 'standard', label: 'Standard', range: '$2,000 - $5,000' },
  { value: 'premium', label: 'Premium', range: '$5,000 - $15,000' },
  { value: 'enterprise', label: 'Enterprise', range: '$15,000+' },
];

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.clientName.trim()) {
    errors.clientName = 'Client name is required';
  } else if (data.clientName.trim().length < 2) {
    errors.clientName = 'Name must be at least 2 characters';
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^[+]?[\d\s-]{7,15}$/.test(data.phone.replace(/\s/g, ''))) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!data.businessType) {
    errors.businessType = 'Please select a business type';
  }

  if (!data.budgetTier) {
    errors.budgetTier = 'Please select a budget tier';
  }

  if (!data.projectDetails.trim()) {
    errors.projectDetails = 'Project details are required';
  } else if (data.projectDetails.trim().length < 20) {
    errors.projectDetails = 'Please provide at least 20 characters describing your project';
  }

  return errors;
}

export function AppointmentForm() {
  const [formData, setFormData] = useState<FormData>({
    clientName: '',
    email: '',
    phone: '',
    businessType: '' as BusinessType,
    budgetTier: '' as BudgetTier,
    projectDetails: '',
    preferredContact: 'whatsapp',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FormErrors];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      clientName: '',
      email: '',
      phone: '',
      businessType: '' as BusinessType,
      budgetTier: '' as BudgetTier,
      projectDetails: '',
      preferredContact: 'whatsapp',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <section id="appointment" ref={sectionRef} className="py-20 sm:py-28">
        <div className="w-full section-padding">
          <div
            className={`max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="bg-white dark:bg-slate-900/80 rounded-3xl border border-emerald-200 dark:border-emerald-800/50 p-8 sm:p-12 text-center shadow-glass-lg">
              <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-6 animate-scale-in">
                <CheckCircle className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                Appointment Requested!
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-2">
                Thank you, <span className="font-semibold text-emerald-600 dark:text-emerald-400">{formData.clientName}</span>!
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
                We've received your project details and will contact you via{' '}
                <span className="font-medium">{formData.preferredContact}</span>{' '}
                within 24 hours to schedule your consultation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/252633322511"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
                <button onClick={handleReset} className="btn-secondary w-full sm:w-auto">
                  <span>Submit Another</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" ref={sectionRef} className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50/30 dark:via-emerald-950/10 to-transparent" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-4">
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-display-md font-bold text-slate-900 dark:text-white mb-4">
              Start Your{' '}
              <span className="text-gradient">Project</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Tell us about your vision and we'll craft a tailored solution
              that drives real business results.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`bg-white dark:bg-slate-900/80 rounded-3xl border border-slate-200 dark:border-slate-700/50 p-6 sm:p-10 shadow-glass-lg transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Client Name */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <User className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.clientName}
                  onChange={(e) => handleChange('clientName', e.target.value)}
                  placeholder="Your full name"
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all ${
                    errors.clientName
                      ? 'border-red-300 dark:border-red-700 focus:ring-red-500/50 focus:border-red-500'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                />
                {errors.clientName && (
                  <p className="text-sm text-red-500 dark:text-red-400 flex items-center gap-1">
                    {errors.clientName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="you@company.com"
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all ${
                    errors.email
                      ? 'border-red-300 dark:border-red-700 focus:ring-red-500/50 focus:border-red-500'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 dark:text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+252 XX XXX XXXX"
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all ${
                    errors.phone
                      ? 'border-red-300 dark:border-red-700 focus:ring-red-500/50 focus:border-red-500'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 dark:text-red-400">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Business Type */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Business Type *
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => handleChange('businessType', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all appearance-none cursor-pointer ${
                    errors.businessType
                      ? 'border-red-300 dark:border-red-700 focus:ring-red-500/50 focus:border-red-500'
                      : 'border-slate-200 dark:border-slate-700'
                  } ${!formData.businessType ? 'text-slate-400 dark:text-slate-500' : ''}`}
                >
                  <option value="" disabled>
                    Select business type
                  </option>
                  {businessTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.businessType && (
                  <p className="text-sm text-red-500 dark:text-red-400">
                    {errors.businessType}
                  </p>
                )}
              </div>

              {/* Budget Tier */}
              <div className="space-y-2 md:col-span-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <Wallet className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Budget Tier *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {budgetTiers.map((tier) => (
                    <button
                      key={tier.value}
                      type="button"
                      onClick={() => handleChange('budgetTier', tier.value)}
                      className={`relative p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                        formData.budgetTier === tier.value
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 shadow-glow-emerald'
                          : 'border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 bg-slate-50 dark:bg-slate-800'
                      }`}
                    >
                      <div
                        className={`text-sm font-bold mb-1 ${
                          formData.budgetTier === tier.value
                            ? 'text-emerald-700 dark:text-emerald-400'
                            : 'text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {tier.label}
                      </div>
                      <div
                        className={`text-xs ${
                          formData.budgetTier === tier.value
                            ? 'text-emerald-600 dark:text-emerald-500'
                            : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {tier.range}
                      </div>
                    </button>
                  ))}
                </div>
                {errors.budgetTier && (
                  <p className="text-sm text-red-500 dark:text-red-400">
                    {errors.budgetTier}
                  </p>
                )}
              </div>

              {/* Project Details */}
              <div className="space-y-2 md:col-span-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Project Details *
                </label>
                <textarea
                  value={formData.projectDetails}
                  onChange={(e) => handleChange('projectDetails', e.target.value)}
                  placeholder="Describe your project requirements, goals, timeline, and any specific features you need..."
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-none ${
                    errors.projectDetails
                      ? 'border-red-300 dark:border-red-700 focus:ring-red-500/50 focus:border-red-500'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                />
                <div className="flex items-center justify-between">
                  {errors.projectDetails ? (
                    <p className="text-sm text-red-500 dark:text-red-400">
                      {errors.projectDetails}
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-slate-400 dark:text-slate-500">
                    {formData.projectDetails.length} characters
                  </span>
                </div>
              </div>

              {/* Preferred Contact */}
              <div className="space-y-3 md:col-span-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Preferred Contact Method
                </label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { value: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
                    { value: 'email', label: 'Email', icon: Mail },
                    { value: 'phone', label: 'Phone', icon: Phone },
                  ].map((method) => (
                    <button
                      key={method.value}
                      type="button"
                      onClick={() => handleChange('preferredContact', method.value)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${
                        formData.preferredContact === method.value
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400'
                          : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-emerald-300 dark:hover:border-emerald-700 bg-slate-50 dark:bg-slate-800'
                      }`}
                    >
                      <method.icon className="w-4 h-4" />
                      {method.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary text-base px-8 py-4 w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Request Appointment</span>
                  </>
                )}
              </button>
              <p className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
                We'll respond within 24 hours
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
