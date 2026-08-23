const jwt = require('jsonwebtoken');
const { prisma } = require('../lib/prisma.js')
const bcrypt = require('bcrypt');

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

    try {
        const user = await prisma.user.findFirst({ where: { username } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { userid: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '3d' }
        );

        console.log(token)

        return res.json({ success: true, token: token });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error' });
    }
}

async function signupuser(req, res, next) {
    const { username, password } = req.body
    try {
        const dupeuser = await prisma.user.findFirst({
            where: {
                username: username
            }
        })
        const SALT_ROUNDS = parseInt(process.env.HASHPASSWORD, 10);
        const bcryptpassword = await bcrypt.hash(password, SALT_ROUNDS)
        if (dupeuser === null) {
            const createuser = await prisma.user.create({
                data: {
                    username: username,
                    password: bcryptpassword,
                }
            })
            next()
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({ success: false, message: 'Server error' });
    }
}

module.exports = { signupuser, userlogin, authenticateToken }