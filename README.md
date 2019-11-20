# Getting Started

Commands

```
git clone 
```
```
npm install
```

If some error appear plese install manually
```
npm install -g live-server
```

## How to run the project

1.For running the project locally

```
npm start
```
2.For testin the generations of the bluid code you can run

```
npm run build
```

## The above command it will executes three scripts

* compile:sass - it will compile sass code into css (generates style.comp.css file)
* prefix:css - it will prefix the css code from style.comp.css (generates style.prefix.css file)
* compress:css - it will compress the code from style.prefix.css (generates the final file style.css)