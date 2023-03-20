// var a = 100;

// var b = 200;


// function calcPer(a,b){
//    let p = (a*2)+(2*b);
//    return p
// }
// console.log(calcPer(a,b));


// function calcSq(a,b){
//     let s = a*b;
//     return s

// }
//console.log(calcSq(a,b))





// var c = [45,60,12,98,78,154,65];

// var m = [15,98,45,33,78,98,100,56,98];


// function sumArray(a){

//     let sum = 0;
//     for(let i = 0; i < a.length; i++){
//     sum += a[i];
//     }
//     return sum

// }
// console.log(sumArray(c));
// console.log(sumArray(m));




// var c = [45,60,12,98,78,154,65];


// var t = ["php","javascript","html","css","mysql"];


// function reverseArray(a){

// a.reverse();
// return a

// }
// console.log(reverseArray(c));
// console.log(reverseArray(t))




// class CoffeMachine {
   
//     #mode = false 


// }





// class CoffeeMachine {
  
//     #water = 0
//     #beans = 0 
//     #milk = 0 
//     #mode = false 
    
//     constructor(water, beans, milk ) {

//      this.#water = water;
//      this.#beans = beans;
//      this.#milk = milk
//     }

//     get water() {
//         return this.#water;
//       }

//     set water(value) {
//         if (value + this.#water > 1000) {
//             throw new Error("Negative water");
//         } else this.#water += value
    
//     }

//     get beans() {
//         return this.#beans;
//     }

//     set beans(sense) {
//         if (sense + this.#beans > 300) {
//             throw new Error ("Negative beans")
//         } else this.#beans += sense 
//     }

//     get milk() {
//         return this.#milk
//     }

//     set milk(white) {
//         if (white + this.#milk > 500) {
//             throw new Error ("Negative milk") 
//         }
//     }

//     get mode() {
//         return this.#mode
//     }

//     turnOn() {
//       this.#mode = true 
//     }

//     turnOff() {
//         this.#mode = false
//     }

//     makeCoffee() {

//         let water = this.#water >= 100 ? true : alert ("few water");
//         let beans = this.#beans >=30 ? true : alert ("few beans");
//         let milk = this.#milk >= 60 ? true : alert ("few milk");
//         let mode = this.#mode === true ? true : alert ("coffee maker not included");

//         if(water && beans && milk && mode) {
//             alert('Success')
//         }
//     }

      
//   }
  
//   let coffeeMachine = new CoffeeMachine(300, 100, 100 );
//   coffeeMachine.turnOn();
//   coffeeMachine.makeCoffee();











// function setup() {
//     createCanvas(400, 400 )
//     Game.addCommonBalloon()
// }

// function draw() {
//     let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16)
//      background(randomColor)

//     for (const balloon of Game.balloons) {
//        balloon.display()
//        balloon.move(Game.score)

//        if (balloon.y < 20 && balloon.constructor.name != 'AngryBalloon') {
//           noLoop()
//           Game.balloons.length = 0 
//           let score = Game.score
//           Game.score = ''
//           background('black')

//           textSize(64)
//           fill('DarkRed')
//           textAlign(CENTER, CENTER)
//           text('YOU DIED', 200, 200)

//           textSize(34)
//           text('Score:' + score, 200, 260)
          
//           textSize(24)
//           fill('white')
//           text('Tap to restart', 200, 330)
//         } 
//     }

//     textSize(32)
//     fill('black')
//     text(Game.score, 20, 40)

//     if (frameCount % 60 == 0) {
//         Game.addCommonBalloon()
//     }

//     if (frameCount % 100 == 0) {
//         Game.addSmallBalloon()
//     }

//     if (frameCount % 80 == 0) {
//         Game.addAngryBalloon()
//     }


// }

// function mousePressed() {
//     if (!isLooping()) {
//         loop()
//         Game.score = 0 
//     }
//     Game.checkIfBeBaloonBurst()
// }

// class Game {
//     static balloons = []
//     static score = 0 

//     static addCommonBalloon() {
//         let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16)
//         let CommonBalloon = new commonBalloon(randomColor, 50)
//         this.balloons.push(CommonBalloon)
//     }

//     static addSmallBalloon() {
//         let smallBalloon = new SmallBalloon('yellow', 30)
//         this.balloons.push(smallBalloon)
//     }

//     static addAngryBalloon() {
//         let angryBalloon = new AngryBalloon('black', 40)
//         this.balloons.push(angryBalloon) 
//     }

//     static checkIfBeBaloonBurst() {

//     this.balloons.forEach((balloon, index) => {
//         let distance = dist(balloon.x, balloon.y, mouseX, mouseY)
//             if(distance <= balloon.size / 2) {
//                 balloon.burst(index)
//             }
//         })
//     }
// }

// class commonBalloon {
//     constructor(color, size) {
//         this.x = random(width)
//         this.y = random(height-10, height+50)
//         this.color = color
//         this.size = size 
//     }

//     display() {
//         fill(this.color)
//         ellipse(this.x, this.y, this.size)
//         line(this.x, this.y + this.size / 2, this.x, this.y+2*this.size)
//     }

//     move(score) {
//         if (score < 100){
//             this.y -= 1
//         } else if (score > 100 && score < 200) {
//             this.y -= 2.5
//         } else {
//             this.y -= 3.5
//         }
        
        
//     }

//     burst(index) {
//         Game.balloons.splice(index, 1)
//         Game.score += 1
//     }
// }

// class SmallBalloon extends commonBalloon {
//     constructor(color, size) {
//         super(color,size)
//     }

//     burst(index) {
//         Game.balloons.splice(index, 1)
//         Game.score += 7
//     }
// }

// class AngryBalloon extends commonBalloon {
//     constructor(color, size) {
//         super(color, size)
//     }

//     burst(index) {
//         Game.balloons.splice(index, 1)
//         Game.score -= 10
//     }
// }








