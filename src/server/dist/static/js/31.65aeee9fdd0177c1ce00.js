webpackJsonp([31],{"4RQs":function(a,e,t){(a.exports=t("BkJT")(!1)).push([a.i,"\n.type-info-bottom {\n  margin-top: 10px;\n}\n.box {\n  margin-top: 20px;\n  text-align: right;\n}\n.headerClass {\n  background: #f7f7f7 !important;\n}\n.el-date-editor.aui-input {\n  width: 100% !important;\n}\n.el-card {\n  overflow: inherit;\n}\n",""])},BoEE:function(a,e,t){"use strict";var n=t("AA3o"),i=t.n(n);e.a=function a(){i()(this,a),this.data={BusiOper:"A",AppNum:"",TranCode:"",AuthType:"",AuthAde:"",AuthAdeName:"",AuthAdeTye:"",SortNum:""},this.BusiDataKey="authfieldadd",this.TransServiceCode="ib-dbcomm/dbComm"}},FTbf:function(a,e,t){"use strict";var n=t("rVsN"),i=t.n(n),o=t("2sCs"),r=t.n(o),s=t("NxjZ"),l=(t.n(s),t("IcnI"),t("syAl")),c=r.a.create({baseURL:l.a.get("communicationAddressAccredit"),timeout:l.a.get("communicationTimeout")});c.interceptors.request.use(function(a){return a.method="post",a.headers["Content-Type"]="application/json;charset=utf-8",a.data=a.data,a},function(a){i.a.reject(a)}),c.interceptors.response.use(function(a){var e=a.data;return e&&e.OutArgs.errorcode,a.data},function(a){Object(s.Message)({message:a.message,type:"error",duration:5e3})}),e.a=c},GOVA:function(a,e,t){var n=t("4RQs");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);t("8bSs")("7634a258",n,!0)},UMUp:function(a,e,t){(a.exports=t("BkJT")(!1)).push([a.i,"/* .dialog {\n  padding: 15px;\n  height: 600px;\n} */\n.content[data-v-0dad2bb9] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.require[data-v-0dad2bb9] {\n  color: red;\n}\n.dialog-text[data-v-0dad2bb9] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  color: red;\n  font-size: 18px;\n}\n.role[data-v-0dad2bb9] {\n  width: 95%;\n  border: 1px solid #eee;\n  border-radius: 4px;\n  height: 290px;\n}\n.role .roleHeader[data-v-0dad2bb9] {\n    color: #606266;\n    font-weight: 500;\n    font-size: 14px;\n    background: #f5f7fa;\n    height: 42px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 9px;\n    overflow-y: auto;\n}\n.el-card[data-v-0dad2bb9] {\n  overflow: inherit;\n}\n",""])},X8Ru:function(a,e,t){"use strict";var n=t("AA3o"),i=t.n(n);e.a=function a(){i()(this,a),this.data={},this.BusiDataKey="",this.TransServiceCode="ib-dbcomm/dbComm"}},aqS2:function(a,e,t){"use strict";var n=t("AA3o"),i=t.n(n);e.a=function a(){i()(this,a),this.data={BusiOper:"Q1",AppNum:"",TranCode:""},this.BusiDataKey="trannameqry",this.TransServiceCode="ib-dbcomm/dbComm"}},eyst:function(a,e,t){var n=t("UMUp");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);t("8bSs")("7bc1abe0",n,!0)},nbUS:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t("0oES"),i=t("syAl"),o=(t("FTbf"),t("pADA"),t("BoEE"),t("qfSh"),t("aqS2"),t("X8Ru")),r={name:"create-user",data:function(){return{Flag:"",tranCodeShow:!1,loading:!1,checkFildList:[{name:"身份证",value:"CtfTp"},{name:"汇划渠道",value:"Cnl"}],isEffectiveList:[{name:"是",value:"1"},{name:"否",value:"0"}],checkData:void 0,tranData:void 0,tableData:[],newFormData:{},currentPage:1,form:{},rules:{TranCode:[{required:!0,message:"请输入交易码",trigger:"blur"}],isEffective:[{required:!0,message:"请选择是否生效",trigger:"change"}]}}},props:{option:Object},components:{},computed:{isShow:{get:function(){return this.option.isShow},set:function(a){this.option.isShow=a}}},created:function(){this.pageSize=i.a.get("PageSize")},watch:{"newFormData.TranCode":function(a){}},methods:{addCheckFiled:function(){var a=this;this.$refs.newFormData.validate(function(e){if(!e)return a.$aui.message.show({type:"warning",message:"请输入合法的数据！"}),!1;a.newFormData.checkField;var t,n=(t=a.newFormData.checkField.split("-"))[0],i={CHKCOD:n,CHKMSG:t[1],STATUS:a.newFormData.isEffective};if("0"==a.tableData.length)a.tableData.push(i);else{for(var o="",r=0;r<a.tableData.length;r++){a.tableData[r].CHKCOD==n&&(o="1")}"1"!=o?a.tableData.push(i):a.$aui.message.show({type:"warning",message:"存在相同字段！"})}})},handleDelete:function(a,e){this.tableData.splice(a,1)},checkTran:function(){var a=this;this.loading=!0;var e=new o.a;e.data.OperType="Q",e.data.CurtPage=this.currentPage,e.data.PageSize=this.pageSize,e.data.StartRows=(this.currentPage-1)*this.pageSize,e.BusiDataKey="T011211_quy",e.data.TranCode=this.newFormData.TranCode,Object(n.a)(e).then(function(e){a.loading=!1,e.RspInfo&&("add"==a.option.flag&&"000000"==e.SYS_HEAD.ReturnCode&&(a.$aui.message.show({type:"warning",message:"该交易码已新增!"}),a.$set(a.newFormData,"MenuName",""),a.$set(a.newFormData,"checkField",""),a.$set(a.newFormData,"isEffective",""),a.tableData=[]),"mod"==a.option.flag&&(a.tableData=e.RspInfo.Result||[]))}).catch(function(e){a.loading=!1,console.log(e)})},MenuNameQry:function(){var a=this;this.loading=!0;var e=new o.a;e.data.OperType="Q",e.data.CurtPage=this.currentPage,e.data.PageSize=this.pageSize,e.data.StartRows=(this.currentPage-1)*this.pageSize,e.BusiDataKey="TranInfo_check",e.data.TRANCODE=this.newFormData.TranCode,Object(n.a)(e).then(function(e){a.loading=!1,e.RspInfo?(a.tranData=e.RspInfo.Result||[],a.newFormData.MenuName=a.tranData[0].MENUNAME,a.checkTran()):(a.$set(a.newFormData,"MenuName",""),a.$set(a.newFormData,"checkField",""),a.$set(a.newFormData,"isEffective",""),a.tableData=[],a.loading=!1,a.$aui.message.show({type:"warning",message:"没有满足条件得记录!"}))}).catch(function(e){a.loading=!1,a.$set(a.newFormData,"MenuName",""),a.$set(a.newFormData,"checkField",""),a.$set(a.newFormData,"isEffective",""),a.loading=!1,a.$aui.message.show({type:"warning",message:"请输入正确的交易码!"})})},openDialog:function(){this.$refs.form&&this.$refs.form.clearValidate(),"mod"==this.option.flag&&(this.tranCodeShow=!0,this.$set(this.newFormData,"TranCode",this.option.currentRow.TRADECODE),this.$set(this.newFormData,"MenuName",this.option.currentRow.TRANNAME),this.checkTran())},closeUser:function(){this.newFormData={},this.tableData=[],this.tranCodeShow=!1},cancelButton:function(){this.option.isShow=!1,this.$refs.newFormData.clearValidate()},submitButton:function(){var a=this;this.$refs.newFormData.validate(function(e){if(e)if("0"==a.tableData.length)a.$aui.message.show({type:"warning",message:"表格数据为空!"});else{var t=new o.a;t.data.OperType="D",t.data.Code=a.newFormData.TranCode,t.data.BankNo="001",t.BusiDataKey="T011211_del",Object(n.a)(t).then(function(e){a.loading=!1;var t=new o.a;t.data.OperType="A",t.BusiDataKey="T011211_add";for(var i=[],r=0;r<a.tableData.length;r++){var s={Code:a.newFormData.TranCode,BankNo:"001",Code1C:a.tableData[r].CHKCOD,Code1C_Suffix_:a.tableData[r].CHKMSG,Status1C:a.tableData[r].STATUS};i.push(s)}t.data._dataList_=i,Object(n.a)(t).then(function(e){a.$emit("refreshTable"),a.option.isShow=!1,a.$aui.message.show({type:"success",message:"新增成功!"})}).catch(function(e){a.$aui.message.show({type:"warning",message:e.SYS_HEAD.ReturnMessage}),a.loading=!1})}).catch(function(e){a.loading=!1,console.log(e)})}})}}},s={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("aui-dialog",{attrs:{title:"复核字段维护",visible:a.isShow,width:"890px","close-on-click-modal":!1,center:""},on:{hide:a.closeUser,"update:visible":function(e){a.isShow=e},show:a.openDialog}},[t("div",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}]},[t("div",{staticClass:"content"},[t("aui-card",[t("aui-form",{ref:"newFormData",attrs:{size:"mini",model:a.newFormData,rules:a.rules,inline:"","label-width":"140px","label-position":"right"}},[t("aui-row",{attrs:{gutter:10}},[t("aui-col",{attrs:{span:12}},[t("aui-form-item",{attrs:{prop:"TranCode",label:"交易码"}},[t("aui-input",{attrs:{placeholder:"请输入交易码",disabled:a.tranCodeShow},on:{blur:a.MenuNameQry},model:{value:a.newFormData.TranCode,callback:function(e){a.$set(a.newFormData,"TranCode",e)},expression:"newFormData.TranCode"}})],1)],1),a._v(" "),t("aui-col",{attrs:{span:12}},[t("aui-form-item",{attrs:{prop:"MenuName",label:"交易名称"}},[t("aui-input",{attrs:{disabled:!0},model:{value:a.newFormData.MenuName,callback:function(e){a.$set(a.newFormData,"MenuName",e)},expression:"newFormData.MenuName"}})],1)],1)],1),a._v(" "),t("aui-row",{attrs:{gutter:10}},[t("aui-col",{attrs:{span:12}},[t("aui-form-item",{attrs:{prop:"checkField",label:"复核字段"}},[t("aui-select",{attrs:{filterable:"",placeholder:"请选择复核字段"},model:{value:a.newFormData.checkField,callback:function(e){a.$set(a.newFormData,"checkField",e)},expression:"newFormData.checkField"}},a._l(a.checkFildList,function(a){return t("aui-option",{key:a.value,attrs:{label:a.value+"-"+a.name,value:a.value+"-"+a.name}})}))],1)],1),a._v(" "),t("aui-col",{attrs:{span:12}},[t("aui-form-item",{attrs:{prop:"isEffective",label:"是否生效"}},[t("aui-select",{attrs:{filterable:"",placeholder:"请选择是否生效"},model:{value:a.newFormData.isEffective,callback:function(e){a.$set(a.newFormData,"isEffective",e)},expression:"newFormData.isEffective"}},a._l(a.isEffectiveList,function(a){return t("aui-option",{key:a.value,attrs:{label:a.value+"-"+a.name,value:a.value}})}))],1)],1)],1)],1),a._v(" "),t("div",{staticStyle:{"text-align":"left"}},[t("aui-row",{attrs:{gutter:10}},[a.btnPermission("Button_User_Add")?t("aui-col",{attrs:{lg:2,md:3}},[t("aui-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:a.addCheckFiled}},[a._v("新增")])],1):a._e()],1)],1)],1),a._v(" "),t("aui-card",{attrs:{header:"字段信息"}},[t("aui-table",{ref:"tableData",staticStyle:{width:"100%"},attrs:{data:a.tableData,"tooltip-effect":"dark"}},[t("aui-table-column",{attrs:{property:"CHKCOD",label:"复核字段"}}),a._v(" "),t("aui-table-column",{attrs:{property:"CHKMSG",label:"字段名称"}}),a._v(" "),t("aui-table-column",{attrs:{property:"STATUS",label:"是否生效"}}),a._v(" "),t("aui-table-column",{attrs:{label:"操作"},scopedSlots:a._u([{key:"default",fn:function(e){return[t("aui-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){a.handleDelete(e.$index,e.row)}}},[a._v("删除")])]}}])})],1)],1),a._v(" "),t("div",{staticStyle:{"margin-top":"20px"}},[t("aui-row",{attrs:{gutter:10}},[t("aui-col",{attrs:{lg:2,md:3}},[t("aui-button",{attrs:{type:"primary",size:"mini"},on:{click:a.submitButton}},[a._v("确认")])],1),a._v(" "),t("aui-col",{attrs:{lg:2,md:3}},[t("aui-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){a.isShow=!1}}},[a._v("取消")])],1)],1)],1)],1)])])],1)},staticRenderFns:[]};var l=t("/Xao")(r,s,!1,function(a){t("eyst")},"data-v-0dad2bb9",null).exports,c={name:"user-info-manage",components:{},data:function(){return{tranInfo:void 0,pageSize:void 0,form:{},currentRow:[],currentPage:1,totalRcrdNum:0,tableData:[],dialogList:{checkFiledsDialog:l},dialogOptions:{isShow:!1,flag:"",currentRow:[]},loading:!1,total:0,rules:{TranCode:[{required:!0,message:"请输入交易码",trigger:"blur"}]}}},computed:{tableDataPage:function(){return this.tableData}},created:function(){this.pageSize=i.a.get("PageSize")},methods:{changePage:function(a){this.currentPage=a,this.quyTranInfo()},refreshTable:function(){this.quyTranInfo()},updateCheckFileds:function(){this.dialogOptions.isShow=!0,this.dialogOptions.flag="mod",this.dialogOptions.currentRow=this.currentRow[0]},delData:function(){var a=this;this.$aui.confirm.show("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.dataDel()}).catch(function(){a.$aui.message.show({type:"info",message:"已取消删除"})})},resetForm:function(a){this.$refs[""+a].resetFields(),this.tableData=[]},addCheckFiled:function(){this.dialogOptions.isShow=!0,this.dialogOptions.flag="add"},dataDel:function(){var a=this;this.loading=!0;var e=new o.a;e.data.OperType="D",e.data.Code=this.currentRow[0].TRADECODE,e.data.BankNo="001",e.BusiDataKey="T011211_del",Object(n.a)(e).then(function(e){a.loading=!1,a.$aui.message.show({type:"success",message:"删除成功!"}),a.tableData=[]}).catch(function(e){a.loading=!1,a.$aui.message.show({type:"success",message:"删除失败!"})})},quyTranCheckInfo:function(){var a=this;this.$refs.form.validate(function(e){if(e){a.loading=!0;var t=new o.a;t.data.OperType="Q",t.data.CurtPage=a.currentPage,t.data.PageSize=a.pageSize,t.data.StartRows=(a.currentPage-1)*a.pageSize,t.BusiDataKey="T011211_quy",t.data.TranCode=a.form.TranCode,Object(n.a)(t).then(function(e){a.loading=!1;var t,n={TRADECODE:(t=e.RspInfo.Result||[])[0].TRADECODE,TRANNAME:t[0].TRANNAME};a.tableData.push(n),a.total=e.RspInfo.totalNum||0}).catch(function(e){a.loading=!1,a.$aui.message.show({type:"warning",message:"查询无记录!"}),console.log(e)})}})},MenuNameQry:function(){var a=this;this.loading=!0;var e=new o.a;e.data.OperType="Q",e.data.CurtPage=this.currentPage,e.data.PageSize=this.pageSize,e.data.StartRows=(this.currentPage-1)*this.pageSize,e.BusiDataKey="TranInfo_check",e.data.TRANCODE=this.form.TranCode,Object(n.a)(e).then(function(e){a.loading=!1,a.tranInfo=e.RspInfo.Result||[],a.form.TranName=a.tranInfo[0].MENUNAME}).catch(function(e){a.loading=!1,a.$aui.message.show({type:"warning",message:"交易信息不存在!"}),console.log(e)})},handleCurrentChange:function(a){this.currentRow=a}}},u={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],attrs:{"element-loading-text":"加载中。。。"}},[t("aui-card",{staticStyle:{overflow:"visible"}},[t("aui-form",{ref:"form",attrs:{model:a.form,rules:a.rules,size:"mini","label-position":"top"}},[t("aui-row",{attrs:{gutter:10}},[t("aui-col",{attrs:{lg:4,md:6}},[t("aui-form-item",{attrs:{label:"交易码",prop:"TranCode"}},[t("aui-input",{attrs:{placeholder:"请输入交易码"},on:{blur:a.MenuNameQry},model:{value:a.form.TranCode,callback:function(e){a.$set(a.form,"TranCode",e)},expression:"form.TranCode"}})],1)],1),a._v(" "),t("aui-col",{attrs:{lg:4,md:6}},[t("aui-form-item",{attrs:{label:"交易名",prop:"TranName"}},[t("aui-input",{attrs:{disabled:!0},model:{value:a.form.TranName,callback:function(e){a.$set(a.form,"TranName",e)},expression:"form.TranName"}})],1)],1),a._v(" "),t("aui-col",{staticClass:"searchBtnMarginTop",attrs:{lg:2,md:3}},[t("aui-button",{attrs:{type:"primary",icon:"el-icon-search",loading:a.loading,size:"mini"},on:{click:a.quyTranCheckInfo}},[a._v("查询")])],1),a._v(" "),t("aui-col",{staticClass:"searchBtnMarginTop",attrs:{lg:2,md:3}},[t("aui-button",{attrs:{type:"warning",size:"mini",icon:"el-icon-refresh"},on:{click:function(e){a.resetForm("form")}}},[a._v("重置")])],1)],1)],1)],1),a._v(" "),t("aui-card",{staticStyle:{"margin-top":"10px"}},[t("aui-row",{attrs:{gutter:10}},[a.btnPermission("Button_User_Add")?t("aui-col",{attrs:{lg:2,md:3}},[t("aui-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:a.addCheckFiled}},[a._v("新增")])],1):a._e(),a._v(" "),a.btnPermission("Button_User_Edit")?t("aui-col",{attrs:{lg:2,md:3}},[t("aui-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit",disabled:1!=a.currentRow.length},on:{click:a.updateCheckFileds}},[a._v("修改")])],1):a._e(),a._v(" "),a.btnPermission("Button_User_Delete")?t("aui-col",{attrs:{lg:2,md:3}},[t("aui-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",disabled:1!=a.currentRow.length},on:{click:a.delData}},[a._v("删除")])],1):a._e()],1),a._v(" "),t("aui-table",{ref:"table",staticClass:"tableMarginTop",staticStyle:{"min-height":"390px"},attrs:{data:a.tableData,border:"","highlight-current-row":"","header-row-class-name":"tableHeaderClass"},on:{"selection-change":a.handleCurrentChange}},[t("aui-table-column",{attrs:{type:"selection",width:"40px"}}),a._v(" "),t("aui-table-column",{attrs:{prop:"TRADECODE",label:"交易码"}}),a._v(" "),t("aui-table-column",{attrs:{prop:"TRANNAME",label:"交易名称"}})],1),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:this.tableData,expression:"this.tableData"}],staticStyle:{"text-align":"right","margin-top":"20px"}},[t("aui-pagination",{attrs:{"current-page":a.currentPage,background:"","page-size":a.pageSize,layout:"total, prev, pager, next, jumper",total:a.total},on:{"current-change":a.changePage}})],1)],1),a._v(" "),t("keep-alive",[t(a.dialogList.checkFiledsDialog,{tag:"component",attrs:{option:a.dialogOptions},on:{refreshTable:a.quyTranCheckInfo}})],1)],1)},staticRenderFns:[]};var d=t("/Xao")(c,u,!1,function(a){t("GOVA")},null,null);e.default=d.exports}});