# Blurry-Image-Loader
A React component to progressively load images. Inspired, galvanized, energized and influenced by Medium's image loading.
![alt tag](preview.gif)

Blurry Image Loader works by first loading a light-weight placeholder image, which is a tiny tiny version of the original (and potentially heavy-weight) image. While the main image is being downloaded by the browser, the placeholder is rendered, taking the same dimensions as the original image would, once downloaded.

Since the placeholder is a tiny version of the original, it is streched to fit the original dimensions, causing the placeholder to be blurry. When the original image is finally downloaded, it is rendered instead of the placeholder.
