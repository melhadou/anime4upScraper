# anime4upScraper

a node scarper to scrap anime and episodes from anime4up.com

# requirements:

- Node
- npm

### install required packages using npm:

```console

npm install

```

# How To Use anime4UpScraper:

## Validation:

- you should provide a valid link from anime4up.com , and check one of the anime Ep, for thos green Buttons:

   <img src="https://i.ibb.co/G5XdCNq/photo-2021-09-27-20-05-48.jpg" alt="photo-2021-09-27-20-05-48" border="0" />
   
  ## available Video Quality:
   - 360
   - 480
   - 720
   - 1080
   
  ## Scrape An Anime:
  
   ### command structure:
  
   ``` console
   node app.js ANIME_LINK VIDEO_QUALITY
   ```
  
   ### command Example:
   
   ``` console
   node app.js https://ww.anime4up.com/anime/boku-no-hero-academia-5th-season/ 1080
   ```
   
   ### Live Example:
  <img src="https://i.ibb.co/jzkrGRS/image.png" alt="image" border="0" />
  
 ## Scrap a Single Ep:
  ### command structure:
  
   ``` console
   node app.js EP_LINK VIDEO_QUALITY
   ```
  
   ### command Example:
   
   ``` console
  node app.js https://ww.anime4up.com/episode/boku-no-hero-academia-5th-season-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-1/ 720
   ```
   
   ### Live Example:
<img src="https://i.ibb.co/wYBJ3Qv/image.png" alt="image" border="0" />

# You Will Find A file With All The eps or one ep.
