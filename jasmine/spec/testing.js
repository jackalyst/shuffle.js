describe("Testing without callback", function() {
  // How often to repeat tests?
  var repeat_tests = 10;

  // The size of array to work with
  var array = [];

  for (var i = 0; i < 1000; i++) {
    array[i] = i;
  };

  array_length = array.length;
  it("Make sure less than 2% is the same", function() {
    var total = 0;
    var average = 0;
    var pass = false;
    var new_array = [];
    var the_same = [];

    for (var j = repeat_tests - 1; j >= 0; j--) {
      // Are we able to access shuffle?
      new_array[j] = shuffle(array.slice());
       the_same[j] = 0;

      // The same?
      for (var i = array_length - 1; i >= 0; i--) {
        if(array[i]==new_array[j][i]) {
          the_same[j]++;
        }
      };
    };

    // Average it out
    for (var i = the_same.length - 1; i >= 0; i--) {
      total += the_same[i];
    };
    average = total / the_same.length;

    console.log(average);

    if(average<3) {
      pass = true;
    } else {
      pass = false;
    }

    expect(pass).toBe(true);
  });
});
