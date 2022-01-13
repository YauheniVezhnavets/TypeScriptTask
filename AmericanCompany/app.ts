interface iEmployee{

   getCurrentProject():string;

   getName():string;

}

class Frontend implements iEmployee {

  name:string;
  currentProject: string;

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

class Backend implements iEmployee {

  name:string;
  currentProject: string;

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


class Company{
  private employees : Array <iEmployee> = [];
  
  add(employee: iEmployee):void {
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


