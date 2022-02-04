export class Combo {
  public id: number;
  public name: string;
  public timeout: number;
  public selectedBehaviorType: string;
  public binding: string;
  public color: string;
  public keys: number[];
  public layers: string[];

  constructor (id: number, name: string, timeout: number, selectedBehaviorType: string, binding: string, color: string, keys: number[], layers: string[]) {
    this.id = id;
    this.name = name;
    this.timeout = timeout;
    this.selectedBehaviorType = selectedBehaviorType;
    this.binding = binding;
    this.color = color;
    this.keys = keys;
    this.layers = layers;
  }

  public generateCodeFragment(): string {
    // todo: use a template

    let layers: string = this.layers.join(' ');
    let fragment: string = '\n' +
      '    combo_' + this.name + ' {\n' +
      '      timeout-ms = <' + this.timeout + '>;\n' +
      '      key-positions = <' + this.keys.join(' ') + '>;\n' +
      '      layers = <' + layers + '>;\n' +
      '      bindings = <' + this.selectedBehaviorType + this.binding + '>; \n' +
      '    };';
    return fragment;
  }
}
