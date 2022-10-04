const User = require('../models/User');

module.exports = {
    async show(req, res) {
        const users = User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {}
            },
        });
    }
};