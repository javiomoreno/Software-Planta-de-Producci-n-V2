CREATE TABLE EnsayoJarras (
  idEnsayoJarra INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Usuarios_idUsuarios INTEGER UNSIGNED NOT NULL,
  fechaRegistro DATE NULL,
  vasoNumero INTEGER UNSIGNED NULL,
  color(UPC) FLOAT NULL,
  turbiedad(UNT) FLOAT NULL,
  coagulante INTEGER UNSIGNED NULL,
  ayudanteCoagulacion INTEGER UNSIGNED NULL,
  tiempoFormacion FLOAT NULL,
  indiceWilcomb INTEGER UNSIGNED NULL,
  tiempoSedimentacion(MIN) INTEGER UNSIGNED NULL,
  dosis VARCHAR(50) NULL,
  observacion VARCHAR(100) NULL,
  PRIMARY KEY(idEnsayoJarra),
  INDEX EnsayoJarras_FKIndex1(Usuarios_idUsuarios)
);

CREATE TABLE EnsayoJarras_Plantas (
  idEnsayoJarras_Plantas INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Plantas_idPlanta INTEGER UNSIGNED NOT NULL,
  EnsayoJarras_idEnsayoJarra INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(idEnsayoJarras_Plantas),
  INDEX EnsayoJarras_Plantas_FKIndex1(EnsayoJarras_idEnsayoJarra),
  INDEX EnsayoJarras_Plantas_FKIndex2(Plantas_idPlanta)
);

CREATE TABLE Estaciones (
  idEstacion INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NULL,
  PRIMARY KEY(idEstacion)
);

CREATE TABLE Plantas (
  idPlanta INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Estaciones_idEstacion INTEGER UNSIGNED NOT NULL,
  nombre VARCHAR(100) NULL,
  PRIMARY KEY(idPlanta),
  INDEX Plantas_FKIndex1(Estaciones_idEstacion)
);

CREATE TABLE Usuarios (
  idUsuarios INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NULL,
  apellido VARCHAR(50) NULL,
  PRIMARY KEY(idUsuarios)
);


