import { Postagem } from "./Postagem"
import { User } from "./User"

export class Tema {
    public id: number
    public descrição: string
    public postagem: Postagem[]
}