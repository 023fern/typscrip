class Author {
private name : string;
private email : string;
constructor(name:string, email:string){
    this.name = name;
    this.email = email;
}
public getName(): string{
    return this.name;
}
public getEmail():string{
    return this.email
}
public setEmail(email:string):void{
    this.email = email
}
public toString():string{
return "Author name;"+this.name+",Email:"+this.email;
}
}



class Book{
    private name : string;
    private authors : Author[];
    private price : number;
    private qty : number = 0;

    constructor (name:string,authors:Author[],price:number, qty:number = 0){
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = qty;
    }
    public getName():string{
        return this.name;
    }
    public getAuthors():Author[]{
        return this.authors;
    }
}
export = {Author, Book};



