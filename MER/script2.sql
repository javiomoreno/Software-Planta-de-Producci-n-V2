CREATE TABLE ppr_estaciones (
  estacons INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  estanomb VARCHAR(50)  NULL    ,
PRIMARY KEY(estacons));



CREATE TABLE ppr_usuarios (
  usuacons INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  usuanomb VARCHAR(50)  NULL  ,
  usuaapel VARCHAR(50)  NULL    ,
PRIMARY KEY(usuacons));



CREATE TABLE ppr_ensayojarras (
  enjacons INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  ppr_usuarios_usuacons INTEGER UNSIGNED  NOT NULL  ,
  enjafere DATE  NULL  ,
  enjaesta INTEGER UNSIGNED  NULL    ,
PRIMARY KEY(enjacons)  ,
INDEX ppr_ensayojarras_FKIndex1(ppr_usuarios_usuacons),
  FOREIGN KEY(ppr_usuarios_usuacons)
    REFERENCES ppr_usuarios(usuacons)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);



CREATE TABLE ppr_plantas (
  plancons INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  ppr_estaciones_estacons INTEGER UNSIGNED  NOT NULL  ,
  plannomb VARCHAR(100)  NULL    ,
PRIMARY KEY(plancons)  ,
INDEX Plantas_FKIndex1(ppr_estaciones_estacons),
  FOREIGN KEY(ppr_estaciones_estacons)
    REFERENCES ppr_estaciones(estacons)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);



CREATE TABLE ppr_ensayojarras_plantas (
  enplcons INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT COMMENT 'Consecutivo' ,
  ppr_ensayojarras_enjacons INTEGER UNSIGNED  NOT NULL  ,
  ppr_plantas_plancons INTEGER UNSIGNED  NOT NULL  ,
  enplnuva INTEGER UNSIGNED  NULL  ,
  enplacolo FLOAT  NULL  ,
  enplturb FLOAT  NULL  ,
  enplcuag INTEGER UNSIGNED  NULL  ,
  enplaycu INTEGER UNSIGNED  NULL  ,
  enpltifo FLOAT  NULL  ,
  enplinwi INTEGER UNSIGNED  NULL  ,
  enpltise INTEGER UNSIGNED  NULL  ,
  enpldosi VARCHAR(50)  NULL  ,
  enplobse VARCHAR(100)  NULL    ,
PRIMARY KEY(enplcons)  ,
INDEX ppr_ensayojarras_plantas_FKIndex1(ppr_plantas_plancons)  ,
INDEX ppr_ensayojarras_plantas_FKIndex2(ppr_ensayojarras_enjacons),
  FOREIGN KEY(ppr_plantas_plancons)
    REFERENCES ppr_plantas(plancons)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(ppr_ensayojarras_enjacons)
    REFERENCES ppr_ensayojarras(enjacons)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);





