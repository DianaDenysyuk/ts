var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Librarry = /** @class */ (function () {
    function Librarry(name, bookCount, director) {
        this.name = name;
        this.bookCount = bookCount;
        this.director = director;
    }
    Librarry.prototype.ShowInfo = function () {
        console.log("Librarry name: " + this.name + "\nBooks count: " + this.bookCount + "\nDirector: " + this.director);
    };
    return Librarry;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(name, bookCount, director, title, pageCount, bookPrice) {
        var _this = _super.call(this, name, bookCount, director) || this;
        _this.title = title;
        _this.pageCount = pageCount;
        _this.bookPrice = bookPrice;
        return _this;
    }
    Book.prototype.ShowInfo = function () {
        console.log("Librarry name: " + this.name + "\nBooks count: " + this.bookCount + "\nDirector: " + this.director + "\nTitle: " + this.title + "\nPage count: " + this.pageCount + "\nBook price: " + this.bookPrice + "$");
    };
    return Book;
}(Librarry));
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client(name, bookCount, director, title, pageCount, bookPrice, clientName, clientSurname, clientsMoney, pasportID) {
        var _this = _super.call(this, name, bookCount, director, title, pageCount, bookPrice) || this;
        _this.clientName = clientName;
        _this.clientSurname = clientSurname;
        _this.clientsMoney = clientsMoney;
        _this.pasportID = pasportID;
        return _this;
    }
    Client.prototype.ShowInfo = function () {
        console.log("Librarry name: " + this.name + "\nBooks count: " + this.bookCount + "\nDirector: " + this.director + "\nTitle: " + this.title + "\nPage count: " + this.pageCount + "\nBook price: " + this.bookPrice + "$\nClient name: " + this.clientName + "\nClient surname: " + this.clientSurname + "\nClients money: " + this.clientsMoney + "$\nPasport ID: " + this.pasportID);
    };
    Client.prototype.ReadBook = function (title) {
        if (title == this.title) {
            if (this.clientsMoney >= this.bookPrice) {
                console.log("Read book");
                this.clientsMoney -= this.bookPrice;
            }
            else {
                console.log("haven't got enough money");
            }
        }
        else {
            console.log("this book is not exsist");
        }
    };
    Client.prototype.AddMoney = function (clientsMoney) {
        if (clientsMoney > 0) {
            this.clientsMoney += clientsMoney;
        }
    };
    return Client;
}(Book));
//let HarryPotter = new Book("Rivne central", 1000, "Tim", "Harry Potter", 1000000, 200);
var person = new Client("Rivne central", 1000, "Tim", "Harry Potter", 1000000, 200, "Diana", "Den", 400, 1234542);
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
