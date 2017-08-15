// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.

function Hamming() {
	this.compute = function(strand1,strand2) {
		let hammingDistance = 0,
			s1 = strand1.split(''),
			s2 = strand2.split('');
		
		if (s1.length == s2.length) {
			s1.filter(function(letter,i) {
				if (letter != s2[i]) {
					hammingDistance++;
				}
			});
			
			return hammingDistance;
		} else {
			throw 'DNA strands must be of equal length.';
		}
	}
}

module.exports = Hamming;
