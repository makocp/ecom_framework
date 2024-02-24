import * as express from 'express';
const router = express.Router();

const DEMO_USERS = [
    {
        userId: '1',
        email: 'marin.sekic@ecom.com',
        firstName: 'Marin',
        lastName: 'Sekic',
        telNr: '+4367812345678',
        password: 'passwordEcom1'
    }
];

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = DEMO_USERS.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = "demo_token_" + new Date().getTime();

    // Return the user (without the password) and token
    const { password: _, ...userWithoutPassword } = user;
    res.json({
        user: userWithoutPassword,
        token
    });
});

module.exports = router;