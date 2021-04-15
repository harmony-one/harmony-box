# ![Harmony](box-img-sm.png)

# Harmony Box

Harmony Box is a Truffle box that will get you quickly up and running deploying smart contracts on Harmony using Truffle & native Ethereum tooling.

## Getting started

### Truffle

If you have Truffle installed globally:

(Until the box has been approved by Truffle you have to rely on the git installation step below)

```
mkdir harmony && cd harmony
truffle unbox harmony
```

Or if you want to install via git:

```
git clone https://github.com/harmony-one/harmony-box.git
cd harmony-box
```

### .env

Copy .env-example to .env:

```
cp .env-example .env
```

Modify .env and replace "`ENTER_PRIVATE_KEY_HERE`" for each network with the respective private key you want to use when deploying contracts.

### Dependencies

Install all required dependencies using yarn:

```
yarn install
```

The dependencies installed are the following:

- truffle: if you want to use a local installation rather than a global installation
- solc: Solidity compiler
- @trufflesuite/hdwallet-provider: HD Wallet-enabled Web3 provider. Use it to sign transactions for addresses derived from a 12 or 24 word mnemonic.
- @openzeppelin/contracts: industry standard smart contract templates
- dotenv: .env file parsing library

## Compilation

Globally installed Truffle:
```
truffle compile
```

Locally installed Truffle:
```
node_modules/.bin/truffle compile
```

## Migration

The Harmony Box comes pre-configured with three separate networks:

- Localnet (http://localhost:9500)
- Testnet (https://api.s0.b.hmny.io)
- Mainnet (https://api.s0.t.hmny.io)

To deploy your contracts to these networks, you can run the following:

Globally installed Truffle:
```
truffle migrate --reset --skip-dry-run --network localnet
truffle migrate --reset --skip-dry-run --network testnet
truffle migrate --reset --skip-dry-run --network mainnet
```

Locally installed Truffle:
```
node_modules/.bin/truffle migrate --reset --skip-dry-run --network localnet
node_modules/.bin/truffle migrate --reset --skip-dry-run --network testnet
node_modules/.bin/truffle migrate --reset --skip-dry-run --network mainnet
```

## Testing

Globally installed Truffle:
```
truffle test
```

Locally installed Truffle:
```
node_modules/.bin/truffle test
```
