import React, { createContext, useContext, useEffect, useState } from 'react';

type CurrencyCode = 'GBP' | 'USD' | 'EUR' | 'SGD' | string;

interface CurrencyContextType {
  currency: CurrencyCode;
  loading: boolean;
  formatPrice: (amount: number, baseCurrency?: string) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Rough conversion rates from GBP as of current date
const CONVERSION_RATES: Record<string, number> = {
  GBP: 1,
  USD: 1.25,
  EUR: 1.17,
  SGD: 1.68,
  // Add others as needed or use a default
};

const SYMBOLS: Record<string, string> = {
  GBP: '£',
  USD: '$',
  EUR: '€',
  SGD: 'S$',
};

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<CurrencyCode>('GBP');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detectCurrency = async () => {
      try {
        // Attempt to detect currency via a public API
        const response = await fetch('https://ipapi.co/currency/', { cache: 'force-cache' });
        if (response.ok) {
          const code = await response.text();
          if (code && code.length === 3) {
            setCurrency(code);
            return;
          }
        }
      } catch (err) {
        console.error('Failed to detect currency:', err);
      }

      // Fallback: Try to guess from locale
      try {
        const locale = navigator.language;
        const numberFormat = new Intl.NumberFormat(locale, { style: 'currency', currency: 'GBP' });
        const resolvedCurrency = numberFormat.resolvedOptions().currency;
        if (resolvedCurrency && resolvedCurrency !== 'GBP') {
          // If the locale has a default currency, use it if we have a rate for it
          // Note: Intl often defaults to the currency passed in if it's not sure
        }
      } catch (err) {
        // Silently fail
      }

      setLoading(false);
    };

    detectCurrency().finally(() => setLoading(false));
  }, []);

  const formatPrice = (amount: number, baseCurrency: string = 'GBP') => {
    const rate = CONVERSION_RATES[currency] || 1;
    // If we don't have a rate for the detected currency, we could fallback to USD or stay with GBP
    const finalRate = CONVERSION_RATES[currency] ? rate : (CONVERSION_RATES['USD'] || 1.25);
    const convertedAmount = amount * (finalRate / (CONVERSION_RATES[baseCurrency] || 1));
    
    try {
      return new Intl.NumberFormat(navigator.language || 'en-GB', {
        style: 'currency',
        currency: CONVERSION_RATES[currency] ? currency : 'USD', // Fallback to USD for display if rate not found
        maximumFractionDigits: 0,
      }).format(convertedAmount);
    } catch (e) {
      // Basic fallback
      const symbol = SYMBOLS[currency] || SYMBOLS['USD'] || '$';
      return `${symbol}${convertedAmount.toLocaleString()}`;
    }
  };

  return (
    <CurrencyContext.Provider value={{ currency, loading, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

interface PriceProps {
  amount: number;
  baseCurrency?: string;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export const Price: React.FC<PriceProps> = ({ 
  amount, 
  baseCurrency = 'GBP', 
  className,
  prefix = '',
  suffix = ''
}) => {
  const { formatPrice, loading } = useCurrency();
  
  if (loading) {
    return <span className={className}>{prefix}...{suffix}</span>;
  }

  return (
    <span className={className}>
      {prefix}{formatPrice(amount, baseCurrency)}{suffix}
    </span>
  );
};
