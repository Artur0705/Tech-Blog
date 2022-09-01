const bcrypt = require("bcrypt");
const { User } = require("../models");

const usersData = [
  {
    username: "alan",
    name: "Alan James",
    password: "$2b$10$VD3I1Wnd6HUvZQZd/Gv0eOzZKdc1q/EOhZ1GXpxxlLsSc9EHX0K5i", // password
  },
  {
    username: "daniel",
    name: "Daniel Murphy",
    password: "$2b$10$PsQ6KyXAGIFU6CixHVj/iOkRrScv5Hq9EhKTzDd7u5DVNWVzqeKRG", // password1
  },
  {
    username: "john",
    name: "John Harvey",
    password: "$2b$10$CmLjy8PcaiQqEYpfvIBi5.6AYR2VSuCzuMPoL63bL01Ad/7dSKA.u", //password2
  },
];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;
