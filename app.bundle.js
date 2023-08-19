!function(e){function t(t){for(var n,r,a=t[0],h=t[1],c=t[2],d=0,u=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(e[n]=h[n]);for(l&&l(t);u.length;)u.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,a=1;a<i.length;a++){var h=i[a];0!==s[h]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},s={0:0},o=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var a=window.webpackJsonp=window.webpackJsonp||[],h=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=h;o.push([2,1]),i()}([,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vector=void 0;var n=i(6);Object.defineProperty(t,"Vector",{enumerable:!0,get:function(){return n.Vector}})},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i(0);const n=i(3),s=i(4),o={type:Phaser.AUTO,parent:"game-container",width:window.innerWidth,height:window.innerHeight,physics:{default:"arcade",arcade:{gravity:{y:0},debug:!1}},scene:[s.GameScene]};new n.Game(o)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Game=void 0;class n extends Phaser.Game{constructor(e){super(e),console.info("create game",e,this)}}t.Game=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GameScene=void 0;var n=i(5);Object.defineProperty(t,"GameScene",{enumerable:!0,get:function(){return n.GameScene}})},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GameScene=void 0;const n=i(1),s=i(7),o=i(8),r=i(11),a=i(12),h={cellSize:40,containerBorder:4,controlSize:70,xCellsCount:6,yCellsCount:6};let c,l,d,u,p,g;class f extends a.Scene{constructor(){super({key:r.ESceneName.game}),this.gameTime=0,this.deltaTime=0,this.lastSpawnTime=0,this.nextSpawnTime=0,this.score=0,this.obstacles=[],this.handleKeyDown=e=>{console.info("key down",e);let t=0;this.obstacles.forEach(i=>{i.getNumber()===e&&i.isInCenter()&&(i.destroy(),t+=1,this.score+=1)}),0===t&&(this.score-=5)}}init(){}create(){console.info("create game!");const e=this.getGameConfig(),t=this.getGameSize();this.graphics=this.add.graphics({lineStyle:{width:h.containerBorder,color:16777215}}),this.cellsGraphics=this.add.graphics({lineStyle:{width:h.containerBorder,color:16777215}}),this.scoreText=this.add.text(t.width/2,e.cellSize,this.score.toString(),{fontFamily:"Arial",fontSize:"22px",color:"#ffffff"}).setOrigin(.5),this.initKeyboard(),this.draw()}initKeyboard(){c=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE),l=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO),d=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE),u=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR),p=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE),g=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SIX),c.on("down",this.handleKeyDown),l.on("down",this.handleKeyDown),d.on("down",this.handleKeyDown),u.on("down",this.handleKeyDown),p.on("down",this.handleKeyDown),g.on("down",this.handleKeyDown)}update(e,t){this.deltaTime=t/16,this.gameTime+=15*this.deltaTime,this.obstacles.forEach(e=>{e.update()}),this.gameTime>this.nextSpawnTime&&this.spawnObstacle(),this.scoreText.text=this.score.toString()}spawnObstacle(){this.obstacles.push(new o.BasicBox(this,{width:1,height:1,number:Math.ceil(6*Math.random())})),this.nextSpawnTime=this.gameTime+1e3}destroyObstacle(e){this.obstacles=this.obstacles.filter(t=>t!==e)}getGameConfig(){return h}getCellSize(){return h.cellSize}getPos(e){return e*this.getCellSize()}getYContainerPos(e){return this.getContainerStartPos().y+e*this.getCellSize()}getXContainerPos(e){return this.getContainerStartPos().x+e*this.getCellSize()}getContainerHeight(){return h.yCellsCount*h.cellSize+2*h.containerBorder}getContainerStartPos(){const e=this.getGameCenter(),t=this.getGameSize(),i=this.getContainerHeight(),n=t.height-3*h.controlSize-4*h.cellSize-i;return{x:e.x-h.xCellsCount*h.cellSize/2,y:2*h.cellSize+n/2}}getCenterLineY(){const e=this.getGameSize(),t=this.getGameConfig(),i=3*t.controlSize;return e.height-(i+2*t.cellSize)}onOutOfGame(){this.score-=5}draw(){this.drawCells(),this.drawCenterLine(),this.drawControls()}drawCenterLine(){const e=this.getContainerStartPos(),t=(this.getGameConfig(),this.getCenterLineY(),this.getGameSize()),i=this.getContainerHeight(),n=new Phaser.Geom.Line(0,e.y+i,t.width,e.y+i);this.graphics.strokeLineShape(n)}drawGameContainer(){const e=this.getContainerStartPos(),t=this.getGameSize(),i=h.yCellsCount*h.cellSize+2*h.containerBorder,n=(t.height,new Phaser.Geom.Rectangle(e.x-h.containerBorder,e.y-h.containerBorder,h.xCellsCount*h.cellSize+2*h.containerBorder,i));this.graphics.strokeRectShape(n)}drawCells(){this.cellsGraphics.setAlpha(.075);for(let e=0;e<h.xCellsCount;e++)for(let t=0;t<h.yCellsCount;t++){const i=new Phaser.Geom.Rectangle(this.getXContainerPos(e),this.getYContainerPos(t),this.getCellSize(),this.getCellSize());this.cellsGraphics.strokeRectShape(i)}}drawControls(){const e=this.getGameSize(),t=this.getGameConfig(),i=t.controlSize;for(let o=0;o<3;o++)new s.Button(this,{pos:new n.Vector(t.containerBorder,e.height-t.containerBorder-i-i*o),width:i,height:i,text:(o+1).toString(),onPointerDown:()=>{this.handleKeyDown(o+1)}});for(let o=0;o<3;o++)new s.Button(this,{pos:new n.Vector(e.width-i-t.containerBorder,e.height-t.containerBorder-i-i*o),width:i,height:i,text:(o+4).toString(),onPointerDown:()=>{this.handleKeyDown(o+4)}})}}t.GameScene=f},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vector=void 0;t.Vector=class{constructor(e,t){this.x=e,this.y=t}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;t.Button=class{constructor(e,t){this.scene=e,this.params=t,this.rectShape=new Phaser.Geom.Rectangle(t.pos.x,t.pos.y,t.width,t.height),this.graphics=e.add.graphics({lineStyle:{width:4,color:16777215}}).setInteractive(this.rectShape,Phaser.Geom.Rectangle.Contains),this.buttonText=e.add.text(t.pos.x+t.width/2,t.pos.y+t.height/2,this.params.text,{fontFamily:"Arial",fontSize:"22px",color:"#ffffff"}).setOrigin(.5),this.initListeners(),this.draw()}initListeners(){const{graphics:e,params:t}=this;e.on("pointerdown",()=>{var e;null===(e=t.onPointerDown)||void 0===e||e.call(t)})}draw(){this.graphics.strokeRectShape(this.rectShape)}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BasicBox=void 0;var n=i(9);Object.defineProperty(t,"BasicBox",{enumerable:!0,get:function(){return n.BasicBox}})},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BasicBox=void 0;const n=i(1),s=i(10);class o extends s.Obstacle{constructor(e,t){super(e,t),this.speed=2,this.params=t;const i=this.scene.getGameConfig();this.graphics=this.scene.add.graphics({lineStyle:{width:i.containerBorder,color:16777215}});const s=this.scene.getXContainerPos(Math.floor(Math.random()*(i.xCellsCount-this.params.width+1))),o=this.scene.getYContainerPos(1-this.params.height);this.pos=new n.Vector(s,o),this.text=e.add.text(-100,-100,this.params.number.toString(),{fontFamily:"Arial",fontSize:"22px",color:"#ffffff"}).setOrigin(.5),this.draw()}update(){const e=this.scene.getGameConfig();if(this.pos.y+=this.scene.deltaTime*this.speed,this.text.x=this.pos.x+e.cellSize/2,this.text.y=this.pos.y+e.cellSize/2,this.pos.y>this.scene.getYContainerPos(e.yCellsCount+1))return this.destroy(),void this.scene.onOutOfGame();this.draw()}destroy(){this.graphics.clear(),this.scene.destroyObstacle(this),this.text.destroy()}draw(){this.graphics.clear();const e=this.scene.getGameConfig(),t=new Phaser.Geom.Rectangle(this.pos.x,this.pos.y,e.cellSize*this.params.width,e.cellSize*this.params.height);this.graphics.strokeRectShape(t)}}t.BasicBox=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Obstacle=void 0;t.Obstacle=class{constructor(e,t){this.scene=e,this.baseParams=t}isInCenter(){const e=this.scene.getGameConfig(),t=this.scene.getCenterLineY();return this.pos.y+e.cellSize>t&&this.pos.y<t}getNumber(){return this.baseParams.number}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ESceneName=void 0,function(e){e.game="GameScene"}(t.ESceneName||(t.ESceneName={}))},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Scene=void 0;class n extends Phaser.Scene{getGameSize(){return{width:this.game.config.width,height:this.game.config.height}}getGameCenter(){const e=this.getGameSize();return{x:Math.round(e.width/2),y:Math.round(e.height/2)}}}t.Scene=n}]);