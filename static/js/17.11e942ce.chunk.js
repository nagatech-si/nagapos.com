(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1140:function(e,a,t){"use strict";t.r(a);var n=t(19),o=t(20),i=t(50),r=t(22),m=t(21),l=t(0),s=t.n(l),c=t(38),d=t(42),u=t(52),p=t(288),b=t(11),h=t(151),_=t(43),k=t(90),g=t(75),E=t(13),f=t(287),v=t(24),y=function(e){Object(r.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).state={date:new Date,kondisi_barang:"kosong",FormModal:""},o}return Object(o.a)(t,[{key:"ShowModalTambahPoin",value:function(){0===(localStorage.getItem("data_member")||[]).length?Object(_.e)("info","Kode Member Belum Diisi"):(this.props.dispatch(Object(b.Db)()),this.setState({FormModal:"ShowModalTambahPoin"}))}},{key:"render",value:function(){var e=this;return s.a.createElement(g.a,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-8"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(f.a,{id:"kode_member",onChange:function(){return e.props.getKodeMember},name:"kode_member",component:v.e,type:"text",label:"Kode Member",placeholder:"Masukan Kode Member"})),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(f.a,{id:"transaksi_poin_nama_member",name:"nama_member",readOnly:!0,component:v.e,type:"text",label:"Nama Member",placeholder:"Masukan Nama Member"})))),s.a.createElement("div",{className:"col-4 text-center"},s.a.createElement(s.a.Fragment,null," \xa0 "),s.a.createElement("h1",{style:"POINT"===this.props.point?{fontSize:"4.875rem",position:"absolute",left:"56px",top:"25px"}:{fontSize:"4.875rem",position:"absolute",left:"110px",top:"25px"}}," ",this.props.point," ")),s.a.createElement("div",{className:"col-8"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(f.a,{id:"transaksi_poin_alamat",name:"alamat",readOnly:!0,component:v.e,type:"text",label:"Alamat",placeholder:"Masukan Alamat"})),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(f.a,{id:"transaksi_poin_no_hp",name:"no_hp",readOnly:!0,component:v.e,type:"text",label:"No Hp",placeholder:"Masukan No Hp"})))),s.a.createElement("div",{className:"col-4 text-center"})))}}]),t}(l.Component);y=Object(p.a)({form:"HeadTukarPoin",enableReinitialize:!0})(y);var O=Object(c.b)()(y),j=t(638),N=t(636),M=t(637),S=t(734),T=t(704),I=function(e){Object(r.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(n.a)(this,t);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).state={},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(j.a,{isOpen:this.props.isOpen,backdrop:"static",keyboard:!1,toggle:function(){return e.props.dispatch(Object(b.Cb)())}},s.a.createElement(N.a,null," ",this.props.title," "),s.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},s.a.createElement(M.a,null,s.a.createElement(f.a,{name:"kode_hadiah",component:v.e,type:"text",readOnly:!0,label:" Kode Hadiah",placeholder:"Masukan  Kode Hadiah"}),s.a.createElement(f.a,{name:"nama_hadiah",component:v.e,type:"text",readOnly:!0,label:" Nama Hadiah",placeholder:"Masukan  Nama Hadiah"}),s.a.createElement(f.a,{name:"poin",component:v.e,type:"number",readOnly:!0,label:"Poin",placeholder:"Masukan Poin"})),s.a.createElement(S.a,null,s.a.createElement("button",{className:"btn btn-white",onClick:function(){return e.props.dispatch(Object(b.Cb)())},type:"button",disabled:this.props.isLoading},"Batal"),s.a.createElement("button",{className:"btn btn-primary",disabled:this.props.submitting,type:"submit"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))))}}]),t}(l.Component);I=Object(p.a)({form:"ModalHadiah",enableReinitialize:!0,validate:T.a})(I);var x=Object(c.b)(function(e){if(null!==e.datamember.ShowModalTukarPoin)return{initialValues:{nama_hadiah:e.datamember.ShowModalTukarPoin.nama_hadiah,poin:e.datamember.ShowModalTukarPoin.poin,kode_hadiah:e.datamember.ShowModalTukarPoin.kode_hadiah}}},null)(I),P=function(e){Object(r.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).state={point:"POINT",isLoading:!1,isLoadingTukarPoin:!1,columns:[{dataField:"nama_hadiah",text:"Nama Hadiah",sort:!0},{dataField:"poin",text:"Poin"},{dataField:"stock",text:"Stock"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(e,a){var t={kode_hadiah:a.kode_hadiah,nama_hadiah:a.nama_hadiah,poin:a.poin};return s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{onClick:function(){return o.showDataHadiah(t)},className:"btn btn-primary mr-3"},s.a.createElement("i",{className:"fa fa-exchange-alt"}))))}}]},o.handleSubmit=o.handleSubmit.bind(Object(i.a)(o)),o.getKodeMember=o.getKodeMember.bind(Object(i.a)(o)),o}return Object(o.a)(t,[{key:"showDataHadiah",value:function(e){0===(localStorage.getItem("data_member")||[]).length?Object(_.e)("info","Kode Member Belum Diisi"):(this.props.dispatch(Object(h.d)(e)),this.props.dispatch(Object(b.Db)()))}},{key:"handleSubmit",value:function(e){var a=this;this.setState({isLoading:!0});var t=JSON.parse(localStorage.getItem("data_member")||[]),n={kode_member:t[0].kode_member,nama_customer:t[0].nama_customer,alamat_customer:t[0].alamat_customer,poin:parseInt(e.poin),kode_hadiah:e.kode_hadiah,nama_hadiah:e.nama_hadiah};Object(E.h)("trxmember/poin/tukar",n).then(function(e){a.props.dispatch(Object(u.d)("ModalHadiah")),a.props.dispatch(Object(u.d)("HeadTukarPoin")),Object(_.e)("success",e.data.message),localStorage.setItem("data_member",JSON.stringify([])),a.props.dispatch(Object(u.d)("HeadFormPoint")),document.getElementById("transaksi_poin_nama_member").value="",document.getElementById("transaksi_poin_nama_member").value="",document.getElementById("transaksi_poin_alamat").value="",document.getElementById("transaksi_poin_no_hp").value="",a.setState({isLoading:!1}),a.props.dispatch(Object(b.Cb)()),Object(E.c)("member/get/by-kode-member/"+t[0].kode_member).then(function(e){0===e.data.length?(Object(_.e)("info","Kode Member Tersebut Tidak Ada"),document.getElementById("transaksi_poin_nama_member").value="",document.getElementById("transaksi_poin_alamat").value="",document.getElementById("transaksi_poin_no_hp").value="",a.setState({datatransaksimember:[],point:0,isLoading:!1})):(localStorage.setItem("data_member",JSON.stringify(e.data)),e.data.forEach(function(e,t){document.getElementById("kode_member").value=e.kode_member,document.getElementById("transaksi_poin_nama_member").value=e.nama_customer,document.getElementById("transaksi_poin_alamat").value=e.alamat_customer,document.getElementById("transaksi_poin_no_hp").value=e.no_hp,a.setState({datatransaksimember:[],point:e.point||0,isLoading:!1})}))})}).catch(function(e){Object(_.e)("info",e.response.data||"Terjadi kesalahan"),a.setState({isLoadingTukarPoin:!1,isLoading:!1})})}},{key:"getKodeMember",value:function(e){var a=this;clearTimeout(this.delay),this.delay=setTimeout(function(){if(void 0===e.kode_member)return!1;a.setState({isLoading:!0}),Object(E.c)("member/get/by-kode-member/"+e.kode_member).then(function(e){console.log(e.data),0===e.data.length?(Object(_.e)("info","Kode Member Tersebut Tidak Ada"),document.getElementById("transaksi_poin_nama_member").value="",document.getElementById("transaksi_poin_alamat").value="",document.getElementById("transaksi_poin_no_hp").value="",a.setState({datatransaksimember:[],point:0,isLoading:!1})):(localStorage.setItem("data_member",JSON.stringify(e.data)),e.data.forEach(function(e,t){document.getElementById("transaksi_poin_nama_member").value=e.nama_customer,document.getElementById("transaksi_poin_alamat").value=e.alamat_customer,document.getElementById("transaksi_poin_no_hp").value=e.no_hp,a.setState({datatransaksimember:[],point:e.point||0,isLoading:!1})}))})},1500)}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(b.ob)())}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(d.b,{to:"#"},"Member")),s.a.createElement("li",{className:"breadcrumb-item active"},"Tukar Poin")),s.a.createElement("h1",{className:"page-header"},"Tukar Poin "),s.a.createElement(g.a,null,s.a.createElement(g.c,null,"Tukar Poin"),s.a.createElement("br",null),s.a.createElement("div",{className:"container"},s.a.createElement(O,{onChange:function(a){return e.getKodeMember(a)},point:this.state.point}),s.a.createElement(k.a,{keyField:"kode_hadiah",exportCsv:!0,data:this.props.datahadiah,columns:this.state.columns,textEmpty:"Data Transaksi Member Kosong"})),s.a.createElement("br",null),s.a.createElement(x,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,title:"FormTukar Point",isOpen:this.props.hideModal,onSubmit:function(a){return e.handleSubmit(a)}})))}}]),t}(s.a.Component);P=Object(p.a)({form:"FormTukarPoin",enableReinitialize:!0})(P);a.default=Object(c.b)(function(e){return{datahadiah:e.datamaster.getDataHadiah,hideModal:e.datamaster.modalDialog}},null)(P)},704:function(e,a,t){"use strict";a.a=function(e,a){var t={};return e.nama_hadiah||(t.nama_hadiah="Nama Hadiah Tidak Boleh Kosong"),e.poin||(t.poin="Poin Tidak Boleh Kosong"),t}},734:function(e,a,t){"use strict";var n=t(16),o=t(26),i=t(0),r=t.n(i),m=t(4),l=t.n(m),s=t(32),c=t.n(s),d=t(18),u={tag:d.m,className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,i=e.tag,m=Object(o.a)(e,["className","cssModule","tag"]),l=Object(d.i)(c()(a,"modal-footer"),t);return r.a.createElement(i,Object(n.a)({},m,{className:l}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p}}]);
//# sourceMappingURL=17.11e942ce.chunk.js.map