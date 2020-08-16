(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{623:function(s,a,t){s.exports=t.p+"assets/img/2019-08-23-22-25-12.d908beda.png"},624:function(s,a,t){s.exports=t.p+"assets/img/2019-08-23-22-25-45.75994352.png"},625:function(s,a,t){s.exports=t.p+"assets/img/2019-08-23-22-26-21.9d9b8700.png"},626:function(s,a,t){s.exports=t.p+"assets/img/2019-08-23-22-26-48.2fd41d89.png"},902:function(s,a,t){"use strict";t.r(a);var e=t(38),r=Object(e.a)({},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_2-ftp服务搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-ftp服务搭建","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.FTP服务搭建")]),s._v(" "),e("h2",{attrs:{id:"_2-1-安装vsftp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-安装vsftp","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.1.安装vsftp")]),s._v(" "),e("p",[s._v("使用yum安装vsftpd")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("yum install vsftpd\n")])])]),e("h2",{attrs:{id:"_2-2-添加用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-添加用户","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.2.添加用户")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("adduser nodeing\npasswd nodeing\n")])])]),e("p",[s._v("禁止刚新建的用户的ssh登录权限，只允许ftp访问")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("usermod "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sbin"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nologin nodeing\n")])])]),e("h2",{attrs:{id:"_2-3-配置vsftp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-配置vsftp","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.3.配置vsftp")]),s._v(" "),e("p",[s._v("打开配置文件：")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("vi "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("vsftpd"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("vsftpd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf\n")])])]),e("p",[s._v("关闭匿名访问：")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("anonymous_enable"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NO")]),s._v("\n")])])]),e("p",[s._v("去掉local_enable的注释,修改为开启：")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("local_enable"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("YES")]),s._v("\n")])])]),e("p",[s._v("限制用户仅能访问自己的主目录")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("chroot_local_use"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("YES")]),s._v("\n")])])]),e("p",[s._v("重启服务:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("service vsftpd restart\n")])])]),e("p",[s._v("设置开机自启动：")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("chkconfig vsftpd on\n")])])]),e("h2",{attrs:{id:"_2-4-连接测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-连接测试","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.4.连接测试")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ftp nodeing@104.224.139.145\n\nftp> pwd\nRemote directory: /home/nodeing\n\nftp> quit\n221 Goodbye.\n")])])]),e("h2",{attrs:{id:"_2-5-文件上传测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-文件上传测试","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.5.文件上传测试")]),s._v(" "),e("p",[s._v("打开xftp软件，新建连接")]),s._v(" "),e("p",[e("img",{attrs:{src:t(623),alt:""}})]),s._v(" "),e("p",[s._v("点击连接后弹出对话框：")]),s._v(" "),e("p",[e("img",{attrs:{src:t(624),alt:""}})]),s._v(" "),e("p",[s._v("内容填写完整后点击确定--连接，查看是否连接成功")]),s._v(" "),e("p",[e("img",{attrs:{src:t(625),alt:""}})]),s._v(" "),e("p",[s._v("在左边选择需要上传的文件，然后右键--\x3e传输即可上传文件")]),s._v(" "),e("p",[e("img",{attrs:{src:t(626),alt:""}})]),s._v(" "),e("Valine")],1)},[],!1,null,null,null);a.default=r.exports}}]);