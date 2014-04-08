/**
 * Shuffle
 *
 * Based off of the Fisher-Yates (Knuth) Shuffle, and revised
 * to allow a callback for 'fixed'. Keep in mind this wont give you a
 * truly balanced shuffle, thus one can use '0' to attempt and infinite
 * number of times.
 * 
 * @param {array} array
 *   Input array to shuffle
 * @param {function} callback
 *   Function test for fixed positions. Return true if fixed.
 * @param {number} attempts
 *   Defines the number of attempts to try for a non-fixed position
 *   0 is infinite, default is 3.
 *
 * @author Jack Matier <self@jackalyst.com>
 * @license MIT
 *  
 * @todo Fix possibility of infinite loop though using 0;
 */
var shuffle = (function(window, document, undefined) {
	return function(array, callback, attempts) {
		// Check for array and then quit.
		if(!(array instanceof Array)) {
			console.log("First argument is not an array.");
			return [];
		}

		var callback = callback || function() { return false; };
		var attempts_reset = attempts || 3;
		var i = array.length, j, temp; 

		if(i == 0) { return array; }
		
		// Work backwards.
		while( --i ) {
			attempts = attempts_reset;

			// If it's fixed. Do not shuffle.
			if(callback(i, array[i])===true) {
				j = i;
			} else {
				// Otherwise, shuffle until attempts are made.
				do {
				   j = Math.floor( Math.random() * ( i + 1 ) );
				   if(--attempts==0) {
				   		if(callback(j, array[j])===true) {
				   			j = i;
				   		}
				   		break;
				   }
				} while(callback(j, array[j])===true);
			}

			temp = array[i];
		    array[i] = array[j];
		    array[j] = temp;
		}
		return array;
	};
})();