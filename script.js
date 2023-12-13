class FamilyMember {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const familyMembers = [];

function submitFamilyMember() {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const genderInput = document.getElementById("gender");
  const name = nameInput.value;
  const age = parseInt(ageInput.value);
  const gender = genderInput.value;
  const familyMember = new FamilyMember(name, age, gender);
  familyMembers.push(familyMember);
  reloadFamilyMembers();
}

function reloadFamilyMembers() {
  const familyList = document.getElementById("familyMembers")
.tBodies[0];
familyList.innerHTML = '';
 
 for(let rows = 0; rows < familyMembers.length; rows++) {
   const familyMember = familyMembers[rows];
  row = document.createElement('tr');
  row.innerHTML = `
  <td>${familyMember.name}</td>
  <td>${familyMember.age}</td>
  <td>${familyMember.gender}</td>
  <td>
  <button type="button" id="increment" onclick="ageIncrement(${rows})">Add Age</button>&nbsp<button type="button" onclick="changeName(${rows})">Change Name</button>
  </td>
  `;
  familyList.appendChild(row);
}
}

function ageIncrement(rowX) {
const familyMember = familyMembers[rowX];
  if (familyMember) {
    familyMember.age ++;
    reloadFamilyMembers();
  }
}

function changeName(rowX) {
  const familyMember = familyMembers[rowX];
  if(familyMember) {
      const newName = window.prompt('Enter new name:');
    familyMember.name = newName;
    reloadFamilyMembers();
  }
}



