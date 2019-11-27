#language: es
@login
Característica: Login del sistema
  Yo como usuario deseo ingresar al sistema

  @login
  Escenario: Ingreso logín con usuario correcto
    Dado un usuario: admin y una contraseña: admin, ingreso al sistema
    Pero verifico que haya ingresado correctamente