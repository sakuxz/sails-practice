module.exports = {

  addPost: async (data) => {
    try {
      let newPost = await Post.create(data);
      return newPost;

    } catch (e) {
      throw e;
    }
  },
  getPosts: async () => {
    try {
      let posts = await Post.findAll({
        include: [ User ],
        order: [['createdAt', 'DESC']]
      });
      return posts;

    } catch (e) {
      throw e;
    }
  },
}
