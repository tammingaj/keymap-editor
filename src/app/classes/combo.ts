export class Combo {
  public id: number;
  public name: string;
  public timeout: number;
  public binding: string;
  public keys: number[];
  public layers: string[];

  constructor (id: number, name: string, timeout: number, binding: string, keys: number[], layers: string[]) {
    this.id = id;
    this.name = name;
    this.timeout = timeout;
    this.binding = binding;
    this.keys = keys;
    this.layers = layers;
  }

  public generateCodeFragment(): string {
    // todo: use a template
    let fragment: string =
    'combo_' + this.name + ' {\n' +
      '      timeout-ms = <' + this.timeout + '>;\n' +
      '      key-positions = <6 20>;\n' +
      '      layers = <0>;\n' +
      '      bindings = <&bt BT_CLR>; \n' +
    '    };\n';
    return fragment;
  }
}
