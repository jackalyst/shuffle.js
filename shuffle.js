/**
 * Array.prototype.knuth_shuffle_callback
 * 
 * Based off of the Fisher-Yates (Knuth) Shuffle, and revised
 * to allow a callback for 'fixed'. Keep in mind this wont give you a
 * truly balanced shuffle.
 *
 * @param {function} callback Function test for fixed positions. Return true if fixed.
 * @param {number} attempts Defines the number of attempts to try for a non-fixed position. 0 is infinite, default is 3.
 * 
 * @todo Fix possibility of infinite loop though using 0;
 */
Array.prototype.shuffle = function(callback, attempts) {
	var attempts_reset = attempts || 3;
	callback = callback || function() { return false; };

	var i = this.length, j, temp, attempted=0;

	if ( i == 0 ) return this;

	// Work backwards.
	while( --i ) {
		attempts = attempts_reset;

		// If it's fixed. Do not shuffle.
		if(callback(this[i])===true) {
			j = i;
		} else {
			// Otherwise, shuffle until attempts are made.
			do {
			   j = Math.floor( Math.random() * ( i + 1 ) );
			   if(--attempts==0) {
			   		if(callback(this[j])===true) {
			   			j = i;
			   		}
			   		break;
			   }
			} while(callback(this[j])===true);
		}

		temp = this[i];
	    this[i] = this[j];
	    this[j] = temp;
	}
	return this;
};