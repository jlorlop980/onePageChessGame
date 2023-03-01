//iluminacion de la "navbar" del main

document.getElementById("cards").onmousemove= e => {
    for(const card of document.getElementsByClassName("card")){
        const rect = card.getBoundingClientRect(),
            x= e.clientX-rect.left,
            y= e.clientY - rect.top;
        card.style.setProperty("--mouse-x",`${x}px`);
        card.style.setProperty("--mouse-y",`${y}px`);
}
    }



//Todo lo relativo a los fondos

const track= document.getElementById("image-track");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e =>{
    if(track.dataset.mouseDownAt==="0") return;

    const mouseDelta =parseFloat(track.dataset.mouseDownAt)-e.clientX,
        maxDelta=window.innerWidth/2

    const percentage = (mouseDelta/maxDelta)*-100,
        nextPercentageU= parseFloat(track.dataset.prevPercentage)+ percentage,
        nextPercentage=Math.max(Math.min(nextPercentageU,0),-100)


    track.dataset.percentage = nextPercentage;

    track.style.transform = `translate(${nextPercentage}%,-50%)`;

    for(const image of track.getElementsByClassName("image")){
        image.style.objectPosition = `${nextPercentage+100}% 50%`
    }
}