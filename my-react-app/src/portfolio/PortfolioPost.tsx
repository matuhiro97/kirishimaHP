import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";

interface PortfolioModule {
  default: React.FC;
}

const modules: Record<string, () => Promise<PortfolioModule>> = import.meta.glob(
  "./contents/*.tsx"
);

const NotFound: React.FC = () => <div>Not Found</div>;

const PortfolioPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [Component, setComponent] = useState<React.FC | null>(null);

  useEffect(() => {
    if (!slug) return;
    const importer = modules[`./contents/${slug}.tsx`];
    if (importer) {
      importer().then((mod: PortfolioModule) => {
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
