const path = require('path');

module.exports = {
  addPost: async (req, res) => {
    try {
      // 從前端 request 取得 form 表單內容
      let data = req.body;
      data.UserId = req.session.uid;
      req.file('img').upload({
        // don't allow the total upload size to exceed ~10MB
        maxBytes: 10000000,
        dirname: path.join('..', '..', '.tmp', 'public', 'uploads')
      },function whenDone(err, uploadedFiles) {
        if (err) {
          return res.negotiate(err);
        }

        if (uploadedFiles.length === 0){
          data.img = undefined;
        }else {
          data.img = path.basename(uploadedFiles[0].fd)
        }
        PostService.addPost(data);
        res.redirect('/');

      });

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
