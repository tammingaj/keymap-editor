export class Behavior {

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

  public static readonly MODIFIER_LGUI: string = 'LGUI';
  public static readonly MODIFIER_LALT: string = 'LALT';
  public static readonly MODIFIER_LSHFT: string = 'LSHFT';
  public static readonly MODIFIER_LCTRL: string = 'LCTRL';
  public static readonly MODIFIER_RGUI: string = 'RGUI';
  public static readonly MODIFIER_RALT: string = 'RALT';
  public static readonly MODIFIER_RSHFT: string = 'RSHFT';
  public static readonly MODIFIER_RCTRL: string = 'RCTRL';

  public static readonly KEY_A: string = 'A';
  public static readonly KEY_B: string = 'B';
  public static readonly KEY_C: string = 'C';
  public static readonly KEY_D: string = 'D';
  public static readonly KEY_E: string = 'E';
  public static readonly KEY_F: string = 'F';
  public static readonly KEY_G: string = 'G';
  public static readonly KEY_H: string = 'H';
  public static readonly KEY_I: string = 'I';
  public static readonly KEY_J: string = 'J';
  public static readonly KEY_K: string = 'K';
  public static readonly KEY_L: string = 'L';
  public static readonly KEY_M: string = 'M';
  public static readonly KEY_N: string = 'N';
  public static readonly KEY_O: string = 'O';
  public static readonly KEY_P: string = 'P';
  public static readonly KEY_Q: string = 'Q';
  public static readonly KEY_R: string = 'R';
  public static readonly KEY_S: string = 'S';
  public static readonly KEY_T: string = 'T';
  public static readonly KEY_U: string = 'U';
  public static readonly KEY_V: string = 'V';
  public static readonly KEY_W: string = 'W';
  public static readonly KEY_X: string = 'X';
  public static readonly KEY_Y: string = 'Y';
  public static readonly KEY_Z: string = 'Z';

  public keyNumber: number = 0;
  public type: string = '';
  public values: string[] = [];
  public keys: number[] = [];
  public layers: string[] = [];

  constructor(keyNumber: number, type: string, values: string[],keys: number[], layers: string[]) {
    if (type === Behavior.BEHAVIOR_TYPE_KEYPRESS || type === Behavior.BEHAVIOR_TYPE_TRANSPARENT || type === Behavior.BEHAVIOR_TYPE_NONE ||
      type === Behavior.BEHAVIOR_TYPE_MODIFIER || type === Behavior.BEHAVIOR_TYPE_LAYER_TAP || type === Behavior.BEHAVIOR_TYPE_MOMENTARY_LAYER ||
      type === Behavior.BEHAVIOR_TYPE_TO_LAYER || type === Behavior.BEHAVIOR_TYPE_TOGGLE_LAYER || type === Behavior.BEHAVIOR_TYPE_STICKY_LAYER ||
      type === Behavior.BEHAVIOR_TYPE_STICKY_KEY) {
      this.keyNumber = keyNumber;
      this.type = type;
      this.values = values;
      this.keys = keys;
      this.layers = layers;
    } else this.type = Behavior.BEHAVIOR_TYPE_NONE;
  }

  public getType(): string {
    let label: string = '';
    switch (this.type) {
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
    switch (this.type) {
      case Behavior.BEHAVIOR_TYPE_NONE :
        label = '-';
        break;
      case Behavior.BEHAVIOR_TYPE_KEYPRESS :
        label = label = this.values[0];
        break;
      case Behavior.BEHAVIOR_TYPE_TRANSPARENT :
        label = ' ';
        break;
      case Behavior.BEHAVIOR_TYPE_MODIFIER :
        label = this.values[0];
        break;
      case Behavior.BEHAVIOR_TYPE_LAYER_TAP :
        label = this.values[0];
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

  getKeyPressValues(): string[] {
    return [Behavior.KEY_A, Behavior.KEY_B, Behavior.KEY_C, Behavior.KEY_D, Behavior.KEY_E, Behavior.KEY_F, Behavior.KEY_G, Behavior.KEY_H, Behavior.KEY_I, Behavior.KEY_J, Behavior.KEY_K, Behavior.KEY_L, Behavior.KEY_M, Behavior.KEY_N, Behavior.KEY_O, Behavior.KEY_P, Behavior.KEY_Q, Behavior.KEY_R, Behavior.KEY_S, Behavior.KEY_T, Behavior.KEY_U, Behavior.KEY_V, Behavior.KEY_W, Behavior.KEY_X, Behavior.KEY_Y, Behavior.KEY_Z];
  }

  getModifierValues(): string[] {
    return[Behavior.MODIFIER_LGUI, Behavior.MODIFIER_LALT, Behavior.MODIFIER_LSHFT, Behavior.MODIFIER_LCTRL, Behavior.MODIFIER_RGUI, Behavior.MODIFIER_RALT, Behavior.MODIFIER_RSHFT, Behavior.MODIFIER_RCTRL];
  }

  public generateCode(): string {
    if (this.type === Behavior.BEHAVIOR_TYPE_NONE) return Behavior.BEHAVIOR_TYPE_NONE;
    if (this.type === Behavior.BEHAVIOR_TYPE_TRANSPARENT) return Behavior.BEHAVIOR_TYPE_TRANSPARENT;
    if (this.type === Behavior.BEHAVIOR_TYPE_KEYPRESS) return Behavior.BEHAVIOR_TYPE_KEYPRESS + this.values[0];
    if (this.type === Behavior.BEHAVIOR_TYPE_MODIFIER) {
      return  Behavior.BEHAVIOR_TYPE_MODIFIER + this.values[1] + ' '+ this.values[0];
    }
    if (this.type === Behavior.BEHAVIOR_TYPE_LAYER_TAP) {
      return Behavior.BEHAVIOR_TYPE_LAYER_TAP + this.values[1] + ' '+ this.values[0];
    }
    if (this.type === Behavior.BEHAVIOR_TYPE_MOMENTARY_LAYER) {
      return Behavior.BEHAVIOR_TYPE_MOMENTARY_LAYER + this.values[0];
    }
    if (this.type === Behavior.BEHAVIOR_TYPE_TO_LAYER) {
      return Behavior.BEHAVIOR_TYPE_TO_LAYER + this.values[0];
    }
    if (this.type === Behavior.BEHAVIOR_TYPE_TOGGLE_LAYER) {
      return Behavior.BEHAVIOR_TYPE_TOGGLE_LAYER + this.values[0];
    }
    if (this.type === Behavior.BEHAVIOR_TYPE_STICKY_LAYER) {
      return Behavior.BEHAVIOR_TYPE_STICKY_LAYER + this.values[0];
    }
    if (this.type === Behavior.BEHAVIOR_TYPE_STICKY_KEY) {
      return Behavior.BEHAVIOR_TYPE_STICKY_KEY + this.values[0];
    }

    return ' ??? ';
  }
}
