const db = require('../config/database');

const User = {
  getAll: async () => {
    try {
      const result = await db.query('SELECT * FROM users');
      return result; // Assuming result is an array of user objects
    } catch (error) {
      throw new Error(error.message);
    }
  },
  create: async (firstName, email, phoneNumber) => {
    try {
      const result = await db.query('INSERT INTO users (first_name, email, phone_number) VALUES (?, ?, ?)', [firstName, email, phoneNumber]);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  delete: async (userId) => {
    try {
      const result = await db.query('DELETE FROM users WHERE id = ?', [userId]);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = User;
