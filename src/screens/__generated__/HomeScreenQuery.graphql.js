/**
 * @flow
 * @relayHash 250903dbedf724f57cbe2a92bf012d0d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HomeScreenQueryVariables = {|
  pokemonName?: ?string
|};
export type HomeScreenQueryResponse = {|
  +pokemon: ?{|
    +id: string,
    +number: ?string,
    +name: ?string,
    +attacks: ?{|
      +special: ?$ReadOnlyArray<?{|
        +name: ?string,
        +type: ?string,
        +damage: ?number,
      |}>
    |},
    +evolutions: ?$ReadOnlyArray<?{|
      +id: string,
      +number: ?string,
      +name: ?string,
      +weight: ?{|
        +minimum: ?string,
        +maximum: ?string,
      |},
      +attacks: ?{|
        +fast: ?$ReadOnlyArray<?{|
          +name: ?string,
          +type: ?string,
          +damage: ?number,
        |}>
      |},
    |}>,
  |}
|};
export type HomeScreenQuery = {|
  variables: HomeScreenQueryVariables,
  response: HomeScreenQueryResponse,
|};
*/


/*
query HomeScreenQuery(
  $pokemonName: String
) {
  pokemon(name: $pokemonName) {
    id
    number
    name
    attacks {
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "pokemonName",
    "type": "String",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "number",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = [
  (v3/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "type",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "damage",
    "args": null,
    "storageKey": null
  }
],
v5 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "pokemon",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "pokemonName"
      }
    ],
    "concreteType": "Pokemon",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "attacks",
        "storageKey": null,
        "args": null,
        "concreteType": "PokemonAttack",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "special",
            "storageKey": null,
            "args": null,
            "concreteType": "Attack",
            "plural": true,
            "selections": (v4/*: any*/)
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "evolutions",
        "storageKey": null,
        "args": null,
        "concreteType": "Pokemon",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "weight",
            "storageKey": null,
            "args": null,
            "concreteType": "PokemonDimension",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "minimum",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "maximum",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "attacks",
            "storageKey": null,
            "args": null,
            "concreteType": "PokemonAttack",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "fast",
                "storageKey": null,
                "args": null,
                "concreteType": "Attack",
                "plural": true,
                "selections": (v4/*: any*/)
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeScreenQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v5/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeScreenQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v5/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "HomeScreenQuery",
    "id": null,
    "text": "query HomeScreenQuery(\n  $pokemonName: String\n) {\n  pokemon(name: $pokemonName) {\n    id\n    number\n    name\n    attacks {\n      special {\n        name\n        type\n        damage\n      }\n    }\n    evolutions {\n      id\n      number\n      name\n      weight {\n        minimum\n        maximum\n      }\n      attacks {\n        fast {\n          name\n          type\n          damage\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8689b9052bf290d533160e63ff12931a';
module.exports = node;
