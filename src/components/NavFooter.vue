<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.imooc.com/u/1343480" target="_blank">河畔一角主页</a
      ><span>|</span>
      <a href="https://coding.imooc.com/class/113.html" target="_blank"
        >Vue全栈课程</a
      ><span>|</span>
      <a href="https://coding.imooc.com/class/236.html" target="_blank"
        >React全家桶课程</a
      ><span>|</span>
      <a href="https://coding.imooc.com/class/343.html" target="_blank"
        >微信支付专项课程（H5+小程序+Node+Mongo）</a
      >
    </div>
    <div class="copyright">
      Copyright ©2019 <span class="domain">mi.futurefe.com</span> All Rights
      Reserved.
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-footer",
};
</script>
<style lang="scss">
@import "../assets/scss/config.scss";
.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: $colorB;
  color: $colorD;
  font-size: $fontI;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: auto;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: $colorD;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
  }
  .copyright {
    margin-top: 20px;
    .domain {
      color: $colorA;
    }
  }
}
</style>
