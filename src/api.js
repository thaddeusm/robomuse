export const getWords = async (query, input) => {
	let str = await transformStr(input);
	let res;
	
	switch (query) {
		case 'a word synonomous with':
			res = await getSynonyms(str);

			return res;
			break;
		case 'a word that rhymes with':
			res = await getRhymes(str);

			return res;
			break;
		case 'an adjective that describes':
			res = await getAdjectives(str);

			return res;
			break;
		case 'a noun often described as':
			res = await getNouns(str);

			return res;
			break;
		case 'a word that goes with':
			res = await getCollocations(str);

			return res;
			break;
	}
}

const transformStr = async (input) => {
	let urlStr = input.split(' ').join('+');

	return urlStr;
}

const getSynonyms = async (str) => {
	let res;
	try {
		res = await fetch(`http://api.datamuse.com/words?ml=${str}`, {
			method: 'GET'
		});

		let parsed = await res.json();

		return parsed;
	} catch(err) {
		return 'error';
	}
}

const getRhymes = async (str) => {
	let res;
	try {
		res = await fetch(`http://api.datamuse.com/words?rel_rhy=${str}`, {
			method: 'GET'
		});

		let parsed = await res.json();

		return parsed;
	} catch(err) {
		return 'error';
	}
}

const getAdjectives = async (str) => {
	let res;
	try {
		res = await fetch(`http://api.datamuse.com/words?rel_jjb=${str}`, {
			method: 'GET'
		});

		let parsed = await res.json();

		return parsed;
	} catch(err) {
		return 'error';
	}
}

const getNouns = async (str) => {
	let res;
	try {
		res = await fetch(`http://api.datamuse.com/words?rel_jja=${str}`, {
			method: 'GET'
		});

		let parsed = await res.json();

		return parsed;
	} catch(err) {
		return 'error';
	}
}

const getCollocations = async (str) => {
	let res;
	try {
		res = await fetch(`http://api.datamuse.com/words?rel_trg=${str}`, {
			method: 'GET'
		});

		let parsed = await res.json();

		return parsed;
	} catch(err) {
		return 'error';
	}
}