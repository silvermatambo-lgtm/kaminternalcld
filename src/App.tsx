import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PWAInstall from './components/PWAInstall';
import ScrollToTop from './components/ScrollToTop';

function normalizePath(pathname: string) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/index.html') return '/';
  return clean;
}

export default function App(){
  const path = normalizePath(window.location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  let page;
  switch (path) {
    case '/about': page = <About />; break;
    case '/services': page = <Services />; break;
    case '/gallery': page = <Gallery />; break;
    case '/contact': page = <Contact />; break;
    case '/':
    default: page = <Home />; break;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-[60vh]">{page}</main>
      <Footer />
      <FloatingWhatsApp />
      <PWAInstall />
      <ScrollToTop />
    </>
  );
}
