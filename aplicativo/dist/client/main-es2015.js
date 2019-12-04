(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/servicios/editar-servicio.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/servicios/editar-servicio.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"container col-3 pt-5\">\r\n    <div class=\"row justify-content-center\">\r\n        <h1 class=\"titulos\">Editar servicios</h1>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container contenedor col-7 p-5\">\r\n        <div class=\"row justify-content-center\">\r\n                <h1 class=\"titulos\">Descuentos</h1>\r\n            </div>\r\n        <mat-form-field>\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Buscar\">\r\n            </mat-form-field>\r\n        \r\n            <table mat-table [dataSource]=\"dataSource\" class=\"col-12\">\r\n        \r\n                <ng-container matColumnDef=\"numServicios\">\r\n                    <th mat-header-cell *matHeaderCellDef> Numero de servicios </th>\r\n                    <td mat-cell *matCellDef=\"let element\"><input type=\"number\" placeholder={{element.numServicios}}>  </td>\r\n                </ng-container>\r\n        \r\n                <ng-container matColumnDef=\"porcentageDes\">\r\n                    <th mat-header-cell *matHeaderCellDef>Descuento</th>\r\n                    <td mat-cell *matCellDef=\"let element\"> <input type=\"number\" placeholder={{element.porcentageDes}}> </td>\r\n                </ng-container>\r\n        \r\n                <tr mat-header-row *matHeaderRowDef=\"columns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: columns;\"></tr>\r\n            </table>\r\n            <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n    <div class=\"row justify-content-center\">\r\n            <h1 class=\"titulos pt-3\">Servicios</h1>\r\n        </div>\r\n    <mat-form-field>\r\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Buscar\">\r\n        </mat-form-field>\r\n    \r\n        <table mat-table [dataSource]=\"dataSource\" class=\"col-12\">\r\n    \r\n            <ng-container matColumnDef=\"vehiculos\">\r\n                <th mat-header-cell *matHeaderCellDef> Vehiculos </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.vehiculos}} </td>\r\n            </ng-container>\r\n    \r\n            <ng-container matColumnDef=\"precio\">\r\n                <th mat-header-cell *matHeaderCellDef>Precio</th>\r\n                <td mat-cell *matCellDef=\"let element\"> <input type=\"number\" placeholder={{element.precio}}> </td>\r\n            </ng-container>\r\n    \r\n              <ng-container matColumnDef=\"select\">\r\n            <th mat-header-cell *matHeaderCellDef>\r\n                <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                                [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                                [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n                                [aria-label]=\"checkboxLabel()\" color=\"primary\">\r\n                </mat-checkbox>\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">\r\n                <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                                (change)=\"$event ? selection.toggle(row) : null\"\r\n                                [checked]=\"selection.isSelected(row)\"\r\n                                [aria-label]=\"checkboxLabel(row)\" color=\"primary\">\r\n                </mat-checkbox>\r\n                </td>\r\n            </ng-container>\r\n    \r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n    <div class=\"row justify-content-center pt-5\">\r\n        <button class=\"botones\">Añadir</button>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/vehiculo/editar-vehiculo.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/vehiculo/editar-vehiculo.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-nav></app-nav>\r\n<div class=\"container col-4 pt-5\">\r\n    <div class=\"row justify-content-center\">\r\n        <h1 class=\"titulos\">Parametrización vehiculos</h1>\r\n    </div>\r\n</div>\r\n<div class=\"container contenedor col-7 pt-3\">\r\n        <mat-form-field>\r\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Buscar\">\r\n        </mat-form-field>\r\n    \r\n        <table mat-table [dataSource]=\"dataSource\" class=\"col-12\">\r\n    \r\n            <ng-container matColumnDef=\"vehiculos\">\r\n                <th mat-header-cell *matHeaderCellDef> Vehiculos </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.vehiculos}} </td>\r\n            </ng-container>\r\n    \r\n            <ng-container matColumnDef=\"precio\">\r\n                <th mat-header-cell *matHeaderCellDef>Precio</th>\r\n                <td mat-cell *matCellDef=\"let element\"> <input type=\"number\" placeholder={{element.precio}}> </td>\r\n            </ng-container>\r\n    \r\n            <ng-container matColumnDef=\"weight\">\r\n                <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n            </ng-container>\r\n    \r\n              <ng-container matColumnDef=\"select\">\r\n            <th mat-header-cell *matHeaderCellDef>\r\n                <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                                [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                                [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n                                [aria-label]=\"checkboxLabel()\" color=\"primary\">\r\n                </mat-checkbox>\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">\r\n                <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                                (change)=\"$event ? selection.toggle(row) : null\"\r\n                                [checked]=\"selection.isSelected(row)\"\r\n                                [aria-label]=\"checkboxLabel(row)\" color=\"primary\">\r\n                </mat-checkbox>\r\n                </td>\r\n            </ng-container>\r\n    \r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n   <div class=\"row  justify-content-center pt-5\">\r\n        <div class=\"vehiculo col-6\">\r\n            <p class=\"vehiculo\">vehiculo</p>\r\n        </div>\r\n        \r\n    </div>\r\n    <div class=\"row justify-content-center \">\r\n        <div class=\"col-3 cuadro\">\r\n            <p>servicio1</p>\r\n        </div>\r\n            <textarea class=\"col-3 cuadro\" placeholder=\"preciaActual\"  rows=\"2\"></textarea>\r\n    </div>\r\n\r\n    <div class=\"row justify-content-center \">\r\n        <div class=\"col-3 cuadro\">\r\n            <p>servicio1</p>\r\n        </div>\r\n        <textarea class=\"col-3 cuadro\" placeholder=\"preciaActual\"  rows=\"2\"></textarea>\r\n    </div>\r\n\r\n    <div class=\"row justify-content-center \">\r\n        <div class=\"col-3 cuadro\">\r\n            <p>servicio1</p>\r\n        </div>\r\n        <textarea class=\"col-3 cuadro\" placeholder=\"preciaActual\"  rows=\"2\"></textarea>\r\n    </div>\r\n\r\n    <div class=\"row justify-content-end pt-4 pb-3\">\r\n        <div class=\"col-5\">\r\n            <button class=\"botones\">\r\n                Guardar\r\n            </button>\r\n        </div>\r\n    </div> \r\n    <div class=\"row justify-content-center pb-5\">\r\n        <button class=\"botones\">Añadir</button>\r\n    </div>    \r\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/vehiculosIngresados/vehiculos-ingresados.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/vehiculosIngresados/vehiculos-ingresados.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"container col-3 pt-5\">\r\n    <div class=\"row justify-content-center\">\r\n        <h1 class=\"titulos\">Turnos</h1>\r\n    </div>\r\n</div>\r\n<div class=\"container contenedor col-7 p-5\">\r\n\r\n        <mat-form-field>\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Buscar por placa\">\r\n            </mat-form-field>\r\n\r\n<table mat-table\r\n       [dataSource]=\"dataSource\" multiTemplateDataRows\r\n       class=\"mat-elevation-z8\">\r\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\r\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\r\n  <ng-container matColumnDef=\"expandedDetail\">\r\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\r\n      <div class=\"example-element-detail\"\r\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n        <div >\r\n            <div>Turno: {{element.turno}}</div>\r\n        </div>\r\n        <div class=\"container\">\r\n\r\n            <div class=\"row justify-content-end pb-3\" *ngIf=\"element.estado=='En proceso'\">\r\n                <button mat-raised-button class=\"botones\" (click)=\"consultar(element)\" >Terminar</button>\r\n            </div>\r\n            <div class=\"row justify-content-end pb-3\" *ngIf=\"element.estado=='Terminado'\">\r\n                    <button mat-raised-button class=\"botones\" (click)=\"consultar(element)\">Liquidar</button>\r\n            </div>\r\n            <div class=\"row justify-content-end pb-3\" *ngIf=\"administrador\">\r\n                    <button mat-raised-button class=\"botones\" (click)=\"eliminar(element) \"color=\"primary\"  >Eliminar</button>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\r\n      class=\"example-element-row\"\r\n      [class.example-expanded-row]=\"expandedElement === element\"\r\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\r\n  </tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n</table>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container col-12\" style=\"height:200px;\">\r\n    <a href=\"##\"></a>\r\n</div>\r\n\r\n<div class=\"container col-3\">\r\n    \r\n</div>\r\n\r\n<form class=\"container contenedor col-3 pt-5\">\r\n\r\n    <div class=\"row justify-content-center\">\r\n        <h1 class=\"titulos\">Login</h1>\r\n    </div>\r\n\r\n    <div class=\"row justify-content-center\">\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Usuario\" type=\"email\" name=\"usuario\"[(ngModel)]= \"usuario.USUARIO\">\r\n        </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"row justify-content-center p-4\">    \r\n        <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Contraseña\" type=\"password\" name=\"correo\"[(ngModel)]= \"usuario.PASSWORD\">\r\n        </mat-form-field>\r\n    </div>\r\n    \r\n    <div class=\"row justify-content-center pb-5\">   \r\n        <button mat-raised-button color=\"primary\" (click)=\"login()\">Ingresar</button>\r\n    </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--<div class=\"container col-8  h-5\" >-->\r\n    <!-- <div class=\"row\">\r\n        <div>\r\n            <button class=\"botones\" [routerLink]=\"['/registroVehiculo']\">\r\n                Registrar entrada\r\n            </button>\r\n        </div> -->\r\n<nav mat-tab-nav-bar  [backgroundColor]=\"background\">\r\n    <a mat-tab-link  *ngFor=\"let link of links\"\r\n        [routerLink]=\"link.path\"\r\n        routerLinkActive #rla=\"routerLinkActive\"\r\n        [active]=\"rla.isActive\"> \r\n        {{link.name}} \r\n        </a>\r\n</nav>\r\n\r\n\r\n\r\n\r\n        <!-- <div>\r\n            <button class=\"botones\"  [routerLink]=\"['/vehiculosIngresados']\">\r\n                Ver facturas\r\n            </button>\r\n        </div>\r\n        <div>\r\n            <button class=\"botones\" [routerLink]=\"['/Reportes']\">\r\n                Generar reporte\r\n            </button>\r\n        </div>\r\n        <div>\r\n            <button class=\"botones\"  [routerLink]=\"['/']\">\r\n                Cerrar sesión\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n<!-- <nav mat-tab-nav-bar  [backgroundColor]=\"background\">\r\n    <a mat-tab-link *ngFor=\"let link of links\"\r\n    [routerLink]=\"link.path\"\r\n     (click)=\"activeLink = link\"\r\n     [active]=\"activeLink == link\"\r\n     routerLinkActive #rla=\"routerLinkActive\"\r\n     [active]=\"rla.isActive\"\r\n     > {{link}} \r\n     </a>\r\n</nav> -->\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/operario/liquidacion/liquidacion.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/operario/liquidacion/liquidacion.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"container col-3 pt-5\">\r\n  <div class=\"row justify-content-center\">\r\n    <h1 class=\"titulos\">Liquidacion</h1>\r\n  </div>\r\n</div>\r\n\r\n<!--   -->\r\n\r\n<ng-container class=\"container contenedor col-6 pb-3 pt-3\">\r\n  <mat-card class=\" container contenedor col-9 \">\r\n    <mat-grid-list cols=\"4\" rowHeight=\"110px\">\r\n      <mat-grid-tile rowspan=\"3\" colspan=\"2\">\r\n        <mat-list>\r\n          <mat-list-item>Turno : {{factura.TURNO}}</mat-list-item>\r\n          <mat-divider></mat-divider>\r\n          <mat-list-item>Fecha De Entrada : {{fecha}}</mat-list-item>\r\n          <mat-divider></mat-divider>\r\n          <mat-list-item>Tipo de vehiculo: {{factura.NOMBRE}} </mat-list-item>\r\n          <mat-divider></mat-divider>\r\n          <mat-list-item>placa: {{factura.PLACA}}</mat-list-item>\r\n          <mat-divider></mat-divider>\r\n          <ng-container *ngIf=\"factura.ID_CLIENTE!=0\">\r\n            <mat-list-item>Documento cliente: {{factura.CEDULA}}</mat-list-item>\r\n            <mat-divider></mat-divider>\r\n            <mat-list-item>Nombre cliente: {{factura.NOMBREC}} {{factura.APELLIDOS}}</mat-list-item>\r\n            <mat-divider></mat-divider>\r\n            <mat-list-item>Telefono: {{factura.TELEFONO}}</mat-list-item>\r\n            <mat-divider></mat-divider>\r\n          </ng-container>\r\n\r\n        </mat-list>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile rowspan=\"2\" colspan=\"2\">\r\n        <div><img src=\"../../../assets/logo.png\" /></div>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile rowspan=\"4\" colspan=\"4\">\r\n        <div class=\"mat-elevation-z8 full\" >\r\n          <table mat-table [dataSource]=\"dataSource\" >\r\n            <ng-container matColumnDef=\"NR\">\r\n              <th mat-header-cell *matHeaderCellDef>NRO</th>\r\n              <td mat-cell *matCellDef=\"let element\">{{ element.NR }}</td>\r\n              <td mat-footer-cell *matFooterCellDef>\r\n                Cantida servicios: {{ getServices() }}\r\n              </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Nombre\">\r\n              <th mat-header-cell *matHeaderCellDef>Nombre</th>\r\n              <td mat-cell *matCellDef=\"let element\">{{ element.Nombre }}</td>\r\n              <td mat-footer-cell *matFooterCellDef>Descuento:{{descuento}}</td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"precio\">\r\n              <th mat-header-cell *matHeaderCellDef>precio</th>\r\n              <td mat-cell *matCellDef=\"let element\">\r\n                {{ element.precio | currency }}\r\n              </td>\r\n              <td mat-footer-cell *matFooterCellDef>\r\n                Total: {{ totalCost }}$ Total Neto: {{factura.TOTAL_NETO}}$\r\n              </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n            <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\r\n          </table>\r\n          <mat-paginator [pageSize]=\"10\" [length]=\"services\"></mat-paginator>\r\n        </div>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile rowspan=\"1\" colspan=\"4\" *ngIf=\"factura.TIPO_ESTADO_ID_TIPO_ESTADO==3\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"actualizarFactura(4)\">Liquidar</button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile rowspan=\"1\" colspan=\"4\" *ngIf=\"factura.TIPO_ESTADO_ID_TIPO_ESTADO==2\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"actualizarFactura(3)\">Terminar</button>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </mat-card>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/operario/registrar-entrada-serviteca/registrar-entrada-serviteca.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/operario/registrar-entrada-serviteca/registrar-entrada-serviteca.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"container col-3 pt-5\">\r\n    <div class=\"row justify-content-center\">\r\n        <h1 class=\"titulos\">Servicios</h1>\r\n    </div>\r\n</div>\r\n<div class=\"container contenedor col-7 p-5\">\r\n    <div>\r\n        <div class=\"row justify-content-center\">\r\n            <h2>{{datosFactura.Placa}}</h2>\r\n        </div>\r\n    </div>\r\n    <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Buscar\">\r\n    </mat-form-field>\r\n\r\n    <table mat-table [dataSource]=\"dataSource\" class=\"col-12\">\r\n\r\n        <ng-container matColumnDef=\"servicios\">\r\n            <th mat-header-cell *matHeaderCellDef> servicios </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.servicios}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"precio\">\r\n            <th mat-header-cell *matHeaderCellDef>Precio</th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.precio}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"weight\">\r\n            <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n        </ng-container>\r\n\r\n          <ng-container matColumnDef=\"select\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                            [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                            [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n                            [aria-label]=\"checkboxLabel()\" color=\"primary\"\r\n                            >\r\n            </mat-checkbox>\r\n            </th>\r\n            <td mat-cell *matCellDef=\"let row\">\r\n            <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                            (change)=\"$event ? selection.toggle(row) : null\"\r\n                            [checked]=\"selection.isSelected(row)\"\r\n                            [aria-label]=\"checkboxLabel(row)\" color=\"primary\"\r\n                            (click)=\"leer(row)\">\r\n            </mat-checkbox>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n\r\n    <table cellpadding=\"10\">\r\n        <tr>\r\n            <td>\r\n                <h2>Total:</h2>\r\n            </td> \r\n            <td>\r\n                <h2 style=\"text-decoration: underline; float: rigth;\"  name='precio'>{{precioNeto}}</h2>\r\n            </td> \r\n            <td>\r\n                <h2>Descuento: </h2>\r\n            </td>\r\n            <td>\r\n                <h2>{{numeroDescuento}}</h2>\r\n            </td>\r\n            <td>\r\n                    <button (click)=\"registrarFactura()\">Guardar</button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/operario/registro-vehiculo/registro-vehiculo.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/operario/registro-vehiculo/registro-vehiculo.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"container col-3 pt-5\">\r\n    <div class=\"row justify-content-center\">\r\n        <h1 class=\"titulos\">Vehiculo</h1>\r\n    </div>\r\n</div>\r\n<form class=\"example-form\" class=\"container contenedor col-6 pb-3 pt-3\">\r\n    <mat-form-field class=\"input-mid-width\" >\r\n        <input matInput placeholder=\"Buscar vehiculo*\" value=\"\" [(ngModel)]='vehiculo.PLACA' name=\"PLACA\">\r\n    </mat-form-field>\r\n    <button mat-button class=\"botones\" (click)=\"buscarVehiculo()\" > Buscar</button>\r\n    <table class=\"input-full-width\"><tr>\r\n    <td>\r\n    <mat-form-field class=\"input-full-width\" >\r\n    <mat-label>Tipo Vehiculo*</mat-label>\r\n    <mat-select [(value)]=\"selected\" [disabled]=\"vehiculObtenido\" [(ngModel)]='vehiculo.TIPO_VEHICULO_ID_TIPO_VEHICULO' name=\"ID_ESTADO\">\r\n        <mat-option *ngFor=\"let vehiculo of tipoVehiculos\" [value]=\"vehiculo.ID_TIPO_VEHICULO\">\r\n         {{vehiculo.NOMBRE}} \r\n        </mat-option>\r\n    </mat-select>\r\n    </mat-form-field>\r\n    </td>\r\n    </tr></table>\r\n    <mat-label>Cliente</mat-label>\r\n    <table class=\"input-full-width\"><tr><td>\r\n    <mat-form-field class=\"input-full-width\" >\r\n        <input matInput placeholder=\"Documento\" [(ngModel)]='cliente.CEDULA' name='cedula'>\r\n    </mat-form-field>\r\n    </td><td>\r\n    <mat-slide-toggle\r\n    (click)=\"buscarCliente()\"\r\n    [checked]=\"stateCtrl.false\"\r\n    (change)=\"stateCtrl = false ? stateCtrl = true : stateCtrl = !stateCtrl\">\r\n        Registrar Cliente?\r\n    </mat-slide-toggle>\r\n    </td>\r\n    </tr>\r\n    </table>\r\n    <ng-container *ngIf=\"stateCtrl\">\r\n    <table class=\"input-full-width\" ><tr><td>\r\n    <mat-form-field class=\"input-full-width\" >\r\n        <input matInput placeholder=\"Nombre\"[(ngModel)]='cliente.NOMBRE' name='NOMBRE'[disabled]=\"clienteobtenido\">\r\n    </mat-form-field>\r\n    </td><td>\r\n    <mat-form-field class=\"input-full-width\" >\r\n            <input matInput placeholder=\"Apellidos\"[disabled]=\"clienteobtenido\"[(ngModel)]='cliente.APELLIDOS' name='APELLIDOS'>\r\n    </mat-form-field>\r\n    </td></tr>\r\n    <tr><td>\r\n    <mat-form-field class=\"example-full-width\">\r\n        <input type=\"tel\"[disabled]=\"clienteobtenido\" matInput placeholder=\"Telefono\" [(ngModel)]='cliente.TELEFONO' name='TELEFONO'>\r\n    </mat-form-field>\r\n    <mat-slide-toggle\r\n    [checked]=\"dueno.false\"\r\n    (change)=\"dueno = false ? dueno = true : dueno = !dueno\">\r\n        Es dueño del vehiculo?\r\n    </mat-slide-toggle>\r\n    </td></tr>\r\n    </table>\r\n    </ng-container>\r\n    \r\n    <button mat-button class=\"botones\" (click)=\"registrarVehiculo()\">Asignar servicios</button>\r\n</form> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pantalla-inicio/pantalla-inicio.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pantalla-inicio/pantalla-inicio.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <input type=\"text\" class=\"inputs\" placeholder=\"Buscar vehiculo\">\r\n        <button class=\"botones\">buscar</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reportes/reportes.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reportes/reportes.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"container col-3 pt-5\">\r\n  <div class=\"row justify-content-center\">\r\n    <h1 class=\"titulos\">Reportes</h1>\r\n  </div>\r\n</div>\r\n<div class=\"container contenedor col-8 pt-3 pb-5\">\r\n  <div class=\"row justify-content-center pt-5\">\r\n    <div class=\"col-2\">\r\n      <p class=\"letras\">Desde:</p>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <p class=\"letras\">Hasta:</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"\">\r\n      <input class=\"inputs\" type=\"date\" />\r\n      <input class=\"inputs\" type=\"date\" />\r\n    </div>\r\n    <div>\r\n      <button class=\"botones\">\r\n        Consultar\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row justify-content-center pt-5\">\r\n    <div class=\"vehiculo col-6\">\r\n      <p class=\"vehiculo\">Reportes</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row justify-content-center \">\r\n    <div class=\"col-1 cuadro-reportes\">\r\n      <p>CLiente</p>\r\n    </div>\r\n    <div class=\"col-1 cuadro-reportes\">\r\n      <p>Placa</p>\r\n    </div>\r\n    <div class=\"col-1 cuadro-reportes\">\r\n      <p>#servicios</p>\r\n    </div>\r\n    <div class=\"col-1 cuadro-reportes\">\r\n      <p>Descuento</p>\r\n    </div>\r\n    <div class=\"col-1 cuadro-reportes\">\r\n      <p>Costo</p>\r\n    </div>\r\n    <div class=\"col-1 cuadro-reportes\">\r\n      <p>Estado</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row justify-content-center \">\r\n    <div class=\"col-1 cuadro-reportes\">\r\n      <p>CLiente</p>\r\n    </div>\r\n    <div class=\"col-1 cuadro-reportes\">\r\n      <p>Placa</p>\r\n    </div>\r\n    <div class=\"col-1 cuadro-reportes\">\r\n      <p>#servicios</p>\r\n    </div>\r\n    <div class=\"col-1 cuadro-reportes\">\r\n      <p>Descuento</p>\r\n    </div>\r\n    <div class=\"col-1 cuadro-reportes\">\r\n      <p>Costo</p>\r\n    </div>\r\n    <div class=\"col-1 cuadro-reportes\">\r\n      <p>Estado</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row justify-content-center \">\r\n    <div class=\"col-1 cuadro-reportes\">\r\n      <p>CLiente</p>\r\n    </div>\r\n    <div class=\"col-1 cuadro-reportes\">\r\n      <p>Placa</p>\r\n    </div>\r\n    <div class=\"col-1 cuadro-reportes\">\r\n      <p>#servicios</p>\r\n    </div>\r\n    <div class=\"col-1 cuadro-reportes\">\r\n      <p>Descuento</p>\r\n    </div>\r\n    <div class=\"col-1 cuadro-reportes\">\r\n      <p>Costo</p>\r\n    </div>\r\n    <div class=\"col-1 cuadro-reportes\">\r\n      <p>Estado</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row justify-content-center pt-5\">\r\n    <div class=\"vehiculo col-4\">\r\n      <p class=\"vehiculo\">Totales</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center pb-5\">\r\n    <div class=\"col-2 cuadro-reportes\">\r\n      <p>total servicios</p>\r\n    </div>\r\n    <div class=\"col-2 cuadro-reportes\">\r\n      <p>Total recaudo</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/servicios/editar-servicio.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/servicios/editar-servicio.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NlcnZpY2lvcy9lZGl0YXItc2VydmljaW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/servicios/editar-servicio.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/servicios/editar-servicio.component.ts ***!
  \**************************************************************/
/*! exports provided: EditarServicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarServicioComponent", function() { return EditarServicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");






const ELEMENT_DATA = [
    { vehiculos: "vehiculos", precio: 1.2 },
    { vehiculos: "vehiculos", precio: 12 },
    { vehiculos: "vehiculos", precio: 12 },
    { vehiculos: "vehiculos", precio: 12 },
    { vehiculos: "vehiculos", precio: 1.2 },
    { vehiculos: "vehiculos", precio: 1.2 },
];
const DESCUENTO_SERVI = [
    { numServicios: 1, porcentageDes: 1.2 },
    { numServicios: 4, porcentageDes: 12 },
    { numServicios: 3, porcentageDes: 12 },
    { numServicios: 5, porcentageDes: 12 },
];
let EditarServicioComponent = class EditarServicioComponent {
    constructor() {
        this.displayedColumns = ['vehiculos', 'precio', 'select'];
        this.columns = ['numServicios', 'porcentageDes'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
        this.data = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](DESCUENTO_SERVI);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.vehiculos + 1}`;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], EditarServicioComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
], EditarServicioComponent.prototype, "sort", void 0);
EditarServicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editar-servicio',
        template: __webpack_require__(/*! raw-loader!./editar-servicio.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/servicios/editar-servicio.component.html"),
        styles: [__webpack_require__(/*! ./editar-servicio.component.css */ "./src/app/admin/servicios/editar-servicio.component.css")]
    })
], EditarServicioComponent);



/***/ }),

/***/ "./src/app/admin/vehiculo/editar-vehiculo.component.css":
/*!**************************************************************!*\
  !*** ./src/app/admin/vehiculo/editar-vehiculo.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ZlaGljdWxvL2VkaXRhci12ZWhpY3Vsby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/vehiculo/editar-vehiculo.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/vehiculo/editar-vehiculo.component.ts ***!
  \*************************************************************/
/*! exports provided: EditarVehiculoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarVehiculoComponent", function() { return EditarVehiculoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");






const ELEMENT_DATA = [
    { vehiculos: "vehiculo", precio: 1.2 },
    { vehiculos: "vehiculo", precio: 12 },
    { vehiculos: "vehiculo", precio: 12 },
    { vehiculos: "vehiculo", precio: 12 },
    { vehiculos: "vehiculo", precio: 1.2 },
    { vehiculos: "vehiculo", precio: 1.2 },
];
let EditarVehiculoComponent = class EditarVehiculoComponent {
    constructor() {
        this.displayedColumns = ['vehiculos', 'precio', 'select'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.vehiculos + 1}`;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], EditarVehiculoComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
], EditarVehiculoComponent.prototype, "sort", void 0);
EditarVehiculoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editar-vehiculo',
        template: __webpack_require__(/*! raw-loader!./editar-vehiculo.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/vehiculo/editar-vehiculo.component.html"),
        styles: [__webpack_require__(/*! ./editar-vehiculo.component.css */ "./src/app/admin/vehiculo/editar-vehiculo.component.css")]
    })
], EditarVehiculoComponent);



/***/ }),

/***/ "./src/app/admin/vehiculosIngresados/vehiculos-ingresados.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/admin/vehiculosIngresados/vehiculos-ingresados.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n}\r\ntr.example-detail-row {\r\n    height: 0;\r\n  }\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n    background: #777;\r\n  }\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n    background: #efefef;\r\n  }\r\n.example-element-row td {\r\n    border-bottom-width: 0;\r\n  }\r\n.example-element-detail {\r\n    overflow: hidden;\r\n    display: flex;\r\n  }\r\n.example-element-diagram {\r\n    min-width: 80px;\r\n    border: 2px solid black;\r\n    padding: 8px;\r\n    font-weight: lighter;\r\n    margin: 8px 0;\r\n    height: 104px;\r\n  }\r\n.example-element-symbol {\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n    line-height: normal;\r\n  }\r\n.example-element-description {\r\n    padding: 16px;\r\n  }\r\n.example-element-description-attribution {\r\n    opacity: 0.5;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdmVoaWN1bG9zSW5ncmVzYWRvcy92ZWhpY3Vsb3MtaW5ncmVzYWRvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxTQUFTO0VBQ1g7QUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7QUFFQTtJQUNFLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtFQUNmO0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsYUFBYTtFQUNmO0FBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi92ZWhpY3Vsb3NJbmdyZXNhZG9zL3ZlaGljdWxvcy1pbmdyZXNhZG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICB0ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM3Nzc7XHJcbiAgfVxyXG4gIFxyXG4gIHRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/vehiculosIngresados/vehiculos-ingresados.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/vehiculosIngresados/vehiculos-ingresados.component.ts ***!
  \*****************************************************************************/
/*! exports provided: VehiculosIngresadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculosIngresadosComponent", function() { return VehiculosIngresadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _services_factura_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/factura.service */ "./src/app/services/factura.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let VehiculosIngresadosComponent = class VehiculosIngresadosComponent {
    constructor(NgZone, router, facturaService) {
        this.NgZone = NgZone;
        this.router = router;
        this.facturaService = facturaService;
        this.administrador = false;
        this.ELEMENT_DATA = [];
        this.resultado = null;
        this.columnsToDisplay = ['placa', 'estado'];
        this.dataSource = null;
        this.selection = null;
        localStorage.removeItem('datosFactura');
        var usuarioS = JSON.parse(localStorage.getItem('usuario'));
        if (usuarioS.USUARIO == "admin") {
            this.administrador = true;
        }
        this.facturaService.getAllFactura()
            .subscribe(res => {
            this.resultado = res;
            for (let index = 0; index < this.resultado.length; index++) {
                var estados = "";
                switch (this.resultado[index].TIPO_ESTADO_ID_TIPO_ESTADO) {
                    case 2:
                        estados = "En proceso";
                        break;
                    case 3:
                        estados = "Terminado";
                    default:
                        break;
                }
                this.ELEMENT_DATA.push({
                    placa: "Placa: " + this.resultado[index].PLACA,
                    estado: estados,
                    turno: this.resultado[index].TURNO
                });
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.ELEMENT_DATA);
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }, err => {
        });
    }
    ngOnInit() {
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.placa + 1}`;
    }
    consultar(row) {
        console.log(row.placa);
        localStorage.setItem('Turno', row.turno.toString());
        this.router.navigateByUrl('/Liquidacion');
    }
    eliminar(row) {
        console.log(row.turno);
        this.facturaService.deleteFactura(row.turno.toString())
            .subscribe(res => {
            this.NgZone.runOutsideAngular(() => {
                location.reload();
            });
        });
    }
};
VehiculosIngresadosComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services_factura_service__WEBPACK_IMPORTED_MODULE_7__["FacturaService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], VehiculosIngresadosComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
], VehiculosIngresadosComponent.prototype, "sort", void 0);
VehiculosIngresadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehiculos-ingresados',
        template: __webpack_require__(/*! raw-loader!./vehiculos-ingresados.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/vehiculosIngresados/vehiculos-ingresados.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [__webpack_require__(/*! ./vehiculos-ingresados.component.css */ "./src/app/admin/vehiculosIngresados/vehiculos-ingresados.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _services_factura_service__WEBPACK_IMPORTED_MODULE_7__["FacturaService"]])
], VehiculosIngresadosComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _pantalla_inicio_pantalla_inicio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pantalla-inicio/pantalla-inicio.component */ "./src/app/pantalla-inicio/pantalla-inicio.component.ts");
/* harmony import */ var _operario_registro_vehiculo_registro_vehiculo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./operario/registro-vehiculo/registro-vehiculo.component */ "./src/app/operario/registro-vehiculo/registro-vehiculo.component.ts");
/* harmony import */ var _operario_registrar_entrada_serviteca_registrar_entrada_serviteca_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./operario/registrar-entrada-serviteca/registrar-entrada-serviteca.component */ "./src/app/operario/registrar-entrada-serviteca/registrar-entrada-serviteca.component.ts");
/* harmony import */ var _operario_liquidacion_liquidacion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./operario/liquidacion/liquidacion.component */ "./src/app/operario/liquidacion/liquidacion.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _admin_vehiculo_editar_vehiculo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/vehiculo/editar-vehiculo.component */ "./src/app/admin/vehiculo/editar-vehiculo.component.ts");
/* harmony import */ var _admin_servicios_editar_servicio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/servicios/editar-servicio.component */ "./src/app/admin/servicios/editar-servicio.component.ts");
/* harmony import */ var _admin_vehiculosIngresados_vehiculos_ingresados_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/vehiculosIngresados/vehiculos-ingresados.component */ "./src/app/admin/vehiculosIngresados/vehiculos-ingresados.component.ts");
/* harmony import */ var _reportes_reportes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reportes/reportes.component */ "./src/app/reportes/reportes.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _services_detalle_factura_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/detalle-factura.service */ "./src/app/services/detalle-factura.service.ts");
/* harmony import */ var _services_factura_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/factura.service */ "./src/app/services/factura.service.ts");
/* harmony import */ var _services_descuento_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/descuento.service */ "./src/app/services/descuento.service.ts");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var _services_tipo_vehiculo_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/tipo-vehiculo.service */ "./src/app/services/tipo-vehiculo.service.ts");
/* harmony import */ var _services_vehiculo_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/vehiculo.service */ "./src/app/services/vehiculo.service.ts");
/* harmony import */ var _services_servicio_vehiculo_registrar_entrada_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/servicio-vehiculo-registrar-entrada.service */ "./src/app/services/servicio-vehiculo-registrar-entrada.service.ts");




























const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'inicio', component: _pantalla_inicio_pantalla_inicio_component__WEBPACK_IMPORTED_MODULE_9__["PantallaInicioComponent"] },
    { path: 'registrarEntrada', component: _operario_registrar_entrada_serviteca_registrar_entrada_serviteca_component__WEBPACK_IMPORTED_MODULE_11__["RegistrarEntradaServitecaComponent"] },
    { path: 'registroVehiculo', component: _operario_registro_vehiculo_registro_vehiculo_component__WEBPACK_IMPORTED_MODULE_10__["RegistroVehiculoComponent"] },
    { path: 'nav', component: _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"] },
    { path: 'editarVehiculo', component: _admin_vehiculo_editar_vehiculo_component__WEBPACK_IMPORTED_MODULE_14__["EditarVehiculoComponent"] },
    { path: 'editarServicio', component: _admin_servicios_editar_servicio_component__WEBPACK_IMPORTED_MODULE_15__["EditarServicioComponent"] },
    { path: 'vehiculosIngresados', component: _admin_vehiculosIngresados_vehiculos_ingresados_component__WEBPACK_IMPORTED_MODULE_16__["VehiculosIngresadosComponent"] },
    { path: 'Liquidacion', component: _operario_liquidacion_liquidacion_component__WEBPACK_IMPORTED_MODULE_12__["LiquidacionComponent"] },
    { path: 'Reportes', component: _reportes_reportes_component__WEBPACK_IMPORTED_MODULE_17__["Reportes"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _pantalla_inicio_pantalla_inicio_component__WEBPACK_IMPORTED_MODULE_9__["PantallaInicioComponent"],
            _operario_registro_vehiculo_registro_vehiculo_component__WEBPACK_IMPORTED_MODULE_10__["RegistroVehiculoComponent"],
            _operario_registrar_entrada_serviteca_registrar_entrada_serviteca_component__WEBPACK_IMPORTED_MODULE_11__["RegistrarEntradaServitecaComponent"],
            _operario_liquidacion_liquidacion_component__WEBPACK_IMPORTED_MODULE_12__["LiquidacionComponent"],
            _admin_vehiculo_editar_vehiculo_component__WEBPACK_IMPORTED_MODULE_14__["EditarVehiculoComponent"],
            _admin_servicios_editar_servicio_component__WEBPACK_IMPORTED_MODULE_15__["EditarServicioComponent"],
            _admin_vehiculosIngresados_vehiculos_ingresados_component__WEBPACK_IMPORTED_MODULE_16__["VehiculosIngresadosComponent"],
            _reportes_reportes_component__WEBPACK_IMPORTED_MODULE_17__["Reportes"]
        ],
        imports: [
            _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(routes),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"]
        ],
        providers: [
            _services_usuarios_service__WEBPACK_IMPORTED_MODULE_23__["UsuariosService"],
            _services_tipo_vehiculo_service__WEBPACK_IMPORTED_MODULE_24__["TipoVehiculoService"],
            _services_vehiculo_service__WEBPACK_IMPORTED_MODULE_25__["VehiculoService"],
            _services_servicio_vehiculo_registrar_entrada_service__WEBPACK_IMPORTED_MODULE_26__["servicioVehiculoRegistrarEntradaService"],
            _services_descuento_service__WEBPACK_IMPORTED_MODULE_22__["DescuentoService"],
            _services_factura_service__WEBPACK_IMPORTED_MODULE_21__["FacturaService"],
            _services_detalle_factura_service__WEBPACK_IMPORTED_MODULE_20__["DetalleFacturaService"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.usuario = {
            idUSUARIOS: null,
            USUARIO: '',
            PASSWORD: ''
        };
        this.usuarioObtenido = [];
    }
    ngOnInit() {
        console.log(this.borrar);
        if (this.borrar == 2) {
        }
        else {
            localStorage.removeItem('usuario');
        }
    }
    login() {
        this.userService.getOneUser(this.usuario.USUARIO)
            .subscribe(res => {
            this.usuarioObtenido = res;
            console.log(this.usuarioObtenido);
            if (this.usuarioObtenido.PASSWORD == this.usuario.PASSWORD) {
                this.router.navigateByUrl('/registroVehiculo');
                localStorage.setItem('usuario', JSON.stringify(this.usuarioObtenido));
                var usuarioS = JSON.parse(localStorage.getItem('usuario'));
                return "Se logea";
            }
            else {
                alert("Credenciales invalidas");
                return "No se logea";
            }
        }, err => {
            alert("Credenciales invalidas");
            return "No se logea";
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



/**
 * NgModule that includes all Material modules.
*/
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"]
        ],
        exports: [
            // Material
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavComponent = class NavComponent {
    constructor(router) {
        this.router = router;
        this.links = [];
        this.activeLink = this.links[0];
        this.background = 'primary';
        var usuarioS = JSON.parse(localStorage.getItem('usuario'));
        if (usuarioS == null) {
            this.router.navigateByUrl('/');
        }
        usuarioS.USUARIO = "admin";
        console.log(usuarioS.USUARIO);
        if (usuarioS.USUARIO == 'admin') {
            this.links = [
                { name: 'Registrar entrada', path: '/registroVehiculo' },
                { name: 'Parametrización', path: '/editarServicio' },
                { name: 'Turnos', path: '/vehiculosIngresados' },
                { name: 'Generar reporte', path: '/Reportes' },
                { name: 'Cerrar sesión', path: '/' }
            ];
        }
        else if (usuarioS.USUARIO == 'operario') {
            this.links = [
                { name: 'Registrar entrada', path: '/registroVehiculo' },
                { name: 'Turnos', path: '/vehiculosIngresados' },
                { name: 'Generar reporte', path: '/Reportes' },
                { name: 'Cerrar sesión', path: '/' }
            ];
        }
    }
    ngOnInit() {
    }
};
NavComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html"),
        styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NavComponent);



/***/ }),

/***/ "./src/app/operario/liquidacion/liquidacion.component.css":
/*!****************************************************************!*\
  !*** ./src/app/operario/liquidacion/liquidacion.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cuadro-liquidacion {\r\n    height: 250px;\r\n    border-radius: 50px;\r\n    border: 1px solid #000000;\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\nimg {\r\n    height: 200px;\r\n    width: 200px;\r\n}\r\n\r\n.full{\r\n    width: 100%;\r\n}\r\n\r\n.cuadro-titulo {\r\n    font: bold 120% serif;\r\n    text-align: center;\r\n    border: 1px solid #000000;\r\n    background: #007bff;\r\n}\r\n\r\n.cuadro-informacion {\r\n    font: bold 100% serif;\r\n    border: 1px solid #000000;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\ntd, th {\r\n  width: 25%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BlcmFyaW8vbGlxdWlkYWNpb24vbGlxdWlkYWNpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL29wZXJhcmlvL2xpcXVpZGFjaW9uL2xpcXVpZGFjaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VhZHJvLWxpcXVpZGFjaW9uIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuLmZ1bGx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY3VhZHJvLXRpdHVsbyB7XHJcbiAgICBmb250OiBib2xkIDEyMCUgc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgYmFja2dyb3VuZDogIzAwN2JmZjtcclxufVxyXG5cclxuLmN1YWRyby1pbmZvcm1hY2lvbiB7XHJcbiAgICBmb250OiBib2xkIDEwMCUgc2VyaWY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRkLCB0aCB7XHJcbiAgd2lkdGg6IDI1JTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/operario/liquidacion/liquidacion.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/operario/liquidacion/liquidacion.component.ts ***!
  \***************************************************************/
/*! exports provided: LiquidacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiquidacionComponent", function() { return LiquidacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_factura_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/factura.service */ "./src/app/services/factura.service.ts");
/* harmony import */ var _services_detalle_factura_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/detalle-factura.service */ "./src/app/services/detalle-factura.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LiquidacionComponent = class LiquidacionComponent {
    constructor(router, DetalleFacturaService, facturaService) {
        this.router = router;
        this.DetalleFacturaService = DetalleFacturaService;
        this.facturaService = facturaService;
        this.DataElement = [];
        this.displayedColumns = [];
        this.dataSource = null;
        this.descuento = null;
        this.factura = [];
        this.fecha = null;
        this.resultado = null;
        this.services = null;
        this.totalCost = null;
        this.facturaUpdate = {
            TIPO_ESTADO_ID_TIPO_ESTADO: 0,
        };
        var Turno = localStorage.getItem('Turno');
        facturaService.getOneFactura(Number.parseInt(Turno))
            .subscribe(res => {
            this.factura = res;
            console.log(this.factura);
            if (this.factura.ID_DESCUENTOS == 0) {
                this.descuento = " No Aplica";
            }
            else {
                this.descuento = this.factura.PORCENTAJE_DESCUENTO;
            }
            var date = new Date(this.factura.FECHA_ENTRADA);
            this.fecha = date.getDay() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes();
            DetalleFacturaService.getAll(Number.parseInt(this.factura.ID_FACTURA))
                .subscribe(res => {
                this.resultado = res;
                for (let index = 0; index < this.resultado.length; index++) {
                    this.DataElement.push({
                        NR: index + 1,
                        Nombre: this.resultado[index].NOMBRE_SERVICIO,
                        precio: this.resultado[index].VALOR
                    });
                }
                this.displayedColumns = ['NR', 'Nombre', 'precio'];
                this.dataSource = this.DataElement;
                this.services = this.getServices();
                this.totalCost = this.getTotalCost();
            });
        });
    }
    ngOnInit() {
    }
    getServices() {
        return this.dataSource.map(t => t.NR).length;
    }
    getTotalCost() {
        return this.dataSource.map(t => t.precio).reduce((acc, value) => acc + value, 0);
    }
    actualizarFactura(numero) {
        var texto;
        if (numero == 3) {
            texto = "¿Los servicios que se ofrecen al vehiculo han terminado?";
        }
        else if (numero == 4) {
            texto = "¿Desea liquidar la factura?";
        }
        var mensaje = confirm(texto);
        if (mensaje) {
            this.facturaUpdate.TIPO_ESTADO_ID_TIPO_ESTADO = numero;
            this.facturaService.updateFactura(this.factura.ID_FACTURA, this.facturaUpdate)
                .subscribe(res => {
                console.log(res);
                this.router.navigateByUrl('/vehiculosIngresados');
            });
        }
    }
};
LiquidacionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_detalle_factura_service__WEBPACK_IMPORTED_MODULE_3__["DetalleFacturaService"] },
    { type: _services_factura_service__WEBPACK_IMPORTED_MODULE_2__["FacturaService"] }
];
LiquidacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-liquidacion',
        template: __webpack_require__(/*! raw-loader!./liquidacion.component.html */ "./node_modules/raw-loader/index.js!./src/app/operario/liquidacion/liquidacion.component.html"),
        styles: [__webpack_require__(/*! ./liquidacion.component.css */ "./src/app/operario/liquidacion/liquidacion.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_detalle_factura_service__WEBPACK_IMPORTED_MODULE_3__["DetalleFacturaService"], _services_factura_service__WEBPACK_IMPORTED_MODULE_2__["FacturaService"]])
], LiquidacionComponent);



/***/ }),

/***/ "./src/app/operario/registrar-entrada-serviteca/registrar-entrada-serviteca.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/operario/registrar-entrada-serviteca/registrar-entrada-serviteca.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhcmlvL3JlZ2lzdHJhci1lbnRyYWRhLXNlcnZpdGVjYS9yZWdpc3RyYXItZW50cmFkYS1zZXJ2aXRlY2EuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/operario/registrar-entrada-serviteca/registrar-entrada-serviteca.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/operario/registrar-entrada-serviteca/registrar-entrada-serviteca.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: RegistrarEntradaServitecaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarEntradaServitecaComponent", function() { return RegistrarEntradaServitecaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _services_factura_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/factura.service */ "./src/app/services/factura.service.ts");
/* harmony import */ var _services_descuento_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/descuento.service */ "./src/app/services/descuento.service.ts");
/* harmony import */ var _services_detalle_factura_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/detalle-factura.service */ "./src/app/services/detalle-factura.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_servicio_vehiculo_registrar_entrada_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/servicio-vehiculo-registrar-entrada.service */ "./src/app/services/servicio-vehiculo-registrar-entrada.service.ts");











let RegistrarEntradaServitecaComponent = class RegistrarEntradaServitecaComponent {
    constructor(router, DetalleFacturaService, FacturaService, DescuentoService, servicioVehiculoRegistrarEntradaService) {
        this.router = router;
        this.DetalleFacturaService = DetalleFacturaService;
        this.FacturaService = FacturaService;
        this.DescuentoService = DescuentoService;
        this.servicioVehiculoRegistrarEntradaService = servicioVehiculoRegistrarEntradaService;
        this.vehiculoObtenido = [];
        this.resultado = [];
        this.ELEMENT_DATA = [];
        this.factura = {
            ID_FACTURA: 0,
            CLIENTE_ID_CLIENTE: 0,
            TOTAL: "",
            TOTAL_NETO: "",
            TURNO: "",
            FECHA_ENTRADA: null,
            FECHA_SALIDA: null,
            ACTIVO: "",
            VEHICULO_ID_VEHICULO: 0,
            TIPO_ESTADO_ID_TIPO_ESTADO: 0,
            DESCUENTOS_ID_DESCUENTOS: 0
        };
        this.detalle = {
            FACTURA_ID_FACTURA: 0,
            ID_DETALLE_FACTURA: 0,
            SERVICIOS_VEHICULO_ID_SERVICIOS_VEHICULO: 0
        };
        this.descuento = [];
        this.datosFactura = [];
        this.displayedColumns = ['servicios', 'precio', 'select'];
        this.dataSource = null;
        this.selection = null;
        this.facturaObtenida = [];
        this.precios = 0;
        this.encendidos = 0;
        this.IDdescuento = 0;
        this.numeroDescuento = "No Aplica";
        this.precioNeto = 0;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.ELEMENT_DATA);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        var datosFactura = JSON.parse(localStorage.getItem('datosFactura'));
        this.datosFactura = datosFactura;
        this.factura.CLIENTE_ID_CLIENTE = this.datosFactura.clienteID;
        this.factura.VEHICULO_ID_VEHICULO = this.datosFactura.VehiculoID;
        this.factura.TIPO_ESTADO_ID_TIPO_ESTADO = 2;
        this.factura.ACTIVO = 'S';
        this.servicioVehiculoRegistrarEntradaService.getOneClienteVehiculo(datosFactura.tipoVehiculo)
            .subscribe(res => {
            this.resultado = res;
            for (let index = 0; index < this.resultado.length; index++) {
                this.ELEMENT_DATA.push({
                    servicios: this.resultado[index].NOMBRE_SERVICIO,
                    precio: this.resultado[index].VALOR,
                    id: this.resultado[index].ID_SERVICIOS_VEHICULO
                });
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.ELEMENT_DATA);
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
        this.DescuentoService.getAll()
            .subscribe(res => {
            this.descuento = res;
            console.log(res);
        });
    }
    ngOnInit() {
        console.log();
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    masterToggle() {
        this.precios = 0;
        this.encendidos = 0;
        if (!this.isAllSelected()) {
            for (let index = 0; index < this.resultado.length; index++) {
                this.precios = this.precios + this.resultado[index].VALOR;
                this.encendidos = this.encendidos + 1;
            }
        }
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
        this.calcularPrecio(this.precios, this.encendidos);
    }
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.servicios + 1}`;
    }
    registrarFactura() {
        this.factura.TOTAL = this.precios.toString();
        this.factura.TOTAL_NETO = this.calcularPrecio(this.precios, this.encendidos).toString();
        this.factura.DESCUENTOS_ID_DESCUENTOS = this.IDdescuento;
        var Dates = new Date();
        this.factura.TURNO = this.generarTurno(Dates);
        this.FacturaService.createFactura(this.factura)
            .subscribe(res => {
            console.log(res);
            this.FacturaService.getOneFactura(Number.parseInt(this.factura.TURNO))
                .subscribe(res => {
                this.facturaObtenida = res;
                this.asignarServicios();
            });
        });
        console.log(this.factura);
    }
    leer(row) {
        if (this.selection.isSelected(row)) {
            this.precios = this.precios - row.precio;
            this.encendidos = this.encendidos - 1;
        }
        else {
            this.precios = this.precios + row.precio;
            this.encendidos = this.encendidos + 1;
        }
        this.calcularPrecio(this.precios, this.encendidos);
    }
    calcularPrecio(precio, numero) {
        var porcentajeDescuento = 0;
        this.descuento.forEach(descuento => {
            if (numero >= descuento.CANTIDAD_SERVICIOS) {
                this.IDdescuento = descuento.ID_DESCUENTOS;
                porcentajeDescuento = descuento.PORCENTAJE_DESCUENTO;
            }
        });
        if (porcentajeDescuento != 0) {
            this.numeroDescuento = porcentajeDescuento.toString() + "%";
        }
        else {
            this.numeroDescuento = "No Aplica";
        }
        var descuento = porcentajeDescuento / 100;
        descuento = descuento * precio;
        descuento = precio - descuento;
        this.precioNeto = descuento;
        return descuento;
    }
    generarTurno(Dates) {
        var fecha = Dates.getFullYear() + "" + Dates.getMonth() + "" + Dates.getHours() + "" + Dates.getMinutes() + "" + Dates.getSeconds();
        return fecha;
    }
    asignarServicios() {
        this.detalle.FACTURA_ID_FACTURA = this.facturaObtenida.ID_FACTURA;
        this.dataSource.data.forEach(row => {
            if (this.selection.isSelected(row)) {
                console.log(this.selection.isSelected(row));
                console.log(row.id);
                this.detalle.SERVICIOS_VEHICULO_ID_SERVICIOS_VEHICULO = row.id;
                this.DetalleFacturaService.createDetalleFactura(this.detalle)
                    .subscribe(res => {
                    console.log(res);
                });
            }
        });
        alert("Su turno es: " + this.factura.TURNO);
        this.router.navigateByUrl('/vehiculosIngresados');
    }
};
RegistrarEntradaServitecaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _services_detalle_factura_service__WEBPACK_IMPORTED_MODULE_8__["DetalleFacturaService"] },
    { type: _services_factura_service__WEBPACK_IMPORTED_MODULE_6__["FacturaService"] },
    { type: _services_descuento_service__WEBPACK_IMPORTED_MODULE_7__["DescuentoService"] },
    { type: _services_servicio_vehiculo_registrar_entrada_service__WEBPACK_IMPORTED_MODULE_10__["servicioVehiculoRegistrarEntradaService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], RegistrarEntradaServitecaComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
], RegistrarEntradaServitecaComponent.prototype, "sort", void 0);
RegistrarEntradaServitecaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registrar-entrada-serviteca',
        template: __webpack_require__(/*! raw-loader!./registrar-entrada-serviteca.component.html */ "./node_modules/raw-loader/index.js!./src/app/operario/registrar-entrada-serviteca/registrar-entrada-serviteca.component.html"),
        styles: [__webpack_require__(/*! ./registrar-entrada-serviteca.component.css */ "./src/app/operario/registrar-entrada-serviteca/registrar-entrada-serviteca.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _services_detalle_factura_service__WEBPACK_IMPORTED_MODULE_8__["DetalleFacturaService"], _services_factura_service__WEBPACK_IMPORTED_MODULE_6__["FacturaService"], _services_descuento_service__WEBPACK_IMPORTED_MODULE_7__["DescuentoService"], _services_servicio_vehiculo_registrar_entrada_service__WEBPACK_IMPORTED_MODULE_10__["servicioVehiculoRegistrarEntradaService"]])
], RegistrarEntradaServitecaComponent);



/***/ }),

/***/ "./src/app/operario/registro-vehiculo/registro-vehiculo.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/operario/registro-vehiculo/registro-vehiculo.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  }\r\n\r\n.input-full-width {\r\n  margin: 10px;\r\n  width: 95%;\r\n}\r\n\r\n.input-mid-width{\r\n  margin: 10px;\r\n  width: 50%;\r\n}\r\n\r\n.button{\r\n  background: #007bff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BlcmFyaW8vcmVnaXN0cm8tdmVoaWN1bG8vcmVnaXN0cm8tdmVoaWN1bG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYOztBQUVGO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9vcGVyYXJpby9yZWdpc3Ryby12ZWhpY3Vsby9yZWdpc3Ryby12ZWhpY3Vsby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbi5pbnB1dC1mdWxsLXdpZHRoIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuLmlucHV0LW1pZC13aWR0aHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/operario/registro-vehiculo/registro-vehiculo.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/operario/registro-vehiculo/registro-vehiculo.component.ts ***!
  \***************************************************************************/
/*! exports provided: RegistroVehiculoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroVehiculoComponent", function() { return RegistroVehiculoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tipo_vehiculo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tipo-vehiculo.service */ "./src/app/services/tipo-vehiculo.service.ts");
/* harmony import */ var _services_vehiculo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/vehiculo.service */ "./src/app/services/vehiculo.service.ts");
/* harmony import */ var _services_cliente_vehiculo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cliente-vehiculo.service */ "./src/app/services/cliente-vehiculo.service.ts");
/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cliente.service */ "./src/app/services/cliente.service.ts");
/* harmony import */ var _services_factura_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/factura.service */ "./src/app/services/factura.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let RegistroVehiculoComponent = class RegistroVehiculoComponent {
    constructor(facturaService, tipoVehiculoService, VehiculoService, clienteService, clienteVehiculoService, router) {
        this.facturaService = facturaService;
        this.tipoVehiculoService = tipoVehiculoService;
        this.VehiculoService = VehiculoService;
        this.clienteService = clienteService;
        this.clienteVehiculoService = clienteVehiculoService;
        this.router = router;
        this.selected = 1;
        this.stateCtrl = false;
        this.dueno = false;
        this.tipoVehiculos = [];
        this.vehiculObtenido = false;
        this.clienteobtenido = false;
        this.vehiculo = {
            ID_VEHICULO: 0,
            PLACA: '',
            ACTIVO: 'S',
            TIPO_VEHICULO_ID_TIPO_VEHICULO: 0,
            TIPO_ESTADO_ID_TIPO_ESTADO: 1
        };
        this.cliente = {
            ID_CLIENTE: 0,
            NOMBRE: '',
            APELLIDOS: '',
            CEDULA: null,
            TELEFONO: null,
            ACTIVO: 'S'
        };
        this.clienteXVehiculo = {
            ID_CLIENTE_VEHICULO: 0,
            VEHICULO_ID_VEHICULO: 0,
            VEHICULO_TIPO_VEHICULO_ID_TIPO_VEHICULO: 0,
            CLIENTE_ID_CLIENTE: 0
        };
        this.datosFactura = {
            clienteID: 0,
            VehiculoID: 0,
            Placa: "",
            tipoVehiculo: 0
        };
        this.vehiculoObtenido = [];
        this.clienteObtenido = [];
        this.clientexVehiculo = [];
        this.tipoVehiculoService.getAll()
            .subscribe(res => {
            this.tipoVehiculos = res;
            console.log(this.tipoVehiculos);
            for (let vehiculo of this.tipoVehiculos) {
                console.log(vehiculo.NOMBRE);
            }
        });
    }
    ngOnInit() {
    }
    almacenarDatosFactura() {
        this.datosFactura.VehiculoID = this.vehiculo.ID_VEHICULO;
        this.datosFactura.Placa = this.vehiculoObtenido.PLACA;
        this.datosFactura.clienteID = this.cliente.ID_CLIENTE;
        this.datosFactura.tipoVehiculo = this.vehiculo.TIPO_VEHICULO_ID_TIPO_VEHICULO;
        localStorage.setItem('datosFactura', JSON.stringify(this.datosFactura));
    }
    registrarVehiculo() {
        if (this.vehiculo.ID_VEHICULO == 0) {
            console.log("creo vehiculo");
            this.VehiculoService.createVehiculo(this.vehiculo)
                .subscribe(res => {
                this.VehiculoService.getOneVehiculo(this.vehiculo.PLACA)
                    .subscribe(res => {
                    console.log("Consulto el vehiculo");
                    this.vehiculoObtenido = res;
                    this.vehiculo = this.vehiculoObtenido;
                    this.vehiculObtenido = true;
                    if (this.cliente.ID_CLIENTE == 0 && this.stateCtrl == true) {
                        this.crearCliente();
                    }
                    else if (this.dueno == true) {
                        this.crearClienteXVehiculo();
                    }
                    else {
                        this.almacenarDatosFactura();
                        this.router.navigateByUrl('/registrarEntrada');
                    }
                }, err => {
                });
            });
        }
        else if (this.cliente.ID_CLIENTE == 0 && this.stateCtrl == true) {
            this.crearCliente();
        }
        else if (this.dueno == true) {
            this.crearClienteXVehiculo();
        }
        else {
            this.almacenarDatosFactura();
            this.router.navigateByUrl('/registrarEntrada');
        }
    }
    buscarVehiculo() {
        this.facturaService.getDisponible(this.vehiculo.PLACA)
            .subscribe(res => {
            alert("El vehiculo se encuentra en la serviteca");
        }, err => {
            this.VehiculoService.getOneVehiculo(this.vehiculo.PLACA)
                .subscribe(res => {
                this.vehiculoObtenido = res;
                this.vehiculo = this.vehiculoObtenido;
                this.vehiculObtenido = true;
            }, err => {
                this.vehiculObtenido = false;
                this.vehiculo.ID_VEHICULO = 0;
            });
        });
    }
    buscarCliente() {
        console.log("" + this.stateCtrl);
        if (this.stateCtrl == true) {
            this.clienteobtenido = false;
            this.cliente.ID_CLIENTE = 0;
            this.cliente.CEDULA = null;
        }
        else {
            this.clienteService.getOneCliente(this.cliente.CEDULA)
                .subscribe(res => {
                this.clienteObtenido = res;
                this.cliente = this.clienteObtenido;
                this.clienteobtenido = true;
            });
        }
    }
    crearCliente() {
        console.log(this.cliente.CEDULA);
        console.log("creo cliente");
        this.clienteService.createCliente(this.cliente)
            .subscribe(res => {
            this.clienteService.getOneCliente(this.cliente.CEDULA)
                .subscribe(res => {
                this.clienteObtenido = res;
                this.cliente = this.clienteObtenido;
                this.clienteobtenido = true;
                if (this.dueno == true) {
                    this.crearClienteXVehiculo();
                }
                else {
                    this.almacenarDatosFactura();
                    this.router.navigateByUrl('/registrarEntrada');
                }
            });
        });
    }
    crearClienteXVehiculo() {
        console.log("entro a crear cliente vehiculo");
        this.clienteXVehiculo.VEHICULO_ID_VEHICULO = this.vehiculo.ID_VEHICULO;
        this.clienteXVehiculo.CLIENTE_ID_CLIENTE = this.cliente.ID_CLIENTE;
        this.clienteXVehiculo.VEHICULO_TIPO_VEHICULO_ID_TIPO_VEHICULO = this.vehiculo.TIPO_VEHICULO_ID_TIPO_VEHICULO;
        this.clienteVehiculoService.getOneClienteVehiculo(this.vehiculo.ID_VEHICULO)
            .subscribe(res => {
            this.clientexVehiculo = res;
            this.clienteXVehiculo.ID_CLIENTE_VEHICULO = this.clientexVehiculo.ID_CLIENTE_VEHICULO;
            if (this.clienteXVehiculo.CLIENTE_ID_CLIENTE != this.cliente.ID_CLIENTE) {
                this.clienteVehiculoService.updateClienteVehiculo(this.clienteXVehiculo.ID_CLIENTE_VEHICULO, this.clienteXVehiculo)
                    .subscribe(res => {
                    this.almacenarDatosFactura();
                    this.router.navigateByUrl('/registrarEntrada');
                });
            }
            this.almacenarDatosFactura();
            this.router.navigateByUrl('/registrarEntrada');
        }, err => {
            console.log("entro");
            this.clienteVehiculoService.createClienteVehiculo(this.clienteXVehiculo)
                .subscribe(res => {
                this.almacenarDatosFactura();
                this.router.navigateByUrl('/registrarEntrada');
            });
        });
    }
};
RegistroVehiculoComponent.ctorParameters = () => [
    { type: _services_factura_service__WEBPACK_IMPORTED_MODULE_6__["FacturaService"] },
    { type: _services_tipo_vehiculo_service__WEBPACK_IMPORTED_MODULE_2__["TipoVehiculoService"] },
    { type: _services_vehiculo_service__WEBPACK_IMPORTED_MODULE_3__["VehiculoService"] },
    { type: _services_cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"] },
    { type: _services_cliente_vehiculo_service__WEBPACK_IMPORTED_MODULE_4__["ClienteVehiculoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
RegistroVehiculoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro-vehiculo',
        template: __webpack_require__(/*! raw-loader!./registro-vehiculo.component.html */ "./node_modules/raw-loader/index.js!./src/app/operario/registro-vehiculo/registro-vehiculo.component.html"),
        styles: [__webpack_require__(/*! ./registro-vehiculo.component.css */ "./src/app/operario/registro-vehiculo/registro-vehiculo.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_factura_service__WEBPACK_IMPORTED_MODULE_6__["FacturaService"], _services_tipo_vehiculo_service__WEBPACK_IMPORTED_MODULE_2__["TipoVehiculoService"], _services_vehiculo_service__WEBPACK_IMPORTED_MODULE_3__["VehiculoService"],
        _services_cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"], _services_cliente_vehiculo_service__WEBPACK_IMPORTED_MODULE_4__["ClienteVehiculoService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], RegistroVehiculoComponent);



/***/ }),

/***/ "./src/app/pantalla-inicio/pantalla-inicio.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pantalla-inicio/pantalla-inicio.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbnRhbGxhLWluaWNpby9wYW50YWxsYS1pbmljaW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pantalla-inicio/pantalla-inicio.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pantalla-inicio/pantalla-inicio.component.ts ***!
  \**************************************************************/
/*! exports provided: PantallaInicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PantallaInicioComponent", function() { return PantallaInicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/nav.component */ "./src/app/nav/nav.component.ts");



let PantallaInicioComponent = class PantallaInicioComponent {
    constructor() { }
    ngOnInit() {
        localStorage.setItem("titulo", "hola");
    }
};
PantallaInicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pantalla-inicio',
        template: __webpack_require__(/*! raw-loader!./pantalla-inicio.component.html */ "./node_modules/raw-loader/index.js!./src/app/pantalla-inicio/pantalla-inicio.component.html"),
        styles: [__webpack_require__(/*! ./pantalla-inicio.component.css */ "./src/app/pantalla-inicio/pantalla-inicio.component.css")]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PantallaInicioComponent);



/***/ }),

/***/ "./src/app/reportes/reportes.component.css":
/*!*************************************************!*\
  !*** ./src/app/reportes/reportes.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cuadro-reportes{\r\n    text-align: center;\r\n    background: #f2f2f2;\r\n    border: 1px solid #000000;\r\n}\r\n.letras{\r\n    font:bold 100% serif;\r\n    color: #000;\r\n}\r\n.fechas{\r\n    font: 100% serif;\r\n    border-radius: 10px;    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0ZXMvcmVwb3J0ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0ZXMvcmVwb3J0ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdWFkcm8tcmVwb3J0ZXN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxufVxyXG4ubGV0cmFze1xyXG4gICAgZm9udDpib2xkIDEwMCUgc2VyaWY7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4uZmVjaGFze1xyXG4gICAgZm9udDogMTAwJSBzZXJpZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgIFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/reportes/reportes.component.ts":
/*!************************************************!*\
  !*** ./src/app/reportes/reportes.component.ts ***!
  \************************************************/
/*! exports provided: Reportes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reportes", function() { return Reportes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Reportes = class Reportes {
    constructor() { }
    ngOnInit() {
    }
};
Reportes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reporte',
        template: __webpack_require__(/*! raw-loader!./reportes.component.html */ "./node_modules/raw-loader/index.js!./src/app/reportes/reportes.component.html"),
        styles: [__webpack_require__(/*! ./reportes.component.css */ "./src/app/reportes/reportes.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Reportes);



/***/ }),

/***/ "./src/app/services/cliente-vehiculo.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/cliente-vehiculo.service.ts ***!
  \******************************************************/
/*! exports provided: ClienteVehiculoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteVehiculoService", function() { return ClienteVehiculoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ClienteVehiculoService = class ClienteVehiculoService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://localhost:3000/api';
    }
    getOneClienteVehiculo(ID) {
        return this.http.get(`${this.API_URI}/clienteVehiculo/${ID}`);
    }
    createClienteVehiculo(cliente) {
        return this.http.post(`${this.API_URI}/clienteVehiculo`, cliente);
    }
    updateClienteVehiculo(ID, cliente) {
        return this.http.put(`${this.API_URI}/clienteVehiculo/${ID}`, cliente);
    }
};
ClienteVehiculoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ClienteVehiculoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ClienteVehiculoService);



/***/ }),

/***/ "./src/app/services/cliente.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/cliente.service.ts ***!
  \*********************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ClienteService = class ClienteService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://localhost:3000/api';
    }
    getOneCliente(ID) {
        return this.http.get(`${this.API_URI}/cliente/${ID}`);
    }
    createCliente(cliente) {
        return this.http.post(`${this.API_URI}/cliente`, cliente);
    }
    updateCliente(ID, cliente) {
        return this.http.put(`${this.API_URI}/cliente`, cliente);
    }
};
ClienteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ClienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ClienteService);



/***/ }),

/***/ "./src/app/services/descuento.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/descuento.service.ts ***!
  \***********************************************/
/*! exports provided: DescuentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescuentoService", function() { return DescuentoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DescuentoService = class DescuentoService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://localhost:3000/api';
    }
    getAll() {
        return this.http.get(`${this.API_URI}/descuento`);
    }
};
DescuentoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DescuentoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DescuentoService);



/***/ }),

/***/ "./src/app/services/detalle-factura.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/detalle-factura.service.ts ***!
  \*****************************************************/
/*! exports provided: DetalleFacturaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleFacturaService", function() { return DetalleFacturaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DetalleFacturaService = class DetalleFacturaService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://localhost:3000/api';
    }
    getAll(ID) {
        return this.http.get(`${this.API_URI}/detalleFactura/${ID}`);
    }
    createDetalleFactura(detalleFactura) {
        return this.http.post(`${this.API_URI}/detalleFactura`, detalleFactura);
    }
};
DetalleFacturaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DetalleFacturaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DetalleFacturaService);



/***/ }),

/***/ "./src/app/services/factura.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/factura.service.ts ***!
  \*********************************************/
/*! exports provided: FacturaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaService", function() { return FacturaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FacturaService = class FacturaService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://localhost:3000/api';
    }
    getOneFactura(ID) {
        return this.http.get(`${this.API_URI}/factura/${ID}`);
    }
    getAllFactura() {
        return this.http.get(`${this.API_URI}/factura`);
    }
    createFactura(factura) {
        return this.http.post(`${this.API_URI}/factura`, factura);
    }
    updateFactura(ID, factura) {
        console.log(factura);
        return this.http.put(`${this.API_URI}/factura/${ID}`, factura);
    }
    deleteFactura(TURNO) {
        return this.http.delete(`${this.API_URI}/factura/${TURNO}`);
    }
    getDisponible(PLACA) {
        return this.http.get(`${this.API_URI}/factura/disponible/${PLACA}`);
    }
};
FacturaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FacturaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], FacturaService);



/***/ }),

/***/ "./src/app/services/servicio-vehiculo-registrar-entrada.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/servicio-vehiculo-registrar-entrada.service.ts ***!
  \*************************************************************************/
/*! exports provided: servicioVehiculoRegistrarEntradaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "servicioVehiculoRegistrarEntradaService", function() { return servicioVehiculoRegistrarEntradaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let servicioVehiculoRegistrarEntradaService = class servicioVehiculoRegistrarEntradaService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://localhost:3000/api';
    }
    getOneClienteVehiculo(ID) {
        return this.http.get(`${this.API_URI}/servicioVehiculo/${ID}`);
    }
};
servicioVehiculoRegistrarEntradaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
servicioVehiculoRegistrarEntradaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], servicioVehiculoRegistrarEntradaService);



/***/ }),

/***/ "./src/app/services/tipo-vehiculo.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/tipo-vehiculo.service.ts ***!
  \***************************************************/
/*! exports provided: TipoVehiculoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoVehiculoService", function() { return TipoVehiculoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TipoVehiculoService = class TipoVehiculoService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://localhost:3000/api';
    }
    getAll() {
        return this.http.get(`${this.API_URI}/tipoVehiculo`);
    }
};
TipoVehiculoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TipoVehiculoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], TipoVehiculoService);



/***/ }),

/***/ "./src/app/services/usuarios.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/usuarios.service.ts ***!
  \**********************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UsuariosService = class UsuariosService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://localhost:3000/api';
    }
    getOneUser(USUARIO) {
        return this.http.get(`${this.API_URI}/usuarios/${USUARIO}`);
    }
};
UsuariosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UsuariosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UsuariosService);



/***/ }),

/***/ "./src/app/services/vehiculo.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/vehiculo.service.ts ***!
  \**********************************************/
/*! exports provided: VehiculoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculoService", function() { return VehiculoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let VehiculoService = class VehiculoService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://localhost:3000/api';
    }
    getOneVehiculo(PLACA) {
        return this.http.get(`${this.API_URI}/vehiculo/${PLACA}`);
    }
    createVehiculo(vehiculo) {
        return this.http.post(`${this.API_URI}/vehiculo`, vehiculo);
    }
};
VehiculoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VehiculoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], VehiculoService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ppi\cuci-mobil\aplicativo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map