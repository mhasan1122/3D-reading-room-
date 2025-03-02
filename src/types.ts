export interface BookData {
  id: number;
  title: string;
  author: string;
  color: string;
}

export interface Book3D extends BookData {
  position: [number, number, number];
}