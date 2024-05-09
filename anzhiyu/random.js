var posts=["post/b9dc5266.html","post/8e33c3e1.html","post/956161ca.html","post/fa343cdc.html","post/fb61d885.html","post/36a80a35.html","post/4073eda.html","post/ceeb73f.html","post/5933353b.html","post/3bd898ff.html","post/db0a31c8.html","post/31e4c77c.html","post/2c9505a3.html","post/b2fdb571.html","post/dae98a7e.html","post/a60e5f8f.html","post/3a4575d7.html","post/4a17b156.html","post/263068a8.html","post/d0f6babd.html","post/eb769414.html","post/d58bdfa4.html","post/3c6f5e91.html","post/80adb334.html","post/79ab7715.html","post/d7005037.html","post/a2e13c6e.html","post/9ee2cd59.html","post/2df239ce.html","post/ddcb8131.html","post/43356308.html","post/5774c795.html","post/b37b5fe3.html","post/ea33ab97.html","post/64bbd6f1.html","post/6d528881.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术","banSub":true,"subSuffix":"atom.xml"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc9de6507.webp","descr":"期待您的光临！","siteshot":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc39c5966.webp","color":"vip","tag":"生活"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc38f1465.webp","descr":"分享设计与科技生活","siteshot":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc3959f82.webp","color":"vip","tag":"技术"},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/16/6324505c9890a.jpeg","descr":"进一寸有进一寸的欢喜。","siteshot":"https://img02.anheyu.com/adminuploads/1/2022/09/16/6324505c98fae.jpg","color":"vip","tag":"技术"},{"name":"满心","link":"https://blog.lovelu.top","avatar":"https://cdn.lovelu.top/img/logo.png","descr":"追求让人充实，分享让人快乐","siteshot":"https://api.antmoe.com/api/open/website/lovelu","color":"vip","tag":"技术"},{"name":"贰猹的小窝","link":"https://noionion.top/","avatar":"http://pub-noionion.oss-cn-hangzhou.aliyuncs.com/head.jpg","descr":"用这生命中的每一秒，给自己一个不后悔的未来","siteshot":null,"color":"vip","tag":"技术"},{"name":"MJ's BLOG","link":"https://blog.justlovesmile.top/","avatar":"https://cdn.jsdelivr.net/gh/Justlovesmile/CDN/image/logo.jpg","descr":"醒亦念卿，梦亦念卿","siteshot":null,"color":"vip","tag":"技术"},{"name":"Ethan.Tzy","link":"https://tzy1997.com/","avatar":"https://bu.dusays.com/2022/05/02/626f92e193879.jpg","descr":"古今之成大事者，不惟有超世之才，亦必有坚忍不拔之志","siteshot":null,"color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };