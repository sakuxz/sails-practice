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
  associations: function() {
    User.hasMany(Post);
  },
};
