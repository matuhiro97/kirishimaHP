import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";

interface PortfolioPostModule {
  default: React.FC;
}

// Dynamically import all .tsx content modules
const modules: Record<string, () => Promise<PortfolioPostModule>> =
  import.meta.glob<PortfolioPostModule>("./contents/*.tsx");

const NotFound: React.FC = () => <div>Not Found</div>;

const PortfolioPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [Component, setComponent] = useState<React.FC | null>(null);

  useEffect(() => {
    if (!slug) return;
    const importer = modules[`./contents/${slug}.tsx`];
    if (importer) {
      importer().then((mod) => {
        setComponent(() => mod.default);
      });
    } else {
      setComponent(() => NotFound);
    }
  }, [slug]);

  if (!Component) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default PortfolioPost;