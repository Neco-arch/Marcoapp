const jwt = require('jsonwebtoken');
const { prisma } = require('../lib/prisma.js')

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No Token Provided' });
    }

    try {
        const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verifiedUser
        next()
    } catch (error) {
        res.status(403).json({ message: 'Invalid or Expired Token' })
    }
}

async function userlogin(req, res) {
    const { username, password } = req.body;
    // Check Username dupe 
    const Password_username = await prisma.user.findFirst({
        where: {
            username: username,
            password: password
        }
    })

    if (Password_username !== null) {
        const token = jwt.sign(userPayload, process.env.JWT_SECRET, { expiresIn: '1d' });

        return res.json({ success: true, token: token });
    }

    res.status(400).json({ success: false, message: 'Invalid credentials' });

}

async function signupuser(req, res, next) {
    const { username, password } = req.body

    const dupeuser = await prisma.user.findFirst({
        where: {
            username: username
        }
    })

    if (dupeuser === null) {
        const createuser = await prisma.user.create({
            data: {
                username: username,
                password: password
            }
        })
        next()
    }

    res.status(400).json({ success: false, message: 'User already exist' });
}

module.exports = { signupuser, userlogin , authenticateToken }