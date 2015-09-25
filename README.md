# T's Shower template

This is my [Shower](http://shwr.me/) template, which is basically the combination of:

- Modified [shower-core](https://github.com/shower/core) 1.0.7
  - Changed the selector of the progress bar from `div.progress div` to `div.progress`
- Modified [shower-material](https://github.com/shower/material) theme
  - It's now a dark theme with more color customizability. 
  - It uses LESS in lieu of SCSS.
  - Changed the fonts to my favorites:
    - [Source Sans Pro](https://github.com/adobe-fonts/source-sans-pro) for English
    - [Source Code Pro](https://github.com/adobe-fonts/source-code-pro) for code
    - [Nanum Gothic](http://hangeul.naver.com/font) for Korean
    - [VL Gothic](http://vlgothic.dicey.org/) for Japanese

## How to open

Run an HTTP server and open the sample page at [http://localhost:8000/sample.html](http://localhost:8000/sample.html):

```bash
$ python2 -m SimpleHTTPServer
```

## How to customize

You can customize the colors and backgrounds by modifying `styles/_defaults.less`.

## How to print or to export to PDF

You can use your favorite modern browser. Read [the Shower wiki](https://github.com/shower/shower/wiki/Print)
for more information.

