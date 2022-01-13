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

class Frontend extends Employee {

}

class Backend extends Employee {

}


class Company{
  private employees : Array <Employee> = [];
  
  add(employee: Employee):void {
    this.employees.push(employee);
  }

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


let ivan = new Frontend('Ivan',"Front-PZ-JDEV");
let sergey = new Frontend('Sergey',"Front-LM-JDEV");
let petr = new Frontend('Petr',"Front-KV-JDEV");
let nikolay = new Backend('Nikolay',"Back-VL-JDEV");
let andrey = new Backend('Andrey',"Back-KT-JDEV");
let yauheni = new Backend('Yauheni',"Back-Kron-JDEV");



let company = new Company();
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



