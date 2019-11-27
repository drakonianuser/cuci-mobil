#language: es
@verificarOperario
Característica: verificar ingreso operario
  yo como operario verifico que haya ingresado correctamente

 Antecedentes:
	Dado un usuario: operario y una contraseña: operario, ingreso al sistema
  
  @verificoOperario
  	Escenario: verificar ingreso operario
  		Entonces yo verifico que haya ingresado como operario