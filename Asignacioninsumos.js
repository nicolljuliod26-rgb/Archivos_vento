class Asignacioninsumos{
    id_asignacion_ins;
    id_orden_produccion ;
    id_insumo;
    cantidad_asignada;
    cantidad_devuelta;
    observacion_estado;

    constructor ( id_orden_produccion, id_insumo, cantidad_asignada){
        this.id_orden_produccion = id_orden_produccion;
        this.id_insumo = id_insumo;
        this.cantidad_asignada =cantidad_asignada;
        this.cantidad_devuelta = 0;
        this.observacion_estado = null;
        this.id_asignacion_ins = null;

    }


    set cantidad_asignada(value) {
        this.cantidad_asignada = value
    }

    set observacion_estado(value) {
        this.observacion_estado = value
    }

    set cantidad_devuelta(value) {
        this.cantidad_devuelta = value
    }

    get id_asignacion_emp() {
        return this.id_asignacion_ins
    }

    get id_orden_produccion() {
        return this.id_orden_produccion
    }

    get id_insumo() {
        return this.id_insumo
    }

    get cantidad_asignada(){
        return this.cantidad_asignada
    }

    get cantidad_devuelta(){
        return this.cantidad_devuelta
    }

    get observacion_estado(){
        return this.observacion_estado
    }

 tojson(){
    return{
        id_asignacion_ins: this.id_asignacion_ins,
        id_orden_produccion: this.id_orden_produccion,
        id_insumo: this.id_insumo,
        cantidad_asignada: this.cantidad_asignada,
        cantidad_devuelta: this.cantidad_devuelta,
        observacion_estado: this.observacion_estado
    };
}

}
module.exports = Asignacioninsumos