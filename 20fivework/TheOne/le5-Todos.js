window.addEventListener('load', function () {
    let note = document.querySelector('.note');
    var sub=document.querySelector('.submit');
    var ul=document.querySelector('ul');

    //增删节点
    sub.addEventListener('click',function(){
        if(note.value==''||note.value=='把卷的东西放进来')  return false;
        else{
            var li=document.createElement('li');
            li.innerHTML=note.value+"<a href='javascript:;'><img src='https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg' alt=''></a>";
            ul.appendChild(li);
            titleoperation(note, 'center', '#dacdcdda', '0');
            note.value='把卷的东西放进来';
        }
        var del=document.querySelectorAll('a');
        for(var i=0;i<del.length;i++){
            del[i].onclick=function(){
                ul.removeChild(this.parentNode);
            }
        }
    });
    //初始化
    note.addEventListener('click', function () {
        if (note.value == '把卷的东西放进来') {
            note.value = '';
            titleoperation(note, 'left', '#000', '1em');
            ck=true;
        }
        else if (note.value == '') {
            titleoperation(note, 'center', '#dacdcdda', '0');
            note.value = '把卷的东西放进来';
        }
        else {
            note.value = note.value;
        }
    });
    note.addEventListener('blur', function () {
        if (note.value == '') {
            titleoperation(note, 'center', '#dacdcdda', '0');
            note.value = '把卷的东西放进来';
            sub.style.display='none';
        }else{
            note.value=note.value;
        }
    });
    note.addEventListener('mouseover',function(){
        var i=0.1;
        sub.style.display='block';
        var timer=setInterval(function(){
            if(i==1){
                clearInterval(timer);
            }
            sub.style.color='rgba(255,255,255,'+i+')';
            sub.style.backgroundColor='rgba(135,206,235,'+i+')';
            i=i+0.1;
        },50);
    });
    note.addEventListener('mouseout',function(){
        sub.style.display='none';
    });
    sub.addEventListener('mouseover',function(){
        sub.style.display='block';
        var i=0.1;
        var timer=setInterval(function(){
            if(i==1){
                clearInterval(timer);
            }
            sub.style.color='rgba(255,255,255,'+i+')';
            sub.style.backgroundColor='rgba(135,206,235,'+i+')';
            i=i+0.1;
        },50);
    });
});

function titleoperation(ClassN, Align, Color, Indent) {
    ClassN.style.textAlign = Align;
    ClassN.style.color = Color;
    ClassN.style.textIndent = Indent;
}