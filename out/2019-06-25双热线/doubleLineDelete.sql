SET AUTOCOMMIT=0;
BEGIN;

DELETE FROM IB_OM_RULE_INFO WHERE RULE_NO IN ( "050000","050001","050002","050003","050004","050005","050006","050007","050008","050009","050010","050011","050012","050013","050014","050015","050016" );
DELETE FROM IB_OM_RULECOND_INFO WHERE OPRTN_COND_NO IN ( "DH50002","DH50002","DH50003","DH50004","DH50004","DH50005","DH50005","DH50006","DH50006","DH50007","DH50008","DH50008","DH50009","DH50009","DH50010","DH50010","DH50011","DH50011","DH50012","DH50012","DH50013","DH50013","DH50014","DH50014","DH50015","DH50015","DH50016","DH50016" );
DELETE FROM IB_OM_RULECOND_RLT WHERE RULE_COND_NO IN ( "DH50000","DH50001","DH50002","DH50003","DH50004","DH50005","DH50006","DH50007","DH50008","DH50009","DH50010","DH50011","DH50012","DH50013","DH50014","DH50015","DH50016" );
DELETE FROM IB_OM_MODE_INFO WHERE RULE_MODE_NO IN ( "DH50000","DH50001","DH50002","DH50002","DH50003","DH50004","DH50004","DH50005","DH50005","DH50006","DH50006","DH50007","DH50008","DH50008","DH50009","DH50009","DH50010","DH50010","DH50011","DH50011","DH50012","DH50012","DH50013","DH50013","DH50014","DH50014","DH50015","DH50015","DH50016","DH50016" );

COMMIT;