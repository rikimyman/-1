/**
 * Zenus AI Responses Dictionary
 * This file contains predefined responses for the Zenus crypto assistant
 * when real API data is not available or for general conversation.
 */

const aiResponses = {
    // Greetings and basic interactions
    'greeting': [
        "Hello! I'm Zenus, your crypto assistant. How can I help you today?",
        "Hi there! I'm ready to provide crypto information. What would you like to know?",
        "Hey! What crypto information are you looking for today?",
        "Greetings! I'm Zenus, your crypto data assistant. What can I help you with?"
    ],
    
    'farewell': [
        "Goodbye! Feel free to return when you need more crypto insights.",
        "See you later! I'm here whenever you need crypto information.",
        "Take care! Come back when you need more crypto data.",
        "Until next time! I'll be here for all your crypto questions."
    ],
    
    'thanks': [
        "You're welcome! Is there anything else you'd like to know about crypto?",
        "Happy to help! Let me know if you have more questions about cryptocurrencies.",
        "My pleasure! I'm here for all your crypto inquiries.",
        "Glad I could assist! Feel free to ask more about the crypto world."
    ],
    
    // User states and emotions
    'user_sad': [
        "I'm sorry to hear you're feeling down. Sometimes crypto markets can be volatile and stressful. Remember to take care of your wellbeing first. Is there anything specific about crypto that's concerning you?",
        "It can be tough, especially with the ups and downs of the crypto market. Remember that market fluctuations are normal. Is there something specific about crypto that's bothering you?"
    ],
    
    'user_happy': [
        "Glad to hear you're feeling good! A positive mindset is great for navigating the crypto world. What crypto information can I provide to keep your day going well?",
        "That's great! The crypto space is exciting when things are going well. Is there something specific you'd like to learn about today?"
    ],
    
    'user_confused': [
        "Crypto can definitely be confusing! Let's break it down. What specific aspect of cryptocurrency would you like me to explain?",
        "I understand the crypto world can be complex. I'm here to help clarify things. What particular concept are you finding difficult?"
    ],
    
    'user_worried': [
        "The crypto market can cause anxiety with its volatility. Remember that ups and downs are normal in this space. What specific concerns do you have?",
        "Market uncertainty can be worrying. It's important to focus on your investment strategy and risk tolerance. Is there something specific concerning you?"
    ],
    
    // About the assistant
    'about_assistant': [
        "I'm Zenus, a cryptocurrency assistant designed to provide market data and information about various cryptocurrencies. I can tell you about prices, market caps, trading volumes, and more!",
        "I'm a specialized AI assistant focused on cryptocurrency information. I can provide data on coin prices, market trends, and general crypto knowledge to help you navigate the crypto space."
    ],
    
    'capabilities': [
        "I can provide real-time cryptocurrency data including prices, market capitalization, trading volumes, and general market overview. Just ask about a specific coin or the crypto market!",
        "I'm designed to give you information about cryptocurrency prices, market data, basic explanations of crypto concepts, and general market trends. Feel free to ask about any major coin!"
    ],
    
    'help': [
        "I can help with cryptocurrency information! Try asking questions like 'What's the price of Bitcoin?', 'Show me Ethereum data', or 'What's the global crypto market cap?'",
        "Need help? You can ask me about specific cryptocurrency prices, market overviews, trading volumes, or basic crypto concepts. Just specify what information you need!"
    ],
    
    // General crypto education
    'what_is_crypto': [
        "Cryptocurrency is a digital or virtual currency that uses cryptography for security and operates on decentralized networks based on blockchain technology. Popular examples include Bitcoin, Ethereum, and many others.",
        "Cryptocurrencies are digital assets designed to work as mediums of exchange using cryptography to secure transactions and control the creation of new units. They operate on decentralized networks called blockchains, which serve as distributed ledgers of all transactions."
    ],
    
    'what_is_blockchain': [
        "Blockchain is a distributed ledger technology that records transactions across many computers so that any involved record cannot be altered retroactively. It's the underlying technology behind cryptocurrencies.",
        "Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system. It's essentially a digital ledger of transactions that is duplicated and distributed across an entire network of computer systems."
    ],
    
    'what_is_mining': [
        "Cryptocurrency mining is the process where specialized computers solve complex mathematical problems to verify transactions and add them to the blockchain. Miners are rewarded with new coins for their work, which requires significant computational power and energy.",
        "Mining is how new cryptocurrency coins are created and transactions are verified. Miners use powerful computers to solve complex mathematical problems. When solved, a new block is added to the blockchain and the miner receives a reward in the form of cryptocurrency."
    ],
    
    'what_is_wallet': [
        "A cryptocurrency wallet is a digital tool that allows you to store, send, and receive cryptocurrencies. Wallets can be software-based (hot wallets) or hardware devices (cold wallets). They contain private keys that give you access to your crypto assets on the blockchain.",
        "Crypto wallets are applications or devices that store the private keys to your cryptocurrency holdings. They don't actually store your cryptocurrencies – those are recorded on the blockchain. Instead, they store your private keys which allow you to access and manage your crypto."
    ],
    
    'what_is_defi': [
        "DeFi (Decentralized Finance) refers to financial services built on blockchain technology that operate without centralized intermediaries like banks. DeFi applications aim to recreate traditional financial systems (lending, borrowing, trading) in a decentralized manner.",
        "Decentralized Finance (DeFi) is an emerging financial technology based on secure distributed ledgers similar to those used by cryptocurrencies. It eliminates intermediaries like banks, allowing people to conduct financial transactions directly with each other through smart contracts."
    ],
    
    // Specific cryptocurrencies
    'what_is_bitcoin': [
        "Bitcoin (BTC) is the first and most valuable cryptocurrency, created in 2009 by an anonymous person or group known as Satoshi Nakamoto. It introduced the concept of a decentralized digital currency that operates without a central authority.",
        "Bitcoin is the original cryptocurrency created in 2009. It operates on a decentralized network using blockchain technology, with a limited supply of 21 million coins. It was designed as a peer-to-peer electronic cash system independent of central banks and governments."
    ],
    
    'what_is_ethereum': [
        "Ethereum (ETH) is a decentralized, open-source blockchain with smart contract functionality. It enables developers to build and deploy decentralized applications (dApps) and is the second-largest cryptocurrency by market capitalization.",
        "Ethereum is a blockchain platform that enables developers to create decentralized applications and smart contracts. While Bitcoin was designed primarily as a digital currency, Ethereum was built as a more general programmable blockchain that can run complex applications."
    ],
    
    'what_is_stablecoin': [
        "Stablecoins are cryptocurrencies designed to maintain a stable value by pegging to a reserve asset like the US dollar. Examples include Tether (USDT), USD Coin (USDC), and Dai (DAI). They aim to reduce the volatility common in other cryptocurrencies.",
        "Stablecoins are a type of cryptocurrency that attempts to offer price stability by being pegged to a reserve asset like the US dollar. They're designed to reduce volatility while maintaining the privacy, security, and decentralization benefits of cryptocurrencies."
    ],
    
    // Market concepts
    'bull_market': [
        "A bull market in crypto refers to a period of rising prices and optimism. During bull markets, investor confidence is high and prices tend to rise consistently over a period of time.",
        "In a crypto bull market, prices are rising or expected to rise. It's characterized by optimism, investor confidence, and expectations that strong results will continue for an extended period. The term originates from the way a bull attacks by thrusting its horns upward."
    ],
    
    'bear_market': [
        "A bear market in crypto refers to a period of declining prices and pessimism. During bear markets, investor confidence is low and prices tend to fall consistently over a period of time.",
        "A crypto bear market is characterized by falling prices, pessimism, and negative sentiment. Investors expect losses and this negative outlook feeds a continued downward spiral. The term comes from the way a bear attacks by swiping downward with its paws."
    ],
    
    'market_crash': [
        "Crypto market crashes are sudden, sharp declines in prices. They can be triggered by various factors including regulatory news, security breaches, market manipulation, or broader economic factors. It's always important to manage risk in crypto investments.",
        "A crypto market crash is a sudden and significant drop in cryptocurrency prices across the market. Unlike bear markets which decline gradually, crashes happen quickly and can be caused by various triggers including negative news, regulatory changes, or market manipulation."
    ],
    
    'market_volatility': [
        "Volatility in crypto markets refers to the rate at which prices rise or fall. Cryptocurrency is known for its high volatility compared to traditional assets, with prices sometimes changing dramatically in short periods. This creates both opportunities and risks.",
        "Cryptocurrency volatility measures how much and how quickly prices change. The crypto market is notorious for its high volatility, with assets sometimes gaining or losing significant value in hours or days. This volatility is due to factors like market size, liquidity, and speculation."
    ],
    
    // Investment concepts
    'hodl': [
        "HODL is a term in the crypto community that originated from a misspelling of 'hold' in a 2013 forum post. It's become a strategy and philosophy of holding onto cryptocurrency for long-term gains rather than selling during price volatility.",
        "HODL (Hold On for Dear Life) is both a misspelling of 'hold' and an investment strategy in cryptocurrency. It refers to buying and holding crypto assets long-term regardless of market fluctuations, instead of trying to time the market with buying and selling."
    ],
    
    'fomo': [
        "FOMO (Fear Of Missing Out) in crypto refers to the anxiety that you might miss profitable investment opportunities, often leading to impulsive buying decisions during price rallies. It's generally considered a risky approach to investing.",
        "Fear Of Missing Out (FOMO) describes the anxiety investors feel when they see others profiting from rising crypto prices. This psychological pressure can lead to hasty investment decisions based on emotional reactions rather than careful analysis, often resulting in buying at market peaks."
    ],
    
    'dyor': [
        "DYOR (Do Your Own Research) is a common phrase in the crypto community emphasizing the importance of conducting personal research before investing rather than following others' advice blindly. It's considered a fundamental principle for responsible crypto investing.",
        "Do Your Own Research (DYOR) is a principle encouraging investors to thoroughly investigate cryptocurrencies before investing. This includes understanding the technology, team, use case, tokenomics, and market conditions rather than making decisions based solely on others' recommendations."
    ],
    
    // Technical concepts
    'what_is_pow': [
        "Proof of Work (PoW) is a consensus mechanism used by blockchains like Bitcoin where miners compete to solve complex mathematical puzzles to validate transactions and create new blocks. This process requires substantial computational power and energy.",
        "Proof of Work is the original blockchain consensus mechanism that requires mining computers to solve complex mathematical problems to validate transactions and create new blocks. The first to solve the problem gets to add the next block and receives a reward. It's secure but energy-intensive."
    ],
    
    'what_is_pos': [
        "Proof of Stake (PoS) is an alternative consensus mechanism where validators are selected to create new blocks based on the number of coins they hold and are willing to 'stake' as collateral. It's more energy-efficient than Proof of Work.",
        "Proof of Stake is a consensus mechanism where validators are chosen to create new blocks based on how many coins they're willing to lock up as collateral. Unlike PoW, it doesn't require solving complex puzzles, making it significantly more energy-efficient. Ethereum transitioned to PoS in 2022."
    ],
    
    'what_are_smart_contracts': [
        "Smart contracts are self-executing contracts with the terms directly written into code. They automatically execute transactions when predetermined conditions are met, without intermediaries. Ethereum popularized smart contracts, enabling decentralized applications.",
        "Smart contracts are programs stored on a blockchain that run automatically when predetermined conditions are met. They can automate agreements so that all participants can be immediately certain of the outcome, without intermediaries. They're core to dApps and DeFi systems."
    ],
    
    'what_is_nft': [
        "NFTs (Non-Fungible Tokens) are unique digital assets that represent ownership of specific items like art, collectibles, music, or gaming items. Unlike cryptocurrencies, each NFT has distinct value and cannot be exchanged on a like-for-like basis.",
        "Non-Fungible Tokens (NFTs) are blockchain-based digital certificates of authenticity for digital or physical assets. Unlike cryptocurrencies where each unit is identical, each NFT is unique and can't be exchanged equally for another. They've been used for digital art, collectibles, music, and more."
    ],
    
    // Security and risk
    'crypto_security': [
        "Cryptocurrency security best practices include using hardware wallets for long-term storage, enabling two-factor authentication, keeping private keys offline, using unique passwords, and being cautious of phishing attempts and suspicious links.",
        "To secure your crypto assets, consider using hardware wallets, creating strong unique passwords, enabling multi-factor authentication, keeping your software updated, backing up your wallet, using trusted exchanges, and staying vigilant against phishing attempts."
    ],
    
    'crypto_scams': [
        "Common crypto scams include phishing (fake websites/emails), pump and dump schemes, fake ICOs, fraudulent exchanges, giveaway scams, and Ponzi schemes. Always verify sources, research projects thoroughly, and be skeptical of promises of guaranteed returns.",
        "Watch out for crypto scams like phishing attacks, fake giveaways (especially on social media), rug pulls (where developers abandon projects after raising funds), impersonation scams, fake exchanges, and investment schemes promising unrealistic returns."
    ],
    
    'investment_risk': [
        "Cryptocurrency investing carries significant risks including price volatility, regulatory uncertainty, security vulnerabilities, market manipulation, and liquidity issues. It's advisable to only invest what you can afford to lose and diversify your investments.",
        "Crypto investment risks include extreme price volatility, regulatory changes, technological failures, security breaches, and market manipulation. Due to these factors, it's recommended to approach crypto as a high-risk portion of a diversified portfolio and only invest funds you can afford to lose."
    ],
    
    // Regulations and adoption
    'crypto_regulations': [
        "Cryptocurrency regulations vary widely by country, ranging from full bans to progressive frameworks encouraging innovation. Regulations typically address taxation, anti-money laundering measures, consumer protection, and securities laws. The regulatory landscape continues to evolve globally.",
        "Global crypto regulations are evolving, with different approaches across countries. Some nations have embraced crypto with clear frameworks, while others have implemented restrictions or bans. Common regulatory focuses include classifying crypto assets, taxation, AML/KYC requirements, and investor protections."
    ],
    
    'institutional_adoption': [
        "Institutional adoption of cryptocurrency has been growing, with companies like Tesla, MicroStrategy, and Square adding Bitcoin to their balance sheets. Major financial institutions are increasingly offering crypto services, signaling growing mainstream acceptance.",
        "Institutional crypto adoption is accelerating, with public companies holding Bitcoin as treasury assets, investment banks offering crypto products to clients, payment processors integrating cryptocurrency options, and traditional financial institutions developing crypto custody solutions."
    ],
    
    // Fallbacks for inappropriate content
    'inappropriate_content': [
        "I'm designed to provide information about cryptocurrencies and blockchain technology. I'd be happy to answer questions related to those topics instead.",
        "I'm focused on providing cryptocurrency information and can't assist with that request. Is there something about crypto or blockchain that I can help you with?",
        "I'm a cryptocurrency assistant and can only provide information related to crypto, blockchain technology, and digital assets. Please ask me something in those areas.",
        "That's not something I can help with. I'm specialized in cryptocurrency topics and would be happy to answer questions about Bitcoin, Ethereum, blockchain technology, or the crypto market."
    ],
    
    // Fallback for unknown queries
    'default': [
        "I'm focused on providing cryptocurrency information. Try asking about specific coins like Bitcoin or Ethereum, or about the overall crypto market.",
        "I specialize in cryptocurrency topics. Could you ask something related to crypto prices, blockchain technology, or digital assets?",
        "I'm not sure about that, but I can help with cryptocurrency information. Ask me about specific coins, market data, or crypto concepts!",
        "I don't have information on that topic. I'm designed to provide insights on cryptocurrencies, blockchain technology, and the crypto market. Feel free to ask about those areas!"
    ]
};

// Keywords to match user queries to response categories
const keywordMap = {
    // Greetings and basic interactions
    'greeting': ['hi', 'hello', 'hey', 'greetings', 'sup', 'yo', 'good morning', 'good afternoon', 'good evening', 'howdy'],
    'farewell': ['bye', 'goodbye', 'see you', 'farewell', 'later', 'cya', 'take care'],
    'thanks': ['thanks', 'thank you', 'appreciate', 'grateful', 'thx'],
    
    // User states
    'user_sad': ['sad', 'feeling down', 'depressed', 'unhappy', 'disappointed', 'upset', 'lost money', 'market crash', 'losing'],
    'user_happy': ['happy', 'excited', 'thrilled', 'good day', 'great', 'profit', 'earned', 'gained'],
    'user_confused': ['confused', 'don\'t understand', 'complex', 'complicated', 'explain', 'clarity', 'what does', 'how does'],
    'user_worried': ['worried', 'concerned', 'anxious', 'fear', 'nervous', 'risky', 'dangerous'],
    
    // About assistant
    'about_assistant': ['who are you', 'what are you', 'tell me about yourself', 'your name', 'what is zenus', 'about you'],
    'capabilities': ['what can you do', 'abilities', 'features', 'functions', 'help me with', 'capable of', 'your purpose'],
    'help': ['help', 'assist', 'support', 'guidance', 'instructions', 'commands', 'how to use'],
    
    // General crypto education
    'what_is_crypto': ['what is crypto', 'cryptocurrency meaning', 'crypto definition', 'explain cryptocurrency', 'digital currency'],
    'what_is_blockchain': ['what is blockchain', 'blockchain technology', 'explain blockchain', 'how blockchain works', 'distributed ledger'],
    'what_is_mining': ['what is mining', 'crypto mining', 'how mining works', 'mining rigs', 'bitcoin mining', 'mining crypto'],
    'what_is_wallet': ['what is wallet', 'crypto wallet', 'wallet types', 'hot wallet', 'cold wallet', 'hardware wallet', 'store crypto'],
    'what_is_defi': ['what is defi', 'decentralized finance', 'explain defi', 'defi meaning', 'defi protocols', 'yield farming'],
    
    // Specific cryptocurrencies
    'what_is_bitcoin': ['what is bitcoin', 'explain bitcoin', 'bitcoin history', 'satoshi', 'first crypto', 'btc basics'],
    'what_is_ethereum': ['what is ethereum', 'explain ethereum', 'ethereum basics', 'eth', 'vitalik', 'ether'],
    'what_is_stablecoin': ['what is stablecoin', 'stablecoins', 'usdt', 'usdc', 'dai', 'tether', 'stable cryptocurrency'],
    
    // Market concepts
    'bull_market': ['bull market', 'bullish', 'market uptrend', 'price increase', 'going up', 'rising market', 'market rise'],
    'bear_market': ['bear market', 'bearish', 'market downtrend', 'price decrease', 'going down', 'falling market', 'market fall'],
    'market_crash': ['market crash', 'price crash', 'collapse', 'huge drop', 'major correction', 'dump', 'flash crash'],
    'market_volatility': ['volatility', 'price swings', 'fluctuations', 'market swings', 'unstable prices', 'price changes'],
    
    // Investment concepts
    'hodl': ['hodl', 'holding', 'long term investing', 'hold crypto', 'diamond hands'],
    'fomo': ['fomo', 'fear of missing out', 'buying high', 'market frenzy', 'buying rush'],
    'dyor': ['dyor', 'do your own research', 'research', 'investigate', 'study crypto', 'analysis'],
    
    // Technical concepts
    'what_is_pow': ['what is pow', 'proof of work', 'mining consensus', 'bitcoin mining', 'blockchain validation'],
    'what_is_pos': ['what is pos', 'proof of stake', 'staking', 'validator', 'ethereum 2.0', 'energy efficient'],
    'what_are_smart_contracts': ['smart contracts', 'code contracts', 'automated contracts', 'self-executing', 'ethereum contracts'],
    'what_is_nft': ['what is nft', 'non fungible token', 'digital art', 'collectible', 'unique token', 'crypto art'],
    
    // Security and risk
    'crypto_security': ['security', 'protect crypto', 'safe storage', 'secure wallet', 'private keys', 'theft protection'],
    'crypto_scams': ['scams', 'fraud', 'fake crypto', 'ponzi', 'pump and dump', 'rug pull', 'phishing'],
    'investment_risk': ['risk', 'dangers', 'crypto risks', 'investing danger', 'market risks', 'price risk'],
    
    // Regulations and adoption
    'crypto_regulations': ['regulations', 'legal status', 'government rules', 'crypto laws', 'compliance', 'regulatory'],
    'institutional_adoption': ['institutional', 'corporate adoption', 'tesla bitcoin', 'company investing', 'mainstream adoption'],

    // Inappropriate content keywords
    'inappropriate_content': [
        'porn', 'xxx', 'sex', 'naked', 'nsfw', 'adult', 'gambling', 'casino', 'bet',
        'hack', 'steal', 'scam people', 'how to hack', 'illegal', 'drugs', 'weapons',
        'murder', 'kill', 'attack', 'terrorist', 'bomb', 'theft', 'launder', 'evade tax',
        'bypass', 'racism', 'racist', 'nazi', 'hate', 'violence', 'abuse', 'offensive'
    ]
};

// Function to find the most appropriate response category based on user input
function findResponseCategory(userInput) {
    userInput = userInput.toLowerCase().trim();
    
    // Check for exact matches first
    for (const [category, keywords] of Object.entries(keywordMap)) {
        if (keywords.includes(userInput)) {
            return category;
        }
    }
    
    // Check for partial matches
    let bestMatch = null;
    let highestMatchCount = 0;
    
    for (const [category, keywords] of Object.entries(keywordMap)) {
        let matchCount = 0;
        
        for (const keyword of keywords) {
            if (userInput.includes(keyword)) {
                // Add more weight to longer keyword matches
                matchCount += keyword.length;
            }
        }
        
        if (matchCount > highestMatchCount) {
            highestMatchCount = matchCount;
            bestMatch = category;
        }
    }
    
    // If we found a reasonable match
    if (highestMatchCount > 2) {
        return bestMatch;
    }
    
    // Default response if no good match
    return 'default';
}

// Get a random response from the appropriate category
function getAIResponse(userInput) {
    const category = findResponseCategory(userInput);
    const responses = aiResponses[category];
    
    // Check if inappropriate content was detected
    if (category === 'inappropriate_content') {
        console.log('Inappropriate content detected in: ' + userInput);
    }
    
    return responses[Math.floor(Math.random() * responses.length)];
}

// Make the function globally available
window.getAIResponse = getAIResponse;