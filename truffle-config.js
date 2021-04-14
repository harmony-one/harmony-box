require('dotenv').config()

const HDWalletProvider = require('@truffle/hdwallet-provider');

const URL = 'https://rpc.s0.b.hmny.io/'
const networkId = {
  Mainnet: 1666600000,
  Testnet: 1666700000
}
module.exports = {
  migrations_directory: "./migrations",

  networks: {
    testnet: {
      provider: () => {
        return new HDWalletProvider(process.env.TESTNET_PRIVATE_KEY, URL);
      },
      network_id: networkId.Testnet,
    },
    mainnet: () => {
      return new HDWalletProvider(process.env.PUBLIC_PRIVATE_KEY, URL);
    },
    network_id: networkId.Mainnet,
  },
  compilers: {
    solc: {
      version: '0.7.6'
    },
  }
}