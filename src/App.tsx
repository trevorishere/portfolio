import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WorkSample from "./pages/WorkSample";
import { caseStudies } from "./data/caseStudies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {caseStudies.map((caseStudy) => (
          <Route
            key={caseStudy.slug}
            path={`/work/${caseStudy.slug}`}
            element={<WorkSample caseStudy={caseStudy} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
