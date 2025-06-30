from PIL import Image
import os

for image in os.listdir("img"):
    if not ("thumb" in image):
        fin = Image.open(os.path.join("img", image))
        width, height = fin.size
        fin.thumbnail((width * 0.1, height * 0.1))
        fin.save(os.path.join("img", "thumb_" + image))
