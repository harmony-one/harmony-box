require('dotenv').config()

const PrivateKeyProvider = require('./private-provider')

const networkId = {
  Mainnet: 1666600000,
  Testnet: 1666700000
}

module.exports = {
  networks: {
    localnet: {
      provider: () => {
        return new PrivateKeyProvider(process.env.LOCALNET_PRIVATE_KEY, 'http://localhost:9500', networkId.Testnet)
      },
      network_id: networkId.Testnet
    },

    testnet: {
      provider: () => {
        return new PrivateKeyProvider(process.env.TESTNET_PRIVATE_KEY, 'https://api.s0.b.hmny.io', networkId.Testnet)
      },
      network_id: networkId.Testnet
    },

    mainnet: {
      provider: () => {
        return new PrivateKeyProvider(process.env.MAINNET_PRIVATE_KEY, 'https://api.s0.t.hmny.io', networkId.Mainnet)
      },
      network_id: networkId.Mainnet
    }
  },

  compilers: {
    solc: {
      version: '0.7.6'
    },
  }
}
