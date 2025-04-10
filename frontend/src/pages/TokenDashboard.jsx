import useWallet from "../hooks/useWallet";
import { useState } from "react";

function TokenDashboard() {
  const { wallet, connectWallet, balance, token, refreshBalance } = useWallet();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleMint = async () => {
    try {
      const tx = await token.mint(wallet.address, ethers.utils.parseEther("10"));
      await tx.wait();
      alert("Minted 10 OSAA tokens!");
      refreshBalance();
    } catch (err) {
      alert("Only owner can mint!");
    }
  };

  const handleTransfer = async () => {
    try {
      const tx = await token.transfer(recipient, ethers.utils.parseEther(amount));
      await tx.wait();
      alert(`Transferred ${amount} OSAA to ${recipient}`);
      refreshBalance();
    } catch (err) {
      alert("Transfer failed: " + err.message);
    }
  };

  return (
    <div className="container">
      <h2>OneStep Token Dashboard</h2>
      {wallet.address ? (
        <>
          <p><strong>Wallet:</strong> {wallet.address}</p>
          <p><strong>Balance:</strong> {balance} OSAA</p>
          <button onClick={handleMint}>Mint 10 OSAA</button>
          <hr />
          <input value={recipient} placeholder="Recipient Address" onChange={(e) => setRecipient(e.target.value)} />
          <input value={amount} placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
          <button onClick={handleTransfer}>Transfer</button>
        </>
      ) : (
        <button onClick={connectWallet}>Connect MetaMask</button>
      )}
    </div>
  );
}

export default TokenDashboard;