#language: es
@registrarVehiculo
Característica: registrar vehiculo
  yo como usuario registro un vehiculo en el sistema

Antecedentes:
	Dado un usuario: admin y una contraseña: admin, ingreso al sistema

  @registrarVehiculoSinCliente
  Escenario: registrar un vehiculo sin cliente
		Dado la placa: ABC456, registro un vehiculo
		Y verifico que si haya registrado el vehiculo con placa: ABC456