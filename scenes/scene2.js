function scene2() {
    background("deepskyblue");
    gooseManager.render();
    cloud1.display(); 
    cloud1.move();
    cloud2.display();
    cloud2.move();
    cloud3.display();
    cloud3.move();
    
    // fill("white");
    // text("Scene 2: Entanglement Minigame", width/2, height/2);

    // Move entanglement minigame code here
    // if honk, move to scene 3 (measurement minigame)
    // if all geese recruited, move to scene 5 (win)
}