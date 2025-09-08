import './App.css'
import { useRegisterSW } from 'virtual:pwa-register/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Photos } from "./pages/Photos";
import { Contact } from "./pages/Contact";

function App() {

  const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();

  if (offlineReady) console.log("✅ PWA is ready to work offline");
  if (needRefresh) console.log("🔄 A new version is ready – call updateServiceWorker()");

  return (
 <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1 className="text-3xl text-center mt-20">404 – Not Found</h1>} />
      </Routes>
    </Layout>
  </Router>
  )
}

export default App
