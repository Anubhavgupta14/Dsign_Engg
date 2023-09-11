// Import the required modules
import jwt from 'jsonwebtoken';

const generateToken = (req, res, userId) => {
  const token = jwt.sign({ userId }, 'My-secret', {
    expiresIn: '30d',
  });

  // Set the cookie in the response header
  res.setHeader(
    'Set-Cookie',
    `jwt=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${30 * 24 * 60 * 60};`
  );
};

export default generateToken;
