import { Metadata } from 'next';
import Header from './landing/header';
import Hero from './landing/hero';
import About from './landing/about';
import Features from './landing/features';
import Pricing from './landing/pricing';
import FAQ from './landing/faq';
import CTA from './landing/cta';
import Footer from './landing/footer';

export const metadata: Metadata = {
  title: 'Mon projet CRM',
  description: 'Gagnez du temps avec notre CRM personnalisé.',
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
