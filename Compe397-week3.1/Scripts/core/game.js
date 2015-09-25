/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />
//global game framework variablesccc
var canvas;
var stage;
var stats;
var helloLAbel;
function init() {
    console.log("gmae started....");
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas); //passing canvas to stage
    createjs.Ticker.setFPS(60); //set the frame rate to 60 fps
    createjs.Ticker.on("tick", gameloop); //update gameloop every frame
    main(); //call main function method
}
function gameloop(event) {
    stage.update();
}
function main() {
    helloLAbel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
    helloLAbel.regX = helloLAbel.getBounds().width * 0.5;
    helloLAbel.regY = helloLAbel.getBounds().height * 0.5;
    helloLAbel.x = 320;
    helloLAbel.y = 240;
    stage.addChild(helloLAbel);
}
//# sourceMappingURL=game.js.map