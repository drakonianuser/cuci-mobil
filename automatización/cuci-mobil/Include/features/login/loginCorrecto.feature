#language: es
@login
Característica: ingreso al sistema
  yo como operario ingreso al sistema

  @login
  Escenario: ingreso al sistema correcto
    Dado un usuario: admin y una contraseña: admin, ingreso al sistema
    Pero verifico que haya ingresado correctamente