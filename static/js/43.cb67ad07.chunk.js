(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1100:function(e,a,t){"use strict";t.r(a);var n=t(120),l=t(0),o=t.n(l),c=t(41),r=t(28),s=t(49),i=t.n(s),m=t(146),d=t.n(m),u=t(145),g=t.n(u),b=t(284),h=t.n(b),f=t(147),E=t.n(f),w=t(808),p=t.n(w),v=t(149),k=t.n(v),j=t(148),y=t.n(j),x=t(642),N=t(643),C=t(29),S=t.n(C),O=t(13),T=t(7),D=t(43),R=t(127),B=t.n(R),M=void 0,P=i.a;a.default=function(){var e=Object(l.useContext)(r.a),a=Object(c.f)(),t=Object(l.useState)(!0),s=Object(n.a)(t,2),i=s[0],m=s[1],u=function(e){a.push(e)};Object(l.useEffect)(function(){var a;e.handleSetPageSidebar(!1),e.handleSetPageHeader(!1),m(((null===(a=Object(T.j)())||void 0===a?void 0:a.tgl_system)||"-")===Object(T.i)())},[]);var b=function(){var e=(new Date).setDate(new Date(new Date(Object(T.j)().tgl_system)).getDate()+1),a=new Date(e);S.a.fire({html:"<h2><b>Tanggal System berbeda dengan tanggal toko<br/> </h2><br>Tanggal System "+Object(T.j)().tgl_system+" - Tanggal Toko "+Object(T.e)(B()(new Date(a)).format("YYYY-MM-DD")),icon:"warning",position:"top-center",cancelButtonText:"Ya..",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!1}).then(function(e){e.isConfirmed&&Object(O.j)("system/close",{PROSES:"close"}).then(function(e){Object(D.e)("success","Berhasil Menutup Toko"),setTimeout(function(){window.location.href="/nagapos.com",localStorage.clear(),localStorage.setItem("islogin","false")},1e3)}).catch(function(e){void 0===e.response?Object(D.e)("info",void 0===e.response?"Terjadi Kesalahan Saat Request Data":e.response.data):"Invalid token."===e.response.data?M.handleInvalidToken():Object(D.e)("info",e.response.data)})})};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"login-cover"},o.a.createElement("div",{className:"login-cover-image",style:{backgroundImage:"url("+P+")"}})),o.a.createElement("div",{className:"login",style:{minWidth:"80%",minHeight:"calc(100vh - 40px)",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("div",{className:"row col-lg-12 justify-content-center"},o.a.createElement("div",{className:"col-lg-3 col-md-3",onClick:function(){i?u("/SubMenuPenjualan"):b()}},o.a.createElement(x.a,{style:{borderRadius:30,backgroundColor:"#619680 !important"},className:"border-0 card-inverse bg-primary text-white text-center m-b-10 shadow"},o.a.createElement(N.a,null,o.a.createElement("img",{src:d.a,alt:"this slowpoke moves",width:"150",class:"img-fluid"}),o.a.createElement("h2",null,o.a.createElement("strong",null,"Penjualan"))))),o.a.createElement("div",{className:"col-lg-3 col-md-3",onClick:function(){i?u("/SubMenuPembelian"):b()}},o.a.createElement(x.a,{className:"border-0 card-inverse bg-primary text-white text-center m-b-10 shadow",style:{borderRadius:30,backgroundColor:"#619680 !important"}},o.a.createElement(N.a,null,o.a.createElement("img",{src:g.a,alt:"this slowpoke moves",width:"150",class:"img-fluid"}),o.a.createElement("h2",null,o.a.createElement("strong",null,"Pembelian"))))),o.a.createElement("div",{className:"col-lg-3 col-md-3",onClick:function(){i?u("/uang-kas"):b()}},o.a.createElement(x.a,{className:"border-0 card-inverse bg-primary text-white text-center m-b-10 shadow",style:{borderRadius:30,backgroundColor:"#619680 !important"}},o.a.createElement(N.a,null,o.a.createElement("img",{src:h.a,alt:"this slowpoke moves",width:"150",class:"img-fluid"}),o.a.createElement("h2",null,o.a.createElement("strong",null,"Uang Kas"))))),o.a.createElement("div",{className:"col-lg-3 col-md-3",onClick:function(){i?u("/SubMenuPesanan"):b()}},o.a.createElement(x.a,{className:"border-0 card-inverse bg-primary text-white text-center m-b-10 shadow",style:{borderRadius:30,backgroundColor:"#619680 !important"}},o.a.createElement(N.a,null,o.a.createElement("img",{src:E.a,alt:"this slowpoke moves",width:"150",class:"img-fluid"}),o.a.createElement("h2",null,o.a.createElement("strong",null,"Pesanan"))))),o.a.createElement("div",{className:"col-lg-3 col-md-3",onClick:function(){i?u("/SubMenuService"):b()}},o.a.createElement(x.a,{className:"border-0 card-inverse bg-primary text-white text-center m-b-10 shadow",style:{borderRadius:30,backgroundColor:"#619680 !important"}},o.a.createElement(N.a,null,o.a.createElement("img",{src:y.a,alt:"this slowpoke moves",width:"150",class:"img-fluid"}),o.a.createElement("h2",null,o.a.createElement("strong",null,"Service"))))),o.a.createElement("div",{className:"col-lg-3 col-md-3",onClick:function(){i?u("/SubMenuHutang"):b()}},o.a.createElement(x.a,{className:"border-0 card-inverse bg-primary text-white text-center m-b-10 shadow",style:{borderRadius:30,backgroundColor:"#619680 !important"}},o.a.createElement(N.a,null,o.a.createElement("img",{src:k.a,alt:"this slowpoke moves",width:"150",class:"img-fluid"}),o.a.createElement("h2",null,o.a.createElement("strong",null,"Hutang"))))),o.a.createElement("div",{className:"col-lg-3 col-md-3",onClick:function(){i?u("/SubMenuLaporan"):b()}},o.a.createElement(x.a,{className:"border-0 card-inverse bg-primary text-white text-center m-b-10 shadow",style:{borderRadius:30,backgroundColor:"#619680 !important"}},o.a.createElement(N.a,null,o.a.createElement("img",{src:p.a,alt:"this slowpoke moves",width:"150",class:"img-fluid"}),o.a.createElement("h2",null,o.a.createElement("strong",null,"Laporan"))))),o.a.createElement("div",{className:"row col-lg-12 justify-content-center"}),o.a.createElement("div",{className:"col-lg-12 justify-content-center row"},o.a.createElement("div",{className:"col-lg-4"}),o.a.createElement("div",{className:"col-lg-3 col-md-3",onClick:function(){S.a.fire({title:"Konfirmasi Keluar !!",text:"Apakah anda ingin keluar ?",icon:"info",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(e){e.isConfirmed&&Object(O.h)("users/logout",{user_id:Object(T.j)().user_id}).then(function(e){window.location.href="/nagapos.com",localStorage.clear(),localStorage.setItem("islogin","false")}).catch(function(e){Object(D.e)("info",void 0===e.response?"Gagal Logout":e.response.data),window.location.reload(),localStorage.clear(),localStorage.setItem("islogin","false")})})}},o.a.createElement(x.a,{className:"border-0 card-inverse bg-danger text-white text-center m-b-10 shadow",style:{borderRadius:30}},o.a.createElement(N.a,null,o.a.createElement("h2",null,o.a.createElement("strong",null,"Logout"))))),o.a.createElement("div",{className:"col-lg-4"})))))}},808:function(e,a,t){e.exports=t.p+"static/media/laporan-head.34d74feb.gif"}}]);
//# sourceMappingURL=43.cb67ad07.chunk.js.map