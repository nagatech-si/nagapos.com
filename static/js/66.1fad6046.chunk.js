(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1154:function(e,a,t){"use strict";t.r(a);var r=t(19),n=t(20),i=t(50),o=t(22),s=t(21),c=t(0),u=t.n(c),l=t(42),d=t(75),m=t(84),p=t.n(m),h=t(85),b=t.n(h),g=t(104),k=t.n(g),f=t(11),E=t(38),N=t(43),v=t(287),j=t(288),O=t(24),R=function(e,a){var t={};return e.kode_kategori||(t.kode_kategori="Kode Kategori Tidak Boleh Kosong"),e.kadar||(t.kadar="Kadar Tidak Boleh Kosong"),e.rugi||(t.rugi="Rugi Tidak Boleh Kosong"),e.rusak||(t.rusak="Rusak Tidak Boleh Kosong"),t},S=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=a.call.apply(a,[this].concat(i))).state={aktif:!1},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(f.v)()),setTimeout(function(){e.props.isEdit?document.getElementById("kadar").focus():document.getElementById("kode_group").focus()},100)}},{key:"render",value:function(){var e=this;return u.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}},u.a.createElement("div",{className:"form-group"},u.a.createElement(v.a,{id:"kode_group",label:"Kode Kategori",name:"kode_group",options:this.props.datagroup.filter(function(e){return void 0!==e.kode_group}).map(function(e){return{value:e.kode_group,name:e.kode_group+" - "+e.nama_group}}),value:this.props.kode_group,disabled:this.props.isEdit,placeholder:"Silahkan Pilih Kode Kategori",component:O.f})),u.a.createElement(v.a,{id:"kadar",name:"kadar",component:O.e,type:"number",label:"Kadar",placeholder:"Masukan Kadar"}),u.a.createElement(v.a,{name:"rugi",component:O.e,type:"number",label:"Rugi",placeholder:"Masukan Rugi"}),u.a.createElement(v.a,{name:"rusak",component:O.e,type:"number",label:"Rusak",onBlur:function(){return e.setState({aktif:!0})},placeholder:"Masukan Rusak"}),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12 text-right"},u.a.createElement("button",{className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.isLoading,type:"submit"},this.props.isLoading?u.a.createElement(u.a.Fragment,null,u.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"),"\xa0",u.a.createElement("button",{className:"btn btn-white",onClick:function(){return e.props.dispatch(Object(f.Cb)())},type:"button"},"Batal"),"\xa0")))}}]),t}(c.Component);S=Object(j.a)({form:"ModalParameterRugiNota",enableReinitialize:!0,validate:R})(S);var P=Object(E.b)(function(e){if(null!==e.datamaster.ShowModalParameterRugiNota)return{datagroup:e.datamaster.GetDataGroup,initialValues:{kode_group:e.datamaster.ShowModalParameterRugiNota.kode_group,kadar:e.datamaster.ShowModalParameterRugiNota.kadar,rugi:e.datamaster.ShowModalParameterRugiNota.rugi,rusak:e.datamaster.ShowModalParameterRugiNota.rusak}}},null)(S),y=t(52),M=t(13),_=t(7),w=t(208),D=h.Search.SearchBar,x=h.CSVExport.ExportCSVButton,K=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={isEdit:!1,isLoading:!1,modalDialog:!1,columns:[{dataField:"kode_group",text:"Kode Kategori",sort:!0},{dataField:"kadar",text:"kadar"},{dataField:"rugi",text:"Rugi"},{dataField:"rusak",text:"Rusak"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(e,a){var t={kode_group:a.kode_group,kadar:a.kadar,rugi:a.rugi,rusak:a.rusak};return u.a.createElement("div",{className:"row text-center"},u.a.createElement("div",{className:"col-12"},u.a.createElement("button",{onClick:function(){return n.formEditParameterRugiNota(t)},className:"btn btn-primary mr-3"},u.a.createElement("i",{className:"fa fa-edit"}))))}}]},n.handleSubmit=n.handleSubmit.bind(Object(i.a)(n)),n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(f.Ab)())}},{key:"handleSubmit",value:function(e){var a=this;this.setState({isLoading:!0});var t={kode_group:e.kode_group,kadar:e.kadar,rugi:e.rugi,rusak:e.rusak},r={kadar:e.kadar,rugi:e.rugi,rusak:e.rusak};this.state.isEdit?Object(M.m)("ruginota/edit/by-kode-group/"+e.kode_group,r).then(function(){a.props.dispatch(Object(f.Cb)())}).then(function(){Object(N.e)("success","Data Berhasil Diedit")}).then(function(){a.props.dispatch(Object(f.Ab)())}).then(function(){a.setState({isLoading:!1})}).then(function(){a.props.dispatch(Object(y.e)("ModalParameterRugiNota"))}).catch(function(e){Object(N.e)("info"," Data Gagal Diedit")}):Object(M.h)("ruginota/add",t).then(function(){a.props.dispatch(Object(f.Cb)())}).then(function(){Object(N.e)("success","Data Berhasil Simpan")}).then(function(){a.props.dispatch(Object(f.Ab)())}).then(function(){a.setState({isLoading:!1})}).then(function(){a.props.dispatch(Object(y.e)("ModalParameterRugiNota"))}).catch(function(r){Object(_.a)(r,"jenis/reactive/by-kode-jenis/",e.kode_group,t,a.props.dispatch,Object(f.Ab)(),Object(f.Cb)(),"ModalParameterRugiNota").then(function(){a.setState({isLoading:!1})})})}},{key:"formEditParameterRugiNota",value:function(e){this.props.dispatch(Object(f.Db)()),this.props.dispatch(Object(f.gb)(e)),this.setState({isEdit:!0})}},{key:"ShowModalParameterRugiNota",value:function(){this.props.dispatch(Object(f.Db)()),this.props.dispatch(Object(f.gb)(!1)),this.setState({isEdit:!1})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement("ol",{className:"breadcrumb float-xl-right"},u.a.createElement("li",{className:"breadcrumb-item"},u.a.createElement(l.b,{to:"#"},"Data Master")),u.a.createElement("li",{className:"breadcrumb-item active"},"Master Parameter Rugi Nota")),u.a.createElement("h1",{className:"page-header"},"Master Parameter Rugi Nota "),u.a.createElement(d.a,null,u.a.createElement(d.c,null,"Master Parameter Rugi Nota"),u.a.createElement("br",null),u.a.createElement("div",{className:"container"},u.a.createElement(b.a,{keyField:"kode_group",data:this.props.dataRugiNota||[],columns:this.state.columns,search:!0,exportCSV:{fileName:"Export Master Parameter Rugi Nota.csv"}},function(a){return u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-6"},u.a.createElement("button",{onClick:function(){return e.ShowModalParameterRugiNota()},className:"btn btn-primary"}," ",u.a.createElement("i",{className:"fa fa-plus"})," ")),u.a.createElement("div",{className:"col-6"},u.a.createElement("div",{className:"text-right"},u.a.createElement(D,a.searchProps))),u.a.createElement("hr",null),u.a.createElement("div",{className:"col-12"},u.a.createElement(p.a,Object.assign({pagination:k()()},a.baseProps)),u.a.createElement("br",null),u.a.createElement(x,a.csvProps,"Export CSV!!")))})),u.a.createElement("br",null),u.a.createElement(w.a,{title:this.state.isEdit?"Edit Data Parameter Rugi Nota":"Tambah Data Parameter Rugi Nota",size:"P",content:u.a.createElement(P,{isEdit:this.state.isEdit,isLoading:this.state.isLoading,onSubmit:function(a){return e.handleSubmit(a)}})})))}}]),t}(u.a.Component);a.default=Object(E.b)(function(e){return{dataRugiNota:e.datamaster.getParameterRugiNota,hideModal:e.datamaster.modalDialog}},null)(K)}}]);
//# sourceMappingURL=66.1fad6046.chunk.js.map