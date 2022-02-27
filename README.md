<!-- This is not an auto genrated README.md, we will set up README.md and jsdoc/typedoc automation in the future. -->

# Table of Contents
* [Overview](#overview)
  * [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
  * [baseHandler](#basehandler)
  * [danbooru](#danbooru)
  * [e621](#e621)
  * [konachan](#konachan)
  * [rule34](#rule34)
  * [yandere](#yandere)
* [License](#license)
# Overview
culture-client is a tool for getting a random post from danbooru, e621, konachan, rule34 or yande.re in a simple json format, or their raw json format.

## Features
* Pull a random post from [danbooru.donmai.us](https://danbooru.donmai.us)
* Pull a random post from [e621.net](https://e621.net)
* Pull a random post from [konachan.com](https://konachan.com)
* Pull a random post from [rule34.xxx](https://rule34.xxx)
* Pull a random post from [yande.re](https://yande.re)

# Installation
```shell
# For installing the latest stable version
npm install culture-client@latest
# or
npm install culture-client

# For installing the latest in-developement version
npm install culture-client@dev
```
# Usage
## baseHandler
> This is an advanced feature and not reccomended for normal production use
```js
const { baseHandler } = require('culture-client');

//With JSON url
new baseHandler().get('https://jsonplaceholder.typicode.com/posts').then(data => console.log(data));
//With XML url
new baseHandler().get('https://www.w3schools.com/xml/note.xml', { XML: true }).then(data => console.log(data));
```
## danbooru
```js
const { danbooru } = require('culture-client');
new danbooru().post.then(post => console.log(post));
```
## e621
```js
const { e621 } = require('culture-client');
//Make sure to change the userAgent to match your details or e621.net may IP ban you from using their API.
new e621({ userAgent: 'MyProject/1.0 (by username on e621)' }).post.then(post => console.log(post));
```
## konachan
```js
const { konachan } = require('culture-client');
new konachan().post.then(post => console.log(post));
```
## rule34
```js
const { rule34 } = require('culture-client');
new rule34().post.then(post => console.log(post));
```
## yandere
```js
const { yandere } = require('culture-client');
new yandere().post.then(post => console.log(post));
```

# License
culture-client is licensed under the MIT license.  [MIT](https://github.com/shhh7612/culture-client/blob/main/LICENSE)