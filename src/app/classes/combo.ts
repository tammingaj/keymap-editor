export class Combo {
  public id: number;
  public name: string;
  public timeout: number;
  public binding: string;
  public color: string;
  public keys: number[];
  public layers: string[];

  constructor (id: number, name: string, timeout: number, binding: string, color: string, keys: number[], layers: string[]) {
    this.id = id;
    this.name = name;
    this.timeout = timeout;
    this.binding = binding;
    this.color = color;
    this.keys = keys;
    this.layers = layers;
  }

  public generateCodeFragment(): string {
    // todo: use a template
    let fragment: string = '\n' +
      '    combo_' + this.name + ' {\n' +
      '      timeout-ms = <' + this.timeout + '>;\n' +
      '      key-positions = <' + this.keys.join(' ') + '>;\n' +
      '      layers = <' + this.layers.join(' ') + '>;\n' +
      '      bindings = <&bt BT_CLR>; \n' +
    '    };';
    return fragment;
  }
}
