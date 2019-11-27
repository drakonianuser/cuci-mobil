#language: es
@login
Característica: Login del sistema
  Yo como usuario deseo ingresar al sistema

  @loginAlterno
  Escenario: Login con contraseña invalida
    Dado un usuario: admin y una contraseña: pepito, ingreso al sistema
    Pero verifico que salga el mensage de error