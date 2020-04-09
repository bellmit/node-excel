

DELETE FROM IB_OM_RULE_INFO WHERE RULE_NO IN ( '035000','035001','035002','035003','035004','035005','035006','035007','035008','035009','035010','035011','035012','035013','035014','035015','035016' );
DELETE FROM IB_OM_RULECOND_INFO WHERE OPRTN_COND_NO IN ( 'DS35004','DS35012','DS35013','DS35014','DS35014' );
DELETE FROM IB_OM_MODE_INFO WHERE RULE_MODE_NO IN ( 'DS35000','DS35001','DS35002','DS35003','DS35004','DS35005','DS35006','DS35007','DS35008','DS35009','DS35010','DS35011','DS35012','DS35013','DS35014','DS35015','DS35016' );
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO='DS35000' AND CMPL_MODE_FLG='0' AND OPRTN_RULE_NO='035000';
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO='DS35001' AND CMPL_MODE_FLG='0' AND OPRTN_RULE_NO='035001';
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO='DS35002' AND CMPL_MODE_FLG='0' AND OPRTN_RULE_NO='035002';
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO='DS35003' AND CMPL_MODE_FLG='0' AND OPRTN_RULE_NO='035003';
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO='DS35004' AND CMPL_MODE_FLG='1' AND OPRTN_RULE_NO='035004';
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO='DS35005' AND CMPL_MODE_FLG='0' AND OPRTN_RULE_NO='035005';
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO='DS35006' AND CMPL_MODE_FLG='0' AND OPRTN_RULE_NO='035006';
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO='DS35007' AND CMPL_MODE_FLG='0' AND OPRTN_RULE_NO='035007';
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO='DS35008' AND CMPL_MODE_FLG='0' AND OPRTN_RULE_NO='035008';
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO='DS35009' AND CMPL_MODE_FLG='0' AND OPRTN_RULE_NO='035009';
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO='DS35010' AND CMPL_MODE_FLG='0' AND OPRTN_RULE_NO='035010';
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO='DS35011' AND CMPL_MODE_FLG='0' AND OPRTN_RULE_NO='035011';
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO='DS35012' AND CMPL_MODE_FLG='1' AND OPRTN_RULE_NO='035012';
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO='DS35013' AND CMPL_MODE_FLG='1' AND OPRTN_RULE_NO='035013';
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO='DS35014' AND CMPL_MODE_FLG='1' AND OPRTN_RULE_NO='035014';
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO='DS35015' AND CMPL_MODE_FLG='0' AND OPRTN_RULE_NO='035015';
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO='DS35016' AND CMPL_MODE_FLG='0' AND OPRTN_RULE_NO='035016';
DELETE FROM TE_PARA_OUTCABINETCFG_INFO WHERE TRAN_CD IN ( '00301009','00301009','00301009','00301009','00301009','00301010','00301010','00301010','00301010','00201005','00201005','00201005','00201005','00201005','00201005','00201005','00301011','00301011','00301011','00301011','00302008','00302008','00302008','00302008','00302008','00302008','00302009','00302009','00302009','00302009','00302009','00302009','00302009','00302009','00302010','00302010','00302010','00302010','00302010','00302010','00302010','00302010','00302011','00302011','00302011','00302011','00302011','00302011','00302011','00302011','00301017','00301017','00301017','00301017','00301015','00301015','00301015','00301015','00301015','00302018','00302018','00302018','00302018','00302018','00302018','00302018','00302018','00302018','00302007','00302007','00302007','00302007','00302007','00302007','00302013','00302013','00302013','00302013','00302013','00302014','00302014','00302014','00302014','00302014','00302014','00302014','00302014','00302014','00302014','00302014','00302014','00302016','00302016','00302016','00302016','00302016','00302016','00301007','00301007','00301007','00301007','00301007','00301002','00301002','00301002','00301002','00301002','00301005','00301005','00301005','00301005','00301005','00301005','00301005','00301005','00301016','00301016','00301016','00301016','00301016','00301018','00301018','00301018','00301018','00301018','00301018','00302004','00302004','00302004','00302004','00302004','00302004','00301003','00301003','00301003','00301003','00301003','00301003','00301003','00301003','00301003','00301003','00301003','00301004','00301004','00301004','00301004','00302002','00302002','00302002','00302002','00302002','00302002','00302002','00302002','00302003','00302003','00302003','00302003','00302003','00302006','00302006','00302006','00302006','00302006','00302006','00301006','00301006','00301006','00301006','00201024','00201024','00201024','00201024','00201024','00201024','00302021','00302021','00302021','00302021','00302021','00302021','00302021','00302021','00302021','00302022','00302022','00302022','00302022','00302022','00302022','00302022','00302022','00302022','00303005','00303005','00303005','00303005','00303005','00303005','00303005','00303005','00303005','00303005','00303005','00303005','00302017','00302017','00302017','00302017','00302017','00302017','00302017','00302017','00302017','00302017','00302017','00508004','00508004','00508004','00508004','00508004' );

