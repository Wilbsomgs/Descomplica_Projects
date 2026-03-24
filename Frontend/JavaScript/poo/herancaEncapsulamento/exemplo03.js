class Movies {
    constructor(movie, category, year, author){
        this._movie = movie;
        this._category = category;
        this._year = year; 
        this._author = author
    }

    set movie(newMovie){
        this._movie = newMovie;
    }
    set category(newCategory){
        this._category= newCategory;
    }
    set year(newYear){
        this._year = newYear;
    }
    set author(newAuthor){
        this._author = newAuthor;
    }

    get movie(){
        return this._movie;
    }

    get category(){
        return this._category;
    }
    get year(){
        return this._year;
    }
    get author(){
        return this._author;
    }

    descrever(){
        let descricao = `Filme: ${this._movie}\nCategoria: ${this._category}\nAno: ${this._year}\nAutor: ${this._author}\n`

        return descricao;
    }
}


const harryPotterMovie = new Movies("Harry Potter","Fantasia", 1982, "Joanne Rowling");
const demonSlayerMovie = new Movies("Demon Slayer","Anime", 2023,"Koyoharu Gotouge");
const azulEBrancoMovie = new Movies("Red, White & Royal Blue", "Romance/Comédia", 2023, "Casey McQuiston");

console.log(harryPotterMovie.descrever());
console.log(demonSlayerMovie.descrever());
console.log(azulEBrancoMovie.descrever());