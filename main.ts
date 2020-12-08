while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() > 4) {
        light.setAll(light.rgb(255, 255, 255))
    } else if (input.lightLevel() > 0) {
        light.clear()
    }
    
}
