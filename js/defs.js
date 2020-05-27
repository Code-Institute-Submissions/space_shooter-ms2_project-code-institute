// Image const list reference
const ImageFiles = [
  "rick_spacecraft",
  "bullets/pickledRick",
  "enemies/jerryHead",
];

// Way Points for the enemy movements & starting points
const WayPoints = {
  LEFTTORIGHTSHALLOW: [
    {
      rotation: 0,
      x: 60,
      y: -90,
      dir_x: 0,
      dir_y: 0,
    },
    {
      rotation: 0,
      x: 60,
      y: 128,
      dir_x: 0,
      dir_y: 1,
    },
    {
      rotation: 0,
      x: 810,
      y: 128,
      dir_x: 1,
      dir_y: 0,
    },
  ],
  STREAMFROMB180: [
    {
      rotation: 0,
      x: 180,
      y: 620,
      dir_x: 0,
      dir_y: 0,
    },
    {
      rotation: 0,
      x: 180,
      y: -90,
      dir_x: 0,
      dir_y: -1,
    },
  ],
};

let EnemySequences = [];

// Keypresses for the movement of the spaceship.
const GameSettings = {
  keyPress: {
    left: 37,
    right: 39,
    up: 38,
    down: 40,
    space: 32,
  },

  // Game Area starting point
  targetFPS: 1000 / 60,

  // Bullet spead
  bulletSpeed: 700 / 1000,
  bulletLife: 4000,
  bulletFireRate: 200,
  bulletTop: 10,

  gameAreaWidth: 790,
  gameAreaHeight: 576,
  gameAreaDiv: "#gameArea",

  playerDivName: "playerSprite",
  playerStart: {
    x: 360,
    y: 440,
  },

  // Number of lives the Player has at start
  playerStartLives: 3,
  playerState: {
    ok: 0,
    dead: 1,
    hitFlashing: 2,
  },

  // Pixel count for directional movement
  playerMoveStep: 8,
  enemyState: {
    ready: 1,
    dead: 0,
    movingToWaypoint: 2,
  },

  pressSpaceDelay: 3000,

  // Defining game start countdown and game over
  gamePhase: {
    readyToplay: 1,
    countdownToStart: 2,
    playing: 3,
    gameOver: 4,
  },

  // Countdown visualiser before starting the game
  countdownGap: 750,
  countDownValues: ["2", "1", "GO!"],
};

//  Game Manager
let GameManager = {
  assets: {},
  player: undefined,
  bullets: undefined,
  phase: GameSettings.gamePhase.gameOver,
  lastUpdated: Date.now(),
  elapsedTime: 0,
  fps: 0,
};
