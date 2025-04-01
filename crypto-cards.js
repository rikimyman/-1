// Definition of trending coins to display
// Updated definition of trending coins with more coins in market cap order
// Updated definition of trending coins with ~150 Binance-listed coins in market cap order
const trendingCoins = [
  // Top 10
  { name: 'Bitcoin', id: 1, symbol: 'BTCUSDT', shortSymbol: 'BTC' },
  { name: 'Ethereum', id: 1027, symbol: 'ETHUSDT', shortSymbol: 'ETH' },
  { name: 'BNB', id: 1839, symbol: 'BNBUSDT', shortSymbol: 'BNB' },
  { name: 'Solana', id: 5426, symbol: 'SOLUSDT', shortSymbol: 'SOL' },
  { name: 'XRP', id: 52, symbol: 'XRPUSDT', shortSymbol: 'XRP' },
  { name: 'Tron', id: 1958, symbol: 'TRXUSDT', shortSymbol: 'TRX' },
  { name: 'Cardano', id: 2010, symbol: 'ADAUSDT', shortSymbol: 'ADA' },
  { name: 'Dogecoin', id: 74, symbol: 'DOGEUSDT', shortSymbol: 'DOGE' },
  { name: 'Toncoin', id: 11419, symbol: 'TONUSDT', shortSymbol: 'TON' },
  { name: 'Avalanche', id: 5805, symbol: 'AVAXUSDT', shortSymbol: 'AVAX' },
  
  // 11-50
  { name: 'Polkadot', id: 6636, symbol: 'DOTUSDT', shortSymbol: 'DOT' },
  { name: 'Shiba Inu', id: 5994, symbol: 'SHIBUSDT', shortSymbol: 'SHIB' },
  { name: 'Chainlink', id: 1975, symbol: 'LINKUSDT', shortSymbol: 'LINK' },
  { name: 'Polygon', id: 3890, symbol: 'MATICUSDT', shortSymbol: 'MATIC' },
  { name: 'Uniswap', id: 7083, symbol: 'UNIUSDT', shortSymbol: 'UNI' },
  { name: 'Bitcoin Cash', id: 1831, symbol: 'BCHUSDT', shortSymbol: 'BCH' },
  { name: 'Litecoin', id: 2, symbol: 'LTCUSDT', shortSymbol: 'LTC' },
  { name: 'Internet Computer', id: 8916, symbol: 'ICPUSDT', shortSymbol: 'ICP' },
  { name: 'Near Protocol', id: 6535, symbol: 'NEARUSDT', shortSymbol: 'NEAR' },
  { name: 'Cosmos', id: 3794, symbol: 'ATOMUSDT', shortSymbol: 'ATOM' },
  { name: 'Stellar', id: 512, symbol: 'XLMUSDT', shortSymbol: 'XLM' },
  { name: 'Hedera', id: 4642, symbol: 'HBARUSDT', shortSymbol: 'HBAR' },
  { name: 'Injective', id: 7226, symbol: 'INJUSDT', shortSymbol: 'INJ' },
  { name: 'Aptos', id: 21794, symbol: 'APTUSDT', shortSymbol: 'APT' },
  { name: 'Cronos', id: 3635, symbol: 'CROUSDT', shortSymbol: 'CRO' },
  { name: 'Filecoin', id: 2280, symbol: 'FILUSDT', shortSymbol: 'FIL' },
  { name: 'Monero', id: 328, symbol: 'XMRUSDT', shortSymbol: 'XMR' },
  { name: 'Sui', id: 20947, symbol: 'SUIUSDT', shortSymbol: 'SUI' },
  { name: 'Immutable X', id: 10603, symbol: 'IMXUSDT', shortSymbol: 'IMX' },
  { name: 'Bittensor', id: 22974, symbol: 'TAOUSDT', shortSymbol: 'TAO' },
  { name: 'Optimism', id: 23113, symbol: 'OPUSDT', shortSymbol: 'OP' },
  { name: 'VeChain', id: 3077, symbol: 'VETUSDT', shortSymbol: 'VET' },
  { name: 'Arbitrum', id: 11841, symbol: 'ARBUSDT', shortSymbol: 'ARB' },
  { name: 'Kaspa', id: 22861, symbol: 'KASPUSDT', shortSymbol: 'KAS' },
  { name: 'The Graph', id: 6719, symbol: 'GRTUSDT', shortSymbol: 'GRT' },
  { name: 'Maker', id: 1518, symbol: 'MKRUSDT', shortSymbol: 'MKR' },
  { name: 'Stacks', id: 4847, symbol: 'STXUSDT', shortSymbol: 'STX' },
  { name: 'Theta Network', id: 2416, symbol: 'THETAUSDT', shortSymbol: 'THETA' },
  { name: 'Fantom', id: 3513, symbol: 'FTMUSDT', shortSymbol: 'FTM' },
  { name: 'Aave', id: 7278, symbol: 'AAVEUSDT', shortSymbol: 'AAVE' },
  
  // 51-100
  { name: 'EOS', id: 1765, symbol: 'EOSUSDT', shortSymbol: 'EOS' },
  { name: 'Render', id: 5690, symbol: 'RNDRUSDT', shortSymbol: 'RNDR' },
  { name: 'Algorand', id: 4030, symbol: 'ALGOUSDT', shortSymbol: 'ALGO' },
  { name: 'Quant', id: 3155, symbol: 'QNTUSDT', shortSymbol: 'QNT' },
  { name: 'MultiversX', id: 6892, symbol: 'EGLDUSDT', shortSymbol: 'EGLD' },
  { name: 'Flow', id: 4558, symbol: 'FLOWUSDT', shortSymbol: 'FLOW' },
  { name: 'Rocket Pool', id: 2943, symbol: 'RPLUSDT', shortSymbol: 'RPL' },
  { name: 'Mantle', id: 27075, symbol: 'MNTUSDT', shortSymbol: 'MNT' },
  { name: 'Compound', id: 5692, symbol: 'COMPUSDT', shortSymbol: 'COMP' },
  { name: 'Fetch.ai', id: 3773, symbol: 'FETUSDT', shortSymbol: 'FET' },
  { name: 'IOTA', id: 1720, symbol: 'IOTAUSDT', shortSymbol: 'IOTA' },
  { name: 'Conflux', id: 4256, symbol: 'CFXUSDT', shortSymbol: 'CFX' },
  { name: 'Axie Infinity', id: 6783, symbol: 'AXSUSDT', shortSymbol: 'AXS' },
  { name: 'Kava', id: 4846, symbol: 'KAVAUSDT', shortSymbol: 'KAVA' },
  { name: 'The Sandbox', id: 6210, symbol: 'SANDUSDT', shortSymbol: 'SAND' },
  { name: 'Decentraland', id: 1966, symbol: 'MANAUSDT', shortSymbol: 'MANA' },
  { name: 'Neo', id: 1376, symbol: 'NEOUSDT', shortSymbol: 'NEO' },
  { name: 'GateToken', id: 4269, symbol: 'GTUSDT', shortSymbol: 'GT' },
  { name: 'Zcash', id: 1437, symbol: 'ZECUSDT', shortSymbol: 'ZEC' },
  { name: 'Tezos', id: 2011, symbol: 'XTZSUSDT', shortSymbol: 'XTZ' },
  { name: 'THORChain', id: 4157, symbol: 'RUNOUSDT', shortSymbol: 'RUNO' },
  { name: 'Chiliz', id: 4066, symbol: 'CHZUSDT', shortSymbol: 'CHZ' },
  { name: 'Trust Wallet Token', id: 5964, symbol: 'TWTUSDT', shortSymbol: 'TWT' },
  { name: 'GMX', id: 13311, symbol: 'GMXUSDT', shortSymbol: 'GMX' },
  { name: 'PancakeSwap', id: 7186, symbol: 'CAKEUSDT', shortSymbol: 'CAKE' },
  { name: 'dYdX', id: 11156, symbol: 'DYDXUSDT', shortSymbol: 'DYDX' },
  { name: 'Curve DAO', id: 6538, symbol: 'CRVUSDT', shortSymbol: 'CRV' },
  { name: 'Arweave', id: 5805, symbol: 'ARUSDT', shortSymbol: 'AR' },
  { name: 'Synthetix', id: 2586, symbol: 'SNXUSDT', shortSymbol: 'SNX' },
  { name: 'Dash', id: 131, symbol: 'DASHUSDT', shortSymbol: 'DASH' },
  
  // 101-150
  { name: 'Ethereum Classic', id: 1321, symbol: 'ETCUSDT', shortSymbol: 'ETC' },
  { name: 'Mina Protocol', id: 8646, symbol: 'MINAUSDT', shortSymbol: 'MINA' },
  { name: 'Flare', id: 12561, symbol: 'FLRUSDT', shortSymbol: 'FLR' },
  { name: 'Flux', id: 3029, symbol: 'FLUXUSDT', shortSymbol: 'FLUX' },
  { name: 'ApeCoin', id: 18876, symbol: 'APEUSDT', shortSymbol: 'APE' },
  { name: 'WEMIX', id: 7548, symbol: 'WEMIXUSDT', shortSymbol: 'WEMIX' },
  { name: 'Audius', id: 7455, symbol: 'AUDIOUSDT', shortSymbol: 'AUDIO' },
  { name: 'Gala', id: 7080, symbol: 'GALAUSDT', shortSymbol: 'GALA' },
  { name: 'Celestia', id: 28710, symbol: 'TIAUSDT', shortSymbol: 'TIA' },
  { name: 'SingularityNET', id: 2677, symbol: 'AGIXUSDT', shortSymbol: 'AGIX' },
  { name: 'Akash Network', id: 7431, symbol: 'AKTUSDT', shortSymbol: 'AKT' },
  { name: 'StepN', id: 18934, symbol: 'GSTUSDT', shortSymbol: 'GST' },
  { name: 'WOO Network', id: 7501, symbol: 'WOOUSDT', shortSymbol: 'WOO' },
  { name: 'Illuvium', id: 9399, symbol: 'ILVUSDT', shortSymbol: 'ILV' },
  { name: 'Basic Attention', id: 1697, symbol: 'BATUSDT', shortSymbol: 'BAT' },
  { name: 'Enjin Coin', id: 2130, symbol: 'ENJUSDT', shortSymbol: 'ENJ' },
  { name: 'Yearn Finance', id: 5864, symbol: 'YFIUSDT', shortSymbol: 'YFI' },
  { name: 'JUST', id: 3714, symbol: 'JUSTUSDT', shortSymbol: 'JUST' },
  { name: 'Mask Network', id: 8536, symbol: 'MASKUSDT', shortSymbol: 'MASK' },
  { name: 'Band Protocol', id: 4679, symbol: 'BANDUSDT', shortSymbol: 'BAND' },
  { name: 'Loopring', id: 1934, symbol: 'LRCUSDT', shortSymbol: 'LRC' },
  { name: 'Sushi', id: 6758, symbol: 'SUSHIUSDT', shortSymbol: 'SUSHI' },
  { name: '1inch', id: 8104, symbol: '1INCHUSDT', shortSymbol: '1INCH' },
  { name: 'Osmosis', id: 12220, symbol: 'OSMOUSDT', shortSymbol: 'OSMO' },
  { name: 'Gnosis', id: 1659, symbol: 'GNOSISUSDT', shortSymbol: 'GNO' },
  { name: 'Zilliqa', id: 2469, symbol: 'ZILUSDT', shortSymbol: 'ZIL' },
  { name: 'Bitcoin Gold', id: 2083, symbol: 'BTGUSDT', shortSymbol: 'BTG' },
  { name: 'Ontology', id: 2566, symbol: 'ONTUSDT', shortSymbol: 'ONT' },
  { name: 'Ravencoin', id: 2577, symbol: 'RVNUSDT', shortSymbol: 'RVN' },
  { name: 'Cartesi', id: 5444, symbol: 'CTSIUSDT', shortSymbol: 'CTSI' },
  
  // 151-200
  { name: 'SKALE', id: 5691, symbol: 'SKLUSDT', shortSymbol: 'SKL' },
  { name: 'Pepe', id: 24478, symbol: 'PEPEUSDT', shortSymbol: 'PEPE' },
  { name: 'Floki Inu', id: 16519, symbol: 'FLOKIUSDT', shortSymbol: 'FLOKI' },
  { name: 'Ocean Protocol', id: 3911, symbol: 'OCEANUSDT', shortSymbol: 'OCEAN' },
  { name: 'Balancer', id: 5728, symbol: 'BALUSDT', shortSymbol: 'BAL' },
  { name: 'Ankr', id: 3783, symbol: 'ANKRUSDT', shortSymbol: 'ANKR' },
  { name: 'Golem', id: 1455, symbol: 'GLMUSDT', shortSymbol: 'GLM' },
  { name: 'Qtum', id: 1684, symbol: 'QTUMUSDT', shortSymbol: 'QTUM' },
  { name: 'Spell Token', id: 11289, symbol: 'SPELLUSDT', shortSymbol: 'SPELL' },
  { name: 'NKN', id: 2780, symbol: 'NKNUSDT', shortSymbol: 'NKN' },
  { name: 'MyNeighborAlice', id: 8766, symbol: 'ALICEUSDT', shortSymbol: 'ALICE' },
  { name: 'Raydium', id: 8526, symbol: 'RAYUSDT', shortSymbol: 'RAY' },
  { name: 'API3', id: 7737, symbol: 'API3USDT', shortSymbol: 'API3' },
  { name: 'Civic', id: 2090, symbol: 'CVCUSDT', shortSymbol: 'CVC' },
  { name: 'Decred', id: 1168, symbol: 'DCRUSDT', shortSymbol: 'DCR' },
  { name: 'BinaryX', id: 9891, symbol: 'BNXUSDT', shortSymbol: 'BNX' },
  { name: 'Magic', id: 9767, symbol: 'MAGICUSDT', shortSymbol: 'MAGIC' },
  { name: 'Dent', id: 1886, symbol: 'DENTUSDT', shortSymbol: 'DENT' },
  { name: 'Tokenlon', id: 6841, symbol: 'LONUSDT', shortSymbol: 'LON' },
  { name: 'IOST', id: 2405, symbol: 'IOSTUSDT', shortSymbol: 'IOST' },
  { name: 'Alpha Venture DAO', id: 7232, symbol: 'ALPHAUSDT', shortSymbol: 'ALPHA' },
  { name: 'Numeraire', id: 1732, symbol: 'NMRUSDT', shortSymbol: 'NMR' },
  { name: 'SSV Network', id: 11181, symbol: 'SSVUSDT', shortSymbol: 'SSV' },
  { name: 'Polkastarter', id: 7208, symbol: 'POLSUSDT', shortSymbol: 'POLS' },
  { name: 'Kyber Network', id: 1982, symbol: 'KNMUSDT', shortSymbol: 'KNC' },
  { name: 'COTI', id: 3992, symbol: 'COTIUSDT', shortSymbol: 'COTI' },
  { name: 'iExec RLC', id: 1637, symbol: 'RLCUSDT', shortSymbol: 'RLC' },
  { name: 'FUNToken', id: 1757, symbol: 'FUNUSDT', shortSymbol: 'FUN' },
  { name: 'Bonk', id: 23095, symbol: 'BONKUSDT', shortSymbol: 'BONK' },
  { name: 'Liquity', id: 8633, symbol: 'LQTYUSDT', shortSymbol: 'LQTY' },
  
  // 201-250
  { name: 'Arkham', id: 25504, symbol: 'ARKMUSDT', shortSymbol: 'ARKM' },
  { name: 'Tornado Cash', id: 16746, symbol: 'TORNUSDT', shortSymbol: 'TORN' },
  { name: 'Orbs', id: 3835, symbol: 'ORBSUSDT', shortSymbol: 'ORBS' },
  { name: 'Request', id: 2071, symbol: 'REQUSDT', shortSymbol: 'REQ' },
  { name: 'Alchemix', id: 8613, symbol: 'ALCXUSDT', shortSymbol: 'ALCX' },
  { name: 'COCOS BCX', id: 4275, symbol: 'COCOSUSDT', shortSymbol: 'COCOS' },
  { name: 'BakeryToken', id: 7064, symbol: 'BAKEUSDT', shortSymbol: 'BAKE' },
  { name: 'DODO', id: 7224, symbol: 'DODOUSDT', shortSymbol: 'DODO' },
  { name: 'Ampleforth', id: 4056, symbol: 'AMPLUSDT', shortSymbol: 'AMPL' },
  { name: 'Rally', id: 6750, symbol: 'RLYUSDT', shortSymbol: 'RLY' },
  { name: 'Adventure Gold', id: 13705, symbol: 'AGLDUSDT', shortSymbol: 'AGLD' },
  { name: 'Reef', id: 6951, symbol: 'REEFUSDT', shortSymbol: 'REEF' },
  { name: 'WINkLink', id: 6688, symbol: 'WINUSDT', shortSymbol: 'WIN' },
  { name: 'Loom Network', id: 2588, symbol: 'LOOMUSDT', shortSymbol: 'LOOM' },
  { name: 'Marlin', id: 8424, symbol: 'PONDUSDT', shortSymbol: 'POND' },
  { name: 'Bluzelle', id: 2505, symbol: 'BLZUSDT', shortSymbol: 'BLZ' },
  { name: 'dForce', id: 5804, symbol: 'DFUSDT', shortSymbol: 'DF' },
  { name: 'Radiant Capital', id: 19318, symbol: 'RDNTUSDT', shortSymbol: 'RDNT' },
  { name: 'MEME', id: 2181, symbol: 'MEMEUSDT', shortSymbol: 'MEME' },
  { name: 'Bella Protocol', id: 6928, symbol: 'BELUSDT', shortSymbol: 'BEL' },
  { name: 'dKargo', id: 5908, symbol: 'DKAUSDT', shortSymbol: 'DKA' },
  { name: 'Alchemy Pay', id: 6621, symbol: 'ACHUSDT', shortSymbol: 'ACH' },
  { name: 'DIA', id: 6138, symbol: 'DIAUSDT', shortSymbol: 'DIA' },
  { name: 'Frontier', id: 5893, symbol: 'FRONTUSDT', shortSymbol: 'FRONT' },
  { name: 'Litentry', id: 7388, symbol: 'LITUSDT', shortSymbol: 'LIT' },
  { name: 'Perpetual Protocol', id: 6950, symbol: 'PERPUSDT', shortSymbol: 'PERP' },
  { name: 'ASD', id: 3673, symbol: 'ASDUSDT', shortSymbol: 'ASD' },
  { name: 'Aergo', id: 3637, symbol: 'AERGOUSDT', shortSymbol: 'AERGO' },
  { name: 'HI', id: 10947, symbol: 'HIUSDT', shortSymbol: 'HI' },
  { name: 'BitTorrent', id: 3718, symbol: 'BTTUSDT', shortSymbol: 'BTT' },
  
  // Additional popular Binance listings
  { name: 'OG Fan Token', id: 5792, symbol: 'OGUSDT', shortSymbol: 'OG' },
  { name: 'AirDAO', id: 4943, symbol: 'AMBUSDT', shortSymbol: 'AMB' },
  { name: 'Contentos', id: 3652, symbol: 'COSUSDT', shortSymbol: 'COS' },
  { name: 'Galxe', id: 10973, symbol: 'GAXUSDT', shortSymbol: 'GAX' },
  { name: 'Phala Network', id: 6841, symbol: 'PHAUSDT', shortSymbol: 'PHA' },
  { name: 'Mdex', id: 8335, symbol: 'MDXUSDT', shortSymbol: 'MDX' },
  { name: 'Sun Token', id: 7336, symbol: 'SUNUSDT', shortSymbol: 'SUN' },
  { name: 'Linear Finance', id: 7102, symbol: 'LNUSDT', shortSymbol: 'LN' },
  { name: 'Biswap', id: 11079, symbol: 'BSWUSDT', shortSymbol: 'BSW' },
  { name: 'Metis', id: 9640, symbol: 'METISUSDT', shortSymbol: 'METIS' }
];

// Cache for storing coin data
const coinDataCache = {};
let updateInterval;
let chartUpdateInterval; // New interval for chart updates only

// Initialize cards and data
document.addEventListener('DOMContentLoaded', function() {
  // Create initial cards (first 10 coins)
  const initialCoins = trendingCoins.slice(0, 45);
  createCryptoCards(initialCoins);
  
  // Fetch initial data and setup regular updates
  fetchInitialCoinData(initialCoins);
  
  // Replace the previous startRegularUpdates with separate update functions
  setupPriceUpdates(initialCoins);     // For real-time price updates
  setupChartUpdates(initialCoins);     // For 10-minute chart updates
  
  // Handle filter buttons
  setupFilterButtons();
});

// New function to set up price updates (keeping this real-time)
function setupPriceUpdates(coins) {
  // Connect to WebSocket for real-time price updates
  connectToBinanceWebSocket(coins);
}

// New function to set up chart updates every 10 minutes
function setupChartUpdates(coins) {
  // Clear any existing interval
  if (chartUpdateInterval) {
    clearInterval(chartUpdateInterval);
  }
  
  // Initial fetch of 7-day chart data
  coins.forEach(coin => {
    fetchCoin7DayHistoryFromBinance(coin);
    fetchCoinMarketDataFromBinance(coin);
  });
  
  // Set up new 10-minute interval only for chart data refresh
  chartUpdateInterval = setInterval(() => {
    console.log('Refreshing 7-day chart data...');
    coins.forEach(coin => {
      fetchCoin7DayHistoryFromBinance(coin);
      fetchCoinMarketDataFromBinance(coin);
    });
  }, 10 * 60 * 1000); // 10 minutes
}

// Modified function to fetch 7-day history and properly calculate trend
async function fetchCoin7DayHistoryFromBinance(coin) {
  try {
    // Get 7 days of 2-hour klines from Binance (84 candles)
    const endTime = Date.now();
    const startTime = endTime - (7 * 24 * 60 * 60 * 1000); // 7 days ago
    
    const response = await fetch(`https://api.binance.com/api/v3/klines?symbol=${coin.symbol}&interval=2h&startTime=${startTime}&endTime=${endTime}`);
    
    if (!response.ok) {
      throw new Error(`Binance API error for ${coin.symbol}`);
    }
    
    const data = await response.json();
    
    if (data && data.length > 1) {
      // Extract close prices for sparkline
      const prices = data.map(candle => parseFloat(candle[4]));
      
      // Calculate 7-day percentage change
      const startPrice = prices[0];
      const endPrice = prices[prices.length - 1];
      const percentChange = ((endPrice - startPrice) / startPrice) * 100;
      
      // Store in cache
      if (!coinDataCache[coin.symbol]) {
        coinDataCache[coin.symbol] = {};
      }
      
      coinDataCache[coin.symbol].sparkline = prices;
      coinDataCache[coin.symbol].sevenDayChange = percentChange;
      
      // Render chart with the correct color based on 7-day performance
      renderSevenDayChart(coin.symbol, prices, percentChange);
      
      // Update the percentage change display
      updateCardWith7DayChange(coin.symbol, percentChange);
    }
  } catch (error) {
    console.error(`Error fetching ${coin.symbol} 7-day history:`, error);
  }
}

// New function to update the card with 7-day percentage change
function updateCardWith7DayChange(symbol, percentChange) {
  const card = document.getElementById(`card-${symbol}`);
  if (!card) return;
  
  const changeElement = card.querySelector('.price-change');
  if (changeElement) {
    // Format the percentage value
    changeElement.textContent = `${percentChange >= 0 ? '+' : ''}${percentChange.toFixed(2)}%`;
    
    // Set color based on the 7-day change
    changeElement.classList.remove('price-up', 'price-down');
    changeElement.classList.add(percentChange >= 0 ? 'price-up' : 'price-down');
  }
}

// New function specifically for rendering 7-day charts
function renderSevenDayChart(symbol, priceData, percentChange) {
  const canvas = document.getElementById(`chart-${symbol}`);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // Ensure we have enough data points
  if (priceData.length < 2) return;

  // Color based on 7-day performance, not just start vs end point
  const isUp = percentChange >= 0;
  const lineColor = isUp ? '#4daf7c' : '#e63946';

  // Check if chart already exists, update it
  if (canvas.chart) {
    canvas.chart.data.datasets[0].data = [...priceData];
    canvas.chart.data.datasets[0].borderColor = lineColor;
    canvas.chart.data.labels = Array(priceData.length).fill(''); // Empty labels for cleaner look
    canvas.chart.options.scales.y.min = Math.min(...priceData) * 0.995;
    canvas.chart.options.scales.y.max = Math.max(...priceData) * 1.005;
    canvas.chart.update('quiet'); // Update without animation
    return;
  }

  // Create new 7-day chart
  canvas.chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array(priceData.length).fill(''), // Empty labels for cleaner look
      datasets: [
        {
          data: [...priceData],
          borderColor: lineColor,
          borderWidth: 2.5,
          backgroundColor: 'transparent', // No fill by default
          pointRadius: 0, // No points
          tension: 0.3, // Smooth line
          fill: false, // No fill
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }, // Disable tooltips for cleaner look
      },
      scales: {
        x: {
          display: false,
          grid: { display: false },
        },
        y: {
          display: false,
          grid: { display: false },
          min: Math.min(...priceData) * 0.995,
          max: Math.max(...priceData) * 1.005,
        },
      },
      elements: {
        line: { tension: 0.4 },
      },
      animation: { duration: 0 }, // No animation for better performance
      layout: {
        padding: 0,
      },
      devicePixelRatio: 2, // Sharper rendering
    },
  });
}

function createCryptoCards(coins) {
  const container = document.getElementById('crypto-cards-container');
  container.innerHTML = ''; // Clear existing cards
  
  coins.forEach(coin => {
    // Create card structure
    const card = document.createElement('div');
    card.classList.add('crypto-card', 'loading');
    card.id = `card-${coin.symbol}`;
    
    // Add data attributes for coin details
    card.dataset.coinId = coin.id;
    card.dataset.coinSymbol = coin.symbol;
    card.dataset.coinName = coin.name;
    card.dataset.coinShortSymbol = coin.shortSymbol;
    
    card.innerHTML = `
      <div class="card-header">
        <div class="coin-info">
          <div class="coin-logo">
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png" alt="${coin.name}" onerror="this.src='https://cryptologos.cc/logos/${coin.name.toLowerCase()}-${coin.shortSymbol.toLowerCase()}-logo.png'">
          </div>
          <div class="coin-name">${coin.name} <span class="coin-symbol">${coin.shortSymbol}</span></div>
        </div>
      </div>
      <div class="price-container">
        <span class="coin-price">$0.00</span>
        <span class="price-change">0.00%</span>
      </div>
      <div class="market-data">
        <div class="market-cap">
          <span class="data-label">MCap</span>
          <span class="data-value">$0.00</span>
        </div>
        <div class="volume">
          <span class="data-label">24h vol</span>
          <span class="data-value">$0.00</span>
        </div>
      </div>
      <div class="chart-container">
        <canvas id="chart-${coin.symbol}" class="chart-area"></canvas>
      </div>
    `;
    
    // Add click handler to redirect to detail page
    card.addEventListener('click', function() {
      navigateToCoinDetail(coin);
    });
    
    container.appendChild(card);
  });
}

// Function to navigate to coin detail page
function navigateToCoinDetail(coin) {
  // Store current coin data in session storage for use on the detail page
  sessionStorage.setItem('selectedCoin', JSON.stringify(coin));
  
  // If there's price data in the cache, store that too
  if (coinDataCache[coin.symbol] && coinDataCache[coin.symbol].priceHistory) {
    sessionStorage.setItem('coinPriceData', JSON.stringify(coinDataCache[coin.symbol].priceHistory));
  }
  
  // Navigate to detail page
  window.location.href = `coin-detail.html?symbol=${coin.symbol}&id=${coin.id}&name=${encodeURIComponent(coin.name)}`;
}

async function fetchInitialCoinData(coins) {
  try {
    // Connect to Binance WebSocket for real-time price data first
    connectToBinanceWebSocket(coins);
    
    // Try to fetch historical data from Binance for charts
    coins.forEach(coin => {
      fetchCoin7DayHistoryFromBinance(coin);
      // Also fetch market data for each coin
      fetchCoinMarketDataFromBinance(coin);
    });
    
  } catch (error) {
    console.error('Error fetching coin data:', error);
    // Fallback to basic connection
    connectToBinanceWebSocket(coins);
    
    // Try to fetch historical data from Binance for charts
    coins.forEach(coin => {
      fetchCoin7DayHistoryFromBinance(coin);
    });
  }
}

// New function to fetch market data from Binance
async function fetchCoinMarketDataFromBinance(coin) {
  try {
    // Get ticker 24hr stats
    const response = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${coin.symbol}`);
    
    if (!response.ok) {
      throw new Error(`Binance API error for ${coin.symbol}`);
    }
    
    const data = await response.json();
    
    // Calculate market cap (estimate using circulating supply)
    const priceResponse = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${coin.symbol}`);
    const priceData = await priceResponse.json();
    const price = parseFloat(priceData.price);
    
    // Store in cache
    if (!coinDataCache[coin.symbol]) {
      coinDataCache[coin.symbol] = {};
    }
    
    // Update card with market data from Binance
    updateCardWithBinanceMarketData(coin.symbol, data, price);
    
  } catch (error) {
    console.error(`Error fetching market data for ${coin.symbol}:`, error);
  }
}

// Update the market cap estimations with more accurate data
function updateCardWithBinanceMarketData(symbol, data, price) {
  const card = document.getElementById(`card-${symbol}`);
  if (!card) return;
  
  // Update 24h volume - use direct data from Binance
  if (data.quoteVolume) {
    const volume = parseFloat(data.quoteVolume);
    card.querySelector('.volume .data-value').textContent = formatLargeNumber(volume);
  }
  
  // Improved market cap estimations with more accurate circulating supply data
  const marketCapEstimations = {
    'BTCUSDT': 19460000, // BTC
    'ETHUSDT': 120248000, // ETH
    'BNBUSDT': 155136000, // BNB
    'XRPUSDT': 53500000000, // XRP
    'ADAUSDT': 35401000000, // ADA
    'SOLUSDT': 437390781, // SOL
    'DOGEUSDT': 143151000000, // DOGE
    'DOTUSDT': 1288916999, // DOT
    'TRXUSDT': 88735000000, // TRX
    'LINKUSDT': 557840000, // LINK
    'AVAXUSDT': 367020000, // AVAX
    'SUIUSDT': 1215833385, // SUI
    'APTUSDT': 331000000, // APT
    'XLMUSDT': 30430000000, // XLM
    'LTCUSDT': 73637775, // LTC
    'TONUSDT': 3500000000, // TON
    'SHIBUSDT': 589332671027293, // SHIB
    'HBARUSDT': 34062168772, // HBAR
    'TAOUSDT': 25800000, // TAO
    'UNIUSDT': 753766667, // UNI
  };
  
  // Try to fetch accurate market cap data using both methods
  try {
    // First try our circulating supply estimations
    if (marketCapEstimations[symbol]) {
      const marketCap = price * marketCapEstimations[symbol];
      card.querySelector('.market-cap .data-value').textContent = formatLargeNumber(marketCap);
    } else {
      // If we don't have data, try to fetch from external API
      fetchExternalMarketCap(symbol, price, card);
    }
  } catch (error) {
    console.error(`Error calculating market cap for ${symbol}:`, error);
    // Fallback to volume-based estimation
    const estimatedMarketCap = parseFloat(data.quoteVolume) * 25; // Very rough estimation
    card.querySelector('.market-cap .data-value').textContent = formatLargeNumber(estimatedMarketCap) + '*';
  }
}

// New function to try fetching market cap from another source
async function fetchExternalMarketCap(symbol, price, card) {
  // Extract the coin code without USDT
  const coinCode = symbol.replace('USDT', '').toLowerCase();
  
  try {
    // Try CoinCap API as an alternative source
    const response = await fetch(`https://api.coincap.io/v2/assets/${coinCode}`);
    
    if (response.ok) {
      const data = await response.json();
      if (data.data && data.data.marketCapUsd) {
        const marketCap = parseFloat(data.data.marketCapUsd);
        card.querySelector('.market-cap .data-value').textContent = formatLargeNumber(marketCap);
        return;
      }
    }
    
    // If that fails, use our price-based estimation
    const estimatedMarketCap = price * 1000000000; // Generic estimation
    card.querySelector('.market-cap .data-value').textContent = formatLargeNumber(estimatedMarketCap) + '*';
    
  } catch (error) {
    console.error(`External market cap fetch failed for ${symbol}:`, error);
    // Use our price-based estimation
    const estimatedMarketCap = price * 1000000000; // Generic estimation
    card.querySelector('.market-cap .data-value').textContent = formatLargeNumber(estimatedMarketCap) + '*';
  }
}

function connectToBinanceWebSocket(coins, marketDataMap = {}) {
  // Create a list of symbols to subscribe to
  const symbols = coins.map(coin => coin.symbol.toLowerCase());
  
  // Connect to multiplex stream
  const streams = symbols.map(symbol => `${symbol}@ticker`).join('/');
  const socket = new WebSocket(`wss://stream.binance.com:9443/stream?streams=${streams}`);
  
  socket.onopen = function() {
    console.log('Connected to Binance WebSocket for real-time price data');
  };
  
  socket.onmessage = function (event) {
    const data = JSON.parse(event.data);
    if (data.data) {
      const ticker = data.data;
      const symbol = ticker.s; // Symbol in uppercase (e.g., "BTCUSDT")
  
      // Only update the price display, not the chart
      updateCardWithLivePrice(symbol, ticker);
  
      // Store in cache
      if (!coinDataCache[symbol]) {
        coinDataCache[symbol] = { priceHistory: [] };
      }
  
      // Add price to history (keep last 100 points)
      const price = parseFloat(ticker.c);
      const priceHistory = coinDataCache[symbol].priceHistory;
      priceHistory.push(price);
      if (priceHistory.length > 100) {
        priceHistory.shift();
      }
    }
  };
  
  socket.onclose = function() {
    console.log('WebSocket connection closed. Reconnecting...');
    setTimeout(() => connectToBinanceWebSocket(coins, marketDataMap), 5000);
  };
  
  socket.onerror = function(error) {
    console.error('WebSocket error:', error);
    socket.close();
  };
}

// New function to update only price display without affecting chart
function updateCardWithLivePrice(symbol, ticker) {
  const card = document.getElementById(`card-${symbol}`);
  if (!card) return;
  
  // Remove loading class
  card.classList.remove('loading');
  
  // Update price only
  const price = parseFloat(ticker.c);
  const formattedPrice = formatPrice(price);
  const priceElement = card.querySelector('.coin-price');
  const oldPrice = parseFloat(priceElement.getAttribute('data-price') || price);
  
  // Add pulse animation based on price change
  if (oldPrice && price !== oldPrice) {
    priceElement.classList.remove('pulse-up', 'pulse-down');
    setTimeout(() => {
      priceElement.classList.add(price > oldPrice ? 'pulse-up' : 'pulse-down');
    }, 10);
  }
  
  priceElement.textContent = formattedPrice;
  priceElement.setAttribute('data-price', price);
  
  // NOTE: We do NOT update the percentage display here as it should show 7-day change
  
  // Update volume if we don't have market data
  if (!card.querySelector('.volume .data-value').textContent.includes('B') && 
      !card.querySelector('.volume .data-value').textContent.includes('M')) {
    const volume = parseFloat(ticker.v) * price;
    card.querySelector('.volume .data-value').textContent = formatLargeNumber(volume);
  }
}

function updateCardWithMarketData(coinData) {
  const symbol = coinData.symbol.toUpperCase() + 'USDT';
  const card = document.getElementById(`card-${symbol}`);
  if (!card) return;
  
  // Update market cap (ensure it's formatted properly)
  if (coinData.market_cap && coinData.market_cap > 0) {
    card.querySelector('.market-cap .data-value').textContent = formatLargeNumber(coinData.market_cap);
  }
  
  // Update volume
  if (coinData.total_volume && coinData.total_volume > 0) {
    card.querySelector('.volume .data-value').textContent = formatLargeNumber(coinData.total_volume);
  }
}

// Improved chart rendering to ensure better visibility
// Updated renderDetailedChart function to remove gradient background
function renderDetailedChart(symbol, priceData) {
  const canvas = document.getElementById(`chart-${symbol}`);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // Ensure we have enough data points for a detailed chart
  if (priceData.length < 2) return;

  // Store the data in cache for WebSocket updates
  if (!coinDataCache[symbol]) {
    coinDataCache[symbol] = {};
  }
  coinDataCache[symbol].priceHistory = [...priceData];

  // Determine if price is trending up or down
  const isUp = priceData[priceData.length - 1] >= priceData[0];
  const lineColor = isUp ? '#4daf7c' : '#e63946';

  // Check if chart already exists, update it
  if (canvas.chart) {
    canvas.chart.data.datasets[0].data = [...priceData];
    canvas.chart.data.datasets[0].borderColor = lineColor;
    canvas.chart.options.scales.y.min = Math.min(...priceData) * 0.995;
    canvas.chart.options.scales.y.max = Math.max(...priceData) * 1.005;
    canvas.chart.update('quiet'); // Update without animation
    return;
  }

  // Create new detailed chart
  canvas.chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array(priceData.length).fill(''),
      datasets: [
        {
          data: [...priceData],
          borderColor: lineColor,
          borderWidth: 2.5,
          backgroundColor: 'transparent',
          pointRadius: 0,
          tension: 0.3,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
      scales: {
        x: {
          display: false,
          grid: { display: false },
        },
        y: {
          display: false,
          grid: { display: false },
          min: Math.min(...priceData) * 0.995,
          max: Math.max(...priceData) * 1.005,
        },
      },
      elements: {
        line: { tension: 0.4 },
      },
      animation: { duration: 0 },
      layout: {
        padding: 0,
      },
      devicePixelRatio: 2,
    },
  });
}

// Updated updateLiveChart function to remove gradient background
function updateLiveChart(symbol, price) {
  // Ensure we have cache for this symbol
  if (!coinDataCache[symbol]) {
    coinDataCache[symbol] = { priceHistory: [] };
  }
  
  // Add price to history and keep 100 most recent points
  coinDataCache[symbol].priceHistory.push(price);
  if (coinDataCache[symbol].priceHistory.length > 100) {
    coinDataCache[symbol].priceHistory.shift();
  }
  
  // If we have enough data points, update chart
  if (coinDataCache[symbol].priceHistory.length > 2) {
    const canvas = document.getElementById(`chart-${symbol}`);
    if (canvas && canvas.chart) {
      const priceData = coinDataCache[symbol].priceHistory;
      const isUp = priceData[priceData.length - 1] >= priceData[0];
      const lineColor = isUp ? '#4daf7c' : '#e63946';
      
      // Update chart data
      canvas.chart.data.datasets[0].data = priceData;
      canvas.chart.data.datasets[0].borderColor = lineColor;
      canvas.chart.data.datasets[0].backgroundColor = 'transparent'; // Set to transparent
      canvas.chart.data.datasets[0].fill = false; // Disable fill
      
      // Update scale to ensure we see price movements
      canvas.chart.options.scales.y.min = Math.min(...priceData) * 0.995;
      canvas.chart.options.scales.y.max = Math.max(...priceData) * 1.005;
      
      // Ensure responsive settings
      canvas.chart.options.responsive = true;
      canvas.chart.options.maintainAspectRatio = false;
      
      canvas.chart.update('quiet'); // Update without animation for performance
    }
  }
}
// Add this function to create persistent hover effects for charts
function addChartHoverEffects() {
  const cardCharts = document.querySelectorAll('.crypto-card .chart-container');
  
  cardCharts.forEach(chartContainer => {
    const canvas = chartContainer.querySelector('canvas');
    const symbol = canvas.id.replace('chart-', '');
    
    // Add hover effect to chart container
    chartContainer.addEventListener('mouseenter', function() {
      const chart = canvas.chart;
      if (chart && chart.data && chart.data.datasets[0]) {
        // Use the 7-day change to determine color
        const sevenDayChange = coinDataCache[symbol] && coinDataCache[symbol].sevenDayChange || 0;
        const isUp = sevenDayChange >= 0;
        const fillColor = isUp ? 'rgba(77, 175, 124, 0.15)' : 'rgba(230, 57, 70, 0.15)';
        
        // Apply fill effect
        chart.data.datasets[0].backgroundColor = fillColor;
        chart.data.datasets[0].fill = true;
        chart.update('quiet');
      }
    });
    
    // Remove effect on mouse leave
    chartContainer.addEventListener('mouseleave', function() {
      const chart = canvas.chart;
      if (chart && chart.data && chart.data.datasets[0]) {
        // Reset fill to transparent
        chart.data.datasets[0].backgroundColor = 'transparent';
        chart.data.datasets[0].fill = false;
        chart.update('quiet');
      }
    });
    
    // Prevent default click propagation
    chartContainer.addEventListener('click', function(e) {
      // Prevent navigation to coin detail page when clicking chart
      e.stopPropagation();
      e.preventDefault();
    });
    
    // Add touch support for mobile with persistent fill
    let touchTimeout;
    
    chartContainer.addEventListener('touchstart', function(e) {
      // Clear any existing timeout
      if (touchTimeout) {
        clearTimeout(touchTimeout);
        touchTimeout = null;
      }
      
      // Prevent default touch behavior
      e.preventDefault();
      
      const chart = canvas.chart;
      if (chart && chart.data && chart.data.datasets[0]) {
        const priceData = chart.data.datasets[0].data;
        const isUp = priceData[priceData.length - 1] >= priceData[0];
        const fillColor = isUp ? 'rgba(77, 175, 124, 0.15)' : 'rgba(230, 57, 70, 0.15)';
        
        // Always apply fill effect on touch
        chart.data.datasets[0].backgroundColor = fillColor;
        chart.data.datasets[0].fill = true;
        chart.update('quiet');
        
        // Set a timeout to remove the fill after 3 seconds
        touchTimeout = setTimeout(() => {
          chart.data.datasets[0].backgroundColor = 'transparent';
          chart.data.datasets[0].fill = false;
          chart.update('quiet');
        }, 3000);
      }
    });
  });
}

function formatPrice(price) {
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

function formatLargeNumber(num) {
  if (!num || isNaN(num)) return '$0.00';
  
  if (num >= 1e12) return '$' + (num / 1e12).toFixed(2) + 'T';
  if (num >= 1e9) return '$' + (num / 1e9).toFixed(2) + 'B';
  if (num >= 1e6) return '$' + (num / 1e6).toFixed(2) + 'M';
  if (num >= 1e3) return '$' + (num / 1e3).toFixed(2) + 'K';
  return '$' + num.toFixed(2);
}

function setupFilterButtons() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      
      // Filter coins based on category
      const category = this.textContent.toLowerCase();
      let filteredCoins;
      
      switch(category) {
        case 'defi':
            filteredCoins = trendingCoins.filter(coin => 
                ['AAVE', 'UNI', 'COMP', 'SUSHI', 'CRV', 'SNX', 'CAKE', 'MKR', 'LINK', 'INJ', 'GRT', 'DYDX', 'YFI', 
                 'LQTY', 'BAL', 'ALPHA', 'RUNE', 'BEL', 'POLS', 'CRV', 'SUSHI', '1INCH', 'PERP', 'DF', 'FRONT', 'LIT']
                .includes(coin.symbol.replace('USDT', ''))
            );
            break;
        case 'layer1':
            filteredCoins = trendingCoins.filter(coin => 
                ['BTC', 'ETH', 'SOL', 'ADA', 'AVAX', 'DOT', 'NEAR', 'ATOM', 'FIL', 'ICP', 'ALGO', 'EGLD', 'TRX', 'MATIC', 'FTM', 
                 'XLM', 'HBAR', 'XTZ', 'VET', 'AR', 'FLOW', 'KAVA', 'MINA', 'ZIL', 'ONT', 'QTUM', 'NEO', 'CFX', 'SUI', 'APT']
                .includes(coin.symbol.replace('USDT', ''))
            );
            break;
        case 'meme':
            filteredCoins = trendingCoins.filter(coin => 
                ['DOGE', 'SHIB', 'PEPE', 'FLOKI', 'BONK', 'MEME', 'ELON', 'AKITA', 'SAMO', 'HOGE', 'KISHU', 'BABYDOGE']
                .includes(coin.symbol.replace('USDT', ''))
            );
            break;
        case 'ai':
            filteredCoins = trendingCoins.filter(coin => 
                ['FET', 'AGIX', 'OCEAN', 'RLC', 'NMR', 'RNDR', 'GRT', 'TAO', 'SSV', 'AKT', 'MAGIC', 'MASK', 'BAND', 'COTI']
                .includes(coin.symbol.replace('USDT', ''))
            );
            break;
        default:
            filteredCoins = trendingCoins.slice(0, 250); // Show 40 coins by default
    }
      
      // If no coins match the filter, show top coins
      if (filteredCoins.length === 0) {
        filteredCoins = trendingCoins.slice(0, 400); // Show 20 coins instead of 10
      }
      
      // Update displayed cards
      createCryptoCards(filteredCoins);
      fetchInitialCoinData(filteredCoins);
      
      // Set up separate update systems
      setupPriceUpdates(filteredCoins);  // Real-time price updates
      setupChartUpdates(filteredCoins);  // 10-minute chart updates
    });
  });
  
  // Setup search functionality
  const searchInput = document.querySelector('.market-search');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      // In the search input event listener:
if (searchTerm.length < 2) {
  // If search is cleared, show default coins
  createCryptoCards(trendingCoins.slice(0, 20)); // Show 20 coins instead of 10
  fetchInitialCoinData(trendingCoins.slice(0, 20)); // Show 20 coins instead of 10
  return;
}

// Filter coins based on search term
const filteredCoins = trendingCoins.filter(coin => 
  coin.name.toLowerCase().includes(searchTerm) || 
  coin.symbol.toLowerCase().includes(searchTerm)
);

if (filteredCoins.length > 0) {
  createCryptoCards(filteredCoins.slice(0, 20)); // Show up to 20 results instead of 10
  fetchInitialCoinData(filteredCoins.slice(0, 20));
}
    });
  }
}

// Add this CSS fix function to ensure proper styling for cards
function fixCardStyling() {
  // Make sure all cards have proper height and display
  const cards = document.querySelectorAll('.crypto-card');
  cards.forEach(card => {
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.minHeight = '180px';
    card.style.cursor = 'pointer'; // Add pointer cursor to indicate clickability
    
    // Add hover effect
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
    
    // Ensure chart containers have proper height
    const chartContainer = card.querySelector('.chart-container');
    if (chartContainer) {
      chartContainer.style.height = '60px';
      chartContainer.style.width = '100%';
      chartContainer.style.transition = 'all 0.3s ease';
    }
    
    // Make sure card is no longer in loading state
    card.classList.remove('loading');
  });
  
  // Add hover effects for all charts
  addChartHoverEffects();
}


// Enhance the existing function to ensure cards are properly styled
const originalCreateCryptoCards = createCryptoCards;
createCryptoCards = function(coins) {
  originalCreateCryptoCards(coins);
  
  // Add a slight delay to fix styling after DOM render
  setTimeout(fixCardStyling, 100);
};

// Fix any card styling issues immediately and periodically
document.addEventListener('DOMContentLoaded', function() {
  // Fix card styling after initial cards are created
  setTimeout(fixCardStyling, 500);
  
  // Set up interval to check and fix card styling
  setInterval(fixCardStyling, 5000);
});
