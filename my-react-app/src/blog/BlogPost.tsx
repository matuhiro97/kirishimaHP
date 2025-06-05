import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";

interface BlogPostModule {
  default: React.FC;
}
const modules: Record<string, () => Promise<BlogPostModule>> = import.meta.glob("./contents/*.tsx");

const NotFound: React.FC = () => <div>Not Found</div>;

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [Component, setComponent] = useState<React.FC | null>(null);

  useEffect(() => {
    if (!slug) return;
    const importer = modules[`./contents/${slug}.tsx`];
    if (importer) {
      importer().then((mod: BlogPostModule) => {
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

export default BlogPost;
