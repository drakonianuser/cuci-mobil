#language: es
@sinDescuento
Característica: servicios sin descuentos
  yo como operario registro un vehiculo sin descuentos

  Antecedentes: 
    Dado un usuario: admin y una contraseña: admin, ingreso al sistema

  @registroVehiculoSinDescuentos
  Escenario: registro vehiculo sin descuentos
		Dado la placa: CCC333, registro un vehiculo
		Entonces yo como operario selecciono el servicio
		Y yo como operario verifico que se haya guardado correctamente
			
