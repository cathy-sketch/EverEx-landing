import { LocaleProvider } from '@/components/landing/LocaleContext';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import ProductsSection from '@/components/landing/ProductsSection';
import AwardsSection from '@/components/landing/AwardsSection';
import PartnersSection from '@/components/landing/PartnersSection';
import DemoFormSection from '@/components/landing/DemoFormSection';
import Footer from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <LocaleProvider>
      <div style={{ minHeight: '100vh' }}>
        <Header />
        <main>
          <HeroSection />
          <ProductsSection />
          <AwardsSection />
          <PartnersSection />
          <DemoFormSection />
        </main>
        <Footer />
      </div>
    </LocaleProvider>
  );
}
