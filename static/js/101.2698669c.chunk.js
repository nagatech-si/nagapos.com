(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1134:function(t,e,a){"use strict";a.r(e);var n=a(19),r=a(20),l=a(50),o=a(22),i=a(21),c=a(2),s=a(28),g=a(0),u=a.n(g),d=a(38),m=a(287),E=a(288),h=a(24),p=a(7),b=a(90),f=a(126),y=a(58),O=a.n(y),S=a(102),k=(a(207),function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new S.default("l","mm",[297,210])),n=[],r=30;a.setFontSize(15),a.text("LAPORAN PESANAN",14,15),a.setFontSize(20),a.text(Object(p.j)().nama_toko,200,15),a.setFontSize(8);var l=Object(p.j)().alamat_toko.length;l>20&&a.text(Object(p.j)().alamat_toko.slice(0,48),200,20),l>50&&a.text(Object(p.j)().alamat_toko.slice(48,90),200,25),a.setFontSize(10),a.setProperties({title:"LAPORAN PESANAN"}),a.text("PERIODE : ".concat(0===Object(p.l)("tgl_laporan").length?null:JSON.parse(Object(p.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(p.l)("tgl_laporan")).tgl_akhir),14,25),t=[[{content:"NO PESANAN"},{content:"SALES"},{content:"TGL PESAN"},{content:"TOTAL BERAT",styles:{halign:"right"}},{content:"TOTAL QTY",styles:{halign:"right"}},{content:"ONGKOS",styles:{halign:"right"}},{content:"TOTAL RP",styles:{halign:"right"}},{content:"BAYAR RP",styles:{halign:"right"}},{content:"SISA RP",styles:{halign:"right"}}]];var o=0,i=0,c=0,s=0,g=0,u=0;e.forEach(function(t,e){o+=t.sisa_bayar,i+=t.jumlah_bayar,c+=t.total_harga,s+=t.ongkos,g+=t.total_qty,u+=t.total_berat;var a=[t.no_pesanan,t.kode_sales,t.tanggal,{content:t.total_berat.toFixed(2),styles:{halign:"right"}},{content:parseInt(t.total_qty),styles:{halign:"right"}},{content:parseInt(t.ongkos).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.total_harga).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.jumlah_bayar).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.sisa_bayar).toLocaleString("kr-KO"),styles:{halign:"right"}}];n.push(a)});var d=[{content:"Grand Total",colSpan:3,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:u.toFixed(2),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:parseInt(g).toLocaleString("kr-KO"),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:parseInt(s).toLocaleString("kr-KO"),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:parseInt(c).toLocaleString("kr-KO"),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:parseInt(i).toLocaleString("kr-KO"),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:parseInt(o).toLocaleString("kr-KO"),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}}];n.push(d);var m=[{content:"Printed By ".concat(JSON.parse(Object(p.l)("userdata")).user_id," / ").concat(Object(p.i)()),colSpan:7,styles:{fontStyle:"italic",textColor:"#000"}}];n.push(m),a.autoTable({head:t,body:n,startY:r,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"},tableLineColor:[255,255,255],tableLineWidth:1}),r=a.autoTableEndPosY()+3,n=[];var E=a.internal.getNumberOfPages(),h=a.internal.pageSize.width,b=a.internal.pageSize.height;a.setFontSize(10);for(var f=1;f<E+1;f++){var y=h/2,O=b-10;a.setPage(f),a.text("".concat(f," of ").concat(E),y,O,{align:"center"})}var k=a.output("datauristring");PrintPenjualan.postMessage(k)}),x=a(125),L=a.n(x),_=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={},r}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(L.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Pesanan",sheet:"Laporan Pesanan",buttonText:"Export Exel"}),u.a.createElement("table",{id:"table-to-xls",style:{display:"none"}},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",{colSpan:"9",style:{textAlign:"center"}}," ","LAPORAN Pesanan"," ")),u.a.createElement("tr",null,u.a.createElement("th",{colSpan:"9"}," Periode ")),u.a.createElement("tr",null,u.a.createElement("th",{colSpan:"9"}," ",0===Object(p.l)("tgl_laporan").length?null:JSON.parse(Object(p.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(p.l)("tgl_laporan")).tgl_akhir," ")),u.a.createElement("tr",null,u.a.createElement("th",{colSpan:"9"}," TOKO : ",Object(p.j)().nama_toko," ")),u.a.createElement("tr",null,u.a.createElement("th",{colSpan:"9"}," ALAMAT : ",Object(p.j)().alamat_toko," ")),u.a.createElement("tr",null),u.a.createElement("tr",null,u.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO PESANAN"),u.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"SALES"),u.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TGL PESAN"),u.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TOTAL BERAT"),u.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"TOTAL QTY"),u.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"ONGKOS"),u.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"TOTAL RP"),u.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"BAYAR RP"),u.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"SISA RP"))),u.a.createElement("tbody",null,this.props.data.map(function(t,e){return u.a.createElement("tr",{key:e},u.a.createElement("td",null,t.no_pesanan),u.a.createElement("td",null,t.kode_sales),u.a.createElement("td",null,t.tanggal),u.a.createElement("td",{style:{textAlign:"right"}},t.total_berat.toFixed(2)),u.a.createElement("td",{style:{textAlign:"right"}},t.total_qty.toLocaleString("kr-KO")),u.a.createElement("td",{style:{textAlign:"right"}},t.ongkos.toLocaleString("kr-KO")),u.a.createElement("td",{style:{textAlign:"right"}},t.total_harga.toLocaleString("kr-KO")),u.a.createElement("td",{style:{textAlign:"right"}},t.jumlah_bayar.toLocaleString("kr-KO")),u.a.createElement("td",{style:{textAlign:"right"}},t.sisa_bayar.toLocaleString("kr-KO")))})),u.a.createElement("tfoot",null,u.a.createElement("tr",null,u.a.createElement("td",{colSpan:"3",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}},"Grand Total Barang :"),u.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.total_berat}).reduce(function(t,e){return t+e},0).toFixed(2)," "),u.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.total_qty}).reduce(function(t,e){return t+e},0).toLocaleString("ko-KO")," "),u.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.ongkos}).reduce(function(t,e){return t+e},0).toLocaleString("ko-KO")," "),u.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.total_harga}).reduce(function(t,e){return t+e},0).toLocaleString("ko-KO")," "),u.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.jumlah_bayar}).reduce(function(t,e){return t+e},0).toLocaleString("ko-KO")," "),u.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.sisa_bayar}).reduce(function(t,e){return t+e},0).toLocaleString("ko-KO")," ")))))}}]),a}(g.Component),v=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={date:new Date,columns:[{dataField:"no_pesanan",text:"No Pesanan",footer:"",footerAttrs:{colSpan:"3"}},{dataField:"kode_sales",text:"Sales"},{dataField:"tanggal",text:"Tgl Pesan"},{dataField:"total_berat",text:"Total Berat",headerClasses:"text-right",footer:function(t){return u.a.createElement("div",{className:"text-right"}," ",t.reduce(function(t,e){return t+e},0).toFixed(2)," ")},formatter:function(t){return u.a.createElement("div",{className:"text-right"}," ",t.toFixed(2))}},{dataField:"total_qty",text:"Total Qty",headerClasses:"text-right",formatter:function(t){return u.a.createElement("div",{className:"text-right"}," ",t)},footer:function(t){return u.a.createElement("div",{className:"text-right"}," ",t.reduce(function(t,e){return t+e},0)," ")}},{dataField:"ongkos",text:"Ongkos",headerClasses:"text-right",formatter:function(t){return u.a.createElement("div",{className:"text-right"}," ",t.toLocaleString("kr-ko"))},footer:function(t){return u.a.createElement("div",{className:"text-right"}," ",t.reduce(function(t,e){return t+e},0).toLocaleString("kr-KO")," ")}},{dataField:"total_harga",text:"Total Rp",headerClasses:"text-right",formatter:function(t){return u.a.createElement("div",{className:"text-right"}," ",t.toLocaleString("kr-ko"))},footer:function(t){return u.a.createElement("div",{className:"text-right"}," ",t.reduce(function(t,e){return t+e},0).toLocaleString("kr-KO")," ")}},{dataField:"jumlah_bayar",text:"Bayar Rp",headerClasses:"text-right",formatter:function(t){return u.a.createElement("div",{className:"text-right"}," ",t.toLocaleString("kr-KO"))},footer:function(t){return u.a.createElement("div",{className:"text-right"}," ",t.reduce(function(t,e){return t+e},0).toLocaleString("kr-KO")," ")}},{dataField:"sisa_bayar",text:"Sisa Rp",headerClasses:"text-right",formatter:function(t){return u.a.createElement("div",{className:"text-right"}," ",t.toLocaleString("kr-KO"))},footer:function(t){return u.a.createElement("div",{className:"text-right"}," ",t.reduce(function(t,e){return t+e},0).toLocaleString("kr-KO")," ")}}]},r.setStartDate=r.setStartDate.bind(Object(l.a)(r)),r.setLastDate=r.setLastDate.bind(Object(l.a)(r)),r}return Object(r.a)(a,[{key:"exportPdf",value:function(){k(this.props.LaporanPesanan)}},{key:"setStartDate",value:function(t){this.setState({tgl_awal:new Date(t)})}},{key:"setLastDate",value:function(t){this.setState({tgl_akhir:new Date(t)})}},{key:"render",value:function(){var t=this;return u.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-4"},u.a.createElement(m.a,{name:"tgl_awal",component:h.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(e){return t.setStartDate(e)},placeholder:"Masukan Tanggal Dari",onFocus:function(){return setTimeout(function(){HideKeyboard.postMessage("")},100)}})),u.a.createElement("div",{className:"col-lg-4"},u.a.createElement(m.a,{name:"tgl_akhir",component:h.c,type:"text",selected:this.state.tgl_akhir,onChange:function(e){return t.setLastDate(e)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir",onFocus:function(){return setTimeout(function(){HideKeyboard.postMessage("")},100)}})),u.a.createElement("div",{className:"col-lg-4"},u.a.createElement("div",{className:"text-right"},u.a.createElement("label",null,"\xa0"),u.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?u.a.createElement(u.a.Fragment,null,u.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),u.a.createElement("div",{className:"col-lg-12"},u.a.createElement(b.a,{keyField:"no_pesanan",data:this.props.export?this.props.LaporanPesanan:[],columns:this.state.columns,empty:!0,textEmpty:"Data Laporan Titip Uang Kosong"})),u.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-6"},u.a.createElement("button",{type:"button",onClick:function(){return t.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),u.a.createElement("div",{className:"col-lg-6"},u.a.createElement(_,{data:this.props.LaporanPesanan}))))),this.props.isLoading?u.a.createElement(O.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(g.Component);v=Object(E.a)({form:"HeadLaporanPesanan",enableReinitialize:!0,validate:f.a})(v);var A=Object(d.b)(function(t){return{initialValues:{tgl_awal:Object(p.h)(),tgl_akhir:Object(p.h)()}}})(v),j=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={isLoading:!1,LaporanPesanan:[],export:!1},r.handleSubmit=r.handleSubmit.bind(Object(l.a)(r)),r}return Object(r.a)(a,[{key:"handleSubmit",value:function(t){var e=this,a={tgl_awal:Object(c.y)(Object(c.K)(new Date(t.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(c.y)(Object(c.K)(new Date(t.tgl_akhir)).format("YYYY-MM-DD"))};this.setState({isLoading:!0}),Object(c.A)("pesanan/reports?tgl_from="+a.tgl_awal+"&tgl_to="+a.tgl_akhir).then(function(t){if(0===t.data.length)return Object(c.t)("info","Laporan Pesanan Kosong"),e.setState({export:!1,isLoading:!1}),!1;Object(c.t)("success","Laporan Pesanan Tersedia"),Object(c.J)("tgl_laporan",JSON.stringify(a)),e.setState({LaporanPesanan:t.data,isLoading:!1,export:!0})}).catch(function(t){Object(c.t)("info","Data Yang Di Cari Tidak Ada !!!"),e.setState({export:!1,isLoading:!1})})}},{key:"componentDidMount",value:function(){this.context.handleSetPageSidebar(!1),this.context.handleSetPageHeader(!1)}},{key:"render",value:function(){var t=this;return c.n.createElement("div",null,c.n.createElement(c.g,{to:"/SubMenuLaporan"},c.n.createElement("button",{type:"button",className:"btn btn-secondary","data-tut":"reactour_4"},c.n.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Home")),c.n.createElement("br",null),c.n.createElement("br",null),c.n.createElement(c.k,null,c.n.createElement(c.m,null,"Laporan Pesanan"),c.n.createElement("br",null),c.n.createElement(c.l,null,c.n.createElement(A,{export:this.state.export,isLoading:this.state.isLoading,LaporanPesanan:this.state.LaporanPesanan,onSubmit:function(e){return t.handleSubmit(e)}})),c.n.createElement("br",null)))}}]),a}(c.n.Component);j.contextType=s.a,j=Object(c.O)({form:"LaporanPesanan",enableReinitialize:!0})(j);e.default=Object(c.u)(null)(j)}}]);
//# sourceMappingURL=101.2698669c.chunk.js.map