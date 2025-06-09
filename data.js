let links = document.querySelector(".links");

function testr(ele){
    if (links.style.top === "-1000px" || !links.style.top){
        links.style.top = "20%"
    }else{
        links.style.top = "-1000px"
    }
}


