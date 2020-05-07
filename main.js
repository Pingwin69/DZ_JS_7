class Main{
    constructor(name, surname, mname, age, kids, country){
        this.name = name;
        this.surname = surname;
        this.mname = mname;
        this.age = age;
        this.kids = kids;
        this.country = country;
    }
    get info(){
        return `${this.name}
        ${this.surname}
        ${this.mname}
        ${this.age}
        ${this.kids}
        ${this.country}`
    }
    set info(infoAll){
        [this.name,
        this.surname,
        this.mname,
        this.age,
        this.kids,
        this.country] =  infoAll.split('');
    }
}

class Student extends Main{
    constructor(name, surname, mname, age, kids, country, univer, course){
        super(name, surname, mname, age, kids, country);
        this.univer = univer;
        this.course = course;
    }
    get studInfo(){
        return super.info() + `${this.univer} ${this.course}`
    }
    set studInfo(studInfoAll){
        [this.univer,
        this.course,
        this.name,
        this.surname,
        this.mname,
        this.age,
        this.kids,
        this.country] = studInfoAll.split('');
    }
}

class Worker extends Main{
    constructor(name, surname, mname, age, kids, country, organisation, expa){
        super(name, surname, mname, age, kids, country);
        this.organisation = organisation;
        this.expa = expa;
    }
    get workerInfo(){
        return super.info() + `${this.organisation} ${this.expa}`
    }
    set workerInfo(workerInfoAll){
        [this.organisation,
        this.expa,
        this.name,
        this.surname,
        this.mname,
        this.age,
        this.kids,
        this.country] = workerInfoAll.split('');
    }
}
