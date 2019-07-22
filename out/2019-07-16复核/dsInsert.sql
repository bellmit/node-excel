
SET AUTOCOMMIT=0;
BEGIN;

  
-- IB_OM_RULE_INFO insert
INSERT INTO IB_OM_RULE_INFO (RULE_NO,RULE_TYP_CD,HOLI_FLG,RULE_TRI_POSITION,SUIT_CHNL_SCP,SUIT_LPR_SCP,SUIT_ORG_SCP,SUIT_TX_SCP,RULE_COMNT,EFFT_FLG,OPER_TELR_NO,OPER_DT,OPER_RSN) VALUES

("070000","CK","N","1","TE","9999","*,","00201007","测试","1","","2019-07-16","批量新增");
-- IB_OM_RULECOND_INFO insert
INSERT INTO IB_OM_RULECOND_INFO (OPRTN_COND_NO,DICTRY_NM,OPER_SYM_1,CMPR_VAL,OPER_SYM_2,VALUE2,TRAN_CD,COND_DESCR,OPER_TELR_NO,OPER_DT,OPER_RSN,CMPR_VAL_DATA_DICTRY_FLG,PUB_DICTRY_FLG,DICTRY_DESCR) VALUES

("CK70000","isCheck","==","1","","","00201007","测试","","2019-07-16","批量新增","1","0","");
-- IB_OM_CHECKMODE_INFO insert
INSERT INTO IB_OM_CHECKMODE_INFO (RCHK_MODE_ID,RCHK_PSTN_NO,RCHK_LVL_CD,PMIT_PRACT_TELR_RCHK_FLG,RCHK_RSN_CD,REMRK,REMRK_1,APP_NO) VALUES

("CK70000","2","1","2","测试","测试","测试","TE");
-- IB_OM_RULECOND_RLT insert
INSERT INTO IB_OM_RULECOND_RLT (RULE_COND_NO,CMPL_MODE_FLG,OPRTN_RULE_NO) VALUES

("CK70000","1","070000");
-- IB_OM_CHECKFIELD_RLT insert
INSERT INTO IB_OM_CHECKFIELD_RLT (TRAN_CD,LPR_NO,RCHK_FIELD_NM,RCHK_FIELD_INFO,STUS_CD) VALUES

("00201007","9999","Flg","标志","1");
  
COMMIT;