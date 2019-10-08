abstract class Librarry {
    protected name: string;
    protected bookCount: number;
    protected director: string;
    
    constructor(name:string, bookCount: number, director: string){
        this.name=name;
        this.bookCount=bookCount;
        this.director=director;
    }

    public ShowInfo(){
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
    protected title: string;
    protected pageCount: number;
    protected bookPrice: number;
    constructor(name:string, bookCount: number, director: string, title: string, pageCount: number, bookPrice: number){
        super(name, bookCount, director);
        this.title = title;
        this.pageCount = pageCount;
        this.bookPrice = bookPrice;
    }

    ShowInfo(){
        console.log(`Librarry name: ${this.name}\nBooks count: ${this.bookCount}\nDirector: ${this.director}\nTitle: ${this.title}\nPage count: ${this.pageCount}\nBook price: ${this.bookPrice}$`);
    }
}

class Client extends Book{
    private clientName: string;
    private clientSurname: string;
    private clientsMoney: number;
    private pasportID: number;
    constructor(name:string, bookCount: number, director: string, title: string, pageCount: number, bookPrice: number, clientName: string, clientSurname: string, clientsMoney: number, pasportID: number){
        super(name, bookCount, director, title, pageCount, bookPrice);
        this.clientName = clientName;
        this.clientSurname = clientSurname;
        this.clientsMoney = clientsMoney;
        this.pasportID = pasportID;
    }

    ShowInfo(){
        console.log(`Librarry name: ${this.name}\nBooks count: ${this.bookCount}\nDirector: ${this.director}\nTitle: ${this.title}\nPage count: ${this.pageCount}\nBook price: ${this.bookPrice}$\nClient name: ${this.clientName}\nClient surname: ${this.clientSurname}\nClients money: ${this.clientsMoney}$\nPasport ID: ${this.pasportID}`);
    }
    ReadBook(title : string){
        if (title == this.title) {
            if (this.clientsMoney >= this.bookPrice) {
                this.clientsMoney -= this.bookPrice;
                console.log(`Read book. Now your money: ${this.clientsMoney}$`);
            }
            else{
                console.log(`haven't got enough money\nYour money: ${this.clientsMoney}$, need: ${this.bookPrice}$`);
            }
        }
        else{
            console.log(`this book is not exsist\nMaybe ${this.title}?`);
        }
    }
    AddMoney(clientsMoney : number){
        if (clientsMoney > 0) {
            this.clientsMoney += clientsMoney;
            console.log(`Add ${this.clientsMoney}$`);
        }
    }
}

//let HarryPotter = new Book("Rivne central", 1000, "Tim", "Harry Potter", 1000000, 200);
let person = new Client("Rivne central", 1000, "Tim", "Harry Potter", 1000000, 200, "Diana", "Den", 400, 1234542);
person.ShowInfo();
person.ReadBook("Harry Potter");
person.ReadBook("Harry Potter");
person.ReadBook("Harry Potter");
person.AddMoney(300);
person.ReadBook("Harry Potter");
person.ShowInfo();
// RivneLib.SetName("Lviv Medical");
// RivneLib.SetBookCount(200000);
// RivneLib.SetDirector("Sem");
// RivneLib.ShowLibrarryInfo();
