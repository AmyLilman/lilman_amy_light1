#while True:
#    print("Light Level:" + input.light_level())
#    if input.light_level() < 7:
#        light.set_all(light.rgb(255, 255, 255))
#    else:
#        light.clear()

while True:
    print("Light Level:" + input.light_level())
    if input.light_level() < 4:
        light.set_all(light.rgb(0, 0, 255))
    elif input.light_level() > 6:
        light.set_all(light.rgb(255, 255, 0))
    else:
        light.clear()