webpackJsonp([151],{Rj3W:function(e,a,t){(e.exports=t("BkJT")(!1)).push([e.i,"",""])},Wwzw:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("0oES"),o=t("syAl"),l=t("AA3o"),s=t.n(l),i=function e(){s()(this,e),this.data={CHANELCODE:"",OPRDATE:"",OPRBRANCH:"",OPRTELLER:"",STATUS:"",SEALMODELID:"",OperType:"Q",start:"0",length:"10"},this.CommCode="PLESeal",this.SceneCode="QrySeqOfUpdESealMod",this.TransServiceCode="mg-afaservices-paperless/sealFlownumQuery"},u=t("pADA"),n={name:"seal-flownum-query",data:function(){return{loading:!1,tableData:[],tableTotal:0,currentPage:1,totalRcrdNum:0,pageSize:0,QueryForm:{SysCodeNm:"",operDate:"",oprBranch:"",oprTeller:"",sealState:"",sealNum:""},SysCode:[],sealState:[],a:[],rules:{SysCodeNm:[{required:!0,message:"请选择系统名称",trigger:"blur"}]}}},created:function(){this.pageSize=o.a.get("PageSize"),this.QueryForm.oprTeller=this.$store.getters.UserNum,this.QueryForm.oprBranch=this.$store.getters.BranchNum,this.SysCode=u.a.objToArray(o.a.get("SysCode")),this.sealState=u.a.objToArray(o.a.get("elec_sealstatus")),this.CHANELCODE=o.a.get("SysCode"),this.OPERSTEP=o.a.get("operStep"),this.STATUS=o.a.get("elec_sealstatus"),""===this.QueryForm.SysCodeNm&&(this.QueryForm.SysCodeNm=this.SysCode[0].value)},mounted:function(){this.QueryForm.operDate=u.a.getNowTime(6)},methods:{tableformat:function(e,a,t){return"CHANELCODE"==a.property?t+"-"+this.CHANELCODE[t]:"OPERSTEP"==a.property?t+"-"+this.OPERSTEP[t]:"STATUS"==a.property?t+"-"+this.STATUS[t]:void 0},resetForm:function(e){this.$refs[""+e].resetFields(),this.queryModel()},changePage:function(e){this.currentPage=e,this.queryModel()},queryModel:function(){var e=this;this.$refs.QueryForm.validate(function(a){if(a){e.loading=!0;var t=new i;t.data.CHANELCODE=e.QueryForm.SysCodeNm,t.data.OPRDATE=e.QueryForm.operDate,t.data.OPRBRANCH=e.QueryForm.oprBranch,t.data.OPRTELLER=e.QueryForm.oprTeller,t.data.STATUS=e.QueryForm.sealState,t.data.SEALMODELID=e.QueryForm.sealNum,t.data.length=e.pageSize,t.data.start=(e.currentPage-1)*e.pageSize,Object(r.a)(t).then(function(a){e.loading=!1,a.RspInfo?(e.tableData=a.RspInfo.struct||[],e.totalRcrdNum=a.RspInfo.RecordNum||0):(e.loading=!1,e.$aui.message.show({type:"warning",message:"没有满足条件得记录!"}))}).catch(function(a){e.loading=!1,e.tableData=[],e.totalRcrdNum=0,e.$aui.message.show({type:"warning",message:"请求失败，错误码:"+a.SYS_HEAD.ReturnCode+"，错误信息："+a.SYS_HEAD.ReturnMessage}),console.log(a)})}})},handleSizeChange:function(e){this.pageSize=e,this.queryModel()},handleCurrentChange:function(e){this.currentPage=e,this.queryModel()},dealDate:function(e,a,t){return u.a.timeFormat2Date(t)},dealTime:function(e,a,t){return u.a.timeFormat2Time(t)}}},m={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"加载中。。。"}},[t("aui-card",[t("aui-form",{ref:"QueryForm",attrs:{model:e.QueryForm,rules:e.rules,size:"mini","label-position":"top"}},[t("aui-row",{attrs:{gutter:10}},[t("aui-col",{attrs:{lg:6,md:12}},[t("aui-form-item",{attrs:{label:"系统名称",prop:"SysCodeNm"}},[t("aui-select",{attrs:{filterable:""},model:{value:e.QueryForm.SysCodeNm,callback:function(a){e.$set(e.QueryForm,"SysCodeNm",a)},expression:"QueryForm.SysCodeNm"}},e._l(e.SysCode,function(e){return t("aui-option",{key:e.value,attrs:{label:e.value+"-"+e.label,value:e.value}})}))],1)],1),e._v(" "),t("aui-col",{attrs:{lg:6,md:12}},[t("aui-form-item",{attrs:{label:"操作日期",prop:"operDate"}},[t("aui-date-picker",{attrs:{"value-format":"yyyyMMdd",type:"date",placeholder:"操作日期"},model:{value:e.QueryForm.operDate,callback:function(a){e.$set(e.QueryForm,"operDate",a)},expression:"QueryForm.operDate"}})],1)],1),e._v(" "),t("aui-col",{attrs:{lg:6,md:12}},[t("aui-form-item",{attrs:{prop:"oprBranch",label:"操作机构"}},[t("aui-input",{attrs:{disabled:""},model:{value:e.QueryForm.oprBranch,callback:function(a){e.$set(e.QueryForm,"oprBranch",a)},expression:"QueryForm.oprBranch"}})],1)],1)],1),e._v(" "),t("aui-row",{attrs:{gutter:10}},[t("aui-col",{attrs:{lg:6,md:12}},[t("aui-form-item",{attrs:{prop:"oprTeller",label:"操作柜员"}},[t("aui-input",{attrs:{disabled:""},model:{value:e.QueryForm.oprTeller,callback:function(a){e.$set(e.QueryForm,"oprTeller",a)},expression:"QueryForm.oprTeller"}})],1)],1),e._v(" "),t("aui-col",{attrs:{lg:6,md:12}},[t("aui-form-item",{attrs:{prop:"sealState",label:"印章状态"}},[t("aui-select",{attrs:{filterable:""},model:{value:e.QueryForm.sealState,callback:function(a){e.$set(e.QueryForm,"sealState",a)},expression:"QueryForm.sealState"}},e._l(e.sealState,function(e){return t("aui-option",{key:e.value,attrs:{label:e.value+"-"+e.label,value:e.value}})}))],1)],1),e._v(" "),t("aui-col",{attrs:{lg:6,md:12}},[t("aui-form-item",{attrs:{prop:"sealNum",label:"印章编号"}},[t("aui-input",{model:{value:e.QueryForm.sealNum,callback:function(a){e.$set(e.QueryForm,"sealNum",a)},expression:"QueryForm.sealNum"}})],1)],1)],1),e._v(" "),t("aui-row",{attrs:{gutter:10}},[t("aui-col",{attrs:{lg:2,md:3}},[t("aui-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:e.queryModel}},[e._v("查询")])],1),e._v(" "),t("aui-col",{attrs:{lg:2,md:3}},[t("aui-button",{attrs:{type:"warning",size:"mini",icon:"el-icon-refresh"},on:{click:function(a){e.resetForm("QueryForm")}}},[e._v("重置")])],1)],1)],1)],1),e._v(" "),t("aui-card",{staticStyle:{"margin-top":"10px"}},[t("aui-table",{ref:"tableData",staticClass:"tableMarginTop",attrs:{data:e.tableData,"header-row-class-name":"tableHeaderClass",border:""}},[t("aui-table-column",{attrs:{prop:"CHANELCODE",formatter:e.tableformat,label:"系统名称"}}),e._v(" "),t("aui-table-column",{attrs:{prop:"SEALMODELID",label:"印章编号"}}),e._v(" "),t("aui-table-column",{attrs:{prop:"SEALMODELDESC",label:"印章名称"}}),e._v(" "),t("aui-table-column",{attrs:{prop:"OPERSTEP",formatter:e.tableformat,label:"操作步骤"}}),e._v(" "),t("aui-table-column",{attrs:{prop:"STATUS",formatter:e.tableformat,label:"印章状态"}}),e._v(" "),t("aui-table-column",{attrs:{prop:"OPRBRANCH",label:"受理机构"}}),e._v(" "),t("aui-table-column",{attrs:{prop:"OPRTELLER",label:"受理柜员"}}),e._v(" "),t("aui-table-column",{attrs:{prop:"OPRDATE",formatter:e.dealDate,label:"受理日期"}}),e._v(" "),t("aui-table-column",{attrs:{prop:"OPRTIME",formatter:e.dealTime,label:"受理时间"}}),e._v(" "),t("aui-table-column",{attrs:{prop:"PURPOSE",label:"操作原因"}})],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:this.tableData,expression:"this.tableData"}],staticStyle:{"text-align":"right","margin-top":"20px"}},[t("aui-pagination",{attrs:{"current-page":e.currentPage,background:"","page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.totalRcrdNum},on:{"current-change":e.changePage}})],1)],1)],1)])},staticRenderFns:[]};var c=t("/Xao")(n,m,!1,function(e){t("Z8WQ")},"data-v-10e9e81a",null);a.default=c.exports},Z8WQ:function(e,a,t){var r=t("Rj3W");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t("8bSs")("3db8d196",r,!0)}});