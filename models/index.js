const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page = db.define('page', {
  title: Sequelize.STRING,
  slug: Sequelize.STRING,
  content: Sequelize.TEXT,
  //might change to boolean type
  status: Sequelize.ENUM('open', 'closed')
});

const User = db.define('user', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = {
  Page, User
}
