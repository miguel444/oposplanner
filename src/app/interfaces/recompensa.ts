export interface Recompensa {
    nombre: string;
    canjeado: boolean;
    disponible: boolean;
    fechaCanjeo?: Date; // Fecha es opcional
    descripcion?: string;
    imagen?: string;
    temas_para_desbloquear: number;
  }
  
