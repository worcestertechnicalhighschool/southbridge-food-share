/*==============================================================
                      Footer JavaScript
================================================================*/

let year = document.querySelector('#year');
let today = new Date();

year.innerText = today.getFullYear();

/*==============================================================
                      Contact JavaScript
================================================================*/

const submit = document.querySelector('.contact-item__submit');
const name1 = document.querySelector('#name1');
const name2 = document.querySelector('#name2');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');

submit.addEventListener('click', contact);

function contact(evt){
  console.log(name1.value);
  console.log(name2.value);
  console.log(phone.value);
  console.log(email.value);
  console.log(subject.value);
  console.log(message.value);

  if(name1.value.length !== 0 && name2.value.length !== 0 && email.value.length !== 0 && subject.value.length !== 0 message.value.length !== 0)
    console.log(name1.value + ", " + name2.value + ", " + phone.value + ", " + email.value + ", " + subject.value + ", " + message.value)
  }
}

/*==============================================================
                      Translation JavaScript
================================================================*/
  