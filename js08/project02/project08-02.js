"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container
      Author: Isabelle Samaniego
      Date:   November 18, 2022

      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/
const BALL_RADIUS = 60; // radius of the ball in pixels
const BOX_HEIGHT = 400; // height of the container in pixels
const BOX_WIDTH = 800;  // width of the container in pixels

/*--------------- Object Code --------------------*/

let box = {
    width : BOX_WIDTH,
    height : BOX_HEIGHT,
    xPos : 0,
    yPos : 0
  }
  
  // constructor function for ball
  function ball(size){
    // set default values
    this.radius = size;
    this.xPos = null;
    this.yPos = null;
    this.xVelocity = null;
    this.yVelocity = null;
  
    // moveWithin function
    this.moveWithin = function(container) {
      // set ball properties
      this.ballTop  = this.yPos;
      this.ballLeft = this.xPos;
      this.ballBottom = this.yPos + this.radius;
      this.ballRight = this.xPos + this.radius;
  
      // check for the collission
      if(this.ballTop < 0 || this.ballBottom > container.height) {
          container.yPos += this.yVelocity;
          this.yVelocity = -this.yVelocity;
      }
  
      if(this.ballLeft < 0 || this.ballRight > container.width) {
          container.xPos += this.xVelocity;
          this.xVelocity = -this.xVelocity;
      }
  
      // set ball position
      this.yPos += this.yVelocity;
      this.xPos += this.xVelocity;
    }
  
  }





/*---------------Interface Code -----------------*/

// Reference to the container box
let boxImage = document.getElementById("box");
boxImage.style.width = BOX_WIDTH + "px";
boxImage.style.height = BOX_HEIGHT + "px";
boxImage.style.top = "0px";
boxImage.style.left = "0px"

// Reference to the Add Ball button
let addBall = document.getElementById("addBall");

addBall.onclick = function() {
      
   let ballImage = document.createElement("div");
   ballImage.className = "ball";
   ballImage.style.width = BALL_RADIUS + "px";
   ballImage.style.left = (BOX_WIDTH - BALL_RADIUS)/2 + "px";
   ballImage.style.top = (BOX_HEIGHT - BALL_RADIUS)/2 + "px";
   
   // Append the ball image to the box
   boxImage.appendChild(ballImage);     
   
     // create new ball
     let newBall = new ball(BALL_RADIUS);
     newBall.yPos = (BOX_HEIGHT - BALL_RADIUS)/2;
     newBall.xPos = (BOX_WIDTH - BALL_RADIUS)/2;
     newBall.xVelocity = rand(-10,10);
     newBall.yVelocity = rand(-10,10);
  
     // animate the boll
     window.setInterval(()=>{
      newBall.moveWithin(box);
      ballImage.style.top = newBall.yPos + "px";
      ballImage.style.left = newBall.xPos + "px";
      boxImage.style.top = box.yPos + "px";
      boxImage.style.left = box.xPos + "px"
    },25);
     
   
};


/* Function to return a random value between minVal and maxValue */
function rand(minVal, maxVal) {
   let size = maxVal - minVal + 1;
   return minVal + size*Math.random();
}