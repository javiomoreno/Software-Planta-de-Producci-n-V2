CREATE TABLE ppr_ensayojarras (
  enjacons INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  ppr_usuarios_usuacons INTEGER UNSIGNED NOT NULL,
  enjafere DATE NULL,
  enjanuva INTEGER UNSIGNED NULL,
  enjacolo FLOAT NULL,
  enjaturb FLOAT NULL,
  enjacuag INTEGER UNSIGNED NULL,
  enjaaycu INTEGER UNSIGNED NULL,
  enjatifo FLOAT NULL,
  enjainwi INTEGER UNSIGNED NULL,
  enjatise INTEGER UNSIGNED NULL,
  enjadosi VARCHAR(50) NULL,
  enjaobse VARCHAR(100) NULL,
  PRIMARY KEY(enjacons),
  INDEX EnsayoJarras_FKIndex1(ppr_usuarios_usuacons)
);

// ppr_ensayojarras = Tabla para manejar la carga de datos en el ensayo de jarras
// enjacons = Consecutivo
// enjafere = Fecha de Registro
// enjanuva = Número de Vaso
// enjacolo = Color
// enjaturb = Turbiedad
// enjacuag = Cuagulante
// enjaaycu = Ayudante de Cuagulación
// enjatifo = Tiempo de Formación
// enjainwi = Indice de Wi
// enjatise = Tiempo de Sedimentación
// enjadosi = Dosis
// enjaobse = Observación
// ppr_usuarios_usuacons = Clave Foranea de la Tabla ppr_usuarios

CREATE TABLE ppr_ensayojarras_plantas (
  enplcons INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  ppr_plantas_plancons INTEGER UNSIGNED NOT NULL,
  ppr_ensayojarras_enjacons INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(enplcons),
  INDEX EnsayoJarras_Plantas_FKIndex1(ppr_ensayojarras_enjacons),
  INDEX EnsayoJarras_Plantas_FKIndex2(ppr_plantas_plancons)
);

// ppr_ensayojarras_plantas = Tabla Asociativa entre ppr_ensayojarras y ppr_plantas
// enplcons = Consecutivo
// ppr_plantas_plancons = Clave Foranea de la Tabla ppr_plantas
// ppr_ensayojarras_enjacons = Clave Foranea de la Tabla ppr_ensayojarras


CREATE TABLE ppr_estaciones (
  estacons INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  estanomb VARCHAR(50) NULL,
  PRIMARY KEY(estacons)
);

// ppr_estaciones = Tabla de estaciones
// estacons = Consecutivo
// estanomb = Nombre de la Estación

CREATE TABLE ppr_plantas (
  plancons INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  ppr_estaciones_estacons INTEGER UNSIGNED NOT NULL,
  plannomb VARCHAR(100) NULL,
  PRIMARY KEY(plancons),
  INDEX Plantas_FKIndex1(ppr_estaciones_estacons)
);

// ppr_plantas = Tabla de Plantas
// plancons = Consecutivo
// plannomb = Nombre de la Planta
// ppr_estaciones_estacons = Clave Foranea de la Tabla ppr_estaciones

CREATE TABLE ppr_usuarios (
  usuacons INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  usuanomb VARCHAR(50) NULL,
  usuaapel VARCHAR(50) NULL,
  PRIMARY KEY(usuacons)
);

// ppr_usuarios = Tabla de Usuarios
// usuacons = Consecutivo
// usuanomb = Nombre del Usuario
// usuaapel = Apellido del Usuario
