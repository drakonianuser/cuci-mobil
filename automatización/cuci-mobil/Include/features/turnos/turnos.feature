#language: es
@liquidacion
Característica: turnos
  yo como operario quiero generar una liquidacion

  Antecedentes: 
    Dado un usuario: admin y una contraseña: admin, ingreso al sistema

  @liquidacion
  Escenario: generar liquidacion
  	Entonces yo como operario le doy en el boton terminar para generar la factura
  	
