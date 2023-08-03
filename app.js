let toastBox=document.getElementById("toast-box");

let successMsg='<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errorMsg='<i class="fa-solid fa-circle-xmark"></i> Please fix the error !';
let invalidMsg='<i class="fa-solid fa-circle-exclamation"></i> Invalid Input, Check Again';

function showToast(msg){

    let toast=document.createElement('div');
    toast.innerHTML=msg;
    toast.classList.add('toast');
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error');
    }

    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);
}