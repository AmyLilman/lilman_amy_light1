while True:
    print("Light Level:" + input.light_level())
    if input.light_level() < 5:
        light.set_all(light.rgb(255, 255, 255))
    else:
        light.clear()