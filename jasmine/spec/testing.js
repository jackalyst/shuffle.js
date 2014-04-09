describe("Testing without callback", function() {
  // How often to repeat tests?
  var repeat_tests = 10;

  // The size of array to work with
  var array = [];

  for (var i = 0; i < 1000; i++) {
    array[i] = i;
  };

  it("Make sure less than 5% is the same", function() {
    // Are we able to access shuffle?
    var new_array = shuffle(array.slice());
     var the_same = 0;

    // The same?
    for (var i = array.length - 1; i >= 0; i--) {
      if(array[i]==new_array[i]) {
        the_same++;
      }
    };    

    if(the_same<=5) {
      the_same = true;
    }

    expect(the_same).toBe(true);
  });
});
