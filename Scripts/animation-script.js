/*

const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');

const CANVAS_WIDTH=canvas.width=600;
const CANVAS_HEIGHT=canvas.height=600;

const spriteWidth=240;
const spriteHeight=480;

const playerImage=new Image();
playerImage.src='Img/spritesheet-001.png'

let getframe=0;
const staggerFrames=5;
const spriteAnimations=[];

const animationStates=[
  {
    name:'walk',
    frame:9,
  },
  {
    name:'side_walk',
    frame:9,
  },
  {
    name:'back_walk',
    frame:9,
  },
];

let playerState="walk";

animationStates.forEach((state,index)=>{
  let frames={
    loc:[],
  }
  for(let j=0;j<state.frams;j++){
    let positionX=j*spriteWidth;
    let positionY=j*spriteHeight;

    frames.loc.push({x:positionX,y:positionY});
  }
  spriteAnimations[state.name]=frames;
});

function animate(){
  ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

  ctx.drawImage(playerImage,0*240,0*480,spriteWidth,spriteHeight,150,150,spriteWidth,spriteHeight);

  requestAnimationFrame(animate)
}

animate();

*/



let playerState="walk";
const dropdown=document.getElementById('animations');
dropdown.addEventListener('change',function(e){
  playerState=e.target.value;
})


const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');

const CANVAS_WIDTH=canvas.width =600;
const CANVAS_HEIGHT=canvas.height =600;

const playerImage=new Image();
playerImage.src='Img/spritesheet-001.png';

const spriteWidth=240;
const spriteHeight=480;

let gameFrame=0;

const staggerFrames=5;
const spriteAnimations=[];

const animationStates=[
  {
    name:'walk',
    frames:9,
  },
  {
    name:'side_walk',
    frames:9,
  },
  {
    name:'back_walk',
    frames:9,
  },
  
];

animationStates.forEach((state,index)=>{
  let frames={
    loc: [],
  }
  for(let j=0;j<state.frames;j++){
    let positionX=j*spriteWidth;
    let positionY=index*spriteHeight;
    frames.loc.push({x:positionX,y:positionY});
  }
  spriteAnimations[state.name]=frames;

});

function animate(){
  ctx.clearRect(0,0, CANVAS_WIDTH,CANVAS_HEIGHT);

  let position=Math.floor(gameFrame/staggerFrames)%spriteAnimations[playerState].loc.length;

 let frameX=spriteWidth*position;
 let frameY=spriteAnimations[playerState].loc[position].y;

  ctx.drawImage(playerImage,frameX,frameY,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
 

  gameFrame++
  requestAnimationFrame(animate);
};

animate();




  
