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
var Company = /** @class */ (function () {
    function Company(location) {
        this.location = location;
    }
    return Company;
}());
var CompanyLocationArray = /** @class */ (function () {
    function CompanyLocationArray() {
        this.employees = [];
    }
    CompanyLocationArray.prototype.addPerson = function (employee) {
        this.employees.push(employee);
    };
    ;
    CompanyLocationArray.prototype.getPerson = function (index) {
        return this.employees[index];
    };
    ;
    CompanyLocationArray.prototype.getCount = function () {
        return this.employees.length;
    };
    ;
    CompanyLocationArray.prototype.getProjectList = function () {
        var list = [];
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            list.push(employee.getCurrentProject());
        }
        return list;
    };
    CompanyLocationArray.prototype.getNameList = function () {
        var list = [];
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            list.push(employee.getName());
        }
        return list;
    };
    return CompanyLocationArray;
}());
var CompanyLocationLocalStorage = /** @class */ (function () {
    function CompanyLocationLocalStorage() {
        this.localStorage = [];
    }
    CompanyLocationLocalStorage.prototype.addStorage = function () {
        window.localStorage.setItem("employees", JSON.stringify(this.localStorage));
    };
    ;
    CompanyLocationLocalStorage.prototype.addPerson = function (employee) {
        var employees = JSON.parse(localStorage.getItem("employees"));
        employees.push(employee);
        window.localStorage.setItem("employees", JSON.stringify(employees));
    };
    ;
    CompanyLocationLocalStorage.prototype.getPerson = function (index) {
        var employees = JSON.parse(localStorage.getItem("employees"));
        return employees[index];
    };
    ;
    CompanyLocationLocalStorage.prototype.getCount = function () {
        var employees = JSON.parse(localStorage.getItem("employees"));
        return employees.length;
    };
    ;
    CompanyLocationLocalStorage.prototype.getProjectList = function () {
        var employees = JSON.parse(localStorage.getItem("employees"));
        console.log(employees);
        var list = [];
        for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
            var employee = employees_1[_i];
            list.push(employee.currentProject);
        }
        return list;
    };
    CompanyLocationLocalStorage.prototype.getNameList = function () {
        var employees = JSON.parse(localStorage.getItem("employees"));
        console.log(employees);
        var list = [];
        for (var _i = 0, employees_2 = employees; _i < employees_2.length; _i++) {
            var employee = employees_2[_i];
            list.push(employee.name);
        }
        return list;
    };
    return CompanyLocationLocalStorage;
}());
var firstCompany = new Company(new CompanyLocationArray());
var secondCompany = new Company(new CompanyLocationArray());
var thirdCompany = new Company(new CompanyLocationLocalStorage());
var iCompany = new CompanyLocationLocalStorage();
iCompany.addStorage();
firstCompany.location.addPerson(new Employee("ivan", "LG-JGEV"));
firstCompany.location.addPerson(new Employee("sergey", "MB-JGEV"));
firstCompany.location.addPerson(new Employee("petr", "KV-JGEV"));
secondCompany.location.addPerson(new Employee("andrey", "MB-JGEV"));
secondCompany.location.addPerson(new Employee("nikolay", "KV-JGEV"));
thirdCompany.location.addPerson(new Employee("vasya", "VK-JGEV"));
thirdCompany.location.addPerson(new Employee("yauheni", "KRON-DEV"));
console.log("First Company from CompanyLocationArray");
console.log("Name of Employees:");
console.log(firstCompany.location.getNameList());
console.log("Name of CurrentProject:");
console.log(firstCompany.location.getProjectList());
console.log("Count of Employees:");
console.log(firstCompany.location.getCount());
console.log("First Employee of Company:");
console.log(firstCompany.location.getPerson(0));
console.log("___________________________");
console.log("Second Company from CompanyLocationArray");
console.log("Name of Employees:");
console.log(secondCompany.location.getNameList());
console.log("Name of CurrentProject:");
console.log(secondCompany.location.getProjectList());
console.log("Count of Employees:");
console.log(secondCompany.location.getCount());
console.log("First Employee of Company:");
console.log(secondCompany.location.getPerson(0));
console.log("___________________________");
console.log("Third Company from CompanyLocationArray");
console.log("Name of Employees:");
console.log(thirdCompany.location.getNameList());
console.log("Name of CurrentProject:");
console.log(thirdCompany.location.getProjectList());
console.log("Count of Employees:");
console.log(thirdCompany.location.getCount());
console.log("First Employee of Company:");
console.log(thirdCompany.location.getPerson(0));
console.log("___________________________");
