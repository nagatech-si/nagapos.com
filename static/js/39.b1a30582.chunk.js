(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1169:function(a,e,t){"use strict";t.r(e);var n=t(19),r=t(20),i=t(50),o=t(22),s=t(21),c=t(0),l=t.n(c),m=t(42),d=t(75),u=t(84),g=t.n(u),p=t(85),b=t.n(p),h=t(11),f=t(23),k=t(38),E=t(93),B=t.n(E),_=t(638),v=t(636),O=t(637),S=t(734),N=t(287),j=t(288),T=t(24),y=function(a){Object(o.a)(t,a);var e=Object(s.a)(t);function t(a){var r;return Object(n.a)(this,t),(r=e.call(this,a)).state={no_kirim:[],datagudang:[],databaki:[],loading:!1},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(h.nb)()),this.props.dispatch(Object(h.lb)())}},{key:"render",value:function(){var a=this;return l.a.createElement(_.a,{backdrop:"static",keyboard:!1,isOpen:this.props.isOpen,toggle:function(){return a.props.dispatch(Object(h.Cb)())}},l.a.createElement(v.a,null," ",this.props.title," "),l.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()}},l.a.createElement(O.a,null,l.a.createElement("div",{className:"form-group"},l.a.createElement(N.a,{label:"No Kirim",name:"no_kirim",options:this.props.no_kirim.map(function(a){return{value:a._id.no_kirim,name:a._id.no_kirim}}),placeholder:"Silahkan Pilih No Kirim",component:T.f})),l.a.createElement("div",{className:"form-group"},this.state.datagudang!==[]?l.a.createElement(N.a,{label:"Kode Gudang",name:"kode_gudang",onChange:function(e){a.setState({kode_gudang:e}),a.props.change("kode_baki","")},options:this.props.datagudang.filter(function(a){return void 0!==a.kode_gudang}).map(function(a){return{value:a.kode_gudang,name:a.kode_gudang+" - "+a.nama_gudang}}),placeholder:"Silahkan Pilih Kode Gudang",component:T.f}):l.a.createElement(B.a,{width:"100%",height:50})),l.a.createElement("div",{className:"form-group"},l.a.createElement(N.a,{label:"Kode Baki",name:"kode_baki",options:this.props.databaki.filter(function(e){return e.kode_gudang===a.state.kode_gudang}).map(function(a){return{value:a.kode_baki,name:a.kode_baki+" - "+a.nama_baki}||[]}),placeholder:"Silahkan Pilih Kode Baki",component:T.f}))),l.a.createElement(S.a,null,l.a.createElement("button",{className:"btn btn-primary",disabled:this.props.submitting,type:"submit"},this.props.isLoading?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Cek Data Barang"):"Cek Data Barang"),l.a.createElement("button",{className:"btn btn-white",onClick:function(){return a.props.dispatch(Object(h.Cb)())},type:"button",disabled:this.props.isLoading},"Batal"))))}}]),t}(c.Component);y=Object(j.a)({form:"FormTerimaBarang",enableReinitialize:!0})(y);var D=Object(k.b)(function(a){return{initialValues:{no_kirim:(null===localStorage.getItem("data_terima_barang")?[]:JSON.parse(localStorage.getItem("data_terima_barang")||[])).no_kirim||""},datagudang:a.datamaster.getDataGudang,databaki:a.datamaster.getDataBaki}},null)(y),F=t(13),x=t(43),C=t(52),w=p.Search.SearchBar,L=function(a){Object(o.a)(t,a);var e=Object(s.a)(t);function t(a){var r;return Object(n.a)(this,t),(r=e.call(this,a)).state={isEdit:!1,modalDialog:!1,isLoading:!1,isLoadingBtn:!1,DataTerimaBarang:[],SimpanDataBarang:!1,resetTerimaBarang:!1,columns:[{dataField:"no",text:"No ",formatter:function(a,e,t,n){return r.setState({num:1+t}),l.a.createElement("div",null," ",++t," ")},footerAttrs:{colSpan:"4"},footer:function(a,e,t,n){return l.a.createElement("div",null,"Total Barang : ",r.state.DataTerimaBarang.length," ")}},{dataField:"kode_barang",text:"Kode Barang",sort:!0},{dataField:"kode_barcode",text:"Kode Barcode"},{dataField:"kode_intern",text:"Kode Intern"},{dataField:"berat",text:"Berat",formatter:function(a){return a.toFixed(3)},footer:function(a){return a.reduce(function(a,e){return a+e},0).toFixed(3)}},{dataField:"nama_atribut",text:"Nama Atribut",footer:""},{dataField:"berat_atribut",text:"Berat Atribut",formatter:function(a){return a.toFixed(3)},footer:function(a){return a.reduce(function(a,e){return a+e},0).toFixed(3)}}]},r.handleSubmit=r.handleSubmit.bind(Object(i.a)(r)),r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(f.o)())}},{key:"resetTerimaBarang",value:function(){var a=this;this.setState({resetTerimaBarang:!0}),setTimeout(function(){a.setState({DataTerimaBarang:[],resetTerimaBarang:!1})},300)}},{key:"handleSubmit",value:function(a){var e=this,t={no_kirim:a.no_kirim,kode_gudang:a.kode_gudang,kode_toko:a.kode_baki};localStorage.setItem("data_terima_barang",JSON.stringify(t)),this.setState({SimpanDataBarang:t}),this.setState({isLoading:!0});var n={no_kirim:a.no_kirim};Object(F.c)("kirimbarang/get/nokirim/"+a.no_kirim,n).then(function(a){e.setState({DataTerimaBarang:a.data})}).then(function(){e.setState({isLoading:!1})}).then(function(){e.props.dispatch(Object(C.d)("FormTerimaBarang"))}).then(function(){e.props.dispatch(Object(h.Cb)())})}},{key:"formEditBaki",value:function(a){this.props.dispatch(Object(h.Db)()),this.props.dispatch(Object(f.m)(a)),this.setState({isEdit:!0})}},{key:"ShowModalTerimaBarang",value:function(){this.props.dispatch(Object(h.Db)()),this.props.dispatch(Object(f.m)(!1)),this.setState({isEdit:!1})}},{key:"terimabangOnline",value:function(){var a=this;this.setState({isLoadingBtn:!0}),Object(F.h)("terimabarang/add",this.state.SimpanDataBarang).then(function(){a.setState({DataTerimaBarang:[]})}).then(function(){a.props.dispatch(Object(C.d)("FormTerimaBarang")),localStorage.setItem("data_terima_barang",JSON.stringify([]))}).then(function(){a.props.dispatch(Object(f.o)())}).then(function(){a.setState({isLoadingBtn:!1})}).then(function(){Object(x.d)("Barang Berhasil Diterima")}).catch(function(e){return a.errorHandling(e)})}},{key:"errorHandling",value:function(a){Object(x.a)(a),this.setState({isLoadingBtn:!1})}},{key:"render",value:function(){var a=this;return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(m.b,{to:"#"},"Barang")),l.a.createElement("li",{className:"breadcrumb-item active"},"Terima Barang")),l.a.createElement("h1",{className:"page-header"},"Terima Barang "),l.a.createElement(d.a,null,l.a.createElement(d.c,null,"Terima Barang"),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},!1===this.state.isLoading?l.a.createElement(b.a,{keyField:"kode_barang",data:this.state.DataTerimaBarang||[],columns:this.state.columns,search:!0,exportCSV:{fileName:"Export Terima Barang.csv"}},function(e){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("button",{onClick:function(){return a.ShowModalTerimaBarang()},className:"btn btn-teal"}," ",l.a.createElement("i",{className:"fa fa-plus"})," ")),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"text-right"},l.a.createElement(w,e.searchProps))),l.a.createElement("hr",null),l.a.createElement("div",{className:"col-12"},l.a.createElement(g.a,e.baseProps),l.a.createElement("br",null),l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return a.terimabangOnline()}},a.state.isLoadingBtn?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Terima Barang"):"Terima Barang"),"\xa0",l.a.createElement("button",{className:"btn btn-warning",onClick:function(){return a.resetTerimaBarang()}},a.state.resetTerimaBarang?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Reset"):"Reset"))))}):l.a.createElement(B.a,{width:"100%",height:200}),l.a.createElement(D,{no_kirim:this.props.Nokirim,isLoading:this.state.isLoading,isEdit:this.state.isEdit,title:(this.state.isEdit,"Terima Barang"),isOpen:this.props.hideModal,onSubmit:function(e){return a.handleSubmit(e)}})),l.a.createElement("br",null)))}}]),t}(l.a.Component);e.default=Object(k.b)(function(a){return{Nokirim:a.databarang.getNokirim,hideModal:a.datamaster.modalDialog}},null)(L)},734:function(a,e,t){"use strict";var n=t(16),r=t(26),i=t(0),o=t.n(i),s=t(4),c=t.n(s),l=t(32),m=t.n(l),d=t(18),u={tag:d.m,className:c.a.string,cssModule:c.a.object},g=function(a){var e=a.className,t=a.cssModule,i=a.tag,s=Object(r.a)(a,["className","cssModule","tag"]),c=Object(d.i)(m()(e,"modal-footer"),t);return o.a.createElement(i,Object(n.a)({},s,{className:c}))};g.propTypes=u,g.defaultProps={tag:"div"},e.a=g}}]);
//# sourceMappingURL=39.b1a30582.chunk.js.map