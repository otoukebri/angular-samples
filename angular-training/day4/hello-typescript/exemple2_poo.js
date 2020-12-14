"use strict";
var Employee = /** @class */ (function () {
    function Employee(nom, ancienneté) {
        this.ancienneté = ancienneté;
        this.nom = nom;
    }
    Employee.prototype.showIt = function () {
        return "[Nom: " + this.nom + "]";
    };
    return Employee;
}());
var employee = new Employee("safa", 4);
console.log(employee.showIt());
