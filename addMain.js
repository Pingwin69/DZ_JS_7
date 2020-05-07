class MainAdd{

};



MainAdd.prototype.addMain = function(type){

    let results = document.querySelector('.results1');
    let ulSpisok = document.createElement('ul');
    ulSpisok.className = 'info';

    ulSpisok.innerHTML = 
    `<li class="nameLi">${type.name}</li>
    <li class="surnameLi">${type.surname}</li>
    <li class="mnameLi">${type.mname}</li>
    <li class="ageLi">${type.age}</li>
    <li class="kidsLi">${type.kids}</li>
    <li class="countryLi">${type.country}</li>
    <li class="univerLi">
    <li class="courseLi">
    <li class="orgLi">
    <li class="expaLi">
    <li class="burronsLi"><button class="redact">Редактировать</button>
    <button class="delete">Удалить</button></li>`;

    results.appendChild(ulSpisok);      
} 

MainAdd.prototype.ClearMain = function(){
    document.querySelector('#name').value = '';
    document.querySelector('.surName').value = '';
    document.querySelector('.mname').value = '';
    document.querySelector('.age').value = '';
    document.querySelector('.countr').value = '';
    document.querySelector('.studUn').value = '';
    document.querySelector('.studCourse').value = '';
    document.querySelector('.workerOrg').value = '';
    document.querySelector('.workerExpa').value = '';
};

MainAdd.prototype.getAlertMain = function(message){
    alert(message);
}

MainAdd.prototype.deleteMain = function(){
    let deletSt = document.getElementsByClassName('delete');
    for(let i of deletSt){
        i.addEventListener('click', function(){
            if(confirm("Точно удалить?")){
            i.parentElement.parentElement.remove();
            event.preventDefault();
        } else{
            return false;
        }
        })
    }
}

// if (confirm("Вы подтверждаете удаление?")) {
//     return true;    
// } else {
//     return false;
// }
    

MainAdd.prototype.redactMain = function(){
    let redactSt = document.getElementsByClassName('redact');
    for(let i of redactSt){
        i.addEventListener('click', function(){
            forma.style.display = 'block';
            document.querySelector('#name').value = i.parentElement.parentElement.firstChild.innerHTML;
            document.querySelector('.surName').value = i.parentElement.parentElement.firstChild.nextElementSibling.innerHTML;
            document.querySelector('.mname').value = i.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.innerHTML;
            document.querySelector('.age').value = i.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
            document.querySelector('.countr').value = i.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
            i.parentElement.parentElement.remove();
            vacant.style.display = 'none';            
            event.preventDefault();
        })
    }
}