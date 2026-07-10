import { Navbar } from '@/components/ui-custom/Navbar';
import { WhatsAppFloat } from '@/components/ui-custom/WhatsAppFloat';
import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { AppointmentForm } from '@/sections/AppointmentForm';
import { TrustBlock } from '@/sections/TrustBlock';
import { Footer } from '@/sections/Footer';
import { useTheme } from '@/hooks/useTheme';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Services />
        <AppointmentForm />
        <TrustBlock />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
