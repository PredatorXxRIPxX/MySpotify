let allMusics=[
    {
        Artiste:'Cartoon',
        Music:'C U Again',
        image:'./R.jpeg',
        source:'./Cartoon  C U Again feat Mikk Me Cartoon vs Futuristik VIP NCS Release.mp3',
    },
    {
        Artiste:'Pitpull',
        Music:'Timber',
        image:'./R (2).jpeg',
        source:'./Pitbull  Timber Lyrics ft Keha.mp3',
    },
    {
        Artiste:'Pitpull',
        Music:'Ole Ola',
        image:'./R (2).jpeg',
        source:'./We Are One Ole Ola The Official 2014 FIFA World Cup Song Olodum Mix.mp3',
    },
    {
        Artiste:'Polo G',
        Music:'Heartless',
        image:'./OIP.jpeg',
        source:'./Polo G  Heartless feat Mustard Official Video.mp3',
    },
    {
        Artiste:'Lucenzo',
        Music:'Danza Kuduro',
        image:`./R (1).jpeg`,
        source:'./don omar  danza kuduro sped up.mp3',
    },
];

let indexmusic=3
let disk=document.getElementById("disk")
let nameMusic=document.getElementById("name_music")
let nameArtist=document.getElementById("name_art")
let audio=document.getElementById("main_audio")
let progres=document.getElementById("progres")
let bar=document.getElementById("bar")
let starting=document.getElementById("current")
let ending=document.getElementById("end")

window.addEventListener("load",function(){
    loadMusic(indexmusic);
})

function loadMusic(index){
    nameMusic.innerText=`${allMusics[index].Music}`
    nameArtist.innerText=`${allMusics[index].Artiste}`
    disk.style.background=`url(${allMusics[index].image}) no-repeat center center/cover`
    audio.src=`./${allMusics[index].source}`

}

let go=document.getElementById("play")
let prev=document.getElementById("previous")
let next=document.getElementById("next")

let s=false

go.addEventListener("click",function(){
    if(s==false){
        s=true
        disk.style.animationName='turn'
        audio.play()
    }else{
        s=false
        disk.style.animationName='none'
        audio.pause()
    }
})

next.addEventListener("click",function(){
    indexmusic++
    if(indexmusic>=allMusics.length){
        indexmusic=0
    }
    s=false
    loadMusic(indexmusic)
})

prev.addEventListener("click",function(){
    indexmusic--
    if (indexmusic<=0) {
        indexmusic=allMusics.length-1
    }
    s=false
    loadMusic(indexmusic)
})

let current

audio.addEventListener("timeupdate",function(e){
    current=e.target.currentTime

    let finish=e.target.duration
    
    bar.style.width=`${(current/finish)*100}%`

    let currentsec=Math.floor(current%60)
    let currentmin=Math.floor(current/60)
    let durationsec=Math.floor(finish%60)
    let durationmin=Math.floor(finish/60)
    
    starting.innerText=`${currentmin}:${currentsec}`
    ending.innerText=`${durationmin}:${durationsec}`
    
})
progres.addEventListener("click",function(ev){
    let container=ev.target.clientWidth
    let duration=audio.duration
    let position=ev.offsetX
    
    audio.currentTime=(position/container)*duration
    
})

let types=['normal','repeat','shuffle']

let btn=document.getElementById("repeat")

let typeindex=0

btn.addEventListener("click",function(){
    
    if(typeindex==0){
        el.className="fa-solid fa-shuffle"
    }
    if(typeindex==1){
        
        el.className="fa-solid fa-music"
    }
    if(typeindex==2){
        
        el.className="fa-solid fa-repeat"
    }
    typeindex++
    if(typeindex>=3){
        typeindex=0
    }
})

let el=document.getElementById("icon")


audio.addEventListener("ended",function(){
    if(types[typeindex]=='repeat'){
        console.log("now repeat")
        
        audio.currentTime=0
        loadMusic(indexmusic)
    }
    if(types[typeindex]=='normal'){
        console.log("now normal")
        
        indexmusic++
        loadMusic(indexmusic)
    }
    if (types[typeindex]=='shuffle') {
        console.log("now shuffle")
        let randnum=Math.floor(Math.random()*(allMusics.length-1))
        console.log(randnum)
        loadMusic(randnum)
    }
})

let songs=document.getElementById("songs")

for(let i=0;i<allMusics.length-1;i++){
    let titles=`<li index=${i} onclick=clicked(this)>${allMusics[i].Music}<span>${allMusics[i].Artiste}</span></li>`
    songs.insertAdjacentHTML("beforeend",titles)
}

let actual=document.querySelectorAll("li")

/*for(let j=0;j<allMusic.length-1;j++){
    actual[j].setAttribute("onclick","clicked(this)")
}*/
function clicked(item){
    console.log(item)
    let index=item.getAttribute("index")
    console.log(index)
    loadMusic(index)
}
let tr=false
let menu=document.getElementById("menu")
let list=document.getElementById("list")
list.addEventListener("click",function(){
    if(tr==false){
        tr=true
        menu.style.transform="translateX(-325px)"
        //menu.style.left="75%"
    }else{
        menu.style.transform="translateX(+325px)"
        //menu.style.left="100%"
        tr=false
    }
})
