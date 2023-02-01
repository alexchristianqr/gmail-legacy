import { MyMessage } from './MyMessage'

export type MyParams = {
  database?: string | undefined // Un objeto simple
  item?: MyMessage // Un objeto simple
  items?: Array<Object> | null | undefined // Array de objetos de una clase
  path?: string | undefined // Ruta de angular
}
