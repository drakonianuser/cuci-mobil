#language: es
@serviciosQueAplicanDescuentos
Característica: servicios que aplican descuento
  yo como operario aplico los servicios

  Antecedentes: 
    Dado un usuario: admin y una contraseña: admin, ingreso al sistema

  @serviciosQueAplicanDescuentos
  Esquema del escenario: servicios que aplican descuento
    Dado la placa: <placa>, el documento: <documento> y el tipo de vehiculo: <tipoVehiculo>, registro un vehiculo y un cliente
    Cuando yo escojo los servicios para el tipo de vehiculo: <tipoVehiculo>
    Entonces verifico que haya descuento y le doy en el boton guardar
    Y yo como operario verifico que se haya guardado correctamente

    Ejemplos: 
      | placa  | documento | tipoVehiculo |
      | CCC020 | 03904341 | Automovil    |
      | CCC021 | 03904342 | moto         |
