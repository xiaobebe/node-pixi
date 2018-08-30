const fs = require("fs");
const { PIXI, Canvas } = require("./lib/index.js");

const app = new PIXI.Application({
  backgroundColor: 0xff0000,
  forceCanvas: false
});

PIXI.loader.add(
  "che",
  "https://www.famousbirthdays.com/headshots/che-guevara-1.jpg"
);

let has_error = false;
PIXI.loader.onComplete.add(() => {
  let che = new PIXI.Sprite(PIXI.loader.resources.che.texture);

  // Setup the position of che
  che.x = app.renderer.width / 2;
  che.y = app.renderer.height / 2;

  // Rotate around the center
  che.anchor.x = 0.5;
  che.anchor.y = 0.5;

  // Add che to the scene we are building
  app.stage.addChild(che);

  app.render();

  app.view.toBuffer("jpg", 1).then(buffer => {
    fs.writeFileSync("che.jpg", buffer);

    process.exit(0);
  });
});

PIXI.loader.onError.add(err => {
  has_error = true;
});

PIXI.loader.load();
