// Datos demo de conversión de monedas
// En producción, estos datos vendrán de ExchangeRate-API

export const currencies = [
  { code: 'USD', name: 'Dólar estadounidense', symbol: '$', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { code: 'GBP', name: 'Libra esterlina', symbol: '£', flag: '🇬🇧' },
  { code: 'JPY', name: 'Yen japonés', symbol: '¥', flag: '🇯🇵' },
  { code: 'MXN', name: 'Peso mexicano', symbol: '$', flag: '🇲🇽' },
  { code: 'CAD', name: 'Dólar canadiense', symbol: 'C$', flag: '🇨🇦' },
  { code: 'AUD', name: 'Dólar australiano', symbol: 'A$', flag: '🇦🇺' },
  { code: 'CHF', name: 'Franco suizo', symbol: 'CHF', flag: '🇨🇭' },
  { code: 'CNY', name: 'Yuan chino', symbol: '¥', flag: '🇨🇳' },
  { code: 'SEK', name: 'Corona sueca', symbol: 'kr', flag: '🇸🇪' },
  { code: 'NZD', name: 'Dólar neozelandés', symbol: 'NZ$', flag: '🇳🇿' },
  { code: 'KRW', name: 'Won surcoreano', symbol: '₩', flag: '🇰🇷' },
  { code: 'SGD', name: 'Dólar singapurense', symbol: 'S$', flag: '🇸🇬' },
  { code: 'NOK', name: 'Corona noruega', symbol: 'kr', flag: '🇳🇴' },
  { code: 'INR', name: 'Rupia india', symbol: '₹', flag: '🇮🇳' },
  { code: 'BRL', name: 'Real brasileño', symbol: 'R$', flag: '🇧🇷' },
  { code: 'ARS', name: 'Peso argentino', symbol: '$', flag: '🇦🇷' },
  { code: 'CLP', name: 'Peso chileno', symbol: '$', flag: '🇨🇱' },
  { code: 'COP', name: 'Peso colombiano', symbol: '$', flag: '🇨🇴' },
  { code: 'THB', name: 'Baht tailandés', symbol: '฿', flag: '🇹🇭' }
];

// Tasas de cambio demo (base: USD = 1.00)
// En producción vendrán de la API en tiempo real
export const demoExchangeRates = {
  USD: 1.00,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 149.50,
  MXN: 17.20,
  CAD: 1.36,
  AUD: 1.52,
  CHF: 0.88,
  CNY: 7.24,
  SEK: 10.35,
  NZD: 1.64,
  KRW: 1320.00,
  SGD: 1.34,
  NOK: 10.68,
  INR: 83.15,
  BRL: 4.97,
  ARS: 850.00,
  CLP: 930.00,
  COP: 3950.00,
  THB: 35.50
};

// Función para convertir monedas
export const convertCurrency = (amount, from, to) => {
  const amountInUSD = amount / demoExchangeRates[from];
  const convertedAmount = amountInUSD * demoExchangeRates[to];
  return convertedAmount.toFixed(2);
};

// Función para obtener símbolo de moneda
export const getCurrencySymbol = (code) => {
  const currency = currencies.find(c => c.code === code);
  return currency ? currency.symbol : code;
};

// Función para obtener nombre de moneda
export const getCurrencyName = (code) => {
  const currency = currencies.find(c => c.code === code);
  return currency ? currency.name : code;
};

// Datos demo de clima
export const demoWeatherData = {
  temp: 18,
  condition: 'Soleado',
  icon: '☀️',
  humidity: 65,
  wind: 12,
  forecast: [
    { day: 'Lun', temp: 19, icon: '☀️' },
    { day: 'Mar', temp: 17, icon: '⛅' },
    { day: 'Mié', temp: 16, icon: '🌧️' },
    { day: 'Jue', temp: 18, icon: '⛅' },
    { day: 'Vie', temp: 20, icon: '☀️' },
    { day: 'Sáb', temp: 22, icon: '☀️' },
    { day: 'Dom', temp: 21, icon: '⛅' }
  ]
};
