export class User {
    nombre: string;
    email: string;
    uid: string;
    constructor(nombre: string, email: string, uid: string) {
        this.nombre = nombre;
        this.uid = uid;
        this.email = email;
    }
}
