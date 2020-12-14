class Employee {

    private nom : string;
    private ancienneté : number;
    constructor(nom : string,  ancienneté : number ) {
        this.ancienneté =  ancienneté;
        this.nom = nom;
    }

    public showIt() : string {
        return "[Nom: " + this.nom + "]";
    }
}

let employee : Employee = new  Employee("safa", 4);
console.log(employee.showIt());