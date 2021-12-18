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
    'combo_' + this.name + ' {' +
      'timeout-ms = <' + this.timeout + '>;' +
      'key-positions = <6 20>;' +
      'layers = <0>;' +
      'bindings = <&bt BT_CLR>;' +
    '};';
    return fragment;
  }
}
