(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1103:function(e,a,t){"use strict";t.r(a);var n=t(19),l=t(20),r=t(50),o=t(22),s=t(21),i=t(0),c=t.n(i),u=t(38),p=t(287),m=t(288),g=t(24),d=t(7),b=t(673),f=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={date:new Date},l.setStartDate=l.setStartDate.bind(Object(r.a)(l)),l.setLastDate=l.setLastDate.bind(Object(r.a)(l)),l}return Object(l.a)(t,[{key:"setStartDate",value:function(e){this.setState({tgl_awal:new Date(e)})}},{key:"setLastDate",value:function(e){this.setState({tgl_akhir:new Date(e)})}},{key:"componentDidMount",value:function(){this.props.change("type","rekap")}},{key:"render",value:function(){var e=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(p.a,{name:"tgl_awal",component:g.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(a){return e.setStartDate(a)},placeholder:"Masukan Tanggal Dari",onFocus:function(){return setTimeout(function(){HideKeyboard.postMessage("")},100)}})),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(p.a,{name:"type",component:g.f,onChange:function(a){return e.props.onChange(a)},options:[{value:"detail",name:"Detail"},{value:"rekap",name:"Rekap"}],label:"Type",placeholder:"Pilih Type"})),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"text-right"},c.a.createElement("label",null,"\xa0"),c.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan")))))}}]),t}(i.Component);f=Object(m.a)({form:"HeadLaporanKeuanganKas",enableReinitialize:!0,validate:b.a})(f),a.default=Object(u.b)(function(e){return{datasales:e.datamaster.getDataSales,initialValues:{tgl_awal:Object(d.h)()}}})(f)},673:function(e,a,t){"use strict";a.a=function(e,a){var t={};return e.tanggal_awal||(t.tanggal_awal="Tanggal Tidak Boleh Kosong"),e.type||(t.type="Type Tidak Boleh Kosong"),e.type_laporan||(t.type_laporan="Type Laporan Tidak Boleh Kosong"),t}}}]);
//# sourceMappingURL=22.f5d969e0.chunk.js.map