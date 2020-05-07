let saveBtn = document.querySelector('#saveBtn');
let saveBtn1 = document.querySelector('#saveBtn1');
let saveBtn2 = document.querySelector('#saveBtn2');
let clearBtn = document.querySelector('#Clear');
let typeList = document.querySelector('.typeList');
let univer1 = document.querySelector('.studUn1');
let course1 = document.querySelector('.studCourse1');
let organisation1 = document.querySelector('.workerOrg1');
let expa1 = document.querySelector('.workerExpa1');
let vacantBtn = document.querySelector('.vacantBtn');
let forma = document.querySelector('.wrapper');
let vacant = document.querySelector('.vacant');
let back = document.querySelector('#back');
let saveAllBtn = document.querySelector('#saveAllBtn');
let deleteAllBtn = document.querySelector('#deleteAllBtn');





function bak(){
    back.addEventListener('click', disable);
}

vacantBtn.addEventListener('click', function(){
    forma.style.display = 'flex';
    vacant.style.display = 'none';
    bak();
})
function disable(){
    forma.style.display = 'none';
    vacant.style.display = 'flex';
}

function base(){
    if(typeList.value === "1"){
        saveBtn.style.display = 'inline-block';
    } else{
        saveBtn.style.display = 'none';
    }
}

function stud(){
if( typeList.value === "2"){
univer1.style.display = 'block';
course1.style.display = 'block';
saveBtn1.style.display = 'inline-block';
} else {
    univer1.style.display = 'none';
    course1.style.display = 'none';
    saveBtn1.style.display = 'none';
}
}

function work(){
    if(typeList.value === "3"){ 
        organisation1.style.display = 'block';
        expa1.style.display = 'block';
        saveBtn2.style.display = 'inline-block';
    } else {
        organisation1.style.display = 'none';
        expa1.style.display = 'none';
        saveBtn2.style.display = 'none';
    }
}


clearBtn.addEventListener('click', function(event){
    let studentAdd = new StudentAdd();
    studentAdd.ClearStud();

    event.preventDefault();

})


saveBtn1.addEventListener('click', function(event){
    let name = document.getElementById('name').value;
    let surname = document.querySelector('.surName').value;
    let mname = document.querySelector('.mname').value;
    let age = document.querySelector('.age').value;
    let kids = document.querySelector('.kids').value;
    let country = document.querySelector('.countr').value;
    let univer = document.querySelector('.studUn').value;
    let course = document.querySelector('.studCourse').value;

    let studentAdd = new StudentAdd();
    let student = new Student(name, surname, mname, age, kids, country, univer, course);
   

    if(name === '' || surname === '' || mname === '' || age === '' || country === '' || univer === '' || course === '' ){
        studentAdd.getAlert("Введите все данные!");
    } else{
        studentAdd.addStud(student);
        studentAdd.getAlert("Данные успешно добавлены!");
        studentAdd.ClearStud();
        studentAdd.deleteStud();
        studentAdd.redactStudent();
        disable();
        
        
        

        event.preventDefault();    
    }
})

saveBtn2.addEventListener('click', function(event){
    let name = document.getElementById('name').value;
    let surname = document.querySelector('.surName').value;
    let mname = document.querySelector('.mname').value;
    let age = document.querySelector('.age').value;
    let kids = document.querySelector('.kids').value;
    let country = document.querySelector('.countr').value;
    let organisation = document.querySelector('.workerOrg').value;
    let expa = document.querySelector('.workerExpa').value;

    let workerAdd = new WorkerAdd();
    let worker = new Worker(name, surname, mname, age, kids, country, organisation, expa);

    if(name === '' || surname === '' || mname === '' || age === '' || country === '' || organisation === '' || expa === ''){
        workerAdd.getAlertWorker("Заполните все поля ввода!");
    } else{
        workerAdd.addWorker(worker);
        workerAdd.getAlertWorker("Данные успешно добавлены!");
        workerAdd.ClearWorker();
        workerAdd.deleteWorker();
        workerAdd.redactWorker();
        disable();
      

        event.preventDefault();
    }
})

saveBtn.addEventListener('click', function(event){
    let name = document.getElementById('name').value;
    let surname = document.querySelector('.surName').value;
    let mname = document.querySelector('.mname').value;
    let age = document.querySelector('.age').value;
    let kids = document.querySelector('.kids').value;
    let country = document.querySelector('.countr').value;
    

    let mainAdd = new MainAdd();
    let main = new Main(name, surname, mname, age, kids, country);

    if(name === '' || surname === '' || mname === '' || age === '' || country === ''){
        mainAdd.getAlertMain("Заполните все поля!");
    } else{
        mainAdd.addMain(main);
        mainAdd.getAlertMain("Данные успешно добавлены!");
        mainAdd.ClearMain();
        mainAdd.deleteMain();
        mainAdd.redactMain();
        disable();
    

        event.preventDefault();
    }
})

let infoo = document.querySelector('.results1');
function loadVacant(){
    if(localStorage.getItem('vacantApplication')){
        infoo.innerHTML = localStorage.getItem('vacantApplication');
        mainAdd.deleteMain();
        mainAdd.redactMain();
    }
};


saveAllBtn.addEventListener('click', function(){
    localStorage.setItem('vacantApplication', infoo.innerHTML);
});

deleteAllBtn.addEventListener('click', function(){
    infoo.innerHTML = '';
    localStorage.setItem('vacantApplication', infoo.innerHTML);
})


let mainAdd = new MainAdd();
mainAdd.deleteMain();
mainAdd.redactMain();


loadVacant();