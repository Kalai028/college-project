let professors=[];

function add(){
    let name = document.getElementById('name').value;
    let department = document.getElementById('department').value;
    let email = document.getElementById('email').value;

    console.log(name);
    console.log(department);
    console.log(email);

    
    let tempProfessor={
        name: name,
        department: department,
        email: email,
    };

    if(name!="" && department!="" && email!="" ){
        professors.push(tempProfessor);

        document.getElementById('name').value = '';
        document.getElementById('department').value = '';
        document.getElementById('email').value = '';
    }
    else{
        alert("Enter all the details correctly!!!");
    }

    console.log(professors);

    let professorContainer = document.getElementById('professors'); 
    professorContainer.innerHTML = '';
    
    professors.map((professor)=>{
        let mainDiv = document.createElement('div');
        let nameC = document.createElement('p');
        let departmentC = document.createElement('p');
        let emailC = document.createElement('p');

        mainDiv.classList.add('professor');
        nameC.classList.add('name');
        departmentC.classList.add('department');
        emailC.classList.add('email');

        nameC.innerText = professor.name;
        departmentC.innerText = professor.department;
        emailC.innerText = professor.email;

        professorContainer.appendChild(mainDiv);
        mainDiv.appendChild(nameC);
        mainDiv.appendChild(departmentC);
        mainDiv.appendChild(emailC);
    });
}