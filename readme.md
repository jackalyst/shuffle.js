# shuffle.js

Based off of the Fisher-Yates (Knuth) Shuffle, and revised to allow a callback to keep things fixed in place. Keep in mind, using the callback may not give a truly balanced shuffle because only a certain number of attempts are made to shuffle.

## A note on performance

When using this as a 1 to 1 replacement with a bare bones knuth shuffle this performs at about 0.9x the speed. With a simple callback and half the values being 'fixed', that figure drops down to about 0.3x the speed.

## Basic Usage

The basic use to shuffle an array is

```JavaScript
shuffle(array);
```

This will shuffle the array in place. To make a copy of it to another variable:

```JavaScript
var new_array = shuffle(array.slice());
```

## Usage with Callback

The callback has two parameters, the first one contains the array key, while the second contains the value. For everything you want to be fixed in place, `true` must be returned.

```JavaScript
function test_callback(n, element) {
	if(n < 5) {
		return true;
	} else {
		return false;
	}
}
shuffle(array, test_callback);
```

The default amount of attempts the shuffle makes is 3 before giving up and moving onto the next value. Depending on your usage you may want to change it to less or more. 0 will cause it to attempt and infinite amount of times, this however is not recommended.

```JavaScript
function test_callback(n, element) {
	if(n < 5) {
		return true;
	} else {
		return false;
	}
}
shuffle(array, test_callback, 10);
```