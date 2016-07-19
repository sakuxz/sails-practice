module.exports = {
  signin: async (req, res) => {
    try {
      // 從前端 request 取得 form 表單內容
      let user = req.body;

      // 呼叫 UserService.checkUser 完成相關處理
      let userExist = await UserService.checkUser(user);
      if(!userExist){
          res.view('index.jade');
          return;
      }
      req.session.uid = userExist.id;
      req.session.name = userExist.name;

      // 回傳驗證結果
      res.view('info.jade', {user: userExist, loginSuccess: true});
    } catch (e) {
      res.serverError(e);
    }
  }
}