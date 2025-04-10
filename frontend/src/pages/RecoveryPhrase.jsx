import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../assets/css/recovery.css";
import * as bip39 from "bip39";
import { toast } from "react-toastify";

function RecoveryPhrase() {
  const { isAuthenticated } = useAuth();
  const [mnemonic, setMnemonic] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/signup");
    else generatePhrase();
  }, [isAuthenticated]);

  const generatePhrase = () => {
    const phrase = bip39.generateMnemonic();
    setMnemonic(phrase);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mnemonic);
    toast.success("Recovery phrase copied!");
  };

  return (
    <div className="recovery-container">
      <h2>🔐 Recovery Phrase</h2>
      <p className="warning">
        Please save this phrase securely. It will help you recover your account!
      </p>

      <div className="phrase-box">
        {mnemonic.split(" ").map((word, index) => (
          <span key={index} className="word">
            {index + 1}. {word}
          </span>
        ))}
      </div>

      <button className="btn" onClick={copyToClipboard}>📋 Copy Phrase</button>
      <button className="btn yellow-btn" onClick={generatePhrase}>🔁 Regenerate</button>
    </div>
  );
}

export default RecoveryPhrase;
