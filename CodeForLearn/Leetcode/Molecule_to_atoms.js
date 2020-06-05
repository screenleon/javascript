var KeyCount = function () {
    this.keys = {};
  };
  
  /*******************************************************************************
   * Add a number of keys to this collection. Adds one key if n is omitted
   ******************************************************************************/
  KeyCount.prototype.addKey = function (key, n) {
    n = n === undefined ? 1 : n;
    var count = this.keys[key] || 0;
    this.keys[key] = count + n;
  };
  
  /*******************************************************************************
   * Multiply the count for each key in the collection with the specified factor
   ******************************************************************************/
  KeyCount.prototype.multiply = function (factor) {
    for (var key in this.keys) {
      if (this.keys.hasOwnProperty(key))
        this.keys[key] *= factor;
    }
  };
  
  /*******************************************************************************
   * Merge all the keys from another KeyCount into this.
   ******************************************************************************/
  KeyCount.prototype.merge = function (other) {
    for (var key in other.keys) {
      if (other.keys.hasOwnProperty(key)) {
        this.addKey(key, other.keys[key]);
      }
    }
  };
  
  function parseMolecule(m) {
    var tokens = m.match(/([A-Z][a-z]?\d*|[\[\(\]\){}]\d*)/g);
    
    console.log('tokens:', tokens)
  
    var stack = [new KeyCount()];
    while (tokens.length > 0) {
      console.log('formula:', m);
      console.log('stack:', stack)
      var token = tokens.shift();
  
      var atomCount = token.match(/[A-Z][a-z]?|[\[\(\]\){}]|\d+/g);
      var atom = atomCount[0];
      var count = atomCount.length > 1 ? parseInt(atomCount[1]) : 1;
  
      console.log('token:', token)
      console.log('atomCount:', atomCount)
      console.log('atom:', atom)
      console.log('count:', count)
  
      if (atom === '(' || atom === '[' || atom === '{') {
        stack.unshift(new KeyCount());
      } else if (atom === ')' || atom === ']' || atom === '}') {
        var current = stack.shift();
  
        console.log('current:', current)
  
        current.multiply(count);
  
        console.log('current:', current)
  
        stack[0].merge(current);
      } else {
        stack[0].addKey(atom, count);
      }
      
      console.log('stack:', stack)
      console.log();
    }
    return stack[0].keys;
  }
  
  console.log(parseMolecule("{[Co(NH3)4(OH)2]3Co}(SO4)3"), { Co: 4, N: 12, H: 42, O: 18, S: 3 })