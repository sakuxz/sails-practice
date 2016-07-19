module.exports = {
  addPost: async (req, res) => {
    try {
      // 從前端 request 取得 form 表單內容
      let data = req.body;
      data.UserId = req.session.uid;

      await PostService.addPost(data);
      res.redirect('/');
    } catch (e) {
      res.serverError(e);
    }
  },
  showPosts: async (req, res) => {
    try {
      let posts = await PostService.getPosts();
      res.view('index.jade', {posts: posts});
    } catch (e) {
      res.serverError(e);
    }
  },
}
