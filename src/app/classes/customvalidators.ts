export class Customvalidators {

  public static keyPressAlphanumeric(event: any) {
    let inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9_]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
}
