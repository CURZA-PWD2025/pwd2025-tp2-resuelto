export interface Pelicula {
  id: number;
  titulo: string;
  anio: number;
  generos: string;
  director: string;
  portada?: string;
  likes: number;
}
export interface Film {
  id: number;
  titulo: string;
  anio: number;
  generos: string;
  director: string;
  portada?: string;
  likes: number;
  duracion: number;
}
