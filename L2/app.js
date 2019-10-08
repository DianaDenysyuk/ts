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
    Librarry.prototype.ShowLibrarryInfo = function () {
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
    Book.prototype.ShowLibrarryInfo = function () {
        console.log("Librarry name: " + this.name + "\nBooks count: " + this.bookCount + "\nDirector: " + this.director + "\nTitle: " + this.title + "\nPage count: " + this.pageCount + "\nBook price: " + this.bookPrice + "$");
    };
    return Book;
}(Librarry));
var HarryPotter = new Book("Rivne central", 1000, "Tim", "Harry Potter", 1000000, 200);
HarryPotter.ShowLibrarryInfo();
// RivneLib.SetName("Lviv Medical");
// RivneLib.SetBookCount(200000);
// RivneLib.SetDirector("Sem");
// RivneLib.ShowLibrarryInfo();
