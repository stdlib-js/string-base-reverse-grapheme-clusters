<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# reverseGraphemeClusters

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Reverse the grapheme clusters (i.e., user-perceived characters) of a string.

<section class="installation">

## Installation

```bash
npm install @stdlib/string-base-reverse-grapheme-clusters
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var reverseGraphemeClusters = require( '@stdlib/string-base-reverse-grapheme-clusters' );
```

#### reverseGraphemeClusters( str )

Reverses the grapheme clusters (i.e., user-perceived characters) of a string.

```javascript
var out = reverseGraphemeClusters( 'last man standing' );
// returns 'gnidnats nam tsal'

out = reverseGraphemeClusters( 'Hidden Treasures' );
// returns 'serusaerT neddiH'

out = reverseGraphemeClusters( 'foo bar' );
// returns 'rab oof'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reverseGraphemeClusters = require( '@stdlib/string-base-reverse-grapheme-clusters' );

var str = reverseGraphemeClusters( 'presidential election' );
// returns 'noitcele laitnediserp'

str = reverseGraphemeClusters( 'JavaScript' );
// returns 'tpircSavaJ'

str = reverseGraphemeClusters( 'The Last of the Mohicans' );
// returns 'snacihoM eht fo tsaL ehT'

str = reverseGraphemeClusters( '🐶🐮🐷🐰🐸' );
// returns '🐸🐰🐷🐮🐶'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string-base/reverse-code-points`][@stdlib/string/base/reverse-code-points]</span><span class="delimiter">: </span><span class="description">reverse the Unicode code points of a string.</span>
-   <span class="package-name">[`@stdlib/string-base/reverse`][@stdlib/string/base/reverse]</span><span class="delimiter">: </span><span class="description">reverse the UTF-16 code units of a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-base-reverse-grapheme-clusters.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-base-reverse-grapheme-clusters

[test-image]: https://github.com/stdlib-js/string-base-reverse-grapheme-clusters/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-base-reverse-grapheme-clusters/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-base-reverse-grapheme-clusters/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-base-reverse-grapheme-clusters?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-base-reverse-grapheme-clusters.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-base-reverse-grapheme-clusters/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-base-reverse-grapheme-clusters/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-base-reverse-grapheme-clusters/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-base-reverse-grapheme-clusters/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-base-reverse-grapheme-clusters/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-base-reverse-grapheme-clusters/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-base-reverse-grapheme-clusters/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-base-reverse-grapheme-clusters/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-base-reverse-grapheme-clusters/main/LICENSE

<!-- <related-links> -->

[@stdlib/string/base/reverse-code-points]: https://github.com/stdlib-js/string-base-reverse-code-points

[@stdlib/string/base/reverse]: https://github.com/stdlib-js/string-base-reverse

<!-- </related-links> -->

</section>

<!-- /.links -->
