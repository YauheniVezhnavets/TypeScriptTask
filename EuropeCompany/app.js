var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, currentProject) {
        this.name = name;
        this.currentProject = currentProject;
    }
    Employee.prototype.getCurrentProject = function () {
        return this.currentProject;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    return Employee;
}());
var Frontend = /** @class */ (function (_super) {
    __extends(Frontend, _super);
    function Frontend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Frontend;
}(Employee));
var Backend = /** @class */ (function (_super) {
    __extends(Backend, _super);
    function Backend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Backend;
}(Employee));
var Company = /** @class */ (function () {
    function Company() {
        this.employees = [];
    }
    Company.prototype.add = function (employee) {
        this.employees.push(employee);
    };
    Company.prototype.getProjectList = function () {
        var list = [];
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            list.push(employee.getCurrentProject());
        }
        return list;
    };
    Company.prototype.getNameList = function () {
        var list = [];
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            list.push(employee.getName());
        }
        return list;
    };
    return Company;
}());
var ivan = new Frontend('Ivan', "Front-PZ-JDEV");
var sergey = new Frontend('Sergey', "Front-LM-JDEV");
var petr = new Frontend('Petr', "Front-KV-JDEV");
var nikolay = new Backend('Nikolay', "Back-VL-JDEV");
var andrey = new Backend('Andrey', "Back-KT-JDEV");
var yauheni = new Backend('Yauheni', "Back-Kron-JDEV");
var company = new Company();
company.add(ivan);
company.add(sergey);
company.add(petr);
company.add(nikolay);
company.add(andrey);
company.add(yauheni);
console.log("Name of Employees:");
console.log(company.getNameList());
console.log("___________________________");
console.log("Name of CurrentProject:");
console.log(company.getProjectList());
