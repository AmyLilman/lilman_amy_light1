// while True:
//     print("Light Level:" + input.light_level())
//     if input.light_level() < 7:
//         light.set_all(light.rgb(255, 255, 255))
//     else:
//         light.clear()
while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() < 4) {
        light.setAll(light.rgb(0, 0, 255))
    } else if (input.lightLevel() > 6 && 6 < 10) {
        light.setAll(light.rgb(255, 255, 0))
    } else {
        light.clear()
    }
    
}
