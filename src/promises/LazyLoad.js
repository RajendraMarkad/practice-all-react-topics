import React, { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./ApiCall"));

const LazyLoad = () => {
  return (
    <Suspense fallback={<div>Loading........</div>}>
      <h2>Fetch vs axios:</h2>
      <LazyComponent />
    </Suspense>
  );
};

export default LazyLoad;
