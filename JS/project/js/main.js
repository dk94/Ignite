/**
 * Created by Dima on 03.04.2017.
 */
var slider={
    slides:["slide_img1","slide_img2","slide_img3"],
    timer:0,
    counter:0,
    click_left: function(){
        clearInterval(slider.timer);

        slider.runSlider("left");
        slider.timer=setTimeout( slider.changeSlides,2000);
    },
    click_right: function(){
        clearInterval(slider.timer);

        slider.runSlider("right");
        slider.timer=setTimeout( slider.changeSlides,2000);

    },
    changeSlides: function() {


            slider.timer = setInterval(slider.runSlider, 3000, "left");

    },
    runSlider:function(pos){
        var imgCont = document.querySelector(".slider .container-fluid");
        var img = document.querySelector(".slider .container-fluid .mainimg");

        if (img)
            imgCont.removeChild(img);
        var slide = document.createElement('img');
        slide.className = "img-fluid mainimg";
        if (pos == "left") {
            slider.counter=slider.counter==2?0:++slider.counter;
        }
        else {
            slider.counter=slider.counter==0?2:--slider.counter;
        }
        var nextSlide = slider.slides[slider.counter];
        slide.src = "img/" + nextSlide + ".png";

        imgCont.insertBefore(slide, imgCont.children[0]);
    }
};


var zoomerService= {
    initialize:function() {
        var arr = [];
        var divRow = document.querySelector('.high_service_row');
        var divRow2 = document.querySelector('.trow');
        arr.push(divRow);
        arr.push(divRow2);
        var marginBottom = 0;
        var marginRight = 0;
        for (var i = 0; i < arr.length; i++) {
            arr[i].addEventListener('mouseover', function (e) {

                if (e.target.tagName == 'IMG') {
                    if(e.target.closest("#aboutus")){
                        marginRight = getComputedStyle(e.target).marginRight;
                        e.target.style.marginRight =(parseInt(marginRight)- (Math.round(e.target.offsetWidth * 1.1)-e.target.offsetWidth))+"px";
                        e.target.style.width = Math.round(e.target.offsetWidth * 1.1) + 'px';
                        marginBottom = getComputedStyle(e.target).marginBottom;
                        e.target.style.marginBottom = (parseInt(marginBottom) - (Math.round(e.target.offsetWidth * 1.1) - e.target.offsetWidth)) + "px";
                    }
                    else {
                        marginBottom = getComputedStyle(e.target).marginBottom;
                        e.target.style.marginBottom = (parseInt(marginBottom) - (Math.round(e.target.offsetWidth * 1.1) - e.target.offsetWidth)) + "px";
                        e.target.style.width = Math.round(e.target.offsetWidth * 1.1) + 'px';
                    }
                }
            });

            arr[i].addEventListener('mouseout', function (e) {
                if (e.target.tagName == 'IMG') {
                    e.target.style.marginBottom = marginBottom;
                    e.target.style.marginRight = marginRight;
                    e.target.style.width = (Math.round(e.target.offsetWidth * 0.9) + 1) + 'px';
                }
            });


        }

    }
};

var portfolio={
    allImagesSet:[], wdImageSet:[], gdImageSet:[], phImageSet:[], ilImageSet:[],
   position:"All",
    editDOM:function(array){
        var imgCont=document.querySelector(".imagesSet");
        imgCont.innerHTML="";
        var counter=0;
        var innerCounter=0;
        while(true){
            var col=document.createElement('div'); var img=document.createElement('img'); var block=document.createElement('div');
            var span=document.createElement('span');
            span.className="pfSpan";
            col.className="col-12 col-sm-6 col-md-4 col-lg-2 imagesPf";
            img.className="img-fluid";
            block.className="outerBlock";
            img.src=array.length==3?"img/"+array[innerCounter]:"img/"+array[counter];
            block.appendChild(span);
            col.appendChild(img);
            col.appendChild(block);
            imgCont.insertBefore(col,imgCont.children[0]);

            if (counter==11) break;
            counter++;
            if(innerCounter==array.length-1)
            innerCounter=0;
            else
            innerCounter++;

        }
        portfolioMouseOver();
    },


    initialize:function(){
        this.wdImageSet=["pf_img1.png","pf_img2.png","pf_img3.png"];
        this.gdImageSet=["pf_img4.png","pf_img5.png","pf_img6.png"];
        this.phImageSet=["pf_img7.png","pf_img8.png","pf_img9.png"];
        this.ilImageSet=["pf_img10.png","pf_img11.png","pf_img12.png"];

      this.allImagesSet=this.wdImageSet.concat(this.gdImageSet).concat(this.phImageSet).concat(this.ilImageSet);
       this.editDOM(this.allImagesSet);

        var buttons=document.querySelectorAll("#portfolio li");
        for (var i=0;i<buttons.length;i++){
            buttons[i].addEventListener("click",function(e){
                    portfolio.position=e.target.innerHTML;
                    switch(portfolio.position){
                    case "All":portfolio.editDOM(portfolio.allImagesSet);
                        break;
                    case "Web Design":portfolio.editDOM(portfolio.wdImageSet);
                        break;
                    case "Graphic Design":portfolio.editDOM(portfolio.gdImageSet);
                        break;
                    case "Photography":portfolio.editDOM(portfolio.phImageSet);
                        break;
                    case "Illustration":portfolio.editDOM(portfolio.ilImageSet);
                        break;
                    }
            })
        }

}

};

function portfolioMouseOver(){
    var image=document.querySelectorAll(".imagesSet img");
    var outerBlock=document.querySelectorAll(".outerBlock");

    for(var i=0;i<image.length;i++){
        image[i].addEventListener("mouseenter",function(){
            this.nextElementSibling.style.visibility="visible";
            var span=this.nextElementSibling.querySelector("span");
            span.innerHTML=portfolio.position;

        });
        outerBlock[i].addEventListener("mouseleave",function(){
            this.style.visibility="hidden";
        });

    }
}

var statistic= {
    screenHeight: document.documentElement.clientHeight,
    counterArr: [0, 0, 0, 0],
    counter:function () {

        var elem = document.querySelectorAll(".statistic_numbers h4");

        for (var i = 0; i < elem.length; i++) {
            var initialInnerHtml = +elem[i].innerHTML;
            if (this.counterArr[i] == 0) {
                (function (elem, initialInnerHtml,i) {
                    if (elem.getBoundingClientRect().top <= statistic.screenHeight) {
                        statistic.counterArr[i]++;
                        var counter = 0;
                        elem.innerHTML = 0;

                        var timerId = setInterval(function () {
                            statistic.num++;
                            var temp = Math.round(initialInnerHtml / 40);
                            elem.innerHTML = counter + temp;
                            counter += temp;
                            if (elem.innerHTML >= initialInnerHtml) {
                                elem.innerHTML = initialInnerHtml;
                                clearInterval(timerId);
                            }
                        }, 75)

                    }
                })(elem[i], initialInnerHtml,i)
            }
        }
    }

};

var scrollToTop={
    initialize:function(){
        var img=document.querySelector(".bottom_arrow");
        img.addEventListener("click",function(e){
            var coordY= e.pageY;
            var int=setInterval(function(){

                if(coordY<=0)
                    clearInterval(int);
                window.scrollBy(0,-30);
                coordY-=30;
            },10)
        })
    }
};

var form={
    initialize:function(){
        var form=document.querySelector(".form");
        var counterN= 0, counterM= 0, counterS=0, counterT=0;
        form.addEventListener("keyup",function(e){

            var type=e.target.type;
            var elem=e.target;
            if(type!=="text"||type=="textarea")
            return;

            else{
                if(type=="text"){

                    switch(elem.name){
                        case "name":{
                            if(counterN==0){
                                elem.value=e.key;
                                counterN++;
                            }

                            var pattern= (/[^a-zA-Z]/g);
                            if(elem.value.match(pattern))
                                document.querySelector("#sendmessage .name").style.display="block";
                            else
                                document.querySelector("#sendmessage .name").style.display="none";
                            break;
                        }
                        case "mail":{
                            if(counterM==0){
                                elem.value=e.key;
                                counterM++;
                            }

                             pattern= (/[^\w@]/g);
                            if(elem.value.match(pattern))
                                document.querySelector("#sendmessage .mail").style.display="block";
                            else
                                document.querySelector("#sendmessage .mail").style.display="none";
                            break;
                        }
                        case "subj":{
                            if(counterS==0){
                                elem.value=e.key;
                                counterS++;
                            }

                             pattern= (/[^a-zA-Z0-9]/g);
                            if(elem.value.match(pattern))
                                document.querySelector("#sendmessage .subj").style.display="block";
                            else
                                document.querySelector("#sendmessage .subj").style.display="none";
                            break;
                        }
                    }
                }
                else{
                    if(counterT==0){
                        elem.value=e.key;
                        counterT++;
                    }
                }

            }
        })
    }
};

var popularQuotes={
    initialize:function(){
        var ul=document.querySelector("#reviews .control");
        ul.addEventListener("click",function(e){
            if(e.target.tagName!="LI")
            return;
            var div=document.querySelector(".quotes").children;
            for(var i=0;i<div.length-1;i++){
                div[i].style.display="none";
}
            for(var j=0;j<ul.children.length;j++){
                ul.children[j].style.color="white";
            }
            e.target.style.color="yellow";

            switch(e.target.dataset.attr){
                case "first":{
                    div[0].style.display="block";
                    break;
                }
                case "second":{
                    div[1].style.display="block";
                    break;
                }
                case "third":{
                    div[2].style.display="block";
                    break;
                }
                case "fourth":{
                    div[3].style.display="block";
                    break;
                }
            }
        })
    }
};

var clientsSlider={
    initialize:function(){
        var thumbs=document.querySelectorAll("#ourClients .clients div");
        var arr=[];
        for(var i=0;i<thumbs.length;i++){
            arr[i]=thumbs[i];
        }

        setInterval(function(){
            var clients=document.querySelector("#ourClients .clients");
            clients.innerHTML="";
            var firstElem=arr.shift();
            arr.push(firstElem);
            var frag=document.createDocumentFragment();
            for(var j=0;j<arr.length;j++){
               frag.appendChild(arr[j]);
            }
            clients.appendChild(frag);
        },2000)
    }
};

var scrollToBottom={
    initialize:function(){
        var img=document.querySelector(".middle_arrow");
        img.addEventListener("click",function(e){
            var coordY= e.pageY;
            var int=setInterval(function(){

                if(document.querySelector("#sendmessage").getBoundingClientRect().top<=0)
                    clearInterval(int);
                window.scrollBy(0,10);
                coordY+=10;
            },10)
        })
    }
};

var scroll={
    initialize:function(){
        var menu=document.querySelector("header .mainMenu");
        menu.addEventListener("click",function(e){
                if(e.target.tagName!="A")
                return;
                var targetElem=document.getElementById(e.target.dataset.adress);
                var mouseYCoord= e.pageY;
            scroll.scroll(targetElem,mouseYCoord);

            })
    },

    scroll:function(elem,coord){
        function getCoords(elem) {
            var box = elem.getBoundingClientRect();

            return {
                top: box.top + pageYOffset,
                left: box.left + pageXOffset
            };

        }

        if(getCoords(elem).top<=coord){
            var toTop=setInterval(function(){

                if(elem.getBoundingClientRect().top>=0)
                clearInterval(toTop);
                window.scrollBy(0,-5);

            },4)
    }
        else if(getCoords(elem).top>coord){
            var toBottom=setInterval(function(){

                if(elem.getBoundingClientRect().top<=0)
                    clearInterval(toBottom);
                window.scrollBy(0,5);

            },4)
        }
    }
};

var theTeamBlock={
    counter:0,
    dataArr:[{name:"JOHN DOE",text:"Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit.Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit.",skill_f:95,skill_s:86,skill_t:84,skill_l:98},
             {name:"ANDREW DOE",text:"Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit.Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit.Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. ",skill_f:85,skill_s:89,skill_t:94,skill_l:94},
             {name:"MISTER BIN",text:"Felis porttitor volutpat. Vivamus suscipit.Curabitur non nulla sit amet nisl tempus convallis Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit.Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget  quis ac lectus. ",skill_f:100,skill_s:100,skill_t:100,skill_l:100},
              {name:"KIANU RIVZ",text:"Curabitur non nulla sit amet nisl tempus convallis suscipit.Curabitur non nulla sit amet nisl tempus convallis Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit.Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget  quis ac lectus. ",skill_f:97,skill_s:96,skill_t:74,skill_l:68}
    ],
    initialize:function(){
        var closeX=document.querySelector("#theteam .info");
        var middle= document.querySelector(".middle");
        closeX.addEventListener('click',function(){
            middle.style.display="none";
        });

        var persons=document.querySelectorAll('.persons');
        for(var i=0;i<persons.length;i++){
            persons[i].addEventListener("click",function(e){
                if( middle.style.display=="none"){
                    middle.style.display="block";
                    middle.querySelector(".description").style.margin="0 auto";
                }
                var obj=theTeamBlock.dataArr[e.target.closest(".persons").dataset.number];
                var namef=document.querySelector(".description .name");
                var names=document.querySelector(".bottom .name");
                var biography=document.querySelector(".description .biography");

                namef.innerHTML=obj.name;

                biography.innerHTML=obj.text;

                var canvas=document.getElementsByClassName("canvas");
                theTeamBlock.drawDiagrams(canvas[0],obj.skill_f);
                theTeamBlock.drawDiagrams(canvas[1],obj.skill_s);
                theTeamBlock.drawDiagrams(canvas[2],obj.skill_t);
                theTeamBlock.drawDiagrams(canvas[3],obj.skill_l);

            })
        }
    },

    drawDiagrams:function(canvas, skill){
        var ctx = canvas.getContext("2d");
        var W = canvas.width;
        var H = canvas.height;
        var degrees = 0;
        var new_degrees = 0;
        var difference = 0;
        var color = "#FFE500";
        var bgcolor = "#FFF";
        var text;
        var animation_loop;

        function init()
        {

            ctx.clearRect(0, 0, W, H);
            ctx.beginPath();
            ctx.strokeStyle = bgcolor;
            ctx.lineWidth = 3;
            ctx.arc(W/2, H/2, 50, 0, Math.PI*2, false); //you can see the arc now
            ctx.stroke();

            var radians = degrees * Math.PI / 180;
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;

            ctx.arc(W/2, H/2, 50, 0 - 270*Math.PI/180, radians - 270*Math.PI/180, false);

            ctx.stroke();

            //Lets add the text
            ctx.fillStyle = color;
            ctx.font = "25px Oswald-light";
            text = Math.floor(degrees/360*100) + "%";

            text_width = ctx.measureText(text).width;

            ctx.fillText(text, W/2 - text_width/2, H/2 + 5);
        }

        function draw()
        {

            if(typeof animation_loop !== undefined) clearInterval(animation_loop);


            new_degrees = Math.round(skill/100*360) + 1;
            difference = new_degrees - degrees;

            animation_loop = setInterval(animate_to, 2000/difference);
        }


        function animate_to()
        {

            if(degrees == new_degrees)
                clearInterval(animation_loop);

            if(degrees < new_degrees)
                degrees++;
            else
                degrees--;

            init();
        }

        draw();

    },
    onScroll:function(){
        var canvas= document.querySelectorAll(".canvas");
        if(canvas[0].getBoundingClientRect().top<=document.documentElement.clientHeight&&canvas[0].getBoundingClientRect().top>=0&&
            this.counter==0){
            this.counter++;
           this.drawDiagrams(canvas[0],this.dataArr[0].skill_f);
            this.drawDiagrams(canvas[1],this.dataArr[0].skill_s);
            this.drawDiagrams(canvas[2],this.dataArr[0].skill_t);
            this.drawDiagrams(canvas[3],this.dataArr[0].skill_l);
        }

    }

};


window.onload= function(){
   slider.runSlider("left");
    slider.changeSlides("left");
    portfolio.initialize();
    scrollToTop.initialize();
    form.initialize();
    popularQuotes.initialize();
    clientsSlider.initialize();
    scroll.initialize();
    scrollToBottom.initialize();
    zoomerService.initialize();
    theTeamBlock.initialize();
};
window.onscroll=function(){
    statistic.counter();
    theTeamBlock.onScroll();
};
