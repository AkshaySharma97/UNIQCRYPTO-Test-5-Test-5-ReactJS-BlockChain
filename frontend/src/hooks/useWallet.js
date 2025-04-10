import { useEffect, useState } from 'react';
import { Contract, BrowserProvider, formatEther } from 'ethers';
import { TOKEN_ABI, TOKEN_ADDRESS } from '../constants/contractABI';
import { toast } from "react-toastify";

const useWallet = () => {
  const [wallet, setWallet] = useState({ provider: null, signer: null, address: null });
  const [token, setToken] = useState(null);
  const [balance, setBalance] = useState(null);

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum === 'undefined') {
        toast.error("MetaMask not detected. Please install it.");
        return;
      }
  
      const provider = new BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
  
      const tokenContract = new Contract(TOKEN_ADDRESS, TOKEN_ABI, provider);
      const tokenWithSigner = tokenContract.connect(signer);
      const rawBalance = await tokenWithSigner.balanceOf(address);
      const formatted = formatEther(rawBalance);
  
      setWallet({ provider, signer, address });
      setToken(tokenWithSigner);
      setBalance(formatted);
    } catch (error) {
      toast.error("Error connecting wallet: " + error.message);
      console.error(error);
    }
  };  

  const refreshBalance = async () => {
    if (!token || !wallet.address) return;
    const bal = await token.balanceOf(wallet.address);
    setBalance(formatEther(bal));
  };

  return { wallet, token, balance, connectWallet, refreshBalance };
};

export default useWallet;