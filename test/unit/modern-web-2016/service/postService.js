describe('對 Post Service 進行驗證', function() {

  let user = null;

  before(async (done) => {
    // 建立測試的 user 資料
    // 在進行 Login 驗證前需要 User 事先存在
    try {

      done();
    } catch (e) {
      done(e);
    }
  });

  it('create post', async (done) => {
    try {
      let newPost = {
        content: '123',
        UserId: 1
      }
      let posts = await PostService.addPost(newPost);
      posts.toJSON().should.has.keys('id', 'content', 'UserId', 'createdAt', 'updatedAt');
      done();
    } catch (e) {
      done(e);
    }
  });

  it('get all posts', async (done) => {
    try {
      let posts = await PostService.getPosts();
      posts.should.be.Array;
      posts[0].toJSON().should.has.keys('id', 'content', 'UserId', 'User', 'img', 'createdAt', 'updatedAt');
      done();
    } catch (e) {
      done(e);
    }
  });

});
