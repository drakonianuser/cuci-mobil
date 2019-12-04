#language: es
@sinDescuento
Característica: Asignar Servicios
	Yo como usuario registro un vehiculo y le asigno servicios

  Antecedentes: 
    Dado un usuario: admin y una contraseña: admin, ingreso al sistema

  @registroVehiculoSinDescuentos
  Escenario: Registrar un numero de servicios que no apliquen descuento
		Dado la placa: CCC382, registro un vehiculo
		Entonces yo como operario selecciono el servicio
		Y yo como operario verifico que se haya guardado correctamente
			
