from PIL import Image
import os

for image in os.listdir("img"):
    if not ("thumb" in image):
        fin = Image.open(os.path.join("img", image))
        width, height = fin.size
        if width > 1000:
            fin.thumbnail((width * 0.2, height * 0.2))
        else:
            fin.thumbnail((width, height))
        fin.save(os.path.join("img", "thumb_" + image))
