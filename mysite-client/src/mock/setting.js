import Mock from "mockjs"
import qqImg from "@/assets/qq.jpg"
import weixinImg from "@/assets/weixin.png"
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "http://www.duyiedu.com/source/img/logo.png",
    siteTitle: "我的个人空间",
    github: "https://github.com/1395963229",
    qq: "1395963229",
    qqQrCode: qqImg,
    weixin: "13479012344",
    weixinQrCode: weixinImg,
    mail: "zhangjun@163.com",
    icp: "赣ICP备17001234号",
    githubName: "zjhappy",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
})
