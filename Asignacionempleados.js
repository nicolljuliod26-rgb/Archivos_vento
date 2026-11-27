class Asignacionempleado{
    id_asignacion_emp;
    id_orden_produccion ;
    id_empleado;
    rol_en_evento;
    hora_citacion;
    asistencia_confirmada;

    constructor ( id_empleado, id_orden_produccion, rol_en_evento, hora_citacion, asistencia_confirmada){
        this.id_asignacion_emp = null;
        this.id_empleado = id_empleado;
        this. id_orden_produccion = id_orden_produccion;
        this.rol_en_evento = rol_en_evento;
        this.hora_citacion = hora_citacion;
        this.asistencia_confirmada = false;

    }


    set rol_en_evento(value) {
        this.rol_en_evento = value
    }

    set hora_citacion(value) {
        this.hora_citacion = value
    }

    set asistencia_confirmada(value){
        this.asistencia_confirmada = value
    }

    get id_asignacion_emp() {
        return this.id_asignacion_emp
    }

    get id_orden_produccion() {
        return this.id_orden_produccion
    }

    get id_empleado() {
        return this.id_empleado
    }

    get rol_en_evento(){
        return this.rol_en_evento
    }

    get hora_citacion(){
        return this.hora_citacion
    }

    get asistencia_confirmada(){
        return this.asistencia_confirmada
    }



tojson(){
    return{
        id_asignacion_emp: this.id_asignacion_emp,
        id_orden_produccion: this.id_orden_produccion,
        id_empleado: this.id_empleado,
        rol_en_evento: this.rol_en_evento,
        hora_citacion: this.hora_citacion,
        asistencia_confirmada: this.asistencia_confirmada
    };
}

}

    module.exports = Asignacionempleado



