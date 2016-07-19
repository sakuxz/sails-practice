module.exports = {
  post: async (req, res) => {
    try {
      // 從前端 request 取得 form 表單內容
      let data = req.body;

      await PostService.addPost(data);
      let posts = await PostService.getPosts();
console.log(posts);
      // 回傳結果
      res.view('index.jade', {posts: posts});
    } catch (e) {
      res.serverError(e);
    }
  }
}
