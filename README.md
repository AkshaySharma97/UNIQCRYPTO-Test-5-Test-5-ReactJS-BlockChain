# 🔐 OneStep Authentication System (OSAA) – ReactJS + Blockchain

This project is a **full-stack decentralized authentication system (dApp)** designed to demonstrate advanced front-end and blockchain integration skills.

It is developed as part of a technical assignment to build a **self-reliant authentication system** that mimics a production-grade SSO (Single Sign-On) infrastructure, including features like Telegram OTP, passcode validation, biometric mock setup, and Ethereum-based identity management via smart contracts.

> 🔗 GitHub Repo: [UNIQCRYPTO-Test-5-ReactJS-BlockChain](https://github.com/AkshaySharma97/UNIQCRYPTO-Test-5-Test-5-ReactJS-BlockChain.git)


## 📁 Project Structure

```
UNIQCRYPTO-Test-5/
├── frontend/              # ReactJS application (OneStep UI)
├── backend/               # Node.js + Express API (OTP/KYC mocking)
├── smart-contract/        # Hardhat-based Ethereum smart contract
└── README.md
```

---

## 🚀 Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/AkshaySharma97/UNIQCRYPTO-Test-5-Test-5-ReactJS-BlockChain.git
cd UNIQCRYPTO-Test-5-Test-5-ReactJS-BlockChain
```

---

### 2. Setup the Smart Contract (Hardhat)

```bash
cd smart-contract
npm install
```

#### ✅ Compile Contract

```bash
npx hardhat compile
```

#### 🚀 Deploy Locally

```bash
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

#### 🧪 Run Smart Contract Tests

```bash
npx hardhat test
```

---

### 3. Setup the Backend API (Optional for OTP/KYC mocking)

```bash
cd ../backend
npm install
node index.js
```

> 📌 Configurable via `.env` (use for OTP mocks, KYC submission status, etc.)

---

### 4. Setup the Frontend (ReactJS)

```bash
cd ../frontend
npm install
npm run dev
```

> Visit: `http://localhost:5173` (or the port shown in terminal)

---

## 🧪 Features Implemented

### ✅ Authentication Flows
- [x] Telegram OTP Sign Up & Sign In (mocked)
- [x] Passcode creation with AVV validation
- [x] Biometric setup using WebAuthn placeholder
- [x] KYC submission with status indicator
- [x] Device/session management UI (mock)
- [x] OS-ID generation and SSO simulation

### ✅ Smart Contract Functions
- [x] Mint tokens (Owner-only)
- [x] Transfer tokens between users
- [x] View balance
- [x] Role-based access (Ownable)
- [x] Reentrancy protection
- [x] Input validations

### ✅ dApp Integration
- [x] MetaMask wallet connection
- [x] Real-time balance display
- [x] Contract interaction via ethers.js
- [x] Transaction feedback & alerts

---

## 🌐 Deployment

### ✅ Testnet Deployment (Sepolia)

| Item                | Details                                                                 |
|---------------------|-------------------------------------------------------------------------|
| Contract Address     | `0x3C0bF1f6afd795ad1C2251F38f7895Bf838DC173`                           |
| Network              | Sepolia Testnet                                                        |
| Etherscan Link       | [View on Etherscan](https://sepolia.etherscan.io/address/0x3C0bF1f6afd795ad1C2251F38f7895Bf838DC173)                                                      |
| Live dApp (optional) |                                                                         |

---

## ⚙️ Scripts

| Command | Description |
|--------|-------------|
| `npx hardhat compile` | Compile the smart contract |
| `npx hardhat test` | Run unit tests for contract |
| `npx hardhat run scripts/deploy.js --network sepolia` | Deploy to Sepolia |
| `npm run dev` (in frontend) | Start React dev server |
| `node index.js` (in backend) | Start mock backend |

---

## ✅ Prerequisites

- Node.js 18+
- Hardhat (globally or locally)
- MetaMask wallet
- Testnet ETH (Sepolia via [faucet](https://sepoliafaucet.com))
- Infura/Alchemy account for RPC endpoints

---