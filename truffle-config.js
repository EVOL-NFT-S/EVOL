require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

console.log('API', process.env.BSCSCAN_API);

const mnemonic = process.env.SECRET.toString().trim();

module.exports = {
  networks: {
    eth: {
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`),
      network_id: 1,
      skipDryRun: true,
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, 'https://bsc-dataseed1.ninicoin.io'),
      network_id: 56,
      skipDryRun: true,
    },
    bsctest: {
      provider: () => new HDWalletProvider(mnemonic, 'https://data-seed-prebsc-1-s1.binance.org:8545'),
      network_id: 97,
      skipDryRun: true,
    },
  },
  
  // Configure your compilers
  compilers: {
    solc: {
      version: '^0.8.0',
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  db: {
    enabled: false
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.ETHSCAN_API,
    bscscan: process.env.BSCSCAN_API,
  },
};
