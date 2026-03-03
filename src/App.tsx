import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

window.history.scrollRestoration = "manual";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const Proyectos = lazy(() => import("./pages/Proyectos"));
import { LoadingProvider } from "./context/LoadingProvider";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LoadingProvider>
                <Suspense>
                  <MainContainer>
                    <Suspense>
                      <CharacterModel />
                    </Suspense>
                  </MainContainer>
                </Suspense>
              </LoadingProvider>
            }
          />
          <Route
            path="/proyectos"
            element={
              <Suspense fallback={<div></div>}>
                <Proyectos />
              </Suspense>
            }
          />
        </Routes>
        <Analytics />
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
