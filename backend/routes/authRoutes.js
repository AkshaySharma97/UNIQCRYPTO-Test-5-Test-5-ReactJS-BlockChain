const express = require('express');
const router = express.Router();
const {
  sendOtp,
  verifyOtp,
  registerUser,
  savePasscode,
  saveBiometric,
  submitKYC,
  getProfile,
  setup,
  sendLoginOtp,
  verifyLoginOtp,
  loginPasscode
} = require('../controllers/authController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/send-otp', sendOtp);
router.post('/send-login-otp', sendLoginOtp);
router.post('/verify-otp', verifyOtp);
router.post('/verify-login-otp', verifyLoginOtp);
router.post('/signup', registerUser);
router.post('/passcode', savePasscode);
router.post('/login-passcode', loginPasscode);
router.post('/biometric', saveBiometric);
router.post(
  '/kyc',
  upload.fields([{ name: 'selfie', maxCount: 1 }, { name: 'gov_id', maxCount: 1 }]),
  submitKYC
);
router.post('/users/setup', setup);
router.get('/profile/:os_id', getProfile);

module.exports = router;