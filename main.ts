while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() > 2) {
        light.setAll(light.rgb(255, 255, 255))
    } else if (input.lightLevel() > 5) {
        light.clear()
    }
    
}
