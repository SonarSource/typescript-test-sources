//// [unicodeExtendedEscapesInTemplates20_ES5.ts]
var x = `\u{48}\u{65}\u{6c}\u{6c}\u{6f}${`\u{20}\u{020}\u{0020}\u{000020}`}\u{77}\u{6f}\u{72}\u{6c}\u{64}`;


//// [unicodeExtendedEscapesInTemplates20_ES5.js]
var x = "Hello" + "    " + "world";