#language: es
@login
Característica: ingreso al sistema
  yo como operario ingreso al sistema

  @loginAlterno
  Escenario: ingreso al sistema incorrecto
    Dado un usuario: pepito y una contraseña: admin, ingreso al sistema
    Pero verifico que salga el mensage de error