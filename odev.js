/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.

**/

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

var myCarDetails =  car.displayDetails;
myCarDetails.call(car);


/** 

2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haricindeki isimler en az 2 karakterden olusmali.

**/

function isValidName(name) {
	if (typeof name !== 'string') return false
	if (!name) return false
	
	// trim is required for leading and trailing spaces -> e.g. " name  alican " becomes "name  alican"
  return name
  .trim('')
  .split(/\s+/)
  .every((word) => word.length >= 2)
}

/**


3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.

**/

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
  genre: "dystopian",
  year: 1932,
}

function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`,
  )
}

summary.apply(book, [book.genre, book.year])


