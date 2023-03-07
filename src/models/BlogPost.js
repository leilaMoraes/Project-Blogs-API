module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define( 'BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    userId: { type: DataTypes.INTEGER, foreignKey: true }
  },
  {
    tableName: 'blog_posts',
    underscored: true,
    createdAt: 'published',
    updatedAt: 'updated'
  });

  BlogPost.associate = (model) => {
    BlogPost.belongsTo(model.User,
      { foreignKey: 'user_id', as: 'user'});
  };

  return BlogPost;
};