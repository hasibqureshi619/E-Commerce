function reverseIndividualWords(str) {
	const words = str.split(' ');

	const reversedWords = words.map(word => word.split('').reverse().join(''));
	const result = reversedWords.join(' ');

	return result;
}

const str = 'This is a sunny day';
const reversedStr = reverseIndividualWords(str);
console.log(reversedStr);