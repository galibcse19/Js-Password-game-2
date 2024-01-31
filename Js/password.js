function checkPasswordMatch() {
            const password = document.getElementById('p1').value;
            const retypePassword = document.getElementById('p2').value;
            const activeBtn=document.getElementById('clickButton');
            if (password === retypePassword) {
                activeBtn.removeAttribute('disabled');
                feedbackMessage.innerText = 'Successfully Matched Password';
                feedbackMessage.classList.add('success-message');  
            } else {
                 activeBtn.setAttribute('disabled',true);
            }
        }
// document.getElementById('clickButton').addEventListener('click',function(){
//     const ShowInScreen = document.getElementById('showInScreen');
//     const p=document.createElement('p')
//     p.innerText="Successfully Matched Password";
//     ShowInScreen.appendChild(p);
// });

// document.getElementById('clickButton').addEventListener('click',function(){
//     const showText=document.getElementById('headh1');
//     showText.innerText='Successfully Matched Password';

// })
