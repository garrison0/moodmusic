var canvas;
var bgTiles;
var bg;
var tmap;

var tsets;
var obstacles;
var buttons;
var buttonDivs;
var player;
var GRAVITY = 0.35;
var JUMP = -12;

// async load
function preload() {
  // load tileset json/imgs in a convenient dictionary
  tsets = {};
  tsets['spritesheet_ground'] = {};
  tsets['spritesheet_tiles'] = {};
  tsets['spritesheet_ground']['json'] = loadJSON('spritesheet_ground.json'); 
  tsets['spritesheet_tiles']['json'] = loadJSON('spritesheet_tiles.json');
  tsets['spritesheet_ground']['img'] = loadImage('spritesheet_ground.png');
  tsets['spritesheet_tiles']['img'] = loadImage('spritesheet_tiles.png');
  // bg = loadImage('bg.png');
}

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  canvas.style('-webkit-transition', 'opacity 1200ms ease-in');
  canvas.style('transition', 'opacity 1200ms ease-in');

  // some p5.play init
  obstacles = new Group();
  buttons = new Group();
  buttonDivs = {};
  useQuadTree(true);
  player = createSprite(-canvas.width/2,-canvas.height/2,32,32);

  // render the tile map of the first level
  loadLevel('aboutLevel');
}

function loadLevel(tmap_name){
  tmap = TileMaps[tmap_name];
  resizeCanvas(tmap.width * 32, tmap.height * 32);
  canvas.position(0,0);
  bgTiles = createGraphics(Math.round(canvas.width), Math.round(canvas.height));

  for (var i = 0; i < tmap.layers[0].data.length; i++){
    let tileId = tmap.layers[0].data[i] - 1;

    // find which tileset this tile belongs to
    let j = 0;
    let candidate = tmap.tilesets[0];
    // assume non-empty tilesets
    // while (j < tmap.tilesets.length) {
    //  candidate = tmap.tilesets[j];
    //  if (candidate.firstgid <= tileId){
    //    j++;
    //  } else {
    //    break;
    //  }
    // }
    let set = (candidate.source).split(".")[0];

    // necessary stuff to find tile position in the img
    let cols = tsets[set]['json'].columns;
    let tHeight = tsets[set]['json'].tileheight; 
    let tWidth = tsets[set]['json'].tilewidth;

    let sx = tWidth * (tileId % cols);
    let sy = tHeight * Math.floor(tileId / cols);
    let dx = tWidth * (i % tmap.width);
    let dy = tHeight * Math.floor(i / tmap.width);

    // draw the tile where it should be
    if (tileId > 0){
      bgTiles.image(tsets[set].img, dx, dy, 32,32, sx, sy,32, 32);
    }
  } 

  // go through the object layer
  let px;
  let py;
  let d;
  let f;
  let obstacle;
  let button;
  for (var i = 0; i < tmap.layers[1].objects.length; i++){
    let obj = tmap.layers[1].objects[i];
    px = obj.x - canvas.width/2 + obj.width/2;
    py = obj.y - canvas.height/2 + obj.height/2;
    switch(obj.type) {
      case "playerStart":
        player.position.x = obj.x - canvas.width/2;
        player.position.y = obj.y - canvas.height/2;
        break;
      
      // create divs that display information
      case "about_s1":
        // collision
        obstacle = createSprite(px,py, obj.width, obj.height);
        obstacle.visible = false;
        obstacles.add(obstacle);

        // make the div
        d = createDiv('hi, this is an about page mock-up! <br/><br/> this is the main info section.'
                      + '<br/><br/> you are a floaty box thing. L/R to move, x to jump.'
                      + '<br/><br/> click or run into the buttons to change the page.');
        d.parent('container');
        d.size(obj.width, obj.height);
        d.position(obj.x, obj.y);
        d.style('text-align: center; border: 2px solid black; border-radius: 5px;');
        d.style('background: white');
        break;

      case "about_s2":
        // collision
        obstacle = createSprite(px,py, obj.width, obj.height);
        obstacle.visible = false;
        obstacles.add(obstacle);

        // make the div
        d = createDiv("and here's a normal sidebar type thing!");
        d.parent('container');
        d.size(obj.width, obj.height);
        d.position(obj.x, obj.y);
        d.style('text-align: center; border: 2px solid black; border-radius: 5px;');
        d.style('background: white');
        break;

      // create buttons
      // add to proper collision group
      case "donateButton":
        // collision
        button = createSprite(px,py, obj.width, obj.height);
        button.visible = false;
        button.id = "donate"
        buttons.add(button);

        // make the DOM button
        d = createButton('DONATE!');
        d.parent('container');
        f = resolveClick(button);
        d.mousePressed(f);
        d.size(obj.width, obj.height);
        d.position(obj.x, obj.y);
        d.style('align-items: center; justify-content: center; display: flex');
        break;
      
      case "projectButton":
        // collision
        button = createSprite(px,py, obj.width, obj.height);
        button.visible = false;
        button.id = "project";
        buttons.add(button);

        // make the DOM button
        d = createButton('PROJ!');
        d.parent('container');
        f = resolveClick(button);
        d.mousePressed(f);
        d.size(obj.width, obj.height);
        d.position(obj.x, obj.y);
        d.style('align-items: center; justify-content: center; display: flex');
        break;

      case "secretButton":
        // collision
        button = createSprite(px,py, obj.width, obj.height);
        button.visible = false;
        button.id = "secret";
        buttons.add(button);

        // make the DOM button
        d = createButton('???');
        d.parent('container');
        f = resolveClick(button);
        d.mousePressed(f);
        d.size(obj.width, obj.height);
        d.position(obj.x, obj.y);
        d.style('align-items: center; justify-content: center; display: flex');
        break;

      case "githubButton":
        // collision
        button = createSprite(px,py, obj.width, obj.height);
        button.visible = false;
        button.id = 'github';
        buttons.add(button);

        // make the DOM button
        d = createButton('GITHUB!');
        f = resolveClick(button);
        d.mousePressed(f);
        d.parent('container');
        d.size(obj.width, obj.height);
        d.position(obj.x, obj.y);
        d.style('align-items: center; justify-content: center; display: flex');
        break;

      // no type => a wall, for now
      default:
        px = obj.x - canvas.width/2 + obj.width/2;
        py = obj.y - canvas.height/2 + obj.height/2;
        obstacle = createSprite(px,py, obj.width, obj.height);
        // obstacle.visible = false;
        obstacles.add(obstacle);
        break;
    }
  } 
}

function draw() {
  background(0,0,0,0);

  if(keyDown(LEFT_ARROW)){
    player.velocity.x = -6.0;
  } else if (keyDown(RIGHT_ARROW)){
    player.velocity.x = 6.0;
  } else {
    player.velocity.x = 0;
  }
  if(keyWentDown('x')){
    player.velocity.y = JUMP;
  }

  player.velocity.y += GRAVITY;
  if(Math.abs(player.velocity.y) >= 10){
    player.velocity.y *= 0.95;
  }

  // scroll based on player position
  // if they're moving
  // else let the user scroll freely
  if (Math.abs(player.velocity.x) >= 0.05 || Math.abs(player.velocity.y) > GRAVITY * 2) {
    window.scrollBy(player.position.x, player.position.y);
  }

  player.collide(obstacles, resolvePlayerHit);
  player.collide(buttons, resolveButtonHit);

  // draw bg 
  // camera.off();
  // push();
  // textureMode(NORMAL);
  // texture(bg);

  // // Assuming img has 100 pixels width and height
  // beginShape();
  // vertex(-canvas.width/2, -canvas.height/2, 0, 0, 0);
  // vertex(canvas.width/2, -canvas.height/2, 0, 1, 0);
  // vertex(canvas.width/2, canvas.height/2, 0, 1, 1);
  // vertex(-canvas.width/2, canvas.height/2, 0, 0, 1);
  // endShape(CLOSE);
  // pop();

  // imageMode(CENTER);
  // image(bgTiles, 0, 0);

  drawSprites();
}

function clearLevel() {
  player.remove();
  obstacles.removeSprites();
  buttons.removeSprites();
  // clear the dom
  var div = document.getElementById('container');
  while(div.firstChild){
    div.removeChild(div.firstChild);
  }
}

var resolveClick = function(button) {
  return () => {
    resolveButtonHit(player, button);
  }
}

function resolvePlayerHit(player, obs){
  // if there's x overlap, set velocity.y = 0 for player
  if  ((player.position.x + player.width/2 - 2 >= obs.position.x - obs.width/2)
    && (player.position.x - player.width/2 + 2 <= obs.position.x + obs.width/2)
    && (player.velocity.y >= -1)) {
    player.velocity.y = 0;
  }
}

function resolveButtonHit(player, button){
  if (button.id == "github"){
    clearLevel();
    window.location = "https://www.github.com/garrison0";
  }
  if (button.id == "donate"){
    clearLevel();
    //loadLevel(button.id + "Level");
  }
  if (button.id == "secret"){
    clearLevel();
  }
  if (button.id == "project"){
    clearLevel();
  }
}