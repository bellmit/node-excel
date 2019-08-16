SET AUTOCOMMIT=0;
BEGIN;

DELETE FROM IB_OM_RULE_INFO WHERE RULE_NO IN ( '060000','060001','060002','060003','060004','060005','060006','060007','060008','060009','060010','060011','060012','060013','060014','060015','060016','060017','060018','060019','060020','060021','060022','060023','060024','060025','060026','060027','060028','060029','060030','060031','060032','060033','060034','060035','060036','060037','060038','060039','060040','060041','060042','060043','060044','060045','060046','060047','060048','060049','060050','060051','060052','060053','060054','060055','060056','060057','060058','060059','060060','060061','060062','060063','060064','060065','060066','060067','060068','060069','060070','060071','060072','060073','060074','060075','060076','060077','060078','060079','060080','060081','060082','060083','060084','060085','060086','060087','060088','060089','060090','060091','060092','060093','060094','060095','060096','060097','060098','060099','060100','060101','060102','060103','060104','060105','060106','060107','060108','060109','060110','060111','060112','060113','060114','060115','060116','060117','060118','060119','060120','060121','060122','060123','060124','060125','060126','060127','060128','060129','060130','060131','060132','060133','060134','060135','060136','060137','060138','060139','060140','060141','060142','060143','060144','060145','060146','060147','060148','060149','060150','060151','060152','060153','060154','060155','060156','060157','060158','060159','060160','060161','060162','060163','060164','060165','060166','060167','060168','060169','060170','060171','060172','060173','060174','060175','060176','060177','060178','060179','060180','060181','060182','060183','060184','060185','060186','060187','060188','060189','060190','060191','060192','060193','060194','060195','060196','060197','060198','060199','060200','060201','060202','060203','060204','060205','060206','060207','060208','060209','060210' );
DELETE FROM IB_OM_RULECOND_INFO WHERE OPRTN_COND_NO IN ( 'BN60009','BN60010','BN60020','BN60021' );
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO IN ( 'BN60000','BN60001','BN60002','BN60003','BN60004','BN60005','BN60006','BN60007','BN60008','BN60009','BN60010','BN60011','BN60012','BN60013','BN60014','BN60015','BN60016','BN60017','BN60018','BN60019','BN60020','BN60021','BN60022','BN60023','BN60024','BN60025','BN60026','BN60027','BN60028','BN60029','BN60030','BN60031','BN60032','BN60033','BN60034','BN60035','BN60036','BN60037','BN60038','BN60039','BN60040','BN60041','BN60042','BN60043','BN60044','BN60045','BN60046','BN60047','BN60048','BN60049','BN60050','BN60051','BN60052','BN60053','BN60054','BN60055','BN60056','BN60057','BN60058','BN60059','BN60060','BN60061','BN60062','BN60063','BN60064','BN60065','BN60066','BN60067','BN60068','BN60069','BN60070','BN60071','BN60072','BN60073','BN60074','BN60075','BN60076','BN60077','BN60078','BN60079','BN60080','BN60081','BN60082','BN60083','BN60084','BN60085','BN60086','BN60087','BN60088','BN60089','BN60090','BN60091','BN60092','BN60093','BN60094','BN60095','BN60096','BN60097','BN60098','BN60099','BN60100','BN60101','BN60102','BN60103','BN60104','BN60105','BN60106','BN60107','BN60108','BN60109','BN60110','BN60111','BN60112','BN60113','BN60114','BN60115','BN60116','BN60117','BN60118','BN60119','BN60120','BN60121','BN60122','BN60123','BN60124','BN60125','BN60126','BN60127','BN60128','BN60129','BN60130','BN60131','BN60132','BN60133','BN60134','BN60135','BN60136','BN60137','BN60138','BN60139','BN60140','BN60141','BN60142','BN60143','BN60144','BN60145','BN60146','BN60147','BN60148','BN60149','BN60150','BN60151','BN60152','BN60153','BN60154','BN60155','BN60156','BN60157','BN60158','BN60159','BN60160','BN60161','BN60162','BN60163','BN60164','BN60165','BN60166','BN60167','BN60168','BN60169','BN60170','BN60171','BN60172','BN60173','BN60174','BN60175','BN60176','BN60177','BN60178','BN60179','BN60180','BN60181','BN60182','BN60183','BN60184','BN60185','BN60186','BN60187','BN60188','BN60189','BN60190','BN60191','BN60192','BN60193','BN60194','BN60195','BN60196','BN60197','BN60198','BN60199','BN60200','BN60201','BN60202','BN60203','BN60204','BN60205','BN60206','BN60207','BN60208','BN60209','BN60210' );
DELETE FROM IB_OM_MODE_INFO WHERE RULE_MODE_NO IN ( 'BN60000','BN60000','BN60001','BN60001','BN60002','BN60002','BN60003','BN60003','BN60004','BN60004','BN60005','BN60005','BN60006','BN60006','BN60007','BN60007','BN60008','BN60008','BN60009','BN60009','BN60010','BN60010','BN60011','BN60011','BN60012','BN60012','BN60013','BN60013','BN60014','BN60014','BN60015','BN60015','BN60016','BN60016','BN60017','BN60017','BN60018','BN60018','BN60019','BN60019','BN60020','BN60020','BN60021','BN60021','BN60022','BN60022','BN60023','BN60023','BN60024','BN60024','BN60025','BN60025','BN60026','BN60026','BN60027','BN60027','BN60028','BN60028','BN60029','BN60029','BN60030','BN60030','BN60031','BN60031','BN60032','BN60032','BN60033','BN60033','BN60034','BN60034','BN60035','BN60035','BN60036','BN60036','BN60037','BN60037','BN60038','BN60038','BN60039','BN60039','BN60040','BN60040','BN60041','BN60041','BN60042','BN60042','BN60043','BN60043','BN60044','BN60044','BN60045','BN60045','BN60046','BN60046','BN60047','BN60047','BN60048','BN60048','BN60049','BN60049','BN60050','BN60050','BN60051','BN60051','BN60052','BN60052','BN60053','BN60053','BN60054','BN60054','BN60055','BN60055','BN60056','BN60056','BN60057','BN60057','BN60058','BN60058','BN60059','BN60059','BN60060','BN60060','BN60061','BN60061','BN60062','BN60062','BN60063','BN60063','BN60064','BN60064','BN60065','BN60065','BN60066','BN60066','BN60067','BN60067','BN60068','BN60068','BN60069','BN60069','BN60070','BN60070','BN60071','BN60071','BN60072','BN60072','BN60073','BN60073','BN60074','BN60074','BN60075','BN60075','BN60076','BN60076','BN60077','BN60077','BN60078','BN60078','BN60079','BN60079','BN60080','BN60080','BN60081','BN60081','BN60082','BN60082','BN60083','BN60083','BN60084','BN60084','BN60085','BN60085','BN60086','BN60086','BN60087','BN60087','BN60088','BN60088','BN60089','BN60089','BN60090','BN60090','BN60091','BN60091','BN60092','BN60092','BN60093','BN60093','BN60094','BN60094','BN60095','BN60095','BN60096','BN60096','BN60097','BN60097','BN60098','BN60098','BN60099','BN60099','BN60100','BN60100','BN60101','BN60101','BN60102','BN60102','BN60103','BN60103','BN60104','BN60104','BN60105','BN60105','BN60106','BN60106','BN60107','BN60107','BN60108','BN60108','BN60109','BN60109','BN60110','BN60110','BN60111','BN60111','BN60112','BN60112','BN60113','BN60113','BN60114','BN60114','BN60115','BN60115','BN60116','BN60116','BN60117','BN60117','BN60118','BN60118','BN60119','BN60119','BN60120','BN60120','BN60121','BN60121','BN60122','BN60122','BN60123','BN60123','BN60124','BN60124','BN60125','BN60125','BN60126','BN60126','BN60127','BN60127','BN60128','BN60128','BN60129','BN60129','BN60130','BN60130','BN60131','BN60131','BN60132','BN60132','BN60133','BN60133','BN60134','BN60134','BN60135','BN60135','BN60136','BN60136','BN60137','BN60137','BN60138','BN60138','BN60139','BN60139','BN60140','BN60140','BN60141','BN60141','BN60142','BN60142','BN60143','BN60143','BN60144','BN60144','BN60145','BN60145','BN60146','BN60146','BN60147','BN60147','BN60148','BN60148','BN60149','BN60149','BN60150','BN60150','BN60151','BN60151','BN60152','BN60152','BN60153','BN60153','BN60154','BN60154','BN60155','BN60155','BN60156','BN60156','BN60157','BN60157','BN60158','BN60158','BN60159','BN60159','BN60160','BN60160','BN60161','BN60161','BN60162','BN60162','BN60163','BN60163','BN60164','BN60164','BN60165','BN60165','BN60166','BN60166','BN60167','BN60167','BN60168','BN60168','BN60169','BN60169','BN60170','BN60170','BN60171','BN60171','BN60172','BN60172','BN60173','BN60173','BN60174','BN60174','BN60175','BN60175','BN60176','BN60176','BN60177','BN60177','BN60178','BN60178','BN60179','BN60179','BN60180','BN60180','BN60181','BN60181','BN60182','BN60182','BN60183','BN60183','BN60184','BN60184','BN60185','BN60185','BN60186','BN60186','BN60187','BN60187','BN60188','BN60188','BN60189','BN60189','BN60190','BN60190','BN60191','BN60191','BN60192','BN60192','BN60193','BN60193','BN60194','BN60194','BN60195','BN60195','BN60196','BN60196','BN60197','BN60197','BN60198','BN60198','BN60199','BN60199','BN60200','BN60200','BN60201','BN60201','BN60202','BN60202','BN60203','BN60203','BN60204','BN60204','BN60205','BN60205','BN60206','BN60206','BN60207','BN60207','BN60208','BN60208','BN60209','BN60209','BN60210','BN60210' );

COMMIT;


DELETE FROM IB_OM_RULE_INFO WHERE RULE_TYP_CD = 'BN';
DELETE FROM IB_OM_RULECOND_INFO WHERE OPRTN_COND_NO LIKE '%BN%';
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO LIKE '%BN%';
DELETE FROM IB_OM_MODE_INFO WHERE RULE_MODE_NO LIKE '%BN%';


