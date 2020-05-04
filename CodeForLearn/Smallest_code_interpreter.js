function brainLuck(code, input) {
    var data = [],
      pos = 0,
      ipos = 0,
      output = [],
      skipping = 0,
      backwards = 0;
  
    var COMMANDS = {
      '>': function () { ++pos },
      '<': function () { --pos },
      '+': function () { data[pos] = ((data[pos] || 0) + 1) % 256 },
      '-': function () { data[pos] = ((data[pos] || 0) + 255) % 256 },
      '.': function () { output.push(data[pos]) },
      ',': function () { data[pos] = (input[ipos++] || '').charCodeAt() },
      '[': function () { if (!data[pos]) { skipping = 1 } },
      ']': function () { if (data[pos]) { backwards = 1 } }
    };
  
    for (var cpos = 0, l = code.length; cpos <= l; ++cpos) {
      if (skipping) {
        if (code[cpos] === '[') { skipping++ }
        if (code[cpos] === ']') { skipping-- }
      } else if (backwards) {
        cpos -= 2;
        if (code[cpos] === ']') { backwards++ }
        if (code[cpos] === '[') { backwards-- }
      } else {
        code[cpos] && COMMANDS[code[cpos]]();
      }
      console.log();
      console.log('command:', code[cpos]);
      console.log('data:', data);
      console.log('output:', output);
      console.log('pos:', pos);
      console.log('ipos:', ipos);
      console.log('skipping:', skipping);
      console.log('backwards:', backwards);
    }
  
    return String.fromCharCode.apply(null, output)
  }
  
  console.log(brainLuck(',+[-.,+]', 'Codewars' + String.fromCharCode(255)))
  
  /*
  > increment the data pointer (to point to the next cell to the right).
  < decrement the data pointer (to point to the next cell to the left).
  + increment (increase by one, truncate overflow: 255 + 1 = 0) the byte at the data pointer.
  - decrement (decrease by one, treat as unsigned byte: 0 - 1 = 255 ) the byte at the data pointer.
  . output the byte at the data pointer.
  , accept one byte of input, storing its value in the byte at the data pointer.
  [ if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching ] command.
  ] if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching [ command.
  */