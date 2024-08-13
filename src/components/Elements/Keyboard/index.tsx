import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Loading = () => {
  return (
    <div className="font-heading m-auto flex text-3xl font-bold">
      Loading...
    </div>
  );
};

const Keyboard = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Spline
        style={{ height: "400px", width: "100%" }}
        scene="https://prod.spline.design/316wYexK0zqomJyQ/scene.splinecode"
      />
    </Suspense>
  );
};

export default Keyboard;
