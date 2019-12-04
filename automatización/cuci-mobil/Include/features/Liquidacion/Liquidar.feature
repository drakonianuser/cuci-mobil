#language: es
@verificarServicio
Característica: verificar que se muestren los servicios
  yo como operario reviso que se muestren los servicios escogidos

	  Antecedentes: 
    Dado un usuario: admin y una contraseña: admin, ingreso al sistema

  @verificarServicios
  Escenario: verificar dervicios
  	Dado un turno, yo como usuario ingreso a la opción terminar
  	Entonces le doy a la opción terminar y despues a la opción liquidar
  	
  	