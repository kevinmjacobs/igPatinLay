const translatePigLatin = (str) => {

  const vowels = ['a','e','i','o','u'];
  let slicedArr = [];
  let newStr = '';

  (vowels.indexOf(str[0]) >= 0) && (str + 'way');

  for (var i = 0; i < str.length; i++){
    if (vowels.indexOf(str[i]) >= 0) {
      return newStr + slicedArr.join("") + 'ay';
    } else {
      slicedArr.push(str[i]);
      newStr = str.slice(i+1);
    }
  }

  if (!newStr) {
    return str;
  }

}

const translateSentence = (str) => str.split(' ').map((word) => translatePigLatin(word)).join(' ');

module.exports = {
  translateSentence: translateSentence
}
