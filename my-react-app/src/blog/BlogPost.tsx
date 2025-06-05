import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";

const modules = import.meta.glob("./contents/*.tsx");

const NotFound: React.FC = () => <div>Not Found</div>;

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [Component, setComponent] = useState<React.FC | null>(null);

  useEffect(() => {
    if (!slug) return;
    const importer = modules[`./contents/${slug}.tsx`];
    if (importer) {
      importer().then((mod: any) => {
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
