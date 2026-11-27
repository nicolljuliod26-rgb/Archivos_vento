class Ayudalinea{
    id_ayuda;
    id_rol_destino ;
    macroproceso;
    titulo;
    contenido;
    orden_visualizacion;
    estado;

    constructor ( id_rol_destino, macroproceso, titulo,contenido, orden_visualizacion, estado){
        this.id_ayuda = null;
        this.id_rol_destino = id_rol_destino;
        this.macroproceso = macroproceso;
        this.titulo = titulo;
        this.contenido = contenido;
        this.orden_visualizacion = orden_visualizacion;
        this.estado = estado;

    }


    set macroproceso(value) {
        this.macroproceso= value
    }

    set titulo(value) {
        this.titulo = value
    }

    set contenido(value) {
        this.contenido = value
    }

    set orden_visualizacion(value){
        this.orden_visualizacion = value
    }

    set estado(value){
        this.estado = value
    }

    get id_ayuda() {
        return this.id_ayuda
    }

    get id_rol_destino() {
        return this.id_rol_destino
    }

    get macroproceso() {
        return this.macroproceso
    }

    get titulo(){
        return this.titulo
    }

    get contenido(){
        return this.contenido
    }

    get orden_visualizacion(){
        return this.orden_visualizacion
    }

    get estado(){
    return this.estado
    }

    tojson(){
        return{
            id_ayuda: this.id_ayuda,
            id_rol_destino: this.id_rol_destino,
            macroproceso: this.macroproceso,
            titulo: this.titulo,
            contenido: this.contenido,
            orden_visualizacion: this.orden_visualizacion,
            estado: this.estado
        };
    }
}

 
module.exports = Ayudalinea