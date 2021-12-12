export class Combo {
  public id: number;
  public name: string;
  public timeout: number;
  public binding: string;
  public layers: string[];

  constructor (id: number, name: string, timeout: number, binding: string, layers: string[]) {
    this.id = id;
    this.name = name;
    this.timeout = timeout;
    this.binding = binding;
    this.layers = layers;
  }
}
