import americanFlag from './assets/flags/usa.jpeg';
import mexicanFlag from './assets/flags/mexico.jpeg';
import canadianFlag from './assets/flags/canada.jpeg';
import britishFlag from './assets/flags/gba.jpeg';
import japaneseFlag from './assets/flags/japan.jpeg';

const options = [
  { value: 'USA', label: 'USA' },
  { value: 'MX', label: 'MX' },
	{ value: 'CA', label: 'CA' },
	{ value: 'GBA', label: 'GBA' },
	{ value: 'JA', label: 'JA' }
];

const images = {
	'USA': americanFlag,
	'MX': mexicanFlag,
	'CA': canadianFlag,
	'GBA': britishFlag,
	'JA': japaneseFlag,
}

module.exports = { options, images };