range-select
==========

Range select a group of items.

## Table of contents

- [Quick start](#quick-start)
- [What's included](#whats-included)
- [Example](#example)
- [Available options](#available-options)

## Quick start

Several quick start options are available:

- [Download the latest release](https://github.com/adrianmejias/range-select/archive/0.0.1.zip).
- Clone the repo: `git clone https://github.com/adrianmejias/range-select.git`.
- Install with [Bower](http://bower.io): `bower install range-select`.

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
range-select/
├── range-select.js
├── range-select.min.js
```

### Example
Example range select usage:

**Demo:** https://adrianmejias.com/range-select

```html
<!-- Include jQuery Beforehand -->
<script src="range-select.js"></script>
<link href="range-select-example.css" rel="stylesheet">
<ul data-toggle="range-select">
  <li class="range-item">Item 1</li>
  <li class="range-item">Item 2</li>
  <li class="range-item">Item 3</li>
  <li class="range-item">Item 4</li>
  <li class="range-item">Item 5</li>
</ul>
```

```javascript
$('[data-toggle=range-select]').rangeSelect();
```

### Available options

* ``selector``: **string** Element item that will be selectable.
* ``toggle``: **object|string** Create your own toggle function.
* ``activate``: **object|string** Create your own activate function.

```javascript
$('[data-toggle=range-select]').rangeSelect({
  selector: '.range-item',
  toggle: function(self, this, index, prev_index) {
    console.log('Item toggled.');
  },
  activate: function(self, this, index, prev_index){
    console.log('Item activated.');
  }
});
```
