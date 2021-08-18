window.addEventListener('load',function(){
    var colorl=document.querySelector('.colorl');
    var urll=document.querySelector('.urll');
    var chinesel=document.querySelector('.chinesel');
    var sub=document.getElementById('submit');

    colorl.addEventListener('focus',function(){
        if(this.value=='请输入十六进制颜色'){
            this.value='';
        }else{
            this.value=this.value;
        }
    });
    colorl.addEventListener('blur',function(){
        if(this.value==''){
            this.value='请输入十六进制颜色';
        }else{
            this.value=this.value;
        }
    });
    urll.addEventListener('focus',function(){
        if(this.value=='请输入URL'){
            this.value='';
        }else{
            this.value=this.value;
        }
    });
    urll.addEventListener('blur',function(){
        if(this.value==''){
            this.value='请输入URL';
        }else{
            this.value=this.value;
        }
    });
    chinesel.addEventListener('focus',function(){
        if(this.value=='请任意输入'){
            this.value='';
        }else{
            this.value=this.value;
        }
    });
    chinesel.addEventListener('blur',function(){
        if(this.value==''){
            this.value='请任意输入';
        }else{
            this.value=this.value;
        }
    });

    sub.addEventListener('click',function(){
        //十六进制颜色
        var Limit1=/^#?([0-9a-fA-F]{6}||[0-9a-zA-Z]{3})$/g;
        if(Limit1.test(colorl.value)){
            isLegalj(colorl, 'green', 'inline-block', '✔');
            isLegalp(colorl, 'green', 'block', '正确');
        }else{
            isLegalj(colorl, 'red', 'inline-block', '✘');
            isLegalp(colorl, 'red', 'block', '错误');
        }
        var Limit2=/^((http|ftp|file)s?:\/\/)?([\da-z\.\-]+)\.([a-z\.]{2,6})([\/\.a-z\-0-9]*)*\/?$/g;
        if(Limit2.test(urll.value)){
            isLegalj(urll, 'green', 'inline-block', '✔');
            isLegalp(urll, 'green', 'block', '正确');
        }else{
            isLegalj(urll, 'red', 'inline-block', '✘');
            isLegalp(urll, 'red', 'block', '错误');
        }
        var Limit3=/^([\w\d]+)$/g;
        if(!Limit3.test(chinesel.value)){
            isLegalj(chinesel, 'green', 'inline-block', '✔');
            isLegalp(chinesel, 'green', 'block', '正确');
        }else{
            isLegalj(chinesel, 'red', 'inline-block', '✘');
            isLegalp(chinesel, 'red', 'block', '错误');
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