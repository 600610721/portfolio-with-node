const myForm = document.querySelector('#my-form');
const firstname = document.querySelector('#first-name');
const lastname = document.querySelector('#last-name');
const subject = document.querySelector('#sub-ject');
const email = document.querySelector('#e-mail');
const message = document.querySelector('#mes-sage');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();

    if (firstname.value === '' || lastname.value === '' || subject.value === '' || email.value === '' || message.value === '') {
        alert('Please enter all fields');
    } else {

        const li = document.createElement(`tr`);
        li.innerHTML = `
		<td>${subject.value}</td>
		<td> "${firstname.value}</td>
		<td> ${lastname.value}"</td>
        <td> ${email.value}</td>
        <td> "${message.value}"</td>
		<td><a href="#" class="btn btn-sm delete primary"> X </a></td>`;

        userList.appendChild(li);

        firstname.value = '';
        lastname.value = '';
        subject.value = '';
        email.value = '';
        message.innerHTML = '';
    }
}