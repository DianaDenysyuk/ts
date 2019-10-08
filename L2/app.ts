abstract class Librarry {
    protected name: string;
    protected bookCount: number;
    protected director: string;
    
    constructor(name:string, bookCount: number, director: string){
        this.name=name;
        this.bookCount=bookCount;
        this.director=director;
    }

    public ShowLibrarryInfo(){
        console.log(`Librarry name: ${this.name}\nBooks count: ${this.bookCount}\nDirector: ${this.director}`);
    }
    
    // SetName(name : string) {
    //     if (name.length >= 3) {
    //         this.name = name;
    //     }
    // }
    // SetBookCount(bookCount : number) {
    //     if (bookCount > 0) {
    //         this.bookCount = bookCount;
    //     }
    // }
    // SetDirector(director : string) {
    //     if (director.length >= 3) {
    //         this.director = director;
    //     }
    // }
}

class Book extends Librarry{
    private title: string;
    private pageCount: number;
    private bookPrice: number;
    constructor(name:string, bookCount: number, director: string, title: string, pageCount: number, bookPrice: number){
        super(name, bookCount, director);
        this.title = title;
        this.pageCount = pageCount;
        this.bookPrice = bookPrice;
    }

    ShowLibrarryInfo(){
        console.log(`Librarry name: ${this.name}\nBooks count: ${this.bookCount}\nDirector: ${this.director}\nTitle: ${this.title}\nPage count: ${this.pageCount}\nBook price: ${this.bookPrice}$`);
    }
}

let HarryPotter = new Book("Rivne central", 1000, "Tim", "Harry Potter", 1000000, 200);
HarryPotter.ShowLibrarryInfo();
// RivneLib.SetName("Lviv Medical");
// RivneLib.SetBookCount(200000);
// RivneLib.SetDirector("Sem");
// RivneLib.ShowLibrarryInfo();
