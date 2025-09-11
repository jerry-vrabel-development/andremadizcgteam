import './App.css';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { useEffect, useRef } from 'react';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Photos } from './pages/Photos';
import { Contact } from './pages/Contact';
import { ScrollContext } from '../src/context/ScrollContext';
import { useLocation } from 'react-router-dom';

function App() {
  const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();

  useEffect(() => {
    if (offlineReady) console.log('✅ PWA is ready to work offline');
    if (needRefresh) console.log('🔄 A new version is ready – call updateServiceWorker()');
  }, [offlineReady, needRefresh]);

  useEffect(() => {
    if (needRefresh) updateServiceWorker();
  }, [needRefresh, updateServiceWorker]);

  const location = useLocation();

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      '/': homeRef,
      '/about': aboutRef,
      '/services': servicesRef,
      '/photos': photosRef,
      '/contact': contactRef,
    };

    const ref = refMap[location.pathname];
    ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location, homeRef, aboutRef, servicesRef, photosRef, contactRef]);

  const contextValue = {
    home: homeRef,
    about: aboutRef,
    services: servicesRef,
    photos: photosRef,
    contact: contactRef,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      <Layout>
        <section id="home" ref={homeRef} className="scroll-section">
          <Home />
        </section>
        <section id="about" ref={aboutRef} className="scroll-section">
          <About />
        </section>
        <section id="services" ref={servicesRef} className="scroll-section">
          <Services />
        </section>
        <section id="photos" ref={photosRef} className="scroll-section">
          <Photos />
        </section>
        <section id="contact" ref={contactRef} className="scroll-section">
          <Contact />
        </section>
      </Layout>
    </ScrollContext.Provider>
  );
}

export default App;
