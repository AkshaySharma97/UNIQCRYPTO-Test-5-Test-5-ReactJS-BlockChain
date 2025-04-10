const db = require('../config/db');
const dotenv = require('dotenv');
const axios = require('axios');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
dotenv.config();

exports.sendOtp = (req, res) => {
  const { telegram_id } = req.body;

  db.query(
    'SELECT * FROM users WHERE telegram_id = ?',
    [telegram_id],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Database error', error: err });
      }

      if (results.length > 0) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const expires = new Date(Date.now() + 10 * 60000); // 10 minutes

      db.query(
        'INSERT INTO otps (telegram_id, otp, expires_at) VALUES (?, ?, ?)',
        [telegram_id, otp, expires],
        async (err) => {
          if (err) {
            return res.status(500).json({ message: 'Failed to store OTP', error: err });
          }

          try {
            const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

            await axios.post(TELEGRAM_API_URL, {
              chat_id: telegram_id,
              text: `Your OTP is: ${otp}. It will expire in 10 minutes.`
            });

            return res.json({ message: 'OTP sent to Telegram successfully' });
          } catch (err) {
            return res.status(500).json({ message: 'Failed to send OTP via Telegram', error: err.message });
          }
        }
      );
    }
  );
};

exports.sendLoginOtp = (req, res) => {
  const { telegram_id, os_id } = req.body;

  db.query(
    'SELECT * FROM users WHERE telegram_id = ? AND os_id = ?',
    [telegram_id,os_id],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Database error', error: err });
      }

      if (results.length > 0) {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expires = new Date(Date.now() + 10 * 60000); // 10 minutes

        db.query(
          'INSERT INTO otps (telegram_id, otp, expires_at) VALUES (?, ?, ?)',
          [telegram_id, otp, expires],
          async (err) => {
            if (err) {
              return res.status(500).json({ message: 'Failed to store OTP', error: err });
            }

            try {
              const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

              await axios.post(TELEGRAM_API_URL, {
                chat_id: telegram_id,
                text: `Your OTP is: ${otp}. It will expire in 10 minutes.`
              });

              return res.json({ message: 'OTP sent to Telegram successfully' });
            } catch (err) {
              return res.status(500).json({ message: 'Failed to send OTP via Telegram', error: err.message });
            }
          }
        );
      }else{
        return res.status(400).json({ message: 'User not exists' });
      }
    }
  );
};

exports.verifyOtp = (req, res) => {
  const { telegram_id, otp } = req.body;

  db.query(
    'SELECT * FROM otps WHERE telegram_id = ? AND otp = ? AND expires_at > NOW()',
    [telegram_id, otp],
    (err, results) => {
      if (err || results.length === 0)
        return res.status(400).json({ message: 'Invalid or expired OTP' });
      const os_id = 'os_' + Math.random().toString(36).substring(2, 10);
      db.query(
        'INSERT INTO users (telegram_id, os_id) VALUES (?, ?)',
        [telegram_id, os_id],
        (err) => {
          if (err) return res.status(500).json({ message: 'User already exists or DB error' });
          res.json({ message: 'OTP verified', os_id });
        }
      );
    }
  );
};

exports.verifyLoginOtp = (req, res) => {
  const { telegram_id, otp } = req.body;

  db.query(
    'SELECT * FROM otps WHERE telegram_id = ? AND otp = ? AND expires_at > NOW()',
    [telegram_id, otp],
    (err, results) => {
      if (err || results.length === 0)
        return res.status(400).json({ message: 'Invalid or expired OTP' });
      res.json({ message: 'OTP verified' });
    }
  );
};

exports.registerUser = (req, res) => {
  const { telegram_id, full_name, dob, phone } = req.body;
  const os_id = 'os_' + Math.random().toString(36).substring(2, 10);

  db.query(
    'INSERT INTO users (telegram_id, full_name, dob, phone, os_id) VALUES (?, ?, ?, ?, ?)',
    [telegram_id, full_name, dob, phone, os_id],
    (err) => {
      if (err) return res.status(500).json({ message: 'User already exists or DB error' });
      res.json({ message: 'User created', os_id });
    }
  );
};

exports.savePasscode = (req, res) => {
  const { telegram_id, passcode } = req.body;
  db.query(
    'UPDATE users SET passcode = ? WHERE telegram_id = ?',
    [passcode, telegram_id],
    (err) => {
      if (err) return res.status(500).json({ message: 'DB error' });
      res.json({ message: 'Passcode saved' });
    }
  );
};

exports.loginPasscode = (req, res) => {
  const { os_id, passcode } = req.body;
  db.query(
    'Select * from users where passcode = ? And os_id = ?',
    [passcode, os_id],
    (err, results) => {
      if (err || results.length === 0) return res.status(500).json({ message: 'Invalid Passcode' });
      res.json({ message: 'Logged in with Passcode' });
    }
  );
};

exports.saveBiometric = (req, res) => {
  const { telegram_id } = req.body;
  db.query(
    'UPDATE users SET biometric_set = 1 WHERE telegram_id = ?',
    [telegram_id],
    (err) => {
      if (err) return res.status(500).json({ message: 'DB error' });
      res.json({ message: 'Biometric setup complete' });
    }
  );
};

exports.submitKYC = (req, res) => {
  const { telegram_id, full_name } = req.body;
  const selfieFile = req.files?.selfie?.[0];
  const govIdFile = req.files?.gov_id?.[0];

  if (!telegram_id || !full_name || !selfieFile || !govIdFile) {
    return res.status(400).json({ message: 'Missing required fields or files' });
  }

  const selfiePath = selfieFile.path;
  const govIdPath = govIdFile.path;

  const query = `
    UPDATE users
    SET full_name = ?, kyc_status = 'pending', created_at = NOW()
    WHERE telegram_id = ?
  `;

  db.query(query, [full_name, telegram_id], (err, result) => {
    if (err) {
      console.error('DB error:', err);
      return res.status(500).json({ message: 'Database error during KYC submission' });
    }

    if (result.affectedRows === 0) {
      if (fs.existsSync(selfiePath)) fs.unlinkSync(selfiePath);
      if (fs.existsSync(govIdPath)) fs.unlinkSync(govIdPath);
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      success: true,
      message: 'KYC submitted, pending verification',
      selfie_url: selfiePath,
      gov_id_url: govIdPath
    });
  });
};

exports.getProfile = (req, res) => {
  const { os_id } = req.params;
  db.query(
    'SELECT * FROM users WHERE os_id = ?',
    [os_id],
    (err, results) => {
      if (err || results.length === 0)
        return res.status(404).json({ message: 'User not found' });
      res.json(results[0]);
    }
  );
};

exports.setup = (req, res) => {
  const { telegramId, fullName, dob, phone } = req.body;

  if (!telegramId || !fullName || !dob || !phone) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const osId = `OS-${uuidv4().split('-')[0].toUpperCase()}`;

  const sql = `
    UPDATE users 
    SET full_name = ?, dob = ?, phone = ?, os_id = ? 
    WHERE telegram_id = ?
  `;

  db.query(sql, [fullName, dob, phone, osId, telegramId], (err, result) => {
    if (err) return res.status(500).json({ message: 'DB error' });

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ success: true, message: 'Setup complete', os_id: osId });
  });
};
