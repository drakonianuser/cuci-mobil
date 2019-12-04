export interface factura {
    ID_FACTURA?: number,
    CLIENTE_ID_CLIENTE: number,
    TOTAL: string,
    TOTAL_NETO: string,
    TURNO: string,
    FECHA_ENTRADA?: string,
    FECHA_SALIDA: string,
    ACTIVO: string,
    VEHICULO_ID_VEHICULO: number,
    TIPO_ESTADO_ID_TIPO_ESTADO: number,
    DESCUENTOS_ID_DESCUENTOS: number
}
