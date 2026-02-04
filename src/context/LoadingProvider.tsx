import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

import { useLocation } from "react-router-dom";

// ... existing imports

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const fromProyectos = location.state?.fromProyectos;

  const [isLoading, setIsLoading] = useState(() => {
    // Skip loading on mobile or if coming from Proyectos
    if (window.innerWidth <= 768 || fromProyectos) return false;
    return true;
  });
  const [loading, setLoading] = useState(0);

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };
  useEffect(() => {
    // Auto-start animations on mobile or if skipped loading since there's no 3D model/loading screen
    if (window.innerWidth <= 768 || fromProyectos) {
      import("../components/utils/initialFX").then((module) => {
        if (module.initialFX) {
          setTimeout(() => {
            module.initialFX();
          }, 100);
        }
      });
    }
  }, [fromProyectos]);

  useEffect(() => { }, [loading]);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
