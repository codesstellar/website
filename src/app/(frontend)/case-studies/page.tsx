import CaseStudies from '@/src/components/CaseStudies';

export const metadata = {
  title: 'Case Studies | Codesstellar',
  description: 'Selected Codesstellar blockchain, Web3, and post-quantum security work.',
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-background">
      <CaseStudies />
    </div>
  );
}
