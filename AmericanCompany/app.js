var Frontend = /** @class */ (function () {
    function Frontend(name, currentProject) {
        this.name = name;
        this.currentProject = currentProject;
    }
    Frontend.prototype.getCurrentProject = function () {
        return this.currentProject;
    };
    Frontend.prototype.getName = function () {
        return this.name;
    };
    return Frontend;
}());
var Backend = /** @class */ (function () {
    function Backend(name, currentProject) {
        this.name = name;
        this.currentProject = currentProject;
    }
    Backend.prototype.getCurrentProject = function () {
        return this.currentProject;
    };
    Backend.prototype.getName = function () {
        return this.name;
    };
    return Backend;
}());
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
