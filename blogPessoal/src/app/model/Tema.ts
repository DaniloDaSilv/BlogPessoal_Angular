import { Postagem } from "./Postagem"
import { Usuario } from "./Usuario"

export class Tema {
    public id: number
    public descrição: string
    public usuario: Usuario
    public postagem: Postagem[]
}