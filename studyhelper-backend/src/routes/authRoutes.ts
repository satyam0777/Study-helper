import { Router } from 'express';
import { authenticateToken } from '../middlewares/authMiddleware';
import {
  register,
  login,
  getProfile,
  updateProfile,
  getUsageStats
} from '../controllers/authController';

const router = Router();

// Public routes
router.post('/register', register);
router.post('/login', login);
// In src/routes/authRoutes.ts
router.get('/register', (req, res) => {
  res.status(405).json({ error: 'Method Not Allowed' });
});
// Protected routes
router.get('/profile', authenticateToken, getProfile);
router.put('/profile', authenticateToken, updateProfile);
router.get('/usage', authenticateToken, getUsageStats);

export default router;