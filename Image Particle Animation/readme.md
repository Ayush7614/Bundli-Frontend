#Particle JS animation for an image

Tech Stacks used:-
- HTML
- CSS
- Javascript

Used vanilla javascript to draw images into particles. For that your image must (100x100)cm image else rendering will be high and animation will be slow. Remove background of the image which can be done with any online free website. Convert that image to base64 using any free online website converter. Copy the base64 string and put in the code block
```
const png = new Image();
png.src = "data:image/png;base64,--paste the string"
```

#Output
Initially
![image](https://user-images.githubusercontent.com/92020810/165368668-82c25a55-ca99-4760-833a-40918dc18c26.png)
On mouse hover
![image](https://user-images.githubusercontent.com/92020810/165368831-204ac6c1-25c2-48e9-887b-25159a675c5b.png)
