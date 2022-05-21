
    let getSlidesImagePath = document.getElementById('addMovies')
    getSlidesImagePath.addEventListener("submit",addSlides)

    let imgArr=JSON.parse(localStorage.getItem("localimage")) || []

    function addSlides()
    {
        event.preventDefault();
        let img=document.getElementById("url").value;
        
        imgArr.push(img);

        localStorage.setItem("localimage",JSON.stringify(imgArr))
          
        document.getElementById("url").value=null
        }
    
// -------slideshow---------

let i=0;
let id;
function start(){
    let imgArr=JSON.parse(localStorage.getItem("localimage"));

    let slideshow=document.getElementById("slideshow");


   

    id= setInterval(function(){
       
        
        if(i===imgArr.length){
            i=0;
        }
        slideshow.innerHTML=null;
        let image=imgArr[i]
         console.log("i:",i)
        let showimg=document.createElement("img")
        // showimg.setAttribute("id","image1")
        showimg.src=image;
        slideshow.append(showimg)

       i++;


    },5000)

}

function stop(){
    clearInterval(id);
}
