#language: es
@serviciosQueAplicanDescuentos
Característica: Asignar Servicios
	Yo como usuario registro un vehiculo y le asigno servicios

  Antecedentes: 
    Dado un usuario: admin y una contraseña: admin, ingreso al sistema

  @serviciosQueAplicanDescuentos
  Esquema del escenario: Registrar un numero de servicios que apliquen descuento
    Dado la placa: <placa>, el documento: <documento> y el tipo de vehiculo: <tipoVehiculo>, registro un vehiculo y un cliente
    Cuando yo escojo los servicios para el tipo de vehiculo: <tipoVehiculo>
    Entonces verifico que haya descuento y le doy en el boton guardar
    Y yo como operario verifico que se haya guardado correctamente

    Ejemplos: 
      | placa  | documento | tipoVehiculo |
      | CCC030 | 03904341 | Automovil    |
      | CCC040 | 03904342 | moto         |
