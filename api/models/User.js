module.exports = {
  attributes: {
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  associate: function() {
    User.hasMany(Post);
  },
};
