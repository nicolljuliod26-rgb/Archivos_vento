class Alertasinvetario{
    id_alerta;
    fecha_evaluada;
    id_insumo;
    nivel_riesgo;
    mensaje_prediccion;
    revisada;
    fecha_generacion;


    constructor (fecha_evaluada, id_insumo, nivel_riesgo, mensaje_prediccion){
        this.id_alerta = null;
        this.revisada = revisada;
        this.fecha_evaluada = fecha_evaluada;
        this.id_insumo = id_insumo;
        this.nivel_riesgo = nivel_riesgo;
        this.mensaje_prediccion= mensaje_prediccion;
        this.fecha_generacion = new Date();

    }

    set revisada(value){
        this.revisada = value
    }

    get fecha_evaluada() {
        return this.fecha_evaluada
    }

    get id_insumo() {
        return this.id_insumo
    }

    get nivel_riesgo() {
        return this.nivel_riesgo
    }

    get mensaje_prediccion(){
        return this.mensaje_prediccion
    }

    get revisada(){
        return this.revisada
    }

    get id_alerta(){
        return this.id_alerta
        }


tojson(){
    return {
        id_alerta: this.id_alerta,
        fecha_evaluada: this.fecha_evaluada,
        id_insumo: this.id_insumo,
        nivel_riesgo: this.nivel_riesgo,
        mensaje_prediccion: this.mensaje_prediccion,
        revisada: this.revisada,
        fecha_generacion: this.fecha_generacion
        };
    }

}




module.exports = Alertasinvetario



