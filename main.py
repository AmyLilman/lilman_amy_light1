while True:
    print("Light Level:" + input.light_level())
    if input.light_level() > 4:
        light.set_all(light.rgb(255, 255, 255))
    elif input.light_level() < 0:
        light.clear()