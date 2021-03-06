﻿/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />



//global game framework variablesccchg
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var helloLAbel: createjs.Text;

function init():void {
    console.log("gmae started....");
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);//passing canvas to stage
    createjs.Ticker.setFPS(60); //set the frame rate to 60 fps
    createjs.Ticker.on("tick", gameloop);//update gameloop every frame

    main();//call main function method


} 

function gameloop(event: createjs.Event): void {
    stage.update();


}




function main(): void {
    helloLAbel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
    helloLAbel.regX = helloLAbel.getBounds().width * 0.5;
    helloLAbel.regY = helloLAbel.getBounds().height * 0.5;
    helloLAbel.x = 320;
    helloLAbel.y = 240;
    stage.addChild(helloLAbel);
}


