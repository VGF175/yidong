window.onload=function () {
    let da=document.getElementsByClassName("center-box")[0]
    let make=document.getElementsByClassName("make")[0]
    let uls=make.getElementsByTagName('li');
    let width=da.offsetWidth;
    let yuan=document.getElementsByClassName("list-yuan")[0]
    let lis=yuan.getElementsByTagName("li")
    let zuo=document.getElementsByClassName("zuofushou")[0];
    let you=document.getElementsByClassName("youfushou")[0];
    let flag=true;
    let t=setInterval(fn,2500);
    da.onmouseover=function(){
        clearInterval(t);
    }
    da.onmouseout=function(){
        t=setInterval(fn,2500);
    }
   
    let now=0;
    let next=0;
    you.onclick=function(){
        if(flag){
            fn()
            flag=false;
        }
    }

    function fn(){
        next++;
        if(next==uls.length){
            next=0;
        }
        uls[next].style.left=`${width}px`
        animate(uls[now],{left:-width},function(){
            for(let i=0;i<lis.length;i++){
                lis[i].style.background='#fff';
            }
            lis[now].style.background='red';
            flag=true;
        });
        animate(uls[next],{left:0});
        now=next;
    }


    zuo.onclick=function(){
        if(flag){
            fn1()
            flag=false;
        }
    }
    function fn1(){
        next--;
        if(next==-1){
            next=uls.length-1
        }
        uls[next].style.left=`-${width}px`;
        animate(uls[now],{left:width},function(){
            for(let i=0;i<lis.length;i++){
                lis[i].style.background='#fff';
            }
            lis[now].style.background='red';
            flag=true;
        });
        animate(uls[next],{left:0});
        now=next;

    }
    for(let i=0;i< lis.length;i++){
        lis[i].onclick=function(){
            for(let j=0;j< lis.length;j++){
                lis[j].style.background='#fff'
            }
            lis[i].style.background='red';
            if (now==i) {return}
            else if (i<now) {
                uls[i].style.left=`-${width}px`;
                animate( uls[now],{left:width});
                // banner_lis[i].style.zIndex="4";
                animate( uls[i],{left:0});
            }
            else{
                uls[i].style.left=`${width}px`;
                animate( uls[now],{left:-width});
                // banner_lis[i].style.zIndex="4";
                animate( uls[i],{left:0});
            }
            now=next=i;
        }
    }
    //   选项卡
    let malis=document.querySelectorAll('.make1>li');
    let make2=document.querySelectorAll('.make2');
    malis.forEach(function(value,index){
        value.onmouseover=function(){
            make2[index].style.display='block';  
        }
        value.onmouseout=function(){
            make2[index].style.display='none';   
        }
        
    })



    //长轮播
    let box=document.querySelector('.wubu');
    let imgs=document.querySelector('.sect');
    let width1=parseInt(getComputedStyle(imgs.firstElementChild,null).width);
    let left=imgs.nextElementSibling;
    let right=box.lastElementChild;
    let flag1=true;
    function move() {
        animate(imgs,{left:-width1},500,function () {
            imgs.style.left=0;
            imgs.appendChild(imgs.firstElementChild);
            flag1=true;
        });

    }
    let u=setInterval(move,1500);
    //鼠标移入出控制
    box.onmouseenter=function () {
        clearInterval(u);
    };
    box.onmouseleave=function () {
        clearInterval(u);
        u=setInterval(move,1500);
    };
    //点击
    right.onclick=function () {
        if(!flag1){
            return;
        }
        flag1=false;
        move()
    };
    left.onclick=function () {
        if(!flag1){
            return;
        }
        flag1=false;
        let last=imgs.lastElementChild;
        animate(imgs,{left:width1},500,function () {
            imgs.insertBefore(last,imgs.firstElementChild);
            imgs.style.left=0;
            flag1=true;
        });


    }


    //字体轮播
    let ylb=document.querySelector('.ylb');
    let ylis=document.querySelectorAll('.ylb li');
    let bwidth=ylb.firstElementChild.offsetWidth;
    let lf=document.querySelector('.fuhaol');
    let yr=document.querySelector('.fuhaoy');
    let p;
    let now5=0;
    let next5=0;
    function dong() {
        next5=now5+1;
        if (next5 >= ylis.length) {
            next5= 0;
            ylis[next5].style.display='block';

        }
        ylis.forEach(function (d) {
            d.style.display='none';
        })
        ylis[now5].style.display='block';
        ylis[next5].style.display='block';
        now5=next5;
    }
    yr.onclick=function () {
        dong();
    };
    p=setInterval(dong,1000);


    lf.onclick=function () {
        dong1()
    }
    function dong1() {
        next5=now5+1;
        if (next5 < 0) {
            next5= ylis.length-1;
            ylis[next5].style.display='block';
        }
        ylis.forEach(function (d) {
            d.style.display='none';
        })
        ylis[now5].style.display='block';
        ylis[next5].style.display='block';
        now5=next5;
    }


    //小选项卡
    let sndw=document.querySelector('.sndw');
    let tutu1=document.querySelector('.tutu1');
    sndw.onmouseover=function () {
        sndw.classList.add('ppll');
        tutu1.classList.add('dnf');
    }
    sndw.onmouseout=function () {
        sndw.classList.remove('ppll');
        tutu1.classList.remove('dnf');
    }
}