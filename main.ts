while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() > 0) {
        light.setAll(light.rgb(255, 255, 255))
    } else {
        light.clear()
    }
    
}
