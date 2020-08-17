import { instance as http } from "../http";

export default {
  authCheck: async function(context) {
    const auth = await http({
      method: "post",
      url: "authcheck",
      data: new FormData(),
    });

    try {
      if (auth.data.auth !== null) {
        context.commit({ type: "login", auth: auth.data.auth });
      } else {
        context.commit("logout");
      }
    } catch (err) {
      console.error(err);
      Toast.launch({
        message: "權限確認失敗",
        type: "error",
      });
    }
  },
};
