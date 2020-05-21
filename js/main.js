// Resetting player function
function resetPlayer() {
    if (GameManager.player == undefined) {
        let asset = GameManager.assets["rick_spacecraft"];

        GameManager.player = new Player(
            GameSettings.playerDivName,
            new Point(GameSettings.playerStart.x, GameSettings.playerStart.y),
            asset
        );
        GameManager.player.addToBoard(true);
    }
    console.log("resetplayer() GameManager.player:" , GameManager.player);
    GameManager.player.reset();
}

// Image loading
function init() {
    console.log("Main Game init()");
    resetPlayer();
}

function processAsset(indexNum) {
    let img = new Image();
    let fileName = "assets/" + ImageFiles[indexNum] + ".png";
    img.src = fileName;
    img.onload = function () {
        GameManager.assets[ImageFiles[indexNum]] = {
            width: this.width,
            height: this.height,
            fileName: fileName
        };
        indexNum++;
        if (indexNum < ImageFiles.length) {
            processAsset(indexNum);
        } else {
            console.log("Assets Done:", GameManager.assets);
            init();
        }
    }
}

// Testing which key controls can be used
$(function () {
    processAsset(0);
    $(document).keydown(function (e) {
            switch (e.which) {
                case GameSettings.keyPress.up:
                    console.log("up");
                    break;
                case GameSettings.keyPress.down:
                    console.log("down");
                    break;
                case GameSettings.keyPress.left:
                    console.log("left");
                    break;
                case GameSettings.keyPress.right:
                    console.log("right");
                    break;
                case GameSettings.keyPress.space:
                    console.log("space");
                    break;
            }
        }
    );
});