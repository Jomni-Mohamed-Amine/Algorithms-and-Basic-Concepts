
let sentence="Hello Go my Code"

let num_of_characteres=sentence.split(' ').join("").length
console.log(num_of_characteres)

let num_of_words=sentence.split(' ').length
console.log(num_of_words)

let num_of_vowels=sentence.split('').filter((a=>['a','e','i','o','y','u'].includes(a.toLowerCase()))).length
console.log(num_of_vowels)




