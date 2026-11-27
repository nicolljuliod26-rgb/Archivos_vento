class categoriainsumo{
    id_categoria_insumo;
    nombre;
    tipo_uso;
    descripcion;

    constructor(nombre, tipo_uso, descripcion){
        this.id_categoria_insumo = null;
        this.nombre = nombre;
        this.tipo_uso = tipo_uso;
        this.descripcion = descripcion  

    }

    set nombre(value){
        this.nombre = value
    }

    set tipo_uso(value){
        this.tipo_uso = value
    }

    set descripcion(value){
        this.descripcion = value
    }

    get id_categoria_insumo(){
        return this.id_categoria_insumo
    }

    get nombre(){
        return this.nombre
    }

    get tipo_uso(){
        return this.tipo_uso
    }

    get descripcion(){
        return this.descripcion
    }

    tojson(){
        return{
            id_categoria_insumo: this.id_categoria_insumo,
            nombre: this.nombre,
            tipo_uso: this.tipo_uso,
            descripcion: this.descripcion
        };
    }
}

module.exports = categoriainsumo