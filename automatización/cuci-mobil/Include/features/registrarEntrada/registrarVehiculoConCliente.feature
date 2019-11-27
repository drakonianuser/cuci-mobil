#language: es
@registrarVehiculo
Característica: registrar vehiculo
  yo como usuario registro un vehiculo

  Antecedentes: 
    Dado un usuario: admin y una contraseña: admin, ingreso al sistema

  @registrarVehiculoConCliente
  Esquema del escenario: registrar vehiculo con cliente
    Dado la placa: <placa>, el documento: <documento> y el tipo de vehiculo: <tipoVehiculo>, registro un vehiculo y un cliente
    Y verifico que si haya registrado el ehiculo con placa: <placa>

    Ejemplos: 
      | placa  | documento  | tipoVehiculo |
      | CCC007 | 1234567897 | Automovil    |
      | CCC008 | 1234567898 | moto         |
