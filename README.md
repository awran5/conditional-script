# conditionalScript

conditionalScript is a simple native JavaScript ES6 script which lets you conditionally show/hide Form or any other elements by using custom HTML5 attributes. conditionalScript currently works with checkboxes, radios and select lists.

This script does not requires **jQuery** though, it should work on any modern browser, If you have an issue/idea, please feel free to fork the repo or send me a push request and i'll be more than happy to push it.

### [Demo & Examples](https://awran5.github.io/conditional-script/)

# Usage

1. Place the script before the closing Body tag for better page speed performance.
```html
<script src="js/conditional-script.min.js"></script>
```
2. Create 2 **divs** with the same class name, you can name them whatever you like.
```html
<div class="conditional-script">
    Main Markup here...
</div>
<div class="conditional-script">
    Conditional Markup here...
</div>
```
3. Add additional `data-conditional-name` and `data-conditional-value` attributes to your newly created (Conditional Markup). Please note that the `data-conditional-name attribute` will target the **Field Name** attribute, so you need to set the Name attribute to the field in order to work properly.
```html
<div class="conditional-script">
    <input type="..." name="exampleName" value="main field value">
</div>
<div class="conditional-script">
    Conditional Markup .. data-conditional-name="exampleName" data-conditional-value="main field value"
</div>
```
Also, `data-conditional-value` accepts more than 1 value but they must be separated by **comma** followed by **space** (", ") for example:
```php
data-conditional-value="value 1, value 3"
```

## You final markup should look like this:

```html
<!-- Main Div - Radio buttons Bootstrap markup example -->
<div class="form-group">
    <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadioName" id="exampleRadio1" value="option1">
        <label class="form-check-label" for="exampleRadio1">yes</label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadioName" id="exampleRadio2" value="option2">
        <label class="form-check-label" for="exampleRadio2">no</label>
    </div>
</div>
<!-- Conditional Div -->
<div class="form-group">
  <label for="formGroupExampleInput">Show on radio check with value Yes and hide if No</label>
  <input type="text" class="form-control" id="exampleRadio" data-conditional-name="exampleRadioName" data-conditional-value="option1">
</div>
```
