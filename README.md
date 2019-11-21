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

## Form validation flow

* if all fields are not empty and the email filed has data that corresponds with the regex expression applied, then the register button it will be unlocked and all the fields it will have the border color green, if not the button it will be disabled
* if we click on one filed, all empty fields it will have the border color red 
* after we sumbit, we will receive an alert that confirms that our form has been submitted successfully


### Small comments

1. In this HTML code

```
    // This div was added to solve an IE bug related to images, because if the img tag it will no be wrapped by a div the image it will shrink
    <div>
      <img class="item-top__icon" src="./img/icon-1.png" alt="Icon 1" />
    </div>
```
2. In this CSS code

```
    // In media query part I use for responsiveness display block due to also a small bug in IE which had some problem with display flex
    .u-row {
        display: flex;
        justify-content: space-between;
        @media only screen and (max-width: $bp-large) {
          display:block;
          max-width: 45rem;
          margin:0 auto;  

          // much easier approach if we ignore IE it will be only passing 
          flex-direction: column
  }
}
```