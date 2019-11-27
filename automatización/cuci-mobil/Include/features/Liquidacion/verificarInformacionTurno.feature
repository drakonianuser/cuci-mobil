#language: es
@liquidacion
Característica: Liquidar
  yo como usuario quiero revisar y liquidar un tunro

  Antecedentes: 
    Dado un usuario: admin y una contraseña: admin, ingreso al sistema

  @liquidacion
  Escenario: Consultar la información de un turno que no ha finalizado
  	Dado un turno, yo como usuario ingreso a la opción terminar
  	Entonces verifico que la información este presente
  	
 