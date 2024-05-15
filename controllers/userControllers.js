const User = require('../models/User');

const UserController = {
  index: async (req, res) => {
    try {
      const users = await User.getAll();
      if (!Array.isArray(users)) {
        throw new Error('Users data is not an array');
      }
      res.render('users/index', { users });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  create: async (req, res) => {
    const { firstName, email, phoneNumber } = req.body;
    try {
      await User.create(firstName, email, phoneNumber);
      res.redirect('/users');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  delete: async (req, res) => {
    const userId = req.params.id;
    try {
      await User.delete(userId);
      res.redirect('/users');
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

module.exports = UserController;
