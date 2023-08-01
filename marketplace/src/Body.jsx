import React, { useState } from 'react';

function Body() {
  const [search, setSearch] = useState('');
  const [industry, setIndustry] = useState('');
  const [marketCap, setMarketCap] = useState('');

  const stocks = [
    { name: 'Stock A', price: 100, industry: 'Tech', marketCap: 1000 },
    { name: 'Stock B', price: 150, industry: 'Healthcare', marketCap: 2000 },
    // Add more stocks as needed
  ];

  const cryptos = [
    { name: 'Bitcoin', price: 50000 },
    { name: 'Ethereum', price: 3000 },
    // Add more cryptos as needed
  ];

  const filteredStocks = stocks
    .filter(stock => stock.name.toLowerCase().includes(search.toLowerCase()))
    .filter(stock => !industry || stock.industry === industry)
    .filter(stock => !marketCap || stock.marketCap >= marketCap);

  return (
    <main>
      <h2>Welcome to our Financial Marketplace!</h2>
      <p>Explore and invest in a wide range of stocks and cryptocurrencies.</p>

      <input
        type="text"
        placeholder="Search stocks"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <select value={industry} onChange={e => setIndustry(e.target.value)}>
        <option value="">All industries</option>
        <option value="Tech">Tech</option>
        <option value="Healthcare">Healthcare</option>
        {/* Add more options as needed */}
      </select>

      <input
        type="number"
        placeholder="Minimum market cap"
        value={marketCap}
        onChange={e => setMarketCap(e.target.value)}
      />

      <div className="stock-list">
        {filteredStocks.map(stock => (
          <div className="stock-item" key={stock.name}>
            <h3>{stock.name}</h3>
            <p>Current Price: ${stock.price}</p>
            <button>Invest</button>
          </div>
        ))}
      </div>

      <h2>Cryptocurrencies</h2>
      <div className="crypto-list">
        {cryptos.map(crypto => (
          <div className="crypto-item" key={crypto.name}>
            <h3>{crypto.name}</h3>
            <p>Current Price: ${crypto.price}</p>
            <button>Invest</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Body;
