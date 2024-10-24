import express from 'express';
import passport from 'passport';

const router = express.Router();

// Protected route example
router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({ user: req.user });
  }
);

// Add more game-related routes here

export default router;
