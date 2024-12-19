let enemyNode= document.querySelector(`#enemy`);
let dragonNode= document.querySelector(`#dragon`);
let healthNode= document.querySelector(`#health`);
let qut = `<img src="assets/dragon-fruit.png">`;
let health =50;
let count=0;

enemyNode.addEventListener(`click`, function () {
    count +=1
    if (count==1){
        health-=1;
    }
    else if (count==2){
        health-=3;
    }
    else if (count==3){
        health-=10;
        count=0;
    }
    healthNode.innerHTML = `Здоровье ` +  health;

    if (health > 0) {
        count==1
    } else  if (health<=0) {
        healthNode.innerHTML=`ПОБЕДА! ` ; 
        dragonNode.innerHTML = '<img src="assets/dragon-fruit.png"/>';
    }
});

