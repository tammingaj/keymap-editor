export class Codes {
  public static readonly groups: Array<string> = ['Keyboard',"Keypad","Bluetooth","Consumer","Consumer Menu","Consumer Media","Consumer AL","Consumer AC","Consumer KBIA"];

  public static readonly groupBluetooth: Array<any> = [
    {
      codes: ["BT_CLR"],
      description: "Clear the current bluetooth profile",
      group: "Bluetooth"
    },
    {
      codes: ["BT_NXT"],
      label: "BT+",
      description: "Select the next bluetooth profile",
      group: "Bluetooth"
    },
    {
      codes: ["BT_PRV"],
      label: "BT-",
      description: "Select the previous bluetooth profile",
      group: "Bluetooth"
    },
    {
      codes: ["BT_SEL 1"],
      label: "BT1",
      description: "Select bluetooth profile 1",
      group: "Bluetooth"
    },
    {
      codes: ["BT_SEL 2"],
      label: "BT2",
      description: "Select bluetooth profile 2",
      group: "Bluetooth"
    },
    {
      codes: ["BT_SEL 3"],
      label: "BT3",
      description: "Select bluetooth profile 3",
      group: "Bluetooth"
    },
    {
      codes: ["BT_SEL 4"],
      label: "BT4",
      description: "Select bluetooth profile 4",
      group: "Bluetooth"
    },
    {
      codes: ["BT_SEL 5"],
      label: "BT5",
      description: "Select bluetooth profile 5",
      group: "Bluetooth"
    },
  ]

  public static readonly groupKeyboard: Array<any> = [
    {
      codes: ["A"],
      description: "a and A",
      group: "Keyboard"
    },
    {
      codes: ["B"],
      description: "b and B",
      group: "Keyboard"
    },
    {
      codes: ["C"],
      description: "c and C",
      group: "Keyboard"
    },
    {
      codes: ["D"],
      description: "d and D",
      group: "Keyboard"
    },
    {
      codes: ["E"],
      description: "e and E",
      group: "Keyboard"
    },
    {
      codes: ["F"],
      description: "f and F",
      group: "Keyboard"
    },
    {
      codes: ["G"],
      description: "g and G",
      group: "Keyboard"
    },
    {
      codes: ["H"],
      description: "h and H",
      group: "Keyboard"
    },
    {
      codes: ["I"],
      description: "i and I",
      group: "Keyboard"
    },
    {
      codes: ["J"],
      description: "j and J",
      group: "Keyboard"
    },
    {
      codes: ["K"],
      description: "k and K",
      group: "Keyboard"
    },
    {
      codes: ["L"],
      description: "l and L",
      group: "Keyboard"
    },
    {
      codes: ["M"],
      description: "m and M",
      group: "Keyboard"
    },
    {
      codes: ["N"],
      description: "n and N",
      group: "Keyboard"
    },
    {
      codes: ["O"],
      description: "o and O",
      group: "Keyboard"
    },
    {
      codes: ["P"],
      description: "p and P",
      group: "Keyboard"
    },
    {
      codes: ["Q"],
      description: "q and Q",
      group: "Keyboard"
    },
    {
      codes: ["R"],
      description: "r and R",
      group: "Keyboard"
    },
    {
      codes: ["S"],
      description: "s and S",
      group: "Keyboard"
    },
    {
      codes: ["T"],
      description: "t and T",
      group: "Keyboard"
    },
    {
      codes: ["U"],
      description: "u and U",
      group: "Keyboard"
    },
    {
      codes: ["V"],
      description: "v and V",
      group: "Keyboard"
    },
    {
      codes: ["W"],
      description: "w and W",
      group: "Keyboard"
    },
    {
      codes: ["X"],
      description: "x and X",
      group: "Keyboard"
    },
    {
      codes: ["Y"],
      description: "y and Y",
      group: "Keyboard"
    },
    {
      codes: ["Z"],
      description: "z and Z",
      group: "Keyboard"
    },
    {
      codes: ["NUMBER_1", "N1"],
      description: "1 and ! [Exclamation]",
      group: "Keyboard"
    },
    {
      codes: ["EXCLAMATION", "EXCL"],
      description: "! [Exclamation]",
      group: "Keyboard",
      legend: "!"
    },
    {
      codes: ["NUMBER_2", "N2"],
      description: "2 and @ [At Sign]",
      group: "Keyboard"
    },
    {
      codes: ["AT_SIGN", "AT"],
      description: "@ [At Sign]",
      group: "Keyboard",
      legend: "@"
    },
    {
      codes: ["NUMBER_3", "N3"],
      description: "3 and # [Hash / Pound]",
      group: "Keyboard"
    },
    {
      codes: ["HASH", "POUND"],
      description: "# [Hash / Pound]",
      group: "Keyboard",
      legend: "#"
    },
    {
      codes: ["NUMBER_4", "N4"],
      description: "4 and $ [Dollar]",
      group: "Keyboard"
    },
    {
      codes: ["DOLLAR", "DLLR"],
      description: "$ [Dollar]",
      group: "Keyboard",
      legend: "$"
    },
    {
      codes: ["NUMBER_5", "N5"],
      description: "5 and % [Percent]",
      group: "Keyboard"
    },
    {
      codes: ["PERCENT", "PRCNT"],
      description: "% [Percent]",
      group: "Keyboard",
      legend: "%"
    },
    {
      codes: ["NUMBER_6", "N6"],
      description: "6 and ^ [Caret]",
      group: "Keyboard"
    },
    {
      codes: ["CARET"],
      description: "^ [Caret]",
      group: "Keyboard",
      legend: "^"
    },
    {
      codes: ["NUMBER_7", "N7"],
      description: "7 and & [Ampersand]",
      group: "Keyboard"
    },
    {
      codes: ["AMPERSAND", "AMPS"],
      description: "& [Ampersand]",
      group: "Keyboard",
      legend: "&"
    },
    {
      codes: ["NUMBER_8", "N8"],
      description: "8 and * [Asterisk / Star]",
      group: "Keyboard"
    },
    {
      codes: ["ASTERISK", "ASTRK", "STAR"],
      description: "* [Asterisk / Star]",
      group: "Keyboard",
      legend: "*"
    },
    {
      codes: ["NUMBER_9", "N9"],
      description: "9 and ( [Left Parenthesis]",
      group: "Keyboard"
    },
    {
      codes: ["LEFT_PARENTHESIS", "LPAR"],
      description: "( [Left Parenthesis]",
      group: "Keyboard",
      legend: "("
    },
    {
      codes: ["NUMBER_0", "N0"],
      description: "0 and ) [Right Parenthesis]",
      group: "Keyboard"
    },
    {
      codes: ["RIGHT_PARENTHESIS", "RPAR"],
      description: ") [Right Parenthesis]",
      group: "Keyboard",
      legend: ")"
    },
    {
      codes: ["RETURN", "ENTER", "RET"],
      description: "Return (Enter)",
      group: "Keyboard",
      legend: "RET"
    },
    {
      codes: ["ESCAPE", "ESC"],
      description: "Escape",
      group: "Keyboard",
      legend: "ESC"
    },
    {
      codes: ["BACKSPACE", "BSPC"],
      description: "Backspace",
      group: "Keyboard",
      legend: "BS"
    },
    {
      codes: ["TAB"],
      description: "Tab",
      group: "Keyboard",
      legend: "TAB"
    },
    {
      codes: ["SPACE"],
      description: "Space",
      group: "Keyboard",
      legend: "SPC"
    },
    {
      codes: ["MINUS"],
      description: "- [Minus] and _ [Underscore]",
      group: "Keyboard",
      legend: "-"
    },
    {
      codes: ["UNDERSCORE", "UNDER"],
      description: "_ [Underscore]",
      group: "Keyboard",
      legend: "_"
    },
    {
      codes: ["EQUAL"],
      description: "= [Equal] and + [Plus]",
      group: "Keyboard",
      legend: "="
    },
    {
      codes: ["PLUS"],
      description: "+ [Plus]",
      group: "Keyboard",
      legend: "+"
    },
    {
      codes: ["LEFT_BRACKET", "LBKT"],
      description: "[ [Left Bracket] and { [Left Brace]",
      group: "Keyboard",
      legend: "["
    },
    {
      codes: ["LEFT_BRACE", "LBRC"],
      description: "{ [Left Brace]",
      group: "Keyboard",
      legend: "{"
    },
    {
      codes: ["RIGHT_BRACKET", "RBKT"],
      description: "] [Right Bracket] and } [Right Brace]",
      group: "Keyboard",
      legend: "]"
    },
    {
      codes: ["RIGHT_BRACE", "RBRC"],
      description: "} [Right Brace]",
      group: "Keyboard",
      legend: "}"
    },
    {
      codes: ["BACKSLASH", "BSLH"],
      description: "\\ [Backslash] and | [Pipe]",
      group: "Keyboard",
      legend: "\\"
    },
    {
      codes: ["PIPE"],
      description: "| [Pipe]",
      group: "Keyboard",
      legend: "|"
    },
    {
      codes: ["NON_US_HASH"],
      description: "Non-US # [Hash/Pound] and ~ [Tilde]",
      group: "Keyboard",
      legend: "N#"
    },
    {
      codes: ["TILDE2"],
      description: "~ [Tilde]",
      group: "Keyboard",
      legend: "~2"
    },
    {
      codes: ["SEMICOLON", "SEMI"],
      description: "; [Semicolon] and : [Colon]",
      group: "Keyboard",
      legend: ";"
    },
    {
      codes: ["COLON"],
      description: ": [Colon]",
      group: "Keyboard",
      legend: ":"
    },
    {
      codes: ["SINGLE_QUOTE", "SQT", "APOSTROPHE", "APOS"],
      description: "' [Apostrophe] and \" [Quote (Double)]",
      group: "Keyboard",
      legend: "'"
    },
    {
      codes: ["DOUBLE_QUOTES", "DQT"],
      description: '" [Quote (Double)]',
      group: "Keyboard",
      legend: "\""
    },
    {
      codes: ["GRAVE"],
      description: "` [Grave Accent] and ~ [Tilde]",
      group: "Keyboard",
      legend: "`"
    },
    {
      codes: ["TILDE"],
      description: "~ [Tilde]",
      group: "Keyboard",
      legend: "~"
    },
    {
      codes: ["COMMA"],
      description: ", [Comma] and < [Less Than]",
      group: "Keyboard",
      legend: ","
    },
    {
      codes: ["LESS_THAN", "LT"],
      description: "< [Less Than]",
      group: "Keyboard",
      legend: "<"
    },
    {
      codes: ["PERIOD", "DOT"],
      description: ". [Period] and > [Greater Than]",
      group: "Keyboard",
      legend: "."
    },
    {
      codes: ["GREATER_THAN", "GT"],
      description: "> [Greater Than]",
      group: "Keyboard",
      legend: ">"
    },
    {
      codes: ["SLASH", "FSLH"],
      description: "/ [Forward Slash] and ? [Question Mark]",
      group: "Keyboard",
      legend: "/"
    },
    {
      codes: ["QUESTION", "QMARK"],
      description: "? [Question Mark]",
      group: "Keyboard",
      legend: "?"
    },
    {
      codes: ["CAPSLOCK", "CAPS", "CLCK"],
      description: "Caps Lock",
      group: "Keyboard",
      legend: "CAPS"
    },
    {
      codes: ["F1"],
      description: "F1",
      group: "Keyboard"
    },
    {
      codes: ["F2"],
      description: "F2",
      group: "Keyboard"
    },
    {
      codes: ["F3"],
      description: "F3",
      group: "Keyboard"
    },
    {
      codes: ["F4"],
      description: "F4",
      group: "Keyboard"
    },
    {
      codes: ["F5"],
      description: "F5",
      group: "Keyboard"
    },
    {
      codes: ["F6"],
      description: "F6",
      group: "Keyboard"
    },
    {
      codes: ["F7"],
      description: "F7",
      group: "Keyboard"
    },
    {
      codes: ["F8"],
      description: "F8",
      group: "Keyboard"
    },
    {
      codes: ["F9"],
      description: "F9",
      group: "Keyboard"
    },
    {
      codes: ["F10"],
      description: "F10",
      group: "Keyboard"
    },
    {
      codes: ["F11"],
      description: "F11",
      group: "Keyboard"
    },
    {
      codes: ["F12"],
      description: "F12",
      group: "Keyboard"
    },
    {
      codes: ["PRINTSCREEN", "PSCRN"],
      description: "Print Screen",
      group: "Keyboard",
      legend: "PSN"
    },
    {
      codes: ["SCROLLLOCK", "SLCK"],
      description: "Scroll Lock",
      group: "Keyboard",
      legend: "SLK"
    },
    {
      codes: ["PAUSE_BREAK"],
      description: "Pause / Break",
      group: "Keyboard",
      legend: "PBK"
    },
    {
      codes: ["INSERT", "INS"],
      description: "Insert",
      group: "Keyboard",
      legend: "INS"
    },
    {
      codes: ["HOME"],
      description: "Home",
      group: "Keyboard"
    },
    {
      codes: ["PG_UP", "PAGE_UP"],
      description: "Page Up",
      group: "Keyboard"
    },
    {
      codes: ["DEL", "DELETE"],
      description: "Delete",
      group: "Keyboard"
    },
    {
      codes: ["END"],
      description: "End",
      group: "Keyboard"
    },
    {
      codes: ["PG_DN", "PAGE_DOWN"],
      description: "Page Down",
      group: "Keyboard"
    },
    {
      codes: ["RIGHT_ARROW", "RIGHT"],
      description: "⮕ [Right Arrow]",
      group: "Keyboard",
      legend: "⮕"
    },
    {
      codes: ["LEFT_ARROW", "LEFT"],
      description: "⬅ [Left Arrow]",
      group: "Keyboard",
      legend: "⬅"
    },
    {
      codes: ["DOWN_ARROW", "DOWN"],
      description: "⬇ [Down Arrow]",
      group: "Keyboard",
      legend: "⬇"
    },
    {
      codes: ["UP_ARROW", "UP"],
      description: "⬆ [Up Arrow]",
      group: "Keyboard",
      legend: "⬆"
    },
    {
      codes: ["NON_US_BACKSLASH", "NON_US_BSLH"],
      description: "Non-US \\ [Backslash] and | [Pipe]",
      group: "Keyboard",
      legend: "N\\"
    },
    {
      codes: ["PIPE2"],
      description: "| [Pipe]",
      group: "Keyboard",
      legend: "|2"
    },
    {
      codes: ["K_APPLICATION", "K_APP", "K_group_MENU", "K_CMENU"],
      description: "Application (group Menu)",
      group: "Keyboard",
      legend: "???"
    },
    {
      codes: ["K_POWER", "K_PWR"],
      description: "Power",
      group: "Keyboard",
      legend: "PWR"
    },
    {
      codes: ["F13"],
      description: "F13",
      group: "Keyboard"
    },
    {
      codes: ["F14"],
      description: "F14",
      group: "Keyboard"
    },
    {
      codes: ["F15"],
      description: "F15",
      group: "Keyboard"
    },
    {
      codes: ["F16"],
      description: "F16",
      group: "Keyboard"
    },
    {
      codes: ["F17"],
      description: "F17",
      group: "Keyboard"
    },
    {
      codes: ["F18"],
      description: "F18",
      group: "Keyboard"
    },
    {
      codes: ["F19"],
      description: "F19",
      group: "Keyboard"
    },
    {
      codes: ["F20"],
      description: "F20",
      group: "Keyboard"
    },
    {
      codes: ["F21"],
      description: "F21",
      group: "Keyboard"
    },
    {
      codes: ["F22"],
      description: "F22",
      group: "Keyboard"
    },
    {
      codes: ["F23"],
      description: "F23",
      group: "Keyboard"
    },
    {
      codes: ["F24"],
      description: "F24",
      group: "Keyboard"
    },
    {
      codes: ["K_EXECUTE", "K_EXEC"],
      description: "Execute",
      group: "Keyboard",
      legend: "EXE"
    },
    {
      codes: ["K_HELP"],
      description: "Help",
      group: "Keyboard",
      legend: "HLP"
    },
    {
      codes: ["K_MENU"],
      description: "Menu",
      group: "Keyboard",
      legend: "MNU"
    },
    {
      codes: ["K_SELECT"],
      description: "Select",
      group: "Keyboard",
      legend: "SLT"
    },
    {
      codes: ["K_STOP"],
      description: "Stop",
      group: "Keyboard",
      legend: "STP"
    },
    {
      codes: ["K_AGAIN", "K_REDO"],
      description: "Again",
      group: "Keyboard",
      legend: "???"
    },
    {
      codes: ["K_UNDO"],
      description: "Undo",
      group: "Keyboard",
      legend: "NDO"
    },
    {
      codes: ["K_CUT"],
      description: "Cut",
      group: "Keyboard",
      legend: "CUT"
    },
    {
      codes: ["K_COPY"],
      description: "Copy",
      group: "Keyboard",
      legend: "CPY"
    },
    {
      codes: ["K_PASTE"],
      description: "Paste",
      group: "Keyboard",
      legend: "PST"
    },
    {
      codes: ["K_FIND"],
      description: "Find",
      group: "Keyboard",
      legend: "FND"
    },
    {
      codes: ["K_MUTE"],
      description: "Mute",
      group: "Keyboard",
      legend: "MUT"
    },
    {
      codes: ["K_VOLUME_UP", "K_VOL_UP"],
      description: "Volume Up",
      group: "Keyboard",
      legend: "VUP"
    },
    {
      codes: ["K_VOLUME_DOWN", "K_VOL_DN"],
      description: "Volume Down",
      group: "Keyboard",
      legend: "VDN"
    },
    {
      codes: ["LOCKING_CAPS", "LCAPS"],
      description: "Locking Caps Lock",
      group: "Keyboard",
      legend: "???"
    },
    {
      codes: ["LOCKING_NUM", "LNLCK"],
      description: "Locking Num Lock",
      group: "Keyboard",
      legend: "???"
    },
    {
      codes: ["LOCKING_SCROLL", "LSLCK"],
      description: "Locking Scroll Lock",
      group: "Keyboard",
      legend: "???"
    },
    {
      codes: ["INTERNATIONAL_1", "INT1", "INT_RO"],
      description: "ろ (International 1)",
      group: "Keyboard",
      legend: "ろ"
    },
    {
      codes: ["INTERNATIONAL_2", "INT2", "INT_KATAKANAHIRAGANA", "INT_KANA"],
      description: "かな (International 2)",
      group: "Keyboard",
      legend: "かな"
    },
    {
      codes: ["INTERNATIONAL_3", "INT3", "INT_YEN"],
      description: "¥ (International 3)",
      group: "Keyboard",
      legend: "¥"
    },
    {
      codes: ["INTERNATIONAL_4", "INT4", "INT_HENKAN"],
      description: "変換 (International 4)",
      group: "Keyboard",
      legend: "変換"
    },
    {
      codes: ["INTERNATIONAL_5", "INT5", "INT_MUHENKAN"],
      description: "無変換 (International 5)",
      group: "Keyboard",
      legend: "無変換"
    },
    {
      codes: ["INTERNATIONAL_6", "INT6", "INT_KPJPCOMMA"],
      description: ", [カソマ] (International 6)",
      group: "Keyboard",
      legend: "カソマ"
    },
    {
      codes: ["INTERNATIONAL_7", "INT7"],
      description: "International 7",
      group: "Keyboard"
    },
    {
      codes: ["INTERNATIONAL_8", "INT8"],
      description: "International 8",
      group: "Keyboard"
    },
    {
      codes: ["INTERNATIONAL_9", "INT9"],
      description: "International 9",
      group: "Keyboard"
    },
    {
      codes: ["LANGUAGE_1", "LANG1", "LANG_HANGEUL"],
      description: "한/영 (Language 1)",
      group: "Keyboard",
      legend: "한/영"
    },
    {
      codes: ["LANGUAGE_2", "LANG2", "LANG_HANJA"],
      description: "한자 (Language 2)",
      group: "Keyboard",
      legend: "한자"
    },
    {
      codes: ["LANGUAGE_3", "LANG3", "LANG_KATAKANA"],
      description: "カタカナ (Language 3)",
      group: "Keyboard",
      legend: "カタカナ"
    },
    {
      codes: ["LANGUAGE_4", "LANG4", "LANG_HIRAGANA"],
      description: "ひらがな (Language 4)",
      group: "Keyboard",
      legend: "ひらがな"
    },
    {
      codes: ["LANGUAGE_5", "LANG5", "LANG_ZENKAKUHANKAKU"],
      description: "半角/全角 (Language 5)",
      group: "Keyboard",
      legend: "半角/全角"
    },
    {
      codes: ["LANGUAGE_6", "LANG6"],
      description: "Language 6",
      group: "Keyboard"
    },
    {
      codes: ["LANGUAGE_7", "LANG7"],
      description: "Language 7",
      group: "Keyboard"
    },
    {
      codes: ["LANGUAGE_8", "LANG8"],
      description: "Language 8",
      group: "Keyboard"
    },
    {
      codes: ["LANGUAGE_9", "LANG9"],
      description: "Language 9",
      group: "Keyboard"
    },
    {
      codes: ["ALT_ERASE"],
      description: "Alternate Erase",
      group: "Keyboard"
    },
    {
      codes: ["SYSREQ", "ATTENTION"],
      description: "SysReq / Attention",
      group: "Keyboard"
    },
    {
      codes: ["K_CANCEL"],
      description: "Cancel",
      group: "Keyboard"
    },
    {
      codes: ["CLEAR"],
      description: "Clear",
      group: "Keyboard",
      legend: "CLR"
    },
    {
      codes: ["PRIOR"],
      description: "Prior",
      group: "Keyboard"
    },
    {
      codes: ["RETURN2", "RET2"],
      description: "Return",
      group: "Keyboard"
    },
    {
      codes: ["SEPARATOR"],
      description: "Separator",
      group: "Keyboard",
      legend: "SEP"
    },
    {
      codes: ["OUT"],
      description: "Out",
      group: "Keyboard"
    },
    {
      codes: ["OPER"],
      description: "Oper",
      group: "Keyboard"
    },
    {
      codes: ["CLEAR_AGAIN"],
      description: "Clear / Again",
      group: "Keyboard"
    },
    {
      codes: ["CRSEL"],
      description: "CrSel / Props",
      group: "Keyboard"
    },
    {
      codes: ["EXSEL"],
      description: "ExSel",
      group: "Keyboard"
    },
    {
      codes: ["KP_LEFT_PARENTHESIS", "KP_LPAR"],
      description: "( [Left Parenthesis]",
      group: "Keypad"
    },
    {
      codes: ["KP_RIGHT_PARENTHESIS", "KP_RPAR"],
      description: ") [Right Parenthesis]",
      group: "Keypad"
    },
    {
      codes: ["KP_CLEAR"],
      description: "Clear",
      group: "Keypad"
    },
    {
      codes: ["LEFT_CONTROL", "LCTRL", "LC(code)"],
      description: "Left Control",
      group: "Keyboard"
    },
    {
      codes: ["LEFT_SHIFT", "LSHIFT", "LSHFT", "LS(code)"],
      description: "Left Shift ⇧",
      group: "Keyboard"
    },
    {
      codes: ["LEFT_ALT", "LALT", "LA(code)"],
      description: "Left Alt",
      group: "Keyboard"
    },
    {
      codes: [
        "LEFT_GUI",
        "LGUI",
        "LG(code)",
        "LEFT_WIN",
        "LWIN",
        "LEFT_COMMAND",
        "LCMD",
        "LEFT_META",
        "LMETA",
      ],
      description: "Left GUI (Windows / Command / Meta)",
      group: "Keyboard"
    },
    {
      codes: ["RIGHT_CONTROL", "RCTRL", "RC(code)"],
      description: "Right Control",
      group: "Keyboard"
    },
    {
      codes: ["RIGHT_SHIFT", "RSHIFT", "RSHFT", "RS(code)"],
      description: "Right Shift ⇧",
      group: "Keyboard"
    },
    {
      codes: ["RIGHT_ALT", "RALT", "RA(code)"],
      description: "Right Alt",
      group: "Keyboard"
    },
    {
      codes: [
        "RIGHT_GUI",
        "RGUI",
        "RG(code)",
        "RIGHT_WIN",
        "RWIN",
        "RIGHT_COMMAND",
        "RCMD",
        "RIGHT_META",
        "RMETA",
      ],
      description: "Right GUI (Windows / Command / Meta)",
      group: "Keyboard"
    },
    {
      codes: ["K_PLAY_PAUSE", "K_PP"],
      description: "Play / Pause",
      group: "Keyboard"
    },
    {
      codes: ["K_STOP2"],
      description: "Stop",
      group: "Keyboard"
    },
    {
      codes: ["K_PREVIOUS", "K_PREV"],
      description: "Previous",
      group: "Keyboard"
    },
    {
      codes: ["K_NEXT"],
      description: "Next",
      group: "Keyboard"
    },
    {
      codes: ["K_EJECT"],
      description: "Eject",
      group: "Keyboard"
    },
    {
      codes: ["K_VOLUME_UP2", "K_VOL_UP2"],
      description: "Volume Up",
      group: "Keyboard"
    },
    {
      codes: ["K_VOLUME_DOWN2", "K_VOL_DN2"],
      description: "Volume Down",
      group: "Keyboard"
    },
    {
      codes: ["K_MUTE2"],
      description: "Mute",
      group: "Keyboard"
    },
    {
      codes: ["K_WWW"],
      description: "Internet Browser",
      group: "Keyboard"
    },
    {
      codes: ["K_BACK"],
      description: "Back",
      group: "Keyboard"
    },
    {
      codes: ["K_FORWARD"],
      description: "Forward",
      group: "Keyboard"
    },
    {
      codes: ["K_STOP3"],
      description: "Stop",
      group: "Keyboard"
    },
    {
      codes: ["K_FIND2"],
      description: "Find",
      group: "Keyboard"
    },
    {
      codes: ["K_SCROLL_UP"],
      description: "Scroll Up",
      group: "Keyboard"
    },
    {
      codes: ["K_SCROLL_DOWN"],
      description: "Scroll Down",
      group: "Keyboard"
    },
    {
      codes: ["K_EDIT"],
      description: "Edit",
      group: "Keyboard"
    },
    {
      codes: ["K_SLEEP"],
      description: "Sleep",
      group: "Keyboard"
    },
    {
      codes: ["K_LOCK", "K_SCREENSAVER", "K_COFFEE"],
      description: "Lock",
      group: "Keyboard"
    },
    {
      codes: ["K_REFRESH"],
      description: "Refresh",
      group: "Keyboard"
    },
    {
      codes: ["K_CALCULATOR", "K_CALC"],
      description: "Calculator",
      group: "Keyboard"
    },
  ];

  public static readonly groupKeypad: Array<any> = [
    {
      codes: ["KP_NUMLOCK", "KP_NUM", "KP_NLCK"],
      description: "Numlock and Clear",
      group: "Keypad"
    },
    {
      codes: ["CLEAR2"],
      description: "Clear",
      group: "Keypad"
    },
    {
      codes: ["KP_DIVIDE", "KP_SLASH"],
      description: "/ [Divide]",
      group: "Keypad"
    },
    {
      codes: ["KP_MULTIPLY", "KP_ASTERISK"],
      description: "* [Multiply]",
      group: "Keypad"
    },
    {
      codes: ["KP_MINUS", "KP_SUBTRACT"],
      description: "- [Minus]",
      group: "Keypad"
    },
    {
      codes: ["KP_PLUS"],
      description: "+ [Plus]",
      group: "Keypad"
    },
    {
      codes: ["KP_ENTER"],
      description: "Enter",
      group: "Keypad"
    },
    {
      codes: ["KP_NUMBER_1", "KP_N1"],
      description: "1",
      group: "Keypad"
    },
    {
      codes: ["KP_NUMBER_2", "KP_N2"],
      description: "2",
      group: "Keypad"
    },
    {
      codes: ["KP_NUMBER_3", "KP_N3"],
      description: "3",
      group: "Keypad"
    },
    {
      codes: ["KP_NUMBER_4", "KP_N4"],
      description: "4",
      group: "Keypad"
    },
    {
      codes: ["KP_NUMBER_5", "KP_N5"],
      description: "5",
      group: "Keypad"
    },
    {
      codes: ["KP_NUMBER_6", "KP_N6"],
      description: "6",
      group: "Keypad"
    },
    {
      codes: ["KP_NUMBER_7", "KP_N7"],
      description: "7",
      group: "Keypad"
    },
    {
      codes: ["KP_NUMBER_8", "KP_N8"],
      description: "8",
      group: "Keypad"
    },
    {
      codes: ["KP_NUMBER_9", "KP_N9"],
      description: "9",
      group: "Keypad"
    },
    {
      codes: ["KP_NUMBER_0", "KP_N0"],
      description: "0",
      group: "Keypad"
    },
    {
      codes: ["KP_DOT"],
      description: ". [Dot]",
      group: "Keypad"
    },
    {
      codes: ["KP_EQUAL"],
      description: "= [Equal]",
      group: "Keypad"
    },
    {
      codes: ["KP_COMMA"],
      description: ", [Comma]",
      group: "Keypad"
    },
    {
      codes: ["KP_EQUAL_AS400"],
      description: "= [Equal] (AS/400 keyboards)",
      group: "Keypad"
    },
  ];

  public static readonly groupConsumer: Array<any> = [
    {
      codes: ["C_POWER", "C_PWR"],
      description: "Power",
      group: "Consumer"
    },
    {
      codes: ["C_RESET"],
      description: "Reset",
      group: "Consumer"
    },
    {
      codes: ["C_SLEEP"],
      description: "Sleep",
      group: "Consumer"
    },
    {
      codes: ["C_SLEEP_MODE"],
      description: "Sleep Mode",
      group: "Consumer"
    },
    {
      codes: ["C_DATA_ON_SCREEN"],
      description: "Data On Screen",
      group: "Consumer"
    },
    {
      codes: ["C_CAPTIONS", "C_SUBTITILES"],
      description: "Closed Caption",
      group: "Consumer"
    },
    {
      codes: ["C_SNAPSHOT"],
      description: "Snapshot",
      group: "Consumer"
    },
    {
      codes: ["C_PIP"],
      description: "Picture-in-Picture Toggle",
      group: "Consumer"
    },
    {
      codes: ["C_ASPECT"],
      description: "Aspect",
      group: "Consumer"
    },
    {
      codes: ["C_BRIGHTNESS_INC", "C_BRI_INC", "C_BRI_UP"],
      description: "Increase Brightness",
      group: "Consumer"
    },
    {
      codes: ["C_BRIGHTNESS_DEC", "C_BRI_DEC", "C_BRI_DN"],
      description: "Decrease Brightness",
      group: "Consumer"
    },
    {
      codes: ["C_BACKLIGHT_TOGGLE", "C_BKLT_TOG"],
      description: "Backlight Toggle",
      group: "Consumer"
    },
    {
      codes: ["C_BRIGHTNESS_MINIMUM", "C_BRI_MIN"],
      description: "Minimum Brightness",
      group: "Consumer"
    },
    {
      codes: ["C_BRIGHTNESS_MAXIMUM", "C_BRI_MAX"],
      description: "Maximum Brightness",
      group: "Consumer"
    },
    {
      codes: ["C_BRIGHTNESS_AUTO", "C_BRI_AUTO"],
      description: "Auto Brightness",
      group: "Consumer"
    },
    {
      codes: ["C_RECALL_LAST", "C_CHAN_LAST"],
      description: "Recall Last",
      group: "Consumer"
    },
    {
      codes: ["C_QUIT"],
      description: "Quit",
      group: "Consumer"
    },
    {
      codes: ["C_HELP"],
      description: "Help",
      group: "Consumer"
    },
    {
      codes: ["C_CHANNEL_INC", "C_CHAN_INC"],
      description: "Channel Increment",
      group: "Consumer"
    },
    {
      codes: ["C_CHANNEL_DEC", "C_CHAN_DEC"],
      description: "Channel Decrement",
      group: "Consumer"
    },
    {
      codes: ["C_PLAY"],
      description: "Play",
      group: "Consumer"
    },
    {
      codes: ["C_PAUSE"],
      description: "Pause",
      group: "Consumer"
    },
    {
      codes: ["C_RECORD", "C_REC"],
      description: "Record",
      group: "Consumer"
    },
    {
      codes: ["C_FAST_FORWARD", "C_FF"],
      description: "Fast Forward",
      group: "Consumer"
    },
    {
      codes: ["C_REWIND", "C_RW"],
      description: "Rewind",
      group: "Consumer"
    },
    {
      codes: ["C_NEXT"],
      description: "Next",
      group: "Consumer"
    },
    {
      codes: ["C_PREVIOUS", "C_PREV"],
      description: "Previous",
      group: "Consumer"
    },
    {
      codes: ["C_STOP"],
      description: "Stop",
      group: "Consumer"
    },
    {
      codes: ["C_EJECT"],
      description: "Eject",
      group: "Consumer"
    },
    {
      codes: ["C_RANDOM_PLAY", "C_SHUFFLE"],
      description: "Random Play",
      group: "Consumer"
    },
    {
      codes: ["C_REPEAT"],
      description: "Repeat",
      group: "Consumer"
    },
    {
      codes: ["C_SLOW_TRACKING", "C_SLOW2"],
      description: "Slow Tracking",
      group: "Consumer"
    },
    {
      codes: ["C_STOP_EJECT"],
      description: "Stop / Eject",
      group: "Consumer"
    },
    {
      codes: ["C_PLAY_PAUSE", "C_PP"],
      description: "Play / Pause",
      group: "Consumer"
    },
    {
      codes: ["C_VOICE_COMMAND"],
      description: "Voice Command",
      group: "Consumer"
    },
    {
      codes: ["C_MUTE"],
      description: "Mute",
      group: "Consumer"
    },
    {
      codes: ["C_BASS_BOOST"],
      description: "Bass Boost",
      group: "Consumer"
    },
    {
      codes: ["C_VOLUME_UP", "C_VOL_UP"],
      description: "Volume Up",
      group: "Consumer"
    },
    {
      codes: ["C_VOLUME_DOWN", "C_VOL_DN"],
      description: "Volume Down",
      group: "Consumer"
    },
    {
      codes: ["C_SLOW"],
      description: "Slow",
      group: "Consumer"
    },
    {
      codes: ["C_ALTERNATE_AUDIO_INCREMENT", "C_ALT_AUDIO_INC"],
      description: "Alternate Audio Increment",
      group: "Consumer"
    },
  ];

  public static readonly groupConsumerMenu: Array<any> = [
    {
      codes: ["C_MENU"],
      description: "Menu",
      group: "Consumer Menu"
    },
    {
      codes: ["C_MENU_PICK", "C_MENU_SELECT"],
      description: "Pick",
      group: "Consumer Menu"
    },
    {
      codes: ["C_MENU_UP"],
      description: "Up",
      group: "Consumer Menu"
    },
    {
      codes: ["C_MENU_DOWN"],
      description: "Down",
      group: "Consumer Menu"
    },
    {
      codes: ["C_MENU_LEFT"],
      description: "Left",
      group: "Consumer Menu"
    },
    {
      codes: ["C_MENU_RIGHT"],
      description: "Right",
      group: "Consumer Menu"
    },
    {
      codes: ["C_MENU_ESCAPE", "C_MENU_ESC"],
      description: "Escape",
      group: "Consumer Menu"
    },
    {
      codes: ["C_MENU_INCREASE", "C_MENU_INC"],
      description: "Value Increase",
      group: "Consumer Menu"
    },
    {
      codes: ["C_MENU_DECREASE", "C_MENU_DEC"],
      description: "Value Decrease",
      group: "Consumer Menu"
    },
    {
      codes: ["C_RED_BUTTON", "C_RED"],
      description: "Red Button",
      group: "Consumer Menu"
    },
    {
      codes: ["C_GREEN_BUTTON", "C_GREEN"],
      description: "Green Button",
      group: "Consumer Menu"
    },
    {
      codes: ["C_BLUE_BUTTON", "C_BLUE"],
      description: "Blue Button",
      group: "Consumer Menu"
    },
    {
      codes: ["C_YELLOW_BUTTON", "C_YELLOW"],
      description: "Yellow Button",
      group: "Consumer Menu"
    },
  ];

  public static readonly groupConsumerMedia: Array<any> = [
    {
      codes: ["C_MEDIA_STEP", "C_MODE_STEP"],
      description: "Mode Step",
      group: "Consumer Media"
    },
    {
      codes: ["C_MEDIA_COMPUTER"],
      description: "Computer",
      group: "Consumer Media"
    },
    {
      codes: ["C_MEDIA_TV"],
      description: "TV",
      group: "Consumer Media"
    },
    {
      codes: ["C_MEDIA_WWW"],
      description: "WWW",
      group: "Consumer Media"
    },
    {
      codes: ["C_MEDIA_DVD"],
      description: "DVD",
      group: "Consumer Media"
    },
    {
      codes: ["C_MEDIA_PHONE"],
      description: "Telephone",
      group: "Consumer Media"
    },
    {
      codes: ["C_MEDIA_GUIDE"],
      description: "Program Guide",
      group: "Consumer Media"
    },
    {
      codes: ["C_MEDIA_VIDEOPHONE"],
      description: "Video Phone",
      group: "Consumer Media"
    },
    {
      codes: ["C_MEDIA_GAMES"],
      description: "Games",
      group: "Consumer Media"
    },
    {
      codes: ["C_MEDIA_MESSAGES"],
      description: "Messages",
      group: "Consumer Media"
    },
    {
      codes: ["C_MEDIA_CD"],
      description: "CD",
      group: "Consumer Media"
    },
    {
      codes: ["C_MEDIA_VCR"],
      description: "VCR",
      group: "Consumer Media"
    },
    {
      codes: ["C_MEDIA_TUNER"],
      description: "Tuner",
      group: "Consumer Media"
    },
    {
      codes: ["C_MEDIA_TAPE"],
      description: "Tape",
      group: "Consumer Media"
    },
    {
      codes: ["C_MEDIA_CABLE"],
      description: "Cable",
      group: "Consumer Media"
    },
    {
      codes: ["C_MEDIA_SATELLITE"],
      description: "Satellite",
      group: "Consumer Media"
    },
    {
      codes: ["C_MEDIA_HOME"],
      description: "Home",
      group: "Consumer Media"
    },
    {
      codes: ["C_MEDIA_VCR_PLUS"],
      description: "VCR Plus",
      group: "Consumer Media"
    },
  ];

  public static readonly groupConsumerAL: Array<any> = [
    {
      codes: ["C_AL_CCC"],
      description: "Consumer Control Configuration",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_WORD"],
      description: "Word Processor",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_TEXT_EDITOR"],
      description: "Text Editor",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_SPREADSHEET", "C_AL_SHEET"],
      description: "Spreadsheet",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_GRAPHICS_EDITOR"],
      description: "Graphics Editor",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_PRESENTATION"],
      description: "Presentation",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_DATABASE", "C_AL_DB"],
      description: "Database App",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_EMAIL", "C_AL_MAIL"],
      description: "Email Reader",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_NEWS"],
      description: "Newsreader",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_VOICEMAIL"],
      description: "Voicemail",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_CONTACTS", "C_AL_ADDRESS_BOOK"],
      description: "Contacts / Address Book",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_CALENDAR", "C_AL_CAL"],
      description: "Calendar / Schedule",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_TASK_MANAGER"],
      description: "Task / Project Manager",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_JOURNAL"],
      description: "Log / Journal / Timecard",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_FINANCE"],
      description: "Checkbook / Finance",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_CALCULATOR", "C_AL_CALC"],
      description: "Calculator",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_AV_CAPTURE_PLAYBACK"],
      description: "A/V Capture / Playback",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_MY_COMPUTER"],
      description: "Local Machine Browser",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_WWW"],
      description: "Internet Browser",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_NETWORK_CHAT", "C_AL_CHAT"],
      description: "Network Chat",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_LOGOFF"],
      description: "Logoff",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_LOCK", "C_AL_SCREENSAVER", "C_AL_COFFEE"],
      description: "Terminal Lock / Screensaver",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_CONTROL_PANEL"],
      description: "Control Panel",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_SELECT_TASK"],
      description: "Select Task / Application",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_NEXT_TASK"],
      description: "Next Task / Application",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_PREVIOUS_TASK", "C_AL_PREV_TASK"],
      description: "Previous Task / Application",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_HELP"],
      description: "Integrated Help Center",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_DOCUMENTS", "C_AL_DOCS"],
      description: "Documents",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_SPELLCHECK", "C_AL_SPELL"],
      description: "Spell Check",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_KEYBOARD_LAYOUT"],
      description: "Keyboard Layout",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_SCREEN_SAVER"],
      description: "Screen Saver",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_FILE_BROWSER", "C_AL_FILES"],
      description: "File Browser",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_IMAGE_BROWSER", "C_AL_IMAGES"],
      description: "Image Browser",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_AUDIO_BROWSER", "C_AL_AUDIO", "C_AL_MUSIC"],
      description: "Audio Browser",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_MOVIE_BROWSER", "C_AL_MOVIES"],
      description: "Movie Browser",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_INSTANT_MESSAGING", "C_AL_IM"],
      description: "Instant Messaging",
      group: "Consumer AL"
    },
    {
      codes: ["C_AL_OEM_FEATURES", "C_AL_TIPS", "C_AL_TUTORIAL"],
      description: "OEM Features / Tips / Tutorial Browser",
      group: "Consumer AL"
    },
  ];

  public static readonly groupConsumerAC: Array<any> = [
    {
      codes: ["C_AC_NEW"],
      description: "New",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_OPEN"],
      description: "Open",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_CLOSE"],
      description: "Close",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_EXIT"],
      description: "Exit",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_SAVE"],
      description: "Save",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_PRINT"],
      description: "Print",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_PROPERTIES", "C_AC_PROPS"],
      description: "Properties",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_UNDO"],
      description: "Undo",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_COPY"],
      description: "Copy",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_CUT"],
      description: "Cut",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_PASTE"],
      description: "Paste",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_FIND"],
      description: "Find",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_SEARCH"],
      description: "Search",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_GOTO"],
      description: "Go To",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_HOME"],
      description: "Home",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_BACK"],
      description: "Back",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_FORWARD"],
      description: "Forward",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_STOP"],
      description: "Stop",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_REFRESH"],
      description: "Refresh",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_BOOKMARKS", "C_AC_FAVORITES", "C_AC_FAVOURITES"],
      description: "Bookmarks",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_ZOOM_IN"],
      description: "Zoom In",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_ZOOM_OUT"],
      description: "Zoom Out",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_ZOOM"],
      description: "Zoom",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_VIEW_TOGGLE"],
      description: "View Toggle",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_SCROLL_UP"],
      description: "Scroll Up",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_SCROLL_DOWN"],
      description: "Scroll Down",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_EDIT"],
      description: "Edit",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_CANCEL"],
      description: "Cancel",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_INSERT", "C_AC_INS"],
      description: "Insert Mode",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_DEL"],
      description: "Delete",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_REDO"],
      description: "Redo / Repeat",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_REPLY"],
      description: "Reply",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_FORWARD_MAIL"],
      description: "Forward",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_SEND"],
      description: "Send",
      group: "Consumer AC"
    },
    {
      codes: ["C_AC_DESKTOP_SHOW_ALL_WINDOWS"],
      description: "Desktop Show All Windows",
      group: "Consumer AC"
    },
  ];

  public static readonly groupConsumerKBIA: Array<any> = [
    {
      codes: ["C_KEYBOARD_INPUT_ASSIST_PREVIOUS", "C_KBIA_PREV"],
      description: "Previous",
      group: "Consumer KBIA"
    },
    {
      codes: ["C_KEYBOARD_INPUT_ASSIST_NEXT", "C_KBIA_NEXT"],
      description: "Next",
      group: "Consumer KBIA"
    },
    {
      codes: ["C_KEYBOARD_INPUT_ASSIST_PREVIOUS_GROUP", "C_KBIA_PREV_GRP"],
      description: "Previous Group",
      group: "Consumer KBIA"
    },
    {
      codes: ["C_KEYBOARD_INPUT_ASSIST_NEXT_GROUP", "C_KBIA_NEXT_GRP"],
      description: "Next Group",
      group: "Consumer KBIA"
    },
    {
      codes: ["C_KEYBOARD_INPUT_ASSIST_ACCEPT", "C_KBIA_ACCEPT"],
      description: "Accept",
      group: "Consumer KBIA"
    },
    {
      codes: ["C_KEYBOARD_INPUT_ASSIST_CANCEL", "C_KBIA_CANCEL"],
      description: "Cancel",
      group: "Consumer KBIA"
    }
  ];

}
