import { useLanguage } from '../contexts/LanguageContext';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      production: 'Production',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'Premium Hot Forged Bolts',
      subtitle: 'Engineering Excellence in Every Fastener',
      description: 'Discover our comprehensive range of high-quality hot forged bolts, precision-engineered for critical applications across industries.',
      getQuote: 'Get Quote',
      learnMore: 'Learn More'
    },
    buttons: {
      getQuote: 'Get Quote',
      contactUs: 'Contact Us',
      learnMore: 'Learn More',
      viewAll: 'View All Products'
    }
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      production: 'Üretim',
      about: 'Hakkımızda',
      contact: 'İletişim'
    },
    hero: {
      title: 'Premium Sıcak Dövme Cıvatalar',
      subtitle: 'Her Bağlantı Elemanında Mühendislik Mükemmelliği',
      description: 'Endüstriler arası kritik uygulamalar için hassas mühendislikle üretilmiş yüksek kaliteli sıcak dövme cıvatalarımızın kapsamlı yelpazemizi keşfedin.',
      getQuote: 'Teklif Al',
      learnMore: 'Daha Fazla Bilgi'
    },
    buttons: {
      getQuote: 'Teklif Al',
      contactUs: 'Bize Ulaşın',
      learnMore: 'Daha Fazla Bilgi',
      viewAll: 'Tüm Ürünleri Görüntüle'
    }
  }
};

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
  
  return { t };
};