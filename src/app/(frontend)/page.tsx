import Hero from '@/src/components/Hero';
import NetworkStats from '@/src/components/NetworkStats';
import BentoFeatures from '@/src/components/BentoFeatures';
import Scrollytelling from '@/src/components/Scrollytelling';
import TechStack from '@/src/components/TechStack';
import Partners from '@/src/components/Partners';
import UserPathways from '@/src/components/UserPathways';
import BlogPreview from '@/src/components/BlogPreview';
import ReadinessConsole from '@/src/components/ReadinessConsole';

export default function HomePage() {
  return (
    <>
      <Hero />
      <NetworkStats />
      <BentoFeatures />
      <ReadinessConsole />
      <Scrollytelling />
      <TechStack />
      <Partners />
      <BlogPreview />
      <UserPathways />
    </>
  );
}
