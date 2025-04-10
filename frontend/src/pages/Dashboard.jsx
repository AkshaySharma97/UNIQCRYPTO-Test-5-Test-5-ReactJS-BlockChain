import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import useWallet from "../hooks/useWallet";
import "../assets/css/dashboard.css";
import { toast } from "react-toastify";
import { parseEther } from "ethers";

function Dashboard() {
  const { wallet, connectWallet, balance, token, refreshBalance } = useWallet();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          setTokenName(await token.name());
          setTokenSymbol(await token.symbol());
        } catch (e) {
          toast.error("Unable to fetch token info");
        }
      })();
    }
  }, [token]);

  const handleMint = async () => {
    try {
      const tx = await token.mint(wallet.address, parseEther("10"));
      await tx.wait();
      toast.success("Minted 10 OSAA tokens!");
      refreshBalance();
    } catch (err) {
      toast.error("Only owner can mint!");
    }
  };

  const handleTransfer = async () => {
    if (!recipient || !amount) return toast.warning("Fill all fields");
    try {
      const tx = await token.transfer(recipient, parseEther(amount));
      await tx.wait();
      toast.success(`Transferred ${amount} ${tokenSymbol} to ${recipient}`);
      refreshBalance();
    } catch (err) {
      toast.error("Transfer failed: " + err.message);
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">🪙 OSAA Token Dashboard</h1>

      {wallet.address ? (
        <>
          <div className="dashboard-card">
            <h2>👛 Wallet Info</h2>
            <p><strong>Address:</strong> {wallet.address}</p>
            <p><strong>Token:</strong> {tokenName} ({tokenSymbol})</p>
            <p><strong>Balance:</strong> {balance} {tokenSymbol}</p>
            <button className="btn yellow-btn" onClick={handleMint}>Mint 10 {tokenSymbol}</button>
          </div>

          <div className="dashboard-card">
            <h2>🔁 Transfer Tokens</h2>
            <input
              type="text"
              placeholder="Recipient Address"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
            <input
              type="number"
              placeholder={`Amount (${tokenSymbol})`}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button className="btn" onClick={handleTransfer}>Transfer</button>
          </div>
        </>
      ) : (
        <button className="btn connect-btn" onClick={connectWallet}>🔗 Connect Wallet</button>
      )}
    </div>
  );
}

export default Dashboard;