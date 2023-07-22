# [Math Problems API](https://math-api-azure.vercel.app/)

A free REST API for random math excercises.

Built Express.js and hosted on Vercel.

## Usage

### `GET` [https://math-api-azure.vercel.app/random-problem](https://math-api-azure.vercel.app/random-problem)

```json
{
  {"zadanie":{"description":"Punkt $S=(2,7)$ jest środkiem odcinka $AB$, w którym $A=(-1,3)$. Punkt $B$ ma współrzędne:","combinations":["A) $(5,11)$","B) $(\\frac{1}{2}, 2)$","C) $(-\\frac{3}{2}, -5)$","D) $(3, 11)$"],"answer":"","photoUrl":null,"tags":null,"answerUrl":null}}
}
```

or

### `GET` [https://math-api-azure.vercel.app/problems](https://math-api-azure.vercel.app/problems)

It is allowing you to get **all** of available problems.

## Development

For self-hosting or modifying the API, you can clone this repository and run:

```shell
npm install
```

## License

In any form of usage, the API is licensed under MIT and the user is responsible for tagging the author (me) in the project.
