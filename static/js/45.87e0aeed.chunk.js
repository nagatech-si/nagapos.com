(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1105:function(e,a,t){"use strict";t.r(a);var n=t(19),o=t(20),r=t(22),c=t(21),l=t(0),d=t.n(l),s=t(38),i=t(287),u=t(288),p=t(11),m=t(24),g=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).state={date:new Date,kondisi_barang:"kosong"},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(p.sb)()),this.props.dispatch(Object(p.lb)()),setTimeout(function(){document.getElementById("kode_barcode").focus()},100)}},{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-lg-3"},d.a.createElement(i.a,{id:"kode_barcode",onChange:function(a){return e.props.getKodeBarcode(a.target.value)},name:"kode_barcode",component:m.e,type:"text",label:"Kode Barcode",placeholder:"Masukan Kode Barcode"})),d.a.createElement("div",{className:"col-lg-3"},d.a.createElement(i.a,{onChange:function(a){return e.props.getNamaBarang(a.target.value)},name:"nama_barang",component:m.e,type:"text",label:"Nama Barang",placeholder:"Masukan Nama Barang"})),d.a.createElement("div",{className:"col-lg-3"},d.a.createElement(i.a,{onChange:function(a){return e.props.getByKodeGroup(a.target.value)},name:"kode_group",component:m.e,type:"text",label:"Kode Group",placeholder:"Masukan Kode Group"})),d.a.createElement("div",{className:"col-lg-3"},d.a.createElement(i.a,{label:"Kode Baki",name:"kode_baki",onChange:function(a){return e.props.getBarangKodeBaki(a.target.value)},placeholder:"Silahkan Masukan Kode Baki",component:m.e})))}}]),t}(l.Component);g=Object(u.a)({form:"FIlterPencarianBarang",enableReinitialize:!0})(g),a.default=Object(s.b)(function(e){return{databaki:e.datamaster.getDataBaki,datakondisi:e.datamaster.getDataKondisiBarang,setHancurBarang:e.databarang.setHancurBarang,focus:e.datamaster.setFocus}},null)(g)}}]);
//# sourceMappingURL=45.87e0aeed.chunk.js.map