(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{1124:function(e,a,t){"use strict";t.r(a);var n=t(19),i=t(20),o=t(50),m=t(22),l=t(21),r=t(0),s=t.n(r),c=t(38),b=t(42),d=t(43),u=t(75),p=t(13),h=t(52),g=t(287),E=t(288),f=t(11),_=t(24),v=t(208),k=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,o=new Array(i),m=0;m<i;m++)o[m]=arguments[m];return(e=a.call.apply(a,[this].concat(o))).state={},e}return Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement(g.a,{name:"jumlah_poin",component:_.e,type:"number",label:"Jumlah Tambah Poin",placeholder:"Masukan Jumlah Tambah Poin"})),s.a.createElement("div",{className:"col-6"},s.a.createElement("label",{htmlFor:""}," \xa0 "),s.a.createElement("button",{className:"btn btn-primary btn-block",disabled:this.props.isLoadingAmbilPoin,type:"submit"},this.props.isLoadingAmbilPoin?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))))}}]),t}(r.Component);k=Object(E.a)({form:"AmbilPoin",enableReinitialize:!0})(k);var y=Object(c.b)()(k),O=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,o=new Array(i),m=0;m<i;m++)o[m]=arguments[m];return(e=a.call.apply(a,[this].concat(o))).state={},e}return Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement(g.a,{name:"jumlah_poin",component:_.e,type:"number",label:"Jumlah Tambah Poin",placeholder:"Masukan Jumlah Tambah Poin"})),s.a.createElement("div",{className:"col-6"},s.a.createElement("label",{htmlFor:""}," \xa0 "),s.a.createElement("button",{className:"btn btn-primary btn-block",disabled:this.props.isLoadingTambahPoin,type:"submit"},this.props.isLoadingTambahPoin?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))))}}]),t}(r.Component);O=Object(E.a)({form:"TambahPoin",enableReinitialize:!0})(O);var P=Object(c.b)()(O),S=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(e){var i;return Object(n.a)(this,t),(i=a.call(this,e)).state={date:new Date,kondisi_barang:"kosong",isLoadingTambahPoin:!1,isLoadingAmbilPoin:!1,FormModal:""},i}return Object(i.a)(t,[{key:"simpanTambahPoint",value:function(e){var a=this;this.setState({isLoadingTambahPoin:!0});var t=JSON.parse(localStorage.getItem("data_member")||[]),n={kode_member:t[0].kode_member,nama_customer:t[0].nama_customer,alamat_customer:t[0].alamat_customer,poin:parseInt(e.jumlah_poin)};Object(p.h)("trxmember/poin/tambah",n).then(function(e){Object(d.e)("success",e.data.message),localStorage.setItem("data_member",JSON.stringify([])),a.props.dispatch(Object(h.e)("HeadFormPoint")),document.getElementById("transaksi_poin_nama_member").value="",document.getElementById("transaksi_poin_alamat").value="",document.getElementById("transaksi_poin_no_hp").value="",a.setState({isLoadingTambahPoin:!1}),a.props.dispatch(Object(f.Cb)())}).catch(function(e){a.setState({isLoadingTambahPoin:!1}),Object(d.e)("info","Terjadi Kesalahan Saat Mengirim Data")})}},{key:"simpanAmbilPoint",value:function(e){var a=this;console.log(e),this.setState({isLoadingAmbilPoin:!0});var t=JSON.parse(localStorage.getItem("data_member")||[]),n={kode_member:t[0].kode_member,nama_customer:t[0].nama_customer,alamat_customer:t[0].alamat_customer,poin:parseInt(e.jumlah_poin)};Object(p.h)("trxmember/poin/ambil",n).then(function(e){Object(d.e)("success",e.data.message),localStorage.setItem("data_member",JSON.stringify([])),a.props.dispatch(Object(h.e)("HeadFormPoint")),document.getElementById("transaksi_poin_nama_member").value="",document.getElementById("transaksi_poin_alamat").value="",document.getElementById("transaksi_poin_no_hp").value="",a.setState({isLoadingAmbilPoin:!1}),a.props.dispatch(Object(f.Cb)())}).catch(function(e){a.setState({isLoadingAmbilPoin:!1}),Object(d.e)("info","Terjadi Kesalahan Saat Mengirim Data")})}},{key:"ShowModalTambahPoin",value:function(){0===(localStorage.getItem("data_member")||[]).length?Object(d.e)("info","Kode Member Belum Diisi"):(this.props.dispatch(Object(f.Db)()),this.setState({FormModal:"ShowModalTambahPoin"}))}},{key:"ShowModalAmbilPoin",value:function(){0===(localStorage.getItem("data_member")||[]).length?Object(d.e)("info","Kode Member Belum Diisi"):(this.props.dispatch(Object(f.Db)()),this.setState({FormModal:"ShowModalAmbilPoin"}))}},{key:"render",value:function(){var e=this;return s.a.createElement(u.a,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-8"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(g.a,{onChange:this.props.getKodeMember,name:"kode_member",component:_.e,type:"text",label:"Kode Member",placeholder:"Masukan Kode Member"})),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(g.a,{id:"transaksi_poin_nama_member",name:"nama_member",readOnly:!0,component:_.e,type:"text",label:"Nama Member",placeholder:"Masukan Nama Member"})))),s.a.createElement("div",{className:"col-4 text-center"},s.a.createElement(s.a.Fragment,null," \xa0 "),s.a.createElement("h1",{style:"POINT"===this.props.point?{fontSize:"4.875rem",position:"absolute",left:"56px",top:"25px"}:{fontSize:"4.875rem",position:"absolute",left:"110px",top:"25px"}}," ",this.props.point," ")),s.a.createElement("div",{className:"col-8"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(g.a,{id:"transaksi_poin_alamat",name:"alamat",readOnly:!0,component:_.e,type:"text",label:"Alamat",placeholder:"Masukan Alamat"})),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(g.a,{id:"transaksi_poin_no_hp",name:"no_hp",readOnly:!0,component:_.e,type:"text",label:"No Hp",placeholder:"Masukan No Hp"})))),s.a.createElement("div",{className:"col-4 text-center"}),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("label",null,"\xa0"),s.a.createElement("button",{type:"button",onClick:function(){return e.ShowModalTambahPoin()},className:"btn btn-primary btn-block"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Tambah Poin"):"Tambah Poin")),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("label",null,"\xa0"),s.a.createElement("button",{type:"button",onClick:function(){return e.ShowModalAmbilPoin()},className:"btn btn-warning btn-block"},this.props.isLoadingBatal?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Ambil Poin"):"Ambil Poin"))),s.a.createElement(v.a,{size:"L",title:"ShowModalTambahPoin"===this.state.FormModal?"Tambah Poin":"Ambil Poin",content:"ShowModalTambahPoin"===this.state.FormModal?s.a.createElement(P,{isLoadingTambahPoin:this.state.isLoadingTambahPoin,onSubmit:function(a){return e.simpanTambahPoint(a)}}):s.a.createElement(y,{isLoadingAmbilPoin:this.state.isLoadingAmbilPoin,onSubmit:function(a){return e.simpanAmbilPoint(a)}})}))}}]),t}(r.Component);S=Object(E.a)({form:"HeadFormPoint",enableReinitialize:!0})(S);var j=Object(c.b)(function(e){return{datakondisi:e.datamaster.getDataKondisiBarang,setHancurBarang:e.databarang.setHancurBarang}},null)(S),N=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(e){var i;return Object(n.a)(this,t),(i=a.call(this,e)).state={isLoading:!1,point:"POINT"},i.handleSubmit=i.handleSubmit.bind(Object(o.a)(i)),i.getKodeMember=i.getKodeMember.bind(Object(o.a)(i)),i}return Object(i.a)(t,[{key:"handleSubmit",value:function(e){}},{key:"getKodeMember",value:function(e){var a=this;clearTimeout(this.delay),this.delay=setTimeout(function(){if(void 0===e.kode_member)return!1;a.setState({isLoading:!0}),Object(p.c)("member/get/by-kode-member/"+e.kode_member).then(function(e){0===e.data.length?(Object(d.e)("info","Kode Member Tersebut Tidak Ada"),document.getElementById("transaksi_poin_nama_member").value="",document.getElementById("transaksi_poin_alamat").value="",document.getElementById("transaksi_poin_no_hp").value="",a.setState({datatransaksimember:[],point:0,isLoading:!1})):(localStorage.setItem("data_member",JSON.stringify(e.data)),e.data.forEach(function(e,t){document.getElementById("transaksi_poin_nama_member").value=e.nama_customer,document.getElementById("transaksi_poin_alamat").value=e.alamat_customer,document.getElementById("transaksi_poin_no_hp").value=e.no_hp,a.setState({datatransaksimember:[],point:e.point||0,isLoading:!1})}))})},1500)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(b.b,{to:"#"},"Member")),s.a.createElement("li",{className:"breadcrumb-item active"},"Transaksi Poin")),s.a.createElement("h1",{className:"page-header"},"Transaksi Poin "),s.a.createElement(u.a,null,s.a.createElement(u.c,null,"Transaksi Poin"),s.a.createElement("br",null),s.a.createElement("div",{className:"container"},s.a.createElement(j,{onChange:function(a){return e.getKodeMember(a)},point:this.state.point})),s.a.createElement("br",null)))}}]),t}(s.a.Component);a.default=Object(c.b)(null)(N)}}]);
//# sourceMappingURL=114.0460cbef.chunk.js.map