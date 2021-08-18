// // 若空提交
// function validateForm() {
//     var usern = document.forms["imformation"]["username"].value;
//     var passw = document.forms["imformation"]["password"].value;
//     var passa = document.forms["imformation"]["passa"].value;
//     var phonenum = document.forms["imformation"]["telephoneNumber"].value;
//     if (checkRate(usern.value)) {
//         alert("必须填写用户名！");
//         return false;
//     }
// }
window.addEventListener('load',function(){
    var usern=document.querySelector('.usern');
    var passw=document.querySelector('.passw');
    var passa=document.querySelector('.passagain');
    var phone=document.querySelector('.phonenum');
    var sub=document.getElementById('submit');

    usern.addEventListener('focus',function(){
        if(this.value=='请输入用户名'){
            this.value='';
        }
        else {
            this.value=this.value;
        }
    });
    usern.addEventListener('blur',function(){
        if(this.value==''){
            this.value='请输入用户名';
        }
        else {
            this.value=this.value;
        }
    });
    passw.addEventListener('focus',function(){
        if(this.value=='请输入密码'){
            this.value='';
        }
        else {
            this.value=this.value;
        }
    });
    passw.addEventListener('keyup',function(){
        this.type='password';
    });
    passw.addEventListener('blur',function(){
        if(this.value==''){
            this.type='text';
            this.value='请输入密码';
        }
        else {
            this.value=this.value;
        }
    });
    passa.addEventListener('focus',function(){
        if(this.value=='请输入密码'){
            this.value='';
        }
        else {
            this.value=this.value;
        }
    });
    passa.addEventListener('keyup',function(){
        this.type='password';
    });
    passa.addEventListener('blur',function(){
        if(this.value==''){
            this.type='text';
            this.value='请输入密码';
        }
        else {
            this.value=this.value;
        }
    });
    phone.addEventListener('focus',function(){
        if(this.value=='请输入手机号码'){
            this.value='';
        }
        else {
            this.value=this.value;
        }
    });
    phone.addEventListener('blur',function(){
        if(this.value==''){
            this.value='请输入手机号码';
        }
        else {
            this.value=this.value;
        }
    });

    sub.addEventListener('click',function(){
        var Range1=/^[a-zA-Z0-9_-]{4,16}$/g;
        if(Range1.test(usern.value)){
            isLegalj(usern, 'green', 'inline-block', '✔');
            isLegalp(usern, 'green', 'block', '用户名合法');
        }else{
            isLegalj(usern, 'red', 'inline-block', '✘');
            isLegalp(usern, 'red', 'block', '用户名不合法');
        }
        var Range2=/^1[0-5]{2}[6-9]{3}[a-d]{2}$/i;
        if(Range2.test(passw.value)){
            isLegalj(passw, 'green', 'inline-block', '✔');
            isLegalp(passw, 'green', 'block', '密码合法');
        }else{
            isLegalj(passw, 'red', 'inline-block', '✘');
            isLegalp(passw, 'red', 'block', '密码不合法');
        }
        if(passa.value==passw.value){
            isLegalj(passa, 'green', 'inline-block', '✔');
            isLegalp(passa, 'green', 'block', '密码一致');
        }else{
            isLegalj(passa, 'red', 'inline-block', '✘');
            isLegalp(passa, 'red', 'block', '密码不一致');
        }
        var Range3=/^1[3-9]{1}\d{9}$/g;
        if(Range3.test(phone.value)){
            isLegalj(phone, 'green', 'inline-block', '✔');
            isLegalp(phone, 'green', 'block', '手机号码合法');
        }else{
            isLegalj(phone, 'red', 'inline-block', '✘');
            isLegalp(phone, 'red', 'block', '手机号码不合法');
        }
    });
});

function isLegalj(ClassN, ColorI, Disj, GouCha) {
    ClassN.nextElementSibling.style.display = Disj;
    ClassN.nextElementSibling.style.color = ColorI;
    ClassN.nextElementSibling.innerText = GouCha;

}
function isLegalp(ClassN, ColorI, Disp, Inner) {
    ClassN.nextElementSibling.nextElementSibling.style.display = Disp;
    ClassN.nextElementSibling.nextElementSibling.style.color = ColorI;
    ClassN.nextElementSibling.nextElementSibling.innerHTML = Inner;
}
