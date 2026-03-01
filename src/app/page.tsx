import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Impact } from '@/components/Impact';
import { Ability } from '@/components/Ability';
import { Testimony } from '@/components/Testimony';
import { Footer } from '@/components/Footer';
import { EnergyCanvas } from '@/components/EnergyCanvas';
import { CameraFlashes } from '@/components/CameraFlashes';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <CameraFlashes />
      <EnergyCanvas />
      <Navbar />
      <Hero />
      <Impact />
      <Ability />
      <Testimony />
      <Footer />
    </main>
  );
}
