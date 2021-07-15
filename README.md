# Nested Groupby

***

Nested Groupby is a node module to group objects in an array similar to [Lodash's groupBy](https://lodash.com/docs/4.17.15#groupBy)
method, but to group the objects by more than one key.

## Examples

***

See this [Codepen](https://codepen.io/mhellams/pen/NWNGQZz) for demo.

```js

        import nestedGroupby from 'nested-groupby';
        // For commonjs
        // const nestedGroupby = require('nested-groupby');

        const data = [
          { type: 'apple', color: 'green', quantity: 1000 },
          { type: 'apple', color: 'red', quantity: 2000 },
          { type: 'grape', color: 'green', quantity: 1000 },
          { type: 'grape', color: 'red', quantity: 4000 },
        ];

        nestedGroupby(data, ['type', 'color']);

        // output will be the following
        // {
        //   apple: {
        //     green: [ { type: 'apple', color: 'green', quantity: 1000 } ],
        //     red: [ { type: 'apple', color: 'red', quantity: 2000 } ]
        //   },
        //   grape: {
        //     green: [ { type: 'grape', color: 'green', quantity: 1000 } ],
        //     red: [ { type: 'grape', color: 'red', quantity: 4000 } ]
        //   }
        // }

```
