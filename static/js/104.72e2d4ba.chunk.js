(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1068:function(e,t,a){"use strict";a.r(t);var l=a(19),n=a(20),r=a(50),o=a(22),c=a(21),s=a(0),i=a.n(s),m=a(38),d=a(287),E=a(288),g=a(24),u=a(7),b=a(90),p=a(126),h=a(125),S=a.n(h),k=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(S.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Service Ambil",sheet:"Laporan Service Ambil",buttonText:"Export Exel"}),i.a.createElement("table",{id:"table-to-xls",style:{display:"none"}},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"5",style:{textAlign:"center"}}," ","LAPORAN SERVICE AMBIL"," ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"5"}," Periode ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"5"}," ",0===Object(u.l)("tgl_laporan").length?null:JSON.parse(Object(u.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(u.l)("tgl_laporan")).tgl_akhir," ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"5"}," TOKO : ",Object(u.j)().nama_toko," ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"5"}," ALAMAT : ",Object(u.j)().alamat_toko," ")),i.a.createElement("tr",null),i.a.createElement("tr",null,i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO SERVICE"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TGL TRANSAKSI"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA CUSTOME"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"ALAMAT"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"SALES"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"DESKRIPSI"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"BERAT"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"ONGKOS"))),i.a.createElement("tbody",null,this.props.data.map(function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",{key:t},i.a.createElement("td",null,e.no_faktur_service),i.a.createElement("td",null,e.tgl_system),i.a.createElement("td",null,e.nama_customer),i.a.createElement("td",null,e.alamat_customer),i.a.createElement("td",null,e.kode_sales),i.a.createElement("td",null,e.detail_barang.deskripsi),i.a.createElement("td",null,e.detail_barang.berat.toFixed(2)),i.a.createElement("td",null,e.detail_barang.ongkos.toLocaleString("kr-KO"))))})),i.a.createElement("tfoot",null,i.a.createElement("tr",null,i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"},colSpan:"8"},"Total Transaksi ",this.props.data.length)))))}}]),a}(s.Component),_=a(102),O=(a(207),function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new _.default("l","mm",[297,210])),l=[],n=30;a.setFontSize(15),a.text("LAPORAN SERVICE AMBIL",14,15),a.setFontSize(20),a.text(Object(u.j)().nama_toko,200,15),a.setFontSize(8);var r=Object(u.j)().alamat_toko.length;r>20&&a.text(Object(u.j)().alamat_toko.slice(0,48),200,20),r>50&&a.text(Object(u.j)().alamat_toko.slice(48,90),200,25),a.setFontSize(10),a.setProperties({title:"LAPORAN SERVICE AMBIL"}),a.text("PERIODE : ".concat(0===Object(u.l)("tgl_laporan").length?null:JSON.parse(Object(u.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(u.l)("tgl_laporan")).tgl_akhir),14,25),e=[[{content:"NO SERVICE"},{content:"TGL TRANSAKSI"},{content:"NAMA CUSTOMER"},{content:"SALES"},{content:"DESKRIPSI"},{content:"BERAT",styles:{halign:"right"}},{content:"QTY",styles:{halign:"right"}},{content:"ONGKOS",styles:{halign:"right"}}]];var o=0;t.forEach(function(e,t){o+=e.detail_barang.ongkos;var a=[e.no_faktur_service,e.tgl_system,e.nama_customer,e.alamat_customer,e.kode_sales,e.detail_barang.deskripsi,{content:e.detail_barang.berat.toFixed(3),styles:{halign:"right"}},{content:parseInt(e.detail_barang.ongkos).toLocaleString("kr-KO"),styles:{halign:"right"}}];l.push(a)});var c=[{content:"Total Transaksi: ".concat(t.length),colSpan:8,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:parseInt(o).toLocaleString("kr-KO"),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}}];l.push(c);var s=[{content:"Printed By ".concat(JSON.parse(Object(u.l)("userdata")).user_id," / ").concat(Object(u.i)()),colSpan:7,styles:{fontStyle:"italic",textColor:"#000"}}];l.push(s),a.autoTable({head:e,body:l,startY:n,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"},tableLineColor:[255,255,255],tableLineWidth:1}),n=a.autoTableEndPosY()+3,l=[];var i=a.internal.getNumberOfPages(),m=a.internal.pageSize.width,d=a.internal.pageSize.height;a.setFontSize(10);for(var E=1;E<i+1;E++){var g=m/2,b=d-10;a.setPage(E),a.text("".concat(E," of ").concat(i),g,b,{align:"center"})}a.save("LAPORAN SERVICE AMBIL.pdf")}),f=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={date:new Date,columns:[{dataField:"no_faktur_service",text:"No Service",footerAttrs:{colSpan:"8"},footer:function(e,t,a,l){return i.a.createElement("div",null,"Total Transaksi : ",n.props.LaporanServices.length," ")}},{dataField:"tgl_system",text:"Tgl Transaksi"},{dataField:"nama_customer",text:"Nama Customer"},{dataField:"alamat_customer",text:"Alamat"},{dataField:"kode_sales",text:"Sales"},{dataField:"detail_barang.deskripsi",text:"Deskripsi"},{dataField:"detail_barang.berat",text:"Berat",headerClasses:"text-right",formatter:function(e){return i.a.createElement("div",{className:"text-right"},e.toFixed(2))}},{dataField:"detail_barang.ongkos",text:"Ongkos",headerClasses:"text-right",formatter:function(e){return i.a.createElement("div",{className:"text-right"},e.toLocaleString("kr-KO"))}}]},n.setStartDate=n.setStartDate.bind(Object(r.a)(n)),n.setLastDate=n.setLastDate.bind(Object(r.a)(n)),n}return Object(n.a)(a,[{key:"exportPdf",value:function(){O(this.props.LaporanServices)}},{key:"setStartDate",value:function(e){this.setState({tgl_awal:new Date(e)})}},{key:"setLastDate",value:function(e){this.setState({tgl_akhir:new Date(e)})}},{key:"render",value:function(){var e=this;return i.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(d.a,{name:"tgl_awal",component:g.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(t){return e.setStartDate(t)},placeholder:"Masukan Tanggal Dari"})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(d.a,{name:"tgl_akhir",component:g.c,type:"text",selected:this.state.tgl_akhir,onChange:function(t){return e.setLastDate(t)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement("div",{className:"text-right"},i.a.createElement("label",null,"\xa0"),i.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement(b.a,{keyField:"no_hp",data:this.props.export?this.props.LaporanServices:[],columns:this.state.columns,empty:!0,textEmpty:"Data Laporan Service Ambil Kosong"})),i.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("button",{onClick:function(){return e.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),i.a.createElement("div",{className:"col-lg-6"},i.a.createElement(k,{data:this.props.LaporanServices}))))))}}]),a}(s.Component);f=Object(E.a)({form:"HeadLaporanServiceAmbil",enableReinitialize:!0,validate:p.a})(f);t.default=Object(m.b)(function(e){return{initialValues:{tgl_awal:Object(u.h)(),tgl_akhir:Object(u.h)()}}})(f)}}]);
//# sourceMappingURL=104.72e2d4ba.chunk.js.map