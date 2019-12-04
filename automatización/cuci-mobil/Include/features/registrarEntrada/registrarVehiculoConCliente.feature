#language: es
@registrarVehiculo
Característica: registrar vehiculo
  yo como usuario registro un vehiculo

  Antecedentes: 
    Dado un usuario: admin y una contraseña: admin, ingreso al sistema

  @registrarVehiculoConCliente
  Esquema del escenario: registrar vehiculo con cliente
    Dado la placa: <placa>, el documento: <documento> y el tipo de vehiculo: <tipoVehiculo>, registro un vehiculo y un cliente
    Y verifico que si haya registrado el vehiculo con placa: <placa>

    Ejemplos: 
      | placa  | documento  | tipoVehiculo |
      | ABC123 | 430098566 | Automovil    |
      | CDE456 | 1001140211 | moto         |
