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
  public layers: number[] = [];

  constructor(keyNumber: number, type: string, value: string,keys: number[], layers: number[]) {
    if (type === Behavior.BEHAVIOR_TYPE_KEYPRESS || type === Behavior.BEHAVIOR_TYPE_TRANSPARENT || type === Behavior.BEHAVIOR_TYPE_NONE ||
      type === Behavior.BEHAVIOR_TYPE_MODIFIER || type === Behavior.BEHAVIOR_TYPE_COMBO) {
      this.keyNumber = keyNumber;
      this.type = type;
      this.value = value;
      this.keys = keys;
      this.layers = layers;
    } else this.type = Behavior.BEHAVIOR_TYPE_NONE;
  }

}
