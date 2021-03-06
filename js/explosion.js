// Sets the explosion functions when enemy gets shot
class Explosions {
  constructor(assetName) {
    this.count = 0;
    this.offSet = undefined;
    this.setOffSet(assetName);
  }

  setOffSet(assetName) {
    let asset = GameManager.assets[assetName];
    this.offSet = new Point((asset.width / 2) * -1, (asset.height / 2) * -1);
  }

  createExplosion(position) {
    let div = document.createElement("div");
    div.classList.add("explosion");
    let divId = "explosion_" + this.count;
    div.id = divId;
    console.log(position);
    div.style.left = position.x + this.offSet.x + "px";
    div.style.top = position.y + this.offSet.y + "px";
    $(GameSettings.gameAreaDiv).append(div);
    setTimeout(function () {
      $("#" + divId).remove();
    }, GameSettings.explosionTimeout);

    this.count++;
  }
}

// Initial code cited from: bluefeversoft, https://github.com/bluefeversoft/html_invaders
