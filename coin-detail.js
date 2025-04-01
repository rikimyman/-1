// Coin Detail Page JavaScript

// Cache and variables
let coinData = {};
let priceHistoryData = [];
let priceChart = null;
let volumeChart = null;
let updateInterval;

// Timeframe mappings for API calls - IMPROVED with properly defined intervals
const timeframeMap = {
  '1H': { interval: '1m', duration: 60 * 60 * 1000, label: 'Last Hour' },
  '24H': { interval: '5m', duration: 24 * 60 * 60 * 1000, label: 'Last 24 Hours' },
  '7D': { interval: '2h', duration: 7 * 24 * 60 * 60 * 1000, label: 'Last 7 Days' },
  '1M': { interval: '8h', duration: 30 * 24 * 60 * 60 * 1000, label: 'Last Month' },
  '3M': { interval: '1d', duration: 90 * 24 * 60 * 60 * 1000, label: 'Last 3 Months' },
  '1Y': { interval: '1w', duration: 365 * 24 * 60 * 60 * 1000, label: 'Last Year' },
  'ALL': { interval: '1M', duration: 2000 * 24 * 60 * 60 * 1000, label: 'All Time' } // Very long period
};

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Sync theme with the main page
  syncThemeWithMainPage();
  
  // Set up theme toggle
  setupThemeToggle();
  
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const symbol = urlParams.get('symbol');
  const id = urlParams.get('id');
  const name = urlParams.get('name');
  
  // Try to get cached coin data from session storage
  try {
    const storedCoin = sessionStorage.getItem('selectedCoin');
    if (storedCoin) {
      coinData = JSON.parse(storedCoin);
    } else {
      // Fallback if no session data
      coinData = {
        id: id,
        symbol: symbol,
        name: name,
        shortSymbol: symbol ? symbol.replace('USDT', '') : ''
      };
    }
    
    // Try to get price history data
    const storedPriceData = sessionStorage.getItem('coinPriceData');
    if (storedPriceData) {
      priceHistoryData = JSON.parse(storedPriceData);
    }
    
    // Initialize the page with available data
    initializeCoinDetailPage();
    
    // Fetch comprehensive coin data
    fetchCoinDetailData(coinData.symbol);
    
  } catch (error) {
    console.error('Error initializing coin detail page:', error);
    showErrorMessage('Failed to load cryptocurrency data.');
  }
  
  // Set up time period switches with improved functionality
  setupTimePeriodSwitches();
});

// Enhanced theme synchronization function
function syncThemeWithMainPage() {
  // Check if dark mode is enabled in localStorage or if system prefers dark mode
  const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
                    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  if (isDarkMode) {
    document.body.classList.add('dark-theme');
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    document.documentElement.setAttribute('data-theme', 'light');
  }
  
  // Update the theme toggle button appearance
  updateThemeToggleButton(isDarkMode);
  
  // Also update charts if they exist
  if (priceChart) updateChartTheme(priceChart);
  if (volumeChart) updateChartTheme(volumeChart);
}

// Setup theme toggle with improved functionality
function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;
  
  // Initialize the button based on current theme
  const isDarkMode = document.body.classList.contains('dark-theme');
  updateThemeToggleButton(isDarkMode);
  
  // Toggle theme on click
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-theme');
    const newTheme = !currentTheme;
    
    // Store theme preference
    localStorage.setItem('darkMode', String(newTheme));
    
    // Apply theme changes
    document.body.classList.toggle('dark-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    
    // Update toggle button
    updateThemeToggleButton(newTheme);
    
    // Update chart themes
    if (priceChart) updateChartTheme(priceChart);
    if (volumeChart) updateChartTheme(volumeChart);
    
    // Notify the parent page if embedded in an iframe
    try {
      window.parent.postMessage({ 
        action: 'themeChange', 
        darkMode: newTheme 
      }, '*');
    } catch (e) {
      console.log('Could not communicate with parent frame');
    }
  });
  
  // Listen for theme changes from parent page
  window.addEventListener('message', (event) => {
    if (event.data && event.data.action === 'themeChange') {
      const newDarkMode = event.data.darkMode;
      document.body.classList.toggle('dark-theme', newDarkMode);
      document.documentElement.setAttribute('data-theme', newDarkMode ? 'dark' : 'light');
      updateThemeToggleButton(newDarkMode);
      
      if (priceChart) updateChartTheme(priceChart);
      if (volumeChart) updateChartTheme(volumeChart);
    }
  });
}

// Update the theme toggle button appearance
function updateThemeToggleButton(isDark) {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;
  
  themeToggle.innerHTML = isDark ? 
    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
    </svg>` : 
    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>`;
}

// Enhanced initialize function with better organized sections
function initializeCoinDetailPage() {
  // Set the page title
  document.title = `${coinData.name} (${coinData.shortSymbol}) - Crypto Detail`;
  
  // Update header information with improved layout - separating price from stats
  const topInfoBar = document.querySelector('.top-info-bar');
  if (topInfoBar) {
    const coinIdentity = document.createElement('div');
    coinIdentity.className = 'coin-identity';
    
    coinIdentity.innerHTML = `
      <div class="coin-logo-large">
        <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/${coinData.id}.png" 
             alt="${coinData.name}" 
             onerror="this.src='https://cryptologos.cc/logos/${coinData.name.toLowerCase()}-${coinData.shortSymbol.toLowerCase()}-logo.png'">
      </div>
      <div class="coin-title-area">
        <h1 id="coin-title">${coinData.name} <span class="coin-symbol-large">${coinData.shortSymbol}</span></h1>
      </div>
    `;
    
    const priceContainer = document.createElement('div');
    priceContainer.className = 'price-container';
    priceContainer.innerHTML = `
      <span id="current-price" class="current-price">Loading...</span>
      <span id="price-change-24h" class="price-change">0.00%</span>
    `;
    
    // Clear and re-append to ensure proper order
    topInfoBar.innerHTML = '';
    topInfoBar.appendChild(coinIdentity);
    topInfoBar.appendChild(priceContainer);
  }

  // Set up stats cards separately
  setupStatisticsCards();
  
  // Initialize charts with any available data
  initializeCharts();
  
  // Set up chart toggle functionality
  setupChartToggle();
  
  // Apply current theme to ensure proper styling
  syncThemeWithMainPage();
  
  // Initialize the proper TradingView symbol for this coin
  setupTradingViewSymbol(coinData.symbol);
  
  // Initialize default about section with description
  setupCoinDescription(coinData.shortSymbol.toLowerCase());
  
  // Dispatch event that coin data is ready (for news section)
  window.dispatchEvent(new CustomEvent('coinDataReady', { 
    detail: { name: coinData.name, symbol: coinData.shortSymbol } 
  }));
}

// New function to set up statistics cards
function setupStatisticsCards() {
  const statsOverviewCard = document.getElementById('stats-overview-card');
  if (statsOverviewCard) {
    statsOverviewCard.innerHTML = `
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-label">Market Cap</div>
          <div id="market-cap-value" class="stat-value">$--</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">24h Volume</div>
          <div id="volume-value" class="stat-value">$--</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Circulating Supply</div>
          <div id="circ-supply-value" class="stat-value">--</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Max Supply</div>
          <div id="max-supply-value" class="stat-value">--</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Fully Diluted</div>
          <div id="fully-diluted-value" class="stat-value">--</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Market Rank</div>
          <div id="market-rank-value" class="stat-value">#--</div>
        </div>
      </div>
    `;
  }
}

// Set up chart toggle functionality
function setupChartToggle() {
  const chartToggle = document.getElementById('chart-type-toggle');
  if (chartToggle) {
    // Set initial state
    chartToggle.innerHTML = `
      <button class="chart-type-btn active" data-chart="line">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0V3H7.5a.5.5 0 0 1-.5-.5zM3.854 8.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l7-7a.5.5 0 0 0-.708-.708L8 12.293 3.854 8.146z"/>
        </svg>
        Line
      </button>
      <button class="chart-type-btn" data-chart="candle">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
        TradingView
      </button>
    `;
    
    // Add click handlers
    chartToggle.querySelectorAll('.chart-type-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        // Update active state
        chartToggle.querySelectorAll('.chart-type-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Switch chart type
        const chartType = this.dataset.chart;
        switchChartType(chartType);
      });
    });
  }
}

// Function to switch between chart types - UPDATED to ensure TradingView works with current coin
function switchChartType(chartType) {
  const chartContainer = document.querySelector('.chart-container');
  const candleContainer = document.getElementById('tradingview-chart');
  const lineChartCanvas = document.getElementById('price-chart');
  
  if (!chartContainer || !candleContainer) return;
  
  // Get current timeframe
  const activeTimeframe = document.querySelector('.time-button.active')?.dataset.timeframe || '24H';
  
  if (chartType === 'candle') {
    // Show TradingView chart, hide line chart
    lineChartCanvas.style.display = 'none';
    candleContainer.style.display = 'block';
    
    // Initialize or update TradingView chart with the correct symbol
    // Use the stored symbol from the coin data
    const symbol = window.tradingViewSymbol || coinData.symbol;
    initTradingViewChart(symbol, mapTimeframeToTradingView(activeTimeframe));
  } else {
    // Show line chart, hide TradingView chart
    lineChartCanvas.style.display = 'block';
    candleContainer.style.display = 'none';
    
    // Make sure the line chart is properly sized
    if (priceChart) {
      setTimeout(() => {
        priceChart.resize();
      }, 0);
    }
  }
}

// Map our timeframes to TradingView intervals
function mapTimeframeToTradingView(timeframe) {
  const mapping = {
    '1H': '1m',
    '24H': '15',
    '7D': '60',
    '1M': '240',
    '3M': 'D',
    '1Y': 'W',
    'ALL': 'M'
  };
  return mapping[timeframe] || '60';
}

// Initialize TradingView chart - IMPROVED with better symbol handling
function initTradingViewChart(symbol, interval) {
  const container = document.getElementById('tradingview-chart');
  if (!container) return;
  
  // Clear previous chart
  container.innerHTML = '';
  
  // Ensure we have a valid symbol by removing any trailing "USDT" if it exists
  // This makes it compatible with TradingView's format expectations
  let cleanSymbol = symbol;
  if (cleanSymbol.endsWith('USDT')) {
    cleanSymbol = cleanSymbol.replace('USDT', '');
  }
  
  // Get symbol in TradingView format - use USD trading pair for cleaner charts
  const tvSymbol = `BINANCE:${cleanSymbol}USD`;
  console.log("Initializing TradingView with symbol:", tvSymbol);
  
  // Get theme
  const isDarkMode = document.body.classList.contains('dark-theme');
  
  // Initialize TradingView widget with improved configuration
  new TradingView.widget({
    "autosize": true,
    "symbol": tvSymbol,
    "interval": interval,
    "timezone": "Etc/UTC",
    "theme": isDarkMode ? "dark" : "light",
    "style": "1", // Candlesticks
    "locale": "en",
    "toolbar_bg": isDarkMode ? "#1D1D1D" : "#f1f3f6",
    "enable_publishing": false,
    "hide_top_toolbar": false, // Show toolbar for better user control
    "hide_legend": false,
    "save_image": true, // Allow saving chart images
    "container_id": "tradingview-chart",
    "studies": [
      "MASimple@tv-basicstudies", // Simple Moving Average
      "MAExp@tv-basicstudies",    // Exponential Moving Average
      "VWAP@tv-basicstudies",     // Volume Weighted Average Price
      "RSI@tv-basicstudies"       // Relative Strength Index
    ],
    "withdateranges": true,
    "hide_side_toolbar": false,
    "allow_symbol_change": true, // Allow changing symbols
    "details": true,
    "hotlist": true,
    "calendar": true, 
    "show_popup_button": true,
    "popup_width": "1000",
    "popup_height": "650"
  });
}

// Fetch detailed coin data from multiple sources - IMPROVED with multiple timeframe support
async function fetchCoinDetailData(symbol) {
  try {
    // Show loading indicators
    document.getElementById('detail-loading')?.classList.add('active');
    
    // Fetch current price from Binance
    const pricePromise = fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
    
    // Fetch 24h statistics
    const statsPromise = fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`);
    
    // Select default timeframe (24H)
    const activeTimeframe = document.querySelector('.time-button.active')?.dataset.timeframe || '24H';
    
    // Fetch data for multiple timeframes in parallel
    const timeframePromises = {};
    Object.keys(timeframeMap).forEach(key => {
      const tf = timeframeMap[key];
      const timeNow = Date.now();
      const startTime = timeNow - tf.duration;
      timeframePromises[key] = fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${tf.interval}&startTime=${startTime}&endTime=${timeNow}`);
    });
    
    // Wait for essential data
    const [priceResp, statsResp] = await Promise.all([pricePromise, statsPromise]);
    
    // Process price data
    if (priceResp.ok) {
      const priceData = await priceResp.json();
      updateCurrentPrice(priceData.price);
    }
    
    // Process 24h stats
    if (statsResp.ok) {
      const statsData = await statsResp.json();
      update24hStats(statsData);
    }
    
    // Process timeframe data in background
    Object.keys(timeframePromises).forEach(async (timeframe) => {
      try {
        const response = await timeframePromises[timeframe];
        if (response.ok) {
          const klineData = await response.json();
          // Process and store timeframe data
          const processedData = processKlines(klineData);
          
          // Store in cache
          if (!coinData.historicalData) {
            coinData.historicalData = {};
          }
          coinData.historicalData[timeframe] = processedData;
          
          // Update chart only for active timeframe
          if (timeframe === activeTimeframe) {
            updateChartWithTimeframe(timeframe);
          }
          
          // After successful data load, check if we should show TradingView instead
          const activeTVButton = document.querySelector('.chart-type-btn[data-chart="candle"].active');
          if (activeTVButton) {
            switchChartType('candle'); // Force TradingView update
          }
        }
      } catch (err) {
        console.error(`Error loading ${timeframe} data:`, err);
      }
    });
    
    // Try to get additional data from CoinGecko or other sources for more details
    fetchAdditionalCoinDetails(coinData.shortSymbol.toLowerCase());
    
    // Hide loading indicator after essential data is processed
    document.getElementById('detail-loading')?.classList.remove('active');
    
    // Setup WebSocket for real-time updates
    setupRealtimeUpdates(symbol);
    
  } catch (error) {
    console.error('Error fetching detailed coin data:', error);
    document.getElementById('detail-loading')?.classList.remove('active');
    showErrorMessage('Error loading detailed cryptocurrency data.');
  }
}

// Process historical kline data from Binance
function processHistoricalData(dayKlines, weekKlines, monthKlines) {
  // Store processed data in global object
  coinData.historicalData = {
    '1D': processKlines(dayKlines),
    '1W': processKlines(weekKlines),
    '1M': processKlines(monthKlines)
  };
}

// Process kline data into chart-friendly format
function processKlines(klines) {
  return klines.map(candle => {
    const timestamp = candle[0]; // Open time
    const open = parseFloat(candle[1]);
    const high = parseFloat(candle[2]);
    const low = parseFloat(candle[3]);
    const close = parseFloat(candle[4]);
    const volume = parseFloat(candle[5]);
    
    return {
      timestamp,
      time: new Date(timestamp),
      open,
      high,
      low,
      close,
      volume
    };
  });
}

// Update the UI with current price information
function updateCurrentPrice(price) {
  const priceElement = document.getElementById('current-price');
  if (priceElement) {
    const formattedPrice = formatPrice(parseFloat(price));
    priceElement.textContent = formattedPrice;
  }
}

// Enhanced update for 24h statistics with improved range visualization
function update24hStats(stats) {
  // Update price change
  const changeElement = document.getElementById('price-change-24h');
  if (changeElement) {
    const priceChangePercent = parseFloat(stats.priceChangePercent);
    changeElement.textContent = `${priceChangePercent >= 0 ? '+' : ''}${priceChangePercent.toFixed(2)}%`;
    changeElement.className = 'price-change ' + (priceChangePercent >= 0 ? 'price-up' : 'price-down');
  }
  
  // Update volume value in the key metrics area
  const volumeElement = document.getElementById('volume-value');
  if (volumeElement && stats.quoteVolume) {
    volumeElement.textContent = formatLargeNumber(parseFloat(stats.quoteVolume));
  }
  
  // Store price, high, and low values for price range indicator
  const currentPrice = parseFloat(stats.lastPrice);
  const highPrice = parseFloat(stats.highPrice);
  const lowPrice = parseFloat(stats.lowPrice);
  
  // Calculate position percentage for the high/low slider
  let positionPercentage = 0;
  if (highPrice > lowPrice) {
    positionPercentage = ((currentPrice - lowPrice) / (highPrice - lowPrice)) * 100;
    positionPercentage = Math.min(100, Math.max(0, positionPercentage)); // Ensure value is between 0-100
  }
  
  // Add additional stats to price stats container with improved high/low visualization
  const statsContainer = document.getElementById('price-stats-container');
  if (statsContainer) {
    statsContainer.innerHTML = `
      <div class="price-range-professional">
        <div class="price-range-header">
          <span class="range-title">24h Price Range</span>
          <span class="range-percentage">${positionPercentage.toFixed(0)}%</span>
        </div>
        <div class="price-range-visualization">
          <div class="range-labels">
            <span class="low-value">${formatPrice(lowPrice)}</span>
            <span class="high-value">${formatPrice(highPrice)}</span>
          </div>
          <div class="price-range-bar">
            <div class="price-range-track"></div>
            <div class="price-range-fill" style="width: ${positionPercentage}%"></div>
            <div class="price-range-marker" style="left: ${positionPercentage}%">
              <div class="marker-value">${formatPrice(currentPrice)}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="stats-table">
        <div class="stat-row">
          <div class="stat-cell">24h High</div>
          <div class="stat-cell highlight-high">${formatPrice(highPrice)}</div>
        </div>
        <div class="stat-row">
          <div class="stat-cell">24h Low</div>
          <div class="stat-cell highlight-low">${formatPrice(lowPrice)}</div>
        </div>
        <div class="stat-row">
          <div class="stat-cell">24h Change</div>
          <div class="stat-cell ${parseFloat(stats.priceChange) >= 0 ? 'price-up' : 'price-down'}">
            ${formatPrice(parseFloat(stats.priceChange))} (${parseFloat(stats.priceChangePercent).toFixed(2)}%)
          </div>
        </div>
        <div class="stat-row">
          <div class="stat-cell">24h Volume</div>
          <div class="stat-cell">${formatLargeNumber(parseFloat(stats.quoteVolume))}</div>
        </div>
      </div>
    `;
  }
  
  // Update additional stats in the stats overview card
  updateStatsOverviewCard(stats);
}

// New function to update the stats overview card with more comprehensive data
function updateStatsOverviewCard(stats) {
  // Try to get market cap by using known circulating supply values
  const price = parseFloat(stats.lastPrice);
  const marketCapElement = document.getElementById('market-cap-value');
  const volumeElement = document.getElementById('volume-value');
  const circSupplyElement = document.getElementById('circ-supply-value');
  const maxSupplyElement = document.getElementById('max-supply-value');
  const fullyDilutedElement = document.getElementById('fully-diluted-value');
  const marketRankElement = document.getElementById('market-rank-value');
  
  // Update volume
  if (volumeElement && stats.quoteVolume) {
    volumeElement.textContent = formatLargeNumber(parseFloat(stats.quoteVolume));
  }
  
  // Try to get comprehensive market data
  fetchComprehensiveMarketData(coinData.shortSymbol.toLowerCase(), price);
}

// Enhanced function to fetch comprehensive market data
async function fetchComprehensiveMarketData(coinId, currentPrice) {
  const marketCapElement = document.getElementById('market-cap-value');
  const circSupplyElement = document.getElementById('circ-supply-value');
  const maxSupplyElement = document.getElementById('max-supply-value');
  const fullyDilutedElement = document.getElementById('fully-diluted-value');
  const marketRankElement = document.getElementById('market-rank-value');
  
  try {
    // Try CoinGecko API first
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`);
    
    if (response.ok) {
      const data = await response.json();
      const marketData = data.market_data || {};
      
      // Update market cap
      if (marketCapElement && marketData.market_cap?.usd) {
        marketCapElement.textContent = formatLargeNumber(marketData.market_cap.usd);
      }
      
      // Update circulating supply
      if (circSupplyElement && marketData.circulating_supply) {
        circSupplyElement.textContent = formatNumber(marketData.circulating_supply) + ` ${data.symbol?.toUpperCase()}`;
      }
      
      // Update max supply
      if (maxSupplyElement && marketData.total_supply) {
        maxSupplyElement.textContent = formatNumber(marketData.total_supply) + ` ${data.symbol?.toUpperCase()}`;
      }
      
      // Update fully diluted valuation
      if (fullyDilutedElement && marketData.fully_diluted_valuation?.usd) {
        fullyDilutedElement.textContent = formatLargeNumber(marketData.fully_diluted_valuation.usd);
      } else if (fullyDilutedElement && marketData.total_supply) {
        // Calculate manually if not provided
        const fullyDiluted = marketData.total_supply * currentPrice;
        fullyDilutedElement.textContent = formatLargeNumber(fullyDiluted);
      }
      
      // Update market rank
      if (marketRankElement && data.market_cap_rank) {
        marketRankElement.textContent = `#${data.market_cap_rank}`;
      }
      
      return;
    }
    
    // If CoinGecko fails, try CoinCap API
    const fallbackResponse = await fetch(`https://api.coincap.io/v2/assets/${coinId}`);
    if (fallbackResponse.ok) {
      const fallbackData = await fallbackResponse.json();
      const asset = fallbackData.data;
      
      // Update market cap
      if (marketCapElement && asset.marketCapUsd) {
        marketCapElement.textContent = formatLargeNumber(parseFloat(asset.marketCapUsd));
      }
      
      // Update circulating supply
      if (circSupplyElement && asset.supply) {
        circSupplyElement.textContent = formatNumber(parseFloat(asset.supply)) + ` ${asset.symbol}`;
      }
      
      // Update max supply
      if (maxSupplyElement && asset.maxSupply) {
        maxSupplyElement.textContent = formatNumber(parseFloat(asset.maxSupply)) + ` ${asset.symbol}`;
      }
      
      // Update fully diluted valuation
      if (fullyDilutedElement && asset.maxSupply) {
        const fullyDiluted = parseFloat(asset.maxSupply) * parseFloat(asset.priceUsd);
        fullyDilutedElement.textContent = formatLargeNumber(fullyDiluted);
      }
      
      // Update market rank
      if (marketRankElement && asset.rank) {
        marketRankElement.textContent = `#${asset.rank}`;
      }
      
      return;
    }
  } catch (error) {
    console.error('Error fetching comprehensive market data:', error);
  }
  
  // Fallback to our own calculations if APIs fail
  const marketCapEstimations = {
    'btc': { circ: 19460000, max: 21000000 },
    'eth': { circ: 120248000, max: null },
    'bnb': { circ: 155136000, max: 200000000 },
    'xrp': { circ: 53500000000, max: 100000000000 },
    'ada': { circ: 35401000000, max: 45000000000 },
    'sol': { circ: 437390781, max: 550000000 },
    'doge': { circ: 143151000000, max: null },
    'dot': { circ: 1288916999, max: 1547427550 },
    'trx': { circ: 88735000000, max: 99000000000 },
    'link': { circ: 557840000, max: 1000000000 },
    'avax': { circ: 367020000, max: 720000000 },
    'sui': { circ: 1215833385, max: 10000000000 },
    'apt': { circ: 331000000, max: 1000000000 },
    'xlm': { circ: 30430000000, max: 50000000000 },
    'ltc': { circ: 73637775, max: 84000000 },
    'ton': { circ: 3500000000, max: 5000000000 },
    'shib': { circ: 589332671027293, max: 589738807316383 },
    'hbar': { circ: 34062168772, max: 50000000000 },
    'tao': { circ: 25800000, max: 100000000 },
    'uni': { circ: 753766667, max: 1000000000 },
    // Add more coins as needed
  };
  
  // Use our estimations if available
  const estimation = marketCapEstimations[coinId];
  if (estimation) {
    if (marketCapElement && estimation.circ) {
      const marketCap = currentPrice * estimation.circ;
      marketCapElement.textContent = formatLargeNumber(marketCap);
    }
    
    if (circSupplyElement && estimation.circ) {
      circSupplyElement.textContent = formatNumber(estimation.circ) + ` ${coinData.shortSymbol}`;
    }
    
    if (maxSupplyElement && estimation.max) {
      maxSupplyElement.textContent = formatNumber(estimation.max) + ` ${coinData.shortSymbol}`;
    } else if (maxSupplyElement) {
      maxSupplyElement.textContent = "∞";
    }
    
    if (fullyDilutedElement && estimation.max) {
      const fullyDiluted = currentPrice * estimation.max;
      fullyDilutedElement.textContent = formatLargeNumber(fullyDiluted);
    } else if (fullyDilutedElement) {
      fullyDilutedElement.textContent = "∞";
    }
  }
}

// Enhanced charts with improved trading view style
function initializeCharts() {
  const priceChartCtx = document.getElementById('price-chart');
  const volumeChartCtx = document.getElementById('volume-chart');
  
  const isDarkMode = document.body.classList.contains('dark-theme');
  const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
  const textColor = isDarkMode ? '#aaa' : '#777';
  const backgroundColor = isDarkMode ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.95)';
  
  // Create more professional TradingView style for price chart
  if (priceChartCtx) {
    // Add trading view style candlestick or area options
    const commonOptions = {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: backgroundColor,
          titleColor: isDarkMode ? '#ffffff' : '#333',
          bodyColor: textColor,
          borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
          borderWidth: 1,
          cornerRadius: 8,
          padding: 12,
          titleFont: {
            size: 14,
            weight: 'bold',
            family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          },
          bodyFont: {
            size: 13,
            family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          },
          callbacks: {
            label: function(context) {
              return `Price: ${formatPrice(context.raw)}`;
            },
            title: function(context) {
              return new Date(context[0].label).toLocaleString();
            }
          },
          animation: {
            duration: 150
          }
        },
        tradingViewCrosshair: {
          beforeDraw: function(chart) {
            if (chart.tooltip._active && chart.tooltip._active.length) {
              const activePoint = chart.tooltip._active[0];
              const ctx = chart.ctx;
              const x = activePoint.element.x;
              const yAxis = chart.scales.y;
              const topY = yAxis.top;
              const bottomY = yAxis.bottom;
              
              // Draw vertical line
              ctx.save();
              ctx.beginPath();
              ctx.setLineDash([5, 5]);
              ctx.moveTo(x, topY);
              ctx.lineTo(x, bottomY);
              ctx.lineWidth = 1;
              ctx.strokeStyle = isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)';
              ctx.stroke();
              ctx.restore();
              
              // Draw horizontal line at hover point
              if (chart.tooltip._active[0]?.element?.y) {
                const y = chart.tooltip._active[0].element.y;
                ctx.save();
                ctx.beginPath();
                ctx.setLineDash([5, 5]);
                ctx.moveTo(chart.chartArea.left, y);
                ctx.lineTo(chart.chartArea.right, y);
                ctx.lineWidth = 1;
                ctx.strokeStyle = isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)';
                ctx.stroke();
                ctx.restore();
              }
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            autoSkip: true,
            maxTicksLimit: 8,
            color: textColor,
            font: { size: 11 }
          },
          border: {
            color: gridColor
          }
        },
        y: {
          position: 'right',
          grid: {
            color: gridColor,
            drawBorder: false,
            drawTicks: false
          },
          ticks: {
            callback: function(value) {
              return formatPrice(value, true);
            },
            color: textColor,
            font: { size: 11 },
            padding: 8
          },
          border: {
            color: gridColor
          }
        }
      },
      elements: {
        line: { tension: 0.3 },
        point: {
          radius: 0,
          hoverRadius: 5
        }
      }
    };
    
    priceChart = new Chart(priceChartCtx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Price',
          data: [],
          borderColor: '#4daf7c',
          borderWidth: 2,
          backgroundColor: 'rgba(77, 175, 124, 0.1)',
          fill: true,
          pointRadius: 0,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: '#4daf7c',
          pointHoverBorderColor: '#ffffff',
          pointHoverBorderWidth: 2
        }]
      },
      options: commonOptions
    });
    
    // Add event listeners for crosshair effects
    priceChartCtx.addEventListener('mousemove', function(e) {
      const tooltip = document.getElementById('chart-tooltip');
      if (!tooltip) return;
      
      if (priceChart.tooltip && priceChart.tooltip._active && priceChart.tooltip._active.length) {
        tooltip.style.left = e.offsetX + 'px';
        tooltip.style.top = e.offsetY - 40 + 'px';
        tooltip.classList.add('tooltip-visible');
      } else {
        tooltip.classList.remove('tooltip-visible');
      }
    });
    
    priceChartCtx.addEventListener('mouseout', function() {
      const tooltip = document.getElementById('chart-tooltip');
      if (tooltip) tooltip.classList.remove('tooltip-visible');
    });
  }
  
  // Similar improvements for volume chart
  if (volumeChartCtx) {
    volumeChart = new Chart(volumeChartCtx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: 'Volume',
          data: [],
          backgroundColor: 'rgba(100, 100, 255, 0.5)',
          borderColor: 'rgba(100, 100, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return formatLargeNumber(context.raw);
              }
            }
          }
        },
        scales: {
          x: {
            display: false
          },
          y: {
            position: 'right',
            grid: {
              display: false
            },
            ticks: {
              callback: function(value) {
                return formatLargeNumber(value, true);
              }
            }
          }
        }
      }
    });
  }
}

// Fetch data for a specific timeframe and update the chart - IMPROVED
async function fetchTimeframeData(symbol, timeframeKey) {
  // Show loading indicator
  document.getElementById('detail-loading')?.classList.add('active');
  
  try {
    const timeframe = timeframeMap[timeframeKey];
    const timeNow = Date.now();
    const startTime = timeNow - timeframe.duration;
    
    const response = await fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${timeframe.interval}&startTime=${startTime}&endTime=${timeNow}`);
    
    if (response.ok) {
      const klineData = await response.json();
      
      // Process and store data
      const processedData = processKlines(klineData);
      
      // Store in cache
      if (!coinData.historicalData) {
        coinData.historicalData = {};
      }
      coinData.historicalData[timeframeKey] = processedData;
      
      // Update chart with the processed data and additional animation
      updateChartWithTimeframe(timeframeKey, true); // true = animate transition
    } else {
      throw new Error(`Failed to fetch ${timeframeKey} data`);
    }
  } catch (error) {
    console.error(`Error fetching timeframe data:`, error);
    showErrorMessage(`Could not load ${timeframeKey} chart data. Please try again.`);
  } finally {
    // Hide loading indicator
    document.getElementById('detail-loading')?.classList.remove('active');
  }
}

// Update chart with selected timeframe - IMPROVED with animations
function updateChartWithTimeframe(timeframeKey, animate = false) {
  // Check if we have data for this timeframe
  if (!coinData.historicalData || !coinData.historicalData[timeframeKey]) {
    console.error(`No data available for timeframe: ${timeframeKey}`);
    return;
  }
  
  // Update chart header to show timeframe
  const chartTitle = document.querySelector('.chart-title');
  if (chartTitle) {
    chartTitle.textContent = `Price Chart - ${timeframeMap[timeframeKey].label}`;
  }
  
  const data = coinData.historicalData[timeframeKey];
  
  // Format dates based on timeframe
  const labels = data.map(item => {
    const date = new Date(item.timestamp);
    
    // Different formatting based on timeframe
    if (timeframeKey === '1H') {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (timeframeKey === '24H') {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (timeframeKey === '7D') {
      return date.toLocaleDateString([], { weekday: 'short', day: 'numeric' });
    } else if (timeframeKey === '1M') {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    } else if (timeframeKey === '3M' || timeframeKey === '1Y' || timeframeKey === 'ALL') {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
    }
    
    return date.toLocaleString();
  });
  
  // Update price chart with animation
  if (priceChart) {
    // Keep the original timestamps for tooltips
    priceChart.data.labels = data.map(item => item.timestamp);
    priceChart.data.datasets[0].data = data.map(item => item.close);
    
    // Set color based on price trend
    const priceStart = data[0].close;
    const priceEnd = data[data.length - 1].close;
    const priceUp = priceEnd >= priceStart;
    
    priceChart.data.datasets[0].borderColor = priceUp ? '#4daf7c' : '#e63946';
    priceChart.data.datasets[0].backgroundColor = priceUp ? 
      'rgba(77, 175, 124, 0.1)' : 'rgba(230, 57, 70, 0.1)';
    priceChart.data.datasets[0].pointHoverBackgroundColor = priceUp ? '#4daf7c' : '#e63946';
    
    // Update axes
    priceChart.options.scales.x.ticks.callback = function(value, index) {
      // Show fewer labels on x-axis
      const step = Math.ceil(labels.length / 10);  // Show ~10 labels
      if (index % step !== 0) return '';
      return labels[index];
    };
    
    // Update with or without animation
    priceChart.update(animate ? undefined : 'none');
  }
  
  // Update volume chart
  if (volumeChart) {
    volumeChart.data.labels = labels;
    volumeChart.data.datasets[0].data = data.map(item => item.volume);
    volumeChart.update(animate ? undefined : 'none');
  }
  
  // Update active timeframe button
  document.querySelectorAll('.time-button').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.timeframe === timeframeKey) {
      btn.classList.add('active');
    }
  });
  
  // Update TradingView chart if it's currently displayed
  const candleContainer = document.getElementById('tradingview-chart');
  if (candleContainer && candleContainer.style.display !== 'none') {
    // Use the stored symbol from the coin data for consistency
    const symbol = window.tradingViewSymbol || coinData.symbol;
    initTradingViewChart(symbol, mapTimeframeToTradingView(timeframeKey));
  }
}

// Setup timeperiod switches with improved animation and feedback
function setupTimePeriodSwitches() {
  document.querySelectorAll('.time-button').forEach(button => {
    button.addEventListener('click', function() {
      const timeframeKey = this.dataset.timeframe;
      
      // Add ripple effect for visual feedback
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
      
      // If we already have this timeframe data, just update the chart
      if (coinData.historicalData && coinData.historicalData[timeframeKey]) {
        updateChartWithTimeframe(timeframeKey, true); // Animate the transition
      } else {
        // Otherwise fetch the data first
        fetchTimeframeData(coinData.symbol, timeframeKey);
      }
    });
  });
}

// Setup real-time updates via WebSocket
function setupRealtimeUpdates(symbol) {
  // Clear any existing interval
  if (updateInterval) {
    clearInterval(updateInterval);
  }
  
  // Create WebSocket connection
  const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@ticker`);
  
  ws.onopen = function() {
    console.log('Connected to Binance WebSocket for real-time updates');
  };
  
  ws.onmessage = function(event) {
    const data = JSON.parse(event.data);
    
    // Update price
    const price = parseFloat(data.c);
    updateCurrentPrice(price);
    
    // Update price change
    const priceChangePercent = parseFloat(data.P);
    const changeElement = document.getElementById('price-change-24h');
    if (changeElement) {
      changeElement.textContent = `${priceChangePercent >= 0 ? '+' : ''}${priceChangePercent.toFixed(2)}%`;
      changeElement.className = 'price-change ' + (priceChangePercent >= 0 ? 'price-up' : 'price-down');
    }
  };
  
  ws.onclose = function() {
    console.log('WebSocket connection closed. Setting up polling instead...');
    // Fallback to polling if WebSocket fails
    setupPollingUpdates(symbol);
  };
}

// Fallback to polling updates if WebSocket fails
function setupPollingUpdates(symbol) {
  updateInterval = setInterval(async () => {
    try {
      const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
      if (response.ok) {
        const data = await response.json();
        updateCurrentPrice(data.price);
      }
      
      const statsResponse = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`);
      if (statsResponse.ok) {
        const statsData = await statsResponse.json();
        update24hStats(statsData);
      }
    } catch (error) {
      console.error('Error polling for updates:', error);
    }
  }, 10000); // Update every 10 seconds
}

// Fetch additional coin details from alternative sources
async function fetchAdditionalCoinDetails(coinId) {
  try {
    // Try CoinGecko API
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`);
    
    if (response.ok) {
      const data = await response.json();
      updateCoinDetails(data);
    } else {
      // Try CoinCap API as fallback
      const altResponse = await fetch(`https://api.coincap.io/v2/assets/${coinId}`);
      if (altResponse.ok) {
        const altData = await altResponse.json();
        updateCoinDetailsFromCoinCap(altData.data);
      }
    }
  } catch (error) {
    console.error('Error fetching additional coin details:', error);
  }
}

// Update UI with CoinGecko data
function updateCoinDetails(data) {
  const detailsSection = document.getElementById('coin-details');
  if (!detailsSection) return;
  
  // Extract market data
  const marketData = data.market_data || {};
  
  detailsSection.innerHTML = `
    <div class="details-grid">
      <div class="detail-card">
        <h3>Market Data</h3>
        <div class="detail-item">
          <span class="detail-label">Market Cap</span>
          <span class="detail-value">${formatLargeNumber(marketData.market_cap?.usd || 0)}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">24h Trading Vol</span>
          <span class="detail-value">${formatLargeNumber(marketData.total_volume?.usd || 0)}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Circulating Supply</span>
          <span class="detail-value">${formatNumber(marketData.circulating_supply || 0)} ${data.symbol?.toUpperCase()}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Total Supply</span>
          <span class="detail-value">${formatNumber(marketData.total_supply || 0)} ${data.symbol?.toUpperCase()}</span>
        </div>
      </div>
      
      <div class="detail-card">
        <h3>Price Statistics</h3>
        <div class="detail-item">
          <span class="detail-label">All-Time High</span>
          <span class="detail-value">${formatPrice(marketData.ath?.usd || 0)}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">All-Time Low</span>
          <span class="detail-value">${formatPrice(marketData.atl?.usd || 0)}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Price Change (7d)</span>
          <span class="detail-value ${marketData.price_change_percentage_7d >= 0 ? 'price-up' : 'price-down'}">
            ${marketData.price_change_percentage_7d >= 0 ? '+' : ''}${marketData.price_change_percentage_7d?.toFixed(2) || 0}%
          </span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Price Change (30d)</span>
          <span class="detail-value ${marketData.price_change_percentage_30d >= 0 ? 'price-up' : 'price-down'}">
            ${marketData.price_change_percentage_30d >= 0 ? '+' : ''}${marketData.price_change_percentage_30d?.toFixed(2) || 0}%
          </span>
        </div>
      </div>
    </div>
    
    <div class="coin-description">
      <h3>About ${data.name}</h3>
      <div class="description-content">
        ${data.description?.en ? 
          data.description.en.substring(0, 500) + (data.description.en.length > 500 ? '...' : '') : 
          'No description available.'}
      </div>
    </div>
  `;
}

// Alternative implementation for CoinCap data
function updateCoinDetailsFromCoinCap(data) {
  const detailsSection = document.getElementById('coin-details');
  if (!detailsSection) return;
  
  detailsSection.innerHTML = `
    <div class="details-grid">
      <div class="detail-card">
        <h3>Market Data</h3>
        <div class="detail-item">
          <span class="detail-label">Market Cap</span>
          <span class="detail-value">${formatLargeNumber(data.marketCapUsd || 0)}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">24h Trading Vol</span>
          <span class="detail-value">${formatLargeNumber(data.volumeUsd24Hr || 0)}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Supply</span>
          <span class="detail-value">${formatNumber(data.supply || 0)} ${data.symbol}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Max Supply</span>
          <span class="detail-value">${formatNumber(data.maxSupply || 0)} ${data.symbol}</span>
        </div>
      </div>
      
      <div class="detail-card">
        <h3>Price Statistics</h3>
        <div class="detail-item">
          <span class="detail-label">Current Price</span>
          <span class="detail-value">${formatPrice(data.priceUsd || 0)}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">24h Change</span>
          <span class="detail-value ${parseFloat(data.changePercent24Hr) >= 0 ? 'price-up' : 'price-down'}">
            ${parseFloat(data.changePercent24Hr) >= 0 ? '+' : ''}${parseFloat(data.changePercent24Hr).toFixed(2)}%
          </span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Rank</span>
          <span class="detail-value">#${data.rank}</span>
        </div>
      </div>
    </div>
  `;
}

// Add a function to setup coin descriptions
function setupCoinDescription(coinSymbol) {
  const descriptionElement = document.getElementById('coin-description');
  if (!descriptionElement) return;
  
  // Dictionary of common coin descriptions
  const coinDescriptions = {
    'btc': "Bitcoin is the world's first cryptocurrency, created in 2009 by an anonymous person or group known as Satoshi Nakamoto. It's a decentralized digital currency without a central bank or administrator, allowing peer-to-peer transactions without intermediaries. Bitcoin operates on a technology called blockchain, which is a distributed ledger enforced by a network of computers.",
    
    'eth': "Ethereum is a decentralized, open-source blockchain platform that enables the creation of smart contracts and decentralized applications (dApps). Created by Vitalik Buterin in 2015, Ethereum introduced programmable contracts and applications that run exactly as programmed without downtime, censorship, fraud, or third-party interference. Its native cryptocurrency is called Ether (ETH).",
    
    'bnb': "BNB (originally Binance Coin) is the native cryptocurrency of the Binance exchange and Binance Smart Chain. Created by Binance in 2017, BNB is used for trading fee discounts, payments, travel bookings, and more. It powers the BNB Chain ecosystem, which includes the BNB Beacon Chain and BNB Smart Chain, supporting decentralized applications and financial services.",
    
    'xrp': "XRP is the native cryptocurrency of the XRP Ledger, designed for payments and currency exchange. Created by Ripple Labs, XRP facilitates fast, low-cost international money transfers and can settle transactions in 3-5 seconds. Unlike many cryptocurrencies, XRP doesn't use traditional mining; all coins were pre-mined at launch, with the majority held by Ripple.",
    
    'ada': "Cardano (ADA) is a proof-of-stake blockchain platform founded by Ethereum co-founder Charles Hoskinson. It aims to provide a more secure and scalable blockchain for the development of decentralized applications and smart contracts. Cardano emphasizes a research-driven approach with peer-reviewed academic research informing its development.",
    
    'sol': "Solana is a high-performance blockchain supporting smart contracts and decentralized applications. It offers remarkably fast transaction speeds (up to 65,000 TPS) and low costs through its unique proof-of-history and proof-of-stake consensus mechanism. Launched in 2020 by Anatoly Yakovenko, Solana is designed for scalability while remaining secure and decentralized.",
    
    'doge': "Dogecoin is a cryptocurrency created in 2013 by Billy Markus and Jackson Palmer as a lighthearted alternative to traditional cryptocurrencies. Based on the popular 'Doge' internet meme featuring a Shiba Inu dog, it started as a joke but gained significant popularity and a dedicated community. Despite its humorous origins, Dogecoin has been used for tipping online content creators and charitable donations.",
    
    'dot': "Polkadot is a next-generation blockchain protocol connecting multiple specialized blockchains into a unified network. Created by Ethereum co-founder Dr. Gavin Wood, Polkadot enables cross-blockchain transfers of any data or asset types. Its multichain architecture allows blockchains to maintain their own governance while still being able to communicate and share security.",
    
    'trx': "TRON is a blockchain-based decentralized platform founded by Justin Sun that aims to build a free, global digital content entertainment system using blockchain technology. It allows users to publish, store, and own data, creating a decentralized internet. TRON's native cryptocurrency, TRX, is used for transactions within the TRON ecosystem.",
    
    'link': "Chainlink is a decentralized oracle network that enables smart contracts to securely interact with real-world data, events, and payments. Founded by Sergey Nazarov, Chainlink solves the 'oracle problem' by providing reliable tamper-proof inputs and outputs for complex smart contracts on any blockchain. Its native token LINK is used to pay node operators for retrieving data.",
    
    'avax': "Avalanche is a layer 1 blockchain platform that focuses on speed, low costs, and eco-friendliness. Launched in 2020 by Ava Labs, Avalanche features a novel consensus protocol that allows it to process thousands of transactions per second while maintaining decentralization. It supports the creation of custom blockchains and decentralized applications.",
    
    'sui': "Sui is a Layer 1 blockchain designed for high throughput and low latency asset operations. Developed by former Meta (Facebook) employees, Sui uses the Move programming language and a novel parallel transaction execution system. It's optimized for digital assets, NFTs, and other high-frequency applications requiring immediate transaction finality.",
    
    'apt': "Aptos is a Layer 1 blockchain developed by former Meta (Facebook) employees who worked on the Diem project. It uses the Move programming language and features parallel transaction execution for high throughput and low latency. Aptos emphasizes safety, reliability, and upgradeability while maintaining decentralization.",
    
    'xlm': "Stellar (XLM) is an open-source, decentralized protocol for currency to currency transfers, allowing cross-border transactions between any pair of currencies. Created by Jed McCaleb (co-founder of Ripple), Stellar aims to connect financial institutions and reduce the cost and time required for cross-border transfers. Its native currency is called Lumens (XLM).",
    
    'ltc': "Litecoin is a peer-to-peer cryptocurrency created by Charlie Lee in 2011 as a lighter alternative to Bitcoin. Often called 'silver to Bitcoin's gold,' Litecoin offers faster transaction confirmation times and a different hashing algorithm. While similar to Bitcoin in many ways, it has a higher maximum coin supply and processes blocks more frequently.",
    
    'ton': "TON (The Open Network) is a decentralized blockchain initially designed by Telegram but later developed by an independent community. It offers high scalability through its multi-blockchain architecture and fast processing capabilities. TON supports smart contracts, decentralized applications, and services including payments, file storage, and DNS.",
    
    'shib': "Shiba Inu (SHIB) is a decentralized cryptocurrency that began as a meme coin inspired by Dogecoin. Created in August 2020 by an anonymous person known as 'Ryoshi,' SHIB has evolved into an ecosystem that includes ShibaSwap (a decentralized exchange), NFTs, and games. Despite its meme origins, it has developed a strong community and various utility functions.",
    
    'hbar': "Hedera Hashgraph is a public distributed ledger technology that uses a consensus algorithm called hashgraph consensus. Unlike traditional blockchain networks, Hedera uses a directed acyclic graph (DAG) structure for high-speed transactions. It's governed by a council of global organizations and designed for enterprise applications requiring high throughput and fair ordering of transactions.",
    
    'tao': "Bittensor (TAO) is a decentralized machine learning network where participants can earn tokens by contributing useful AI models. It creates a market for artificial intelligence where machine learning models compete to provide value. The network incentivizes the development of open-source intelligence through its native token TAO, creating a collaborative AI development ecosystem.",
    
    'uni': "Uniswap is a decentralized exchange protocol built on Ethereum that allows for automated trading of cryptocurrency tokens. Using a constant product market maker model and liquidity pools instead of traditional order books, Uniswap enables permissionless token swaps without intermediaries. Its native token, UNI, is used for governance of the protocol."
  };
  
  // Try to get specific description for this coin
  if (coinSymbol in coinDescriptions) {
    descriptionElement.innerHTML = `<p>${coinDescriptions[coinSymbol]}</p>`;
  } else {
    // Generic description for unknown coins
    descriptionElement.innerHTML = `
      <p>
        ${coinData.name} (${coinData.shortSymbol}) is a blockchain-based digital asset designed for peer-to-peer transactions.
        Like most cryptocurrencies, it likely operates on a distributed ledger technology, offering features such as decentralization,
        security through cryptography, and potentially smart contract capabilities depending on its underlying blockchain.
      </p>
      <p>
        For detailed information about this cryptocurrency's specific use cases, technology, and ecosystem,
        please refer to its official website or whitepaper.
      </p>
    `;
  }
}

// Helper function to format large numbers
function formatLargeNumber(num) {
  if (!num || isNaN(num)) return '$0.00';
  
  if (num >= 1e12) return '$' + (num / 1e12).toFixed(2) + 'T';
  if (num >= 1e9) return '$' + (num / 1e9).toFixed(2) + 'B';
  if (num >= 1e6) return '$' + (num / 1e6).toFixed(2) + 'M';
  if (num >= 1e3) return '$' + (num / 1e3).toFixed(2) + 'K';
  return '$' + parseFloat(num).toFixed(2);
}

// Format regular numbers with commas
function formatNumber(num) {
  if (!num || isNaN(num)) return '0';
  return parseFloat(num).toLocaleString(undefined, { maximumFractionDigits: 0 });
}

// Format price with appropriate precision
function formatPrice(price, compact = false) {
  if (!price) return '$0.00';
  
  if (compact) {
    // More compact display for axes
    if (price >= 1000) return '$' + (price / 1000).toFixed(1) + 'K';
    return '$' + price.toFixed(price >= 1 ? 1 : 4);
  }
  
  if (price >= 1000) {
    return '$' + price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
  } else if (price >= 1) {
    return '$' + price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 4});
  } else if (price >= 0.01) {
    return '$' + price.toLocaleString(undefined, {minimumFractionDigits: 4, maximumFractionDigits: 6});
  } else {
    return '$' + price.toLocaleString(undefined, {minimumFractionDigits: 6, maximumFractionDigits: 8});
  }
}

// Display error message
function showErrorMessage(message) {
  const errorContainer = document.createElement('div');
  errorContainer.className = 'error-message';
  errorContainer.textContent = message;
  
  // Insert at top of main content
  const mainContent = document.querySelector('.main-content') || document.body;
  mainContent.prepend(errorContainer);
  
  // Auto-remove after 10 seconds
  setTimeout(() => {
    errorContainer.remove();
  }, 10000);
}

// Update chart theme based on current theme - IMPROVED
function updateChartTheme(chart) {
  const isDarkMode = document.body.classList.contains('dark-theme');
  
  // Update grid lines color
  if (chart.options.scales.y.grid) {
    chart.options.scales.y.grid.color = isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
  }
  
  // Update tick color
  if (chart.options.scales.y.ticks) {
    chart.options.scales.y.ticks.color = isDarkMode ? '#aaa' : '#777';
  }
  
  if (chart.options.scales.x.ticks) {
    chart.options.scales.x.ticks.color = isDarkMode ? '#aaa' : '#777';
  }
  
  // Update tooltip styles
  if (chart.options.plugins.tooltip) {
    chart.options.plugins.tooltip.backgroundColor = isDarkMode ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.95)';
    chart.options.plugins.tooltip.titleColor = isDarkMode ? '#ffffff' : '#333';
    chart.options.plugins.tooltip.bodyColor = isDarkMode ? '#aaa' : '#777';
    chart.options.plugins.tooltip.borderColor = isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)';
  }
  
  chart.update();
}

// Function to initialize TradingView symbol for selected coin
function setupTradingViewSymbol(symbol) {
  // Store the symbol for use in chart toggle
  window.tradingViewSymbol = symbol;
  
  // If TradingView chart is already active, initialize it right away
  const candleContainer = document.getElementById('tradingview-chart');
  const activeTVButton = document.querySelector('.chart-type-btn[data-chart="candle"].active');
  
  if (candleContainer && candleContainer.style.display === 'block' || activeTVButton) {
    // Get current timeframe
    const activeTimeframe = document.querySelector('.time-button.active')?.dataset.timeframe || '24H';
    initTradingViewChart(symbol, mapTimeframeToTradingView(activeTimeframe));
  }
}
