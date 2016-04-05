CREATE TABLE ppr_estaciones (
  estacons INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  estanomb VARCHAR(50)  NULL    ,
PRIMARY KEY(estacons));

// ppr_estaciones = Tabla de estaciones
// estacons = Consecutivo
// estanomb = Nombre de la Estación

CREATE TABLE ppr_usuarios (
  usuacons INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  usuanomb VARCHAR(50)  NULL  ,
  usuaapel VARCHAR(50)  NULL    ,
PRIMARY KEY(usuacons));

// ppr_usuarios = Tabla de Usuarios
// usuacons = Consecutivo
// usuanomb = Nombre del Usuario
// usuaapel = Apellido del Usuario

CREATE TABLE ppr_ensayojarras (
  enjacons INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  ppr_usuarios_usuacons INTEGER UNSIGNED  NOT NULL  ,
  enjafere DATE  NULL  ,
  enjaesta INTEGER UNSIGNED  NULL  ,
  enjatipo INTEGER UNSIGNED  NULL    ,
PRIMARY KEY(enjacons)  ,
INDEX ppr_ensayojarras_FKIndex1(ppr_usuarios_usuacons),
  FOREIGN KEY(ppr_usuarios_usuacons)
    REFERENCES ppr_usuarios(usuacons)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);

// ppr_ensayojarras = Tabla para manejar la carga de datos en el ensayo de jarras
// enjacons = Consecutivo
// enjafere = Fecha de Registro
// enjaesta = Estado del Ensayo
// enjatipo = Tipo de Ensayo

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
	  
// ppr_plantas = Tabla de Plantas
// plancons = Consecutivo
// plannomb = Nombre de la Planta
// ppr_estaciones_estacons = Clave Foranea de la Tabla ppr_estaciones


CREATE TABLE ppr_ensayojarras_plantas (
  enplcons INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT COMMENT 'Consecutivo' ,
  ppr_ensayojarras_enjacons INTEGER UNSIGNED  NOT NULL  ,
  ppr_plantas_plancons INTEGER UNSIGNED  NOT NULL  ,
  enplnuva INTEGER UNSIGNED  NULL  ,
  enplcolo FLOAT  NULL  ,
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
	  
// ppr_ensayojarras_plantas = Tabla Asociativa entre ppr_ensayojarras y ppr_plantas
// enplcons = Consecutivo
// enplnuva = Número de Vaso
// enplcolo = Color
// enplturb = Turbiedad
// enplcuag = Cuagulante
// enplaycu = Ayudante de Cuagulación
// enpltifo = Tiempo de Formación
// enplinwi = Indice de Wi
// enpltise = Tiempo de Sedimentación
// enpldosi = Dosis
// enplobse = Observación
// ppr_plantas_plancons = Clave Foranea de la Tabla ppr_plantas
// ppr_ensayojarras_enjacons = Clave Foranea de la Tabla ppr_ensayojarras





