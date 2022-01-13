class Employee{

  private name:string;
  private currentProject: string;

  constructor(name:string, currentProject:string){
    this.name = name;
    this.currentProject = currentProject;
   }

   getCurrentProject():string{
     return this.currentProject;
   }

   getName():string{
     return this.name;
   }
}


interface iLocation{

  addPerson(employee:Employee):void;

  getPerson(index:number):Employee;

  getCount():number;

  getProjectList(): Array <String>;

  getNameList(): Array <String>;

}

class Company{
  
  location : iLocation;

  constructor(location:iLocation){
    this.location=location;
  }

}

class CompanyLocationArray implements iLocation {

  private employees : Array <Employee> = [];

  addPerson(employee:Employee):void{
    this.employees.push(employee);
  };

  getPerson(index:number):Employee{
    return this.employees[index];
  };

  getCount():number{
    return this.employees.length;
  };

  getProjectList(): Array <String>{
    let list: Array <String> = [];
    for (let employee of this.employees){
        list.push(employee.getCurrentProject());
    }
    return list;
} 
getNameList(): Array <String>{
  let list: Array <String> = [];
  for (let employee of this.employees){
      list.push(employee.getName());
  }
  return list;
}
}

class CompanyLocationLocalStorage implements iLocation{

  localStorage: Array <Employee> = [];

  addStorage():void{
    window.localStorage.setItem("employees", JSON.stringify(this.localStorage));
  };

  addPerson(employee:Employee):void{
   let employees = JSON.parse(localStorage.getItem("employees"));
   employees.push(employee);
   window.localStorage.setItem("employees", JSON.stringify(employees));
  };

  getPerson(index:number):Employee{
    let employees = JSON.parse(localStorage.getItem("employees"));
    return employees[index];
  };

  getCount():number{
    let employees = JSON.parse(localStorage.getItem("employees"));
    return employees.length;
  };

  getProjectList(): Array <String>{
    let employees = JSON.parse(localStorage.getItem("employees"));
    console.log(employees);
    
    let list: Array <String> = [];
    for (let employee of employees){
        list.push(employee.currentProject);
    }
    return list;
  }
  

  getNameList(): Array <String>{
    let employees = JSON.parse(localStorage.getItem("employees"));
    console.log(employees);
    
    let list: Array <String> = [];
    for (let employee of employees){
        list.push(employee.name);
    }
    return list;
   }

}


let  firstCompany = new Company(new CompanyLocationArray());
let  secondCompany = new Company(new CompanyLocationArray());
let  thirdCompany = new Company(new CompanyLocationLocalStorage());
let  iCompany = new CompanyLocationLocalStorage();
iCompany.addStorage();


 firstCompany.location.addPerson(new Employee("ivan","LG-JGEV"));
 firstCompany.location.addPerson(new Employee("sergey","MB-JGEV"));
 firstCompany.location.addPerson(new Employee("petr","KV-JGEV"));

secondCompany.location.addPerson(new Employee("andrey","MB-JGEV"));
secondCompany.location.addPerson(new Employee("nikolay","KV-JGEV"));


thirdCompany.location.addPerson(new Employee("vasya","VK-JGEV"));
thirdCompany.location.addPerson(new Employee("yauheni","KRON-DEV"));

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
