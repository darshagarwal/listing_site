import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LandlordsPage from './pages/LandlordsPage';
import TenantsPage from './pages/TenantsPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import { properties } from './data/properties';

type Page = 'home' | 'properties' | 'landlords' | 'tenants' | 'about' | 'contact' | 'property-detail';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);

      if (hash.startsWith('property/')) {
        const propertyId = hash.split('/')[1];
        setSelectedPropertyId(propertyId);
        setCurrentPage('property-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (['home', 'properties', 'landlords', 'tenants', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash as Page);
        setSelectedPropertyId(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBackToProperties = () => {
    window.location.hash = '#properties';
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'property-detail':
        const property = properties.find(p => p.id === selectedPropertyId);
        if (property) {
          return <PropertyDetailPage property={property} onBack={handleBackToProperties} />;
        }
        return <PropertiesPage />;
      case 'properties':
        return <PropertiesPage />;
      case 'landlords':
        return <LandlordsPage />;
      case 'tenants':
        return <TenantsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  const shouldShowHeaderFooter = currentPage !== 'property-detail';

  return (
    <div className="min-h-screen flex flex-col">
      {shouldShowHeaderFooter && <Header currentPage={currentPage} />}
      <main className="flex-1">
        {renderPage()}
      </main>
      {shouldShowHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
