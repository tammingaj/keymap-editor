import {Codes} from "./codes";

export class Behavior {

  public static readonly BEHAVIOR_TYPE_BLUETOOTH: string = '&bt ';
  public static readonly BEHAVIOR_TYPE_NONE: string = '&none';
  public static readonly BEHAVIOR_TYPE_TRANSPARENT: string = '&trans';
  public static readonly BEHAVIOR_TYPE_KEYPRESS: string = '&kp ';
  public static readonly BEHAVIOR_TYPE_MODIFIER: string = '&hm ';
  public static readonly BEHAVIOR_TYPE_LAYER_TAP: string = '&lt ';
  public static readonly BEHAVIOR_TYPE_MOMENTARY_LAYER: string = '&mo ';
  public static readonly BEHAVIOR_TYPE_TO_LAYER: string = '&to ';
  public static readonly BEHAVIOR_TYPE_TOGGLE_LAYER: string = '&tog ';
  public static readonly BEHAVIOR_TYPE_STICKY_LAYER: string = '&sl ';
  public static readonly BEHAVIOR_TYPE_STICKY_KEY: string = '&sk ';

  public static readonly BLUETOOTH_CLR: string = 'BT_CLR';
  public static readonly BLUETOOTH_PRV: string = 'BT_PRV';
  public static readonly BLUETOOTH_NXT: string = 'BT_NXT';
  public static readonly BLUETOOTH_1: string = 'BT_SEL 1';
  public static readonly BLUETOOTH_2: string = 'BT_SEL 2';
  public static readonly BLUETOOTH_3: string = 'BT_SEL 3';
  public static readonly BLUETOOTH_4: string = 'BT_SEL 4';
  public static readonly BLUETOOTH_5: string = 'BT_SEL 5';

  public static readonly MODIFIER_LGUI: string = 'LGUI';
  public static readonly MODIFIER_LALT: string = 'LALT';
  public static readonly MODIFIER_LSHFT: string = 'LSHFT';
  public static readonly MODIFIER_LCTRL: string = 'LCTRL';
  public static readonly MODIFIER_RGUI: string = 'RGUI';
  public static readonly MODIFIER_RALT: string = 'RALT';
  public static readonly MODIFIER_RSHFT: string = 'RSHFT';
  public static readonly MODIFIER_RCTRL: string = 'RCTRL';

  public keyNumber: number = 0;
  public type: string = '';
  public values: string[] = [];
  public keys: number[] = [];
  public codeId: string = '';
  public layerId: string = ''; // the layer for this behavior
  public targetLayerId: string = ''; // the id of the layer to go to
  public targetLayerName: string = ''; // the name of the layer to go to

  constructor(keyNumber: number, type: string, values: string[], keys: number[], codeId: string, layerId: string, targetLayerId: string, targetLayerName: string) {
    if (type === Behavior.BEHAVIOR_TYPE_KEYPRESS || type === Behavior.BEHAVIOR_TYPE_TRANSPARENT || type === Behavior.BEHAVIOR_TYPE_NONE ||
      type === Behavior.BEHAVIOR_TYPE_MODIFIER || type === Behavior.BEHAVIOR_TYPE_LAYER_TAP || type === Behavior.BEHAVIOR_TYPE_MOMENTARY_LAYER ||
      type === Behavior.BEHAVIOR_TYPE_TO_LAYER || type === Behavior.BEHAVIOR_TYPE_TOGGLE_LAYER || type === Behavior.BEHAVIOR_TYPE_STICKY_LAYER ||
      type === Behavior.BEHAVIOR_TYPE_STICKY_KEY || type === Behavior.BEHAVIOR_TYPE_BLUETOOTH) {
      this.keyNumber = keyNumber;
      this.type = type;
      this.values = values;
      this.keys = keys;
      this.codeId = codeId;
      this.layerId = layerId;
      this.targetLayerId = targetLayerId;
      this.targetLayerName = targetLayerName;
    } else this.type = Behavior.BEHAVIOR_TYPE_NONE;
  }

  public getType(): string {
    let label: string = '';
    switch (this.type) {
      case Behavior.BEHAVIOR_TYPE_BLUETOOTH :
        label = 'Bluetooth';
        break;
      case Behavior.BEHAVIOR_TYPE_NONE :
        label = 'None';
        break;
      case Behavior.BEHAVIOR_TYPE_KEYPRESS :
        label = 'Keypress';
        break;
      case Behavior.BEHAVIOR_TYPE_TRANSPARENT :
        label = 'Transparent';
        break;
      case Behavior.BEHAVIOR_TYPE_MODIFIER :
        label = 'Modifier';
        break;
      case Behavior.BEHAVIOR_TYPE_LAYER_TAP :
        label = 'Layer Tap';
        break;
      case Behavior.BEHAVIOR_TYPE_MOMENTARY_LAYER :
        label = 'Momentary Layer';
        break;
      case Behavior.BEHAVIOR_TYPE_TO_LAYER :
        label = 'To Layer';
        break;
      case Behavior.BEHAVIOR_TYPE_TOGGLE_LAYER :
        label = 'Toggle Layer';
        break;
      case Behavior.BEHAVIOR_TYPE_STICKY_LAYER :
        label = 'Sticky Layer';
        break;
      case Behavior.BEHAVIOR_TYPE_STICKY_KEY :
        label = 'Sticky Key';
        break;
      default:
        label = 'None';
    }
    return label;
  }

  public getLabel(): string {
    let label: string = '';
    let code: any = '';

    switch (this.type) {
      case Behavior.BEHAVIOR_TYPE_BLUETOOTH :
        code = Codes.getById(this.codeId);
        label = code.label || (code.hasOwnProperty('codes') ? code.codes[0] : 'X');
        break;
      case Behavior.BEHAVIOR_TYPE_NONE :
        label = ' ';
        break;
      case Behavior.BEHAVIOR_TYPE_KEYPRESS :
        code = Codes.getById(this.codeId);
        if (code) {
          label = code.label || (code.hasOwnProperty('codes') ? code.codes[0] : 'X');
        }
        break;
      case Behavior.BEHAVIOR_TYPE_TRANSPARENT :
        label = ' ';
        break;
      case Behavior.BEHAVIOR_TYPE_MODIFIER :
        code = Codes.getById(this.codeId);
        if (code) {
          label = code.label || (code.hasOwnProperty('codes') ? code.codes[0] : 'X');
        }
        break;
      case Behavior.BEHAVIOR_TYPE_LAYER_TAP :
        code = Codes.getById(this.codeId);
        if (code) {
          label = code.label || (code.hasOwnProperty('codes') ? code.codes[0] : 'X');
        }
        break;
      case Behavior.BEHAVIOR_TYPE_MOMENTARY_LAYER :
        label = this.values[0];
        break;
      case Behavior.BEHAVIOR_TYPE_TO_LAYER :
        label = this.values[0];
        break;
      case Behavior.BEHAVIOR_TYPE_TOGGLE_LAYER :
        label = this.values[0];
        break;
      case Behavior.BEHAVIOR_TYPE_STICKY_LAYER :
        label = this.values[0];
        break;
      case Behavior.BEHAVIOR_TYPE_STICKY_KEY :
        label = this.values[0];
        break;
      default:
        label = 'None';
    }
    return label;
  }

  getModifierValues(): string[] {
    return[Behavior.MODIFIER_LGUI, Behavior.MODIFIER_LALT, Behavior.MODIFIER_LSHFT, Behavior.MODIFIER_LCTRL, Behavior.MODIFIER_RGUI, Behavior.MODIFIER_RALT, Behavior.MODIFIER_RSHFT, Behavior.MODIFIER_RCTRL];
  }

  public generateCode(): string {
    if (this.type === Behavior.BEHAVIOR_TYPE_KEYPRESS) return Behavior.BEHAVIOR_TYPE_KEYPRESS + this.values[0];
    if (this.type === Behavior.BEHAVIOR_TYPE_BLUETOOTH) return Behavior.BEHAVIOR_TYPE_BLUETOOTH + this.values[0];
    if (this.type === Behavior.BEHAVIOR_TYPE_NONE) return Behavior.BEHAVIOR_TYPE_NONE;
    if (this.type === Behavior.BEHAVIOR_TYPE_TRANSPARENT) return Behavior.BEHAVIOR_TYPE_TRANSPARENT;
    if (this.type === Behavior.BEHAVIOR_TYPE_MODIFIER) {
      return  Behavior.BEHAVIOR_TYPE_MODIFIER + this.values[1] + ' '+ this.values[0];
    }
    if (this.type === Behavior.BEHAVIOR_TYPE_LAYER_TAP) {
      return Behavior.BEHAVIOR_TYPE_LAYER_TAP + this.targetLayerId + ' '+ this.values[0];
    }
    if (this.type === Behavior.BEHAVIOR_TYPE_MOMENTARY_LAYER) {
      return Behavior.BEHAVIOR_TYPE_MOMENTARY_LAYER + this.targetLayerId;
    }
    if (this.type === Behavior.BEHAVIOR_TYPE_TO_LAYER) {
      return Behavior.BEHAVIOR_TYPE_TO_LAYER + this.targetLayerId;
    }
    if (this.type === Behavior.BEHAVIOR_TYPE_TOGGLE_LAYER) {
      return Behavior.BEHAVIOR_TYPE_TOGGLE_LAYER + this.targetLayerId;
    }
    if (this.type === Behavior.BEHAVIOR_TYPE_STICKY_LAYER) {
      return Behavior.BEHAVIOR_TYPE_STICKY_LAYER + this.targetLayerId;
    }
    if (this.type === Behavior.BEHAVIOR_TYPE_STICKY_KEY) {
      return Behavior.BEHAVIOR_TYPE_STICKY_KEY + this.values[0];
    }

    return ' ??? ';
  }
}
