#language: es
@verificarOperario
Característica: Opciones del menú
	Yo como usuario tengo acceso a las opciones del menú principal

 Antecedentes:
	Dado un usuario: admin y una contraseña: admin, ingreso al sistema
  
  @verificoAdministrador
  	Escenario: verificar opciones del menú del administrador
  		Dado el menu de opciones yo verifico que salgan las opciones que me corresponde como administrador