const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
const CANVAS_WIDTH=canvas.width=800;
const CANVAS_HEIGHT=canvas.height=480;

let playerState='side_walk';
let gameSpeed=4;
let gameFrame=0;

//let gameFrame=0;

const playerImage=new Image();
playerImage.src='Img/Sprite-0001.png'

const spriteWidth=48;
const spriteHeight=96;

const backgroundLayer1=new Image();
backgroundLayer1.src='Img/parallax-1/Layer_1.png'
const backgroundLayer2=new Image();
backgroundLayer2.src='Img/parallax-1/Layer_2.png'
const backgroundLayer3=new Image();
backgroundLayer3.src='Img/parallax-1/Layer_3.png'
const backgroundLayer4=new Image();
backgroundLayer4.src='Img/parallax-1/Layer_4.png'
const backgroundLayer5=new Image();
backgroundLayer5.src='Img/parallax-1/Layer_5.png'

const staggerFrames=5;
const spriteAnimations=[];

const animationState=[
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
]


class Layer{
  constructor(image,speedModifier){
    this.x=0;
    this.y=0;
    this.width=960;
    this.height=480;

    this.image=image;
    this.speedModifier=speedModifier;
    this.speed=gameSpeed*this.speedModifier;

  };
  update(){
    this.speed=gameSpeed*this.speedModifier;
    if(this.x<=-this.width){
      this.x=0
    }
    this.x=this.x-this.speed;

  };
  draw(){
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    ctx.drawImage(this.image,this.x+this.width,this.y,this.width,this.height);
  }
}

const layer1=new Layer(backgroundLayer1,0.1);
const layer2=new Layer(backgroundLayer2,0.3);
const layer3=new Layer(backgroundLayer3,0.4);
const layer4=new Layer(backgroundLayer4,0.5);
const layer5=new Layer(backgroundLayer5,0.7);

const gameObjects=[layer1,layer2,layer3,layer4,layer5];

animationState.forEach((state,index)=>{
  let frames={
    loc:[],
  }
  for(let j=0;j<state.frames;j++){
    let positionX=j*spriteWidth;
    let positionY=index*spriteHeight;
    frames.loc.push({x:positionX,y:positionY});
  }
  spriteAnimations[state.name]=frames;

})


function animate(){
  ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

  let position=Math.floor(gameFrame/staggerFrames)%spriteAnimations[playerState].loc.length;

  let frameX=spriteWidth*position;
  let frameY=spriteAnimations[playerState].loc[position].y;


  

  gameObjects.forEach(object=>{
    object.update();
    object.draw();
  });

  ctx.drawImage(playerImage,frameX,frameY,spriteWidth,spriteHeight,0,320,2*spriteWidth,2*spriteHeight);
  gameFrame++;
  requestAnimationFrame(animate);
};

animate();