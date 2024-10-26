//App.tsx
import React, { Suspense, lazy } from "react";
import { CardProvider } from "./context/CardContext";
import Hero from "./components/Hero/Hero";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import styles from "./App.module.scss";

const CardContainer = lazy(
  () => import("./components/CardContainer/CardContainer")
);

const LoadingFallback = () => <div className={styles.loading}>Loading...</div>;
const ErrorFallback = () => (
  <div className={styles.error}>Something went wrong</div>
);

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <CardProvider>
        <main className={styles.app}>
          <Hero />
          <Suspense fallback={<LoadingFallback />}>
            <CardContainer />
          </Suspense>
        </main>
      </CardProvider>
    </ErrorBoundary>
  );
};

export default App;
