#language: es
@verificarOperario
Característica: verificar ingreso administrador
  yo como administrador verifico que haya ingresado correctamente

 Antecedentes:
	Dado un usuario: admin y una contraseña: admin, ingreso al sistema
  
  @verificoAdministrador
  	Escenario: verificar ingreso administrador
  		Entonces yo verifico que haya ingresado como administrador