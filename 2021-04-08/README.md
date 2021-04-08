README.md

# How to implement Material UI Without installing as an npm package, this option is great for prototyping.

### 1. Step
In index.html file, add the script tag from unpkg:
<pre>
<script src="https://unpkg.com/@material-ui/core@latest/umd/material-ui.production.min.js"></script>
</pre>

### 2. Also link Roboto Font & Font Icons, Material-UI was designed with this.
```<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />```
```<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />```

### 3. Step
In the js file, add destructure the elements you want to use

### Example:
<pre>
const { Button } = window['MaterialUI'];
</pre>

### 4. Step
Use the elements and render

