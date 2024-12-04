const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) {
            console.log('Fail');
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.user = user;
        next();
    });
};

const authorizeRoles = (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};

module.exports = { authenticateToken, authorizeRoles };
