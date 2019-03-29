//---------------------------Person1---------------------------
class Person1 {

    private age: number;
    private name: string;

    public constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
    }


    public describe():string{
        return `name: ${this.name}, age: ${this.age}`;
    }
}



//---------------------------Person2---------------------------
class Person2 {

    public constructor(private age: number, private name: string) {}

    public describe():string{
        return `name: ${this.name}, age: ${this.age}`;
    }
}

//---------------------------use the classes---------------------------

let p1:Person1=new Person1(12,"Bob");
console.log(p1.describe());


let p2:Person2=new Person2(12,"Bob");
console.log(p2.describe());