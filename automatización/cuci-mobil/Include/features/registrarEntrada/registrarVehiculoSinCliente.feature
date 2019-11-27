#language: es
@registrarVehiculo
Característica: registrar vehiculo
  yo como usuario registro un vehiculo

Antecedentes:
	Dado un usuario: admin y una contraseña: admin, ingreso al sistema

  @registrarVehiculoSinCliente
  Escenario: registrar vehiculo sin cliente
		Dado la placa: CCC123, registro un vehiculo
		Y verifico que si haya registrado el ehiculo con placa: CCC123