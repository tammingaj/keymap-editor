export class Behavior {

  public static readonly BEHAVIOR_TYPE_NONE: string = '&none';
  public static readonly BEHAVIOR_TYPE_TRANSPARENT: string = '&trans';
  public static readonly BEHAVIOR_TYPE_KEYPRESS: string = '&kp';
  public static readonly BEHAVIOR_TYPE_COMBO: string = 'combo';
  public static readonly BEHAVIOR_TYPE_MODIFIER: string = '&hm';

  public static readonly MODIFIER_LGUI: string = 'LGUI';
  public static readonly MODIFIER_LALT: string = 'LALT';
  public static readonly MODIFIER_LSHFT: string = 'LSHFT';
  public static readonly MODIFIER_LCTRL: string = 'LCTRL';
  public static readonly MODIFIER_RGUI: string = 'RGUI';
  public static readonly MODIFIER_RALT: string = 'RALT';
  public static readonly MODIFIER_RSHFT: string = 'RSHFT';
  public static readonly MODIFIER_RCTRL: string = 'RCTRL';

  public static readonly KEY_A: string = '&kp a';
  public static readonly KEY_B: string = '&kp b';
  public static readonly KEY_C: string = '&kp c';
  public static readonly KEY_D: string = '&kp d';
  public static readonly KEY_E: string = '&kp e';
  public static readonly KEY_F: string = '&kp f';
  public static readonly KEY_G: string = '&kp g';
  public static readonly KEY_H: string = '&kp h';
  public static readonly KEY_I: string = '&kp i';
  public static readonly KEY_J: string = '&kp j';
  public static readonly KEY_K: string = '&kp k';
  public static readonly KEY_L: string = '&kp l';
  public static readonly KEY_M: string = '&kp m';
  public static readonly KEY_N: string = '&kp n';
  public static readonly KEY_O: string = '&kp o';
  public static readonly KEY_P: string = '&kp p';
  public static readonly KEY_Q: string = '&kp q';
  public static readonly KEY_R: string = '&kp r';
  public static readonly KEY_S: string = '&kp s';
  public static readonly KEY_T: string = '&kp t';
  public static readonly KEY_U: string = '&kp u';
  public static readonly KEY_V: string = '&kp v';
  public static readonly KEY_W: string = '&kp w';
  public static readonly KEY_X: string = '&kp x';
  public static readonly KEY_Y: string = '&kp y';
  public static readonly KEY_Z: string = '&kp z';

  public keyNumber: number = 0;
  public type: string = '';
  public value: string = '';
  public keys: number[] = [];
  public layers: string[] = [];

  constructor(keyNumber: number, type: string, value: string,keys: number[], layers: string[]) {
    if (type === Behavior.BEHAVIOR_TYPE_KEYPRESS || type === Behavior.BEHAVIOR_TYPE_TRANSPARENT || type === Behavior.BEHAVIOR_TYPE_NONE ||
      type === Behavior.BEHAVIOR_TYPE_MODIFIER || type === Behavior.BEHAVIOR_TYPE_COMBO) {
      this.keyNumber = keyNumber;
      this.type = type;
      this.value = value;
      this.keys = keys;
      this.layers = layers;
    } else this.type = Behavior.BEHAVIOR_TYPE_NONE;
  }

  public getLabel(): string {
    let label: string = '';
    switch (this.type) {
      case Behavior.BEHAVIOR_TYPE_NONE :
        label = 'None';
        break;
      case Behavior.BEHAVIOR_TYPE_COMBO :
        label = 'Combo';
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
    if (this.type === Behavior.BEHAVIOR_TYPE_KEYPRESS) return this.value;
    if (this.type === Behavior.BEHAVIOR_TYPE_MODIFIER) {
      let modifier: string = this.value
    }
    if (this.type === Behavior.BEHAVIOR_TYPE_COMBO) {
      // todo this is not yet correct
      let code: string = Behavior.BEHAVIOR_TYPE_COMBO + ' ';
      for (let i: number = 0; i < this.keys.length; i++) {
        code += this.keys[i] + ' ';
      }
      return code;
    }
    return ' ??? ';
  }
}
