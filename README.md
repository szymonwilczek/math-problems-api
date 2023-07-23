# [Math Problems API](https://math-api-azure.vercel.app/)

A free REST API for random math excercises.

Built with Express.js and hosted on Vercel.

## Usage

### `GET` [https://math-api-azure.vercel.app/random-problem](https://math-api-azure.vercel.app/random-problem)

```js
{
  {"zadanie":{
// Description of problem
"description":"Punkt $S=(2,7)$ jest środkiem odcinka $AB$, w którym $A=(-1,3)$. Punkt $B$ ma współrzędne:",
// Answers (if ABCD-type of question)
"combinations":["A) $(5,11)$","B) $(\\frac{1}{2}, 2)$","C) $(-\\frac{3}{2}, -5)$","D) $(3, 11)$"],
// Answer to problem
"answer":"",
// photo (for example for geometric problems)
"photoUrl":null,
// I'm using them to sort problems on website by tags
"tags":null,
// Link to answer if answer is for example image or video
"answerUrl":null}}
}
```

or

### `GET` [https://math-api-azure.vercel.app/problems](https://math-api-azure.vercel.app/problems)

It is allowing you to get **all** of available problems.

or

### `GET` [https://math-api-azure.vercel.app/problems?types=type](https://math-api-azure.vercel.app/problems?types=type)

It is allowing you to get only the problem of specified type:
| type | description |
| --- | --- |
| `otwarte` | open problem (without ABCD-type of answers) |
| `zamkniete` | closed problem (ABCD-type of answers) |

or

### `GET` [https://math-api-azure.vercel.app/problems?count=count](https://math-api-azure.vercel.app/problems?count=count)

It is allowing you to get only the specified number of problems.

for example:
[https://math-api-azure.vercel.app/problems?count=5](https://math-api-azure.vercel.app/problems?count=5)
will return 5 problems.

You can also combine these parameters:

### `GET` [https://math-api-azure.vercel.app/problems?count=count&types=type](https://math-api-azure.vercel.app/problems?count=count&types=type)

For example:
[https://math-api-azure.vercel.app/problems?count=5&types=zamkniete](https://math-api-azure.vercel.app/problems?count=5&types=zamkniete)
will return 5 closed problems.

## Development

For self-hosting or modifying the API, you can clone this repository and run:

```shell
npm install
```

## License

In any form of usage, the API is licensed under MIT and the user is responsible for tagging the author (me) in the project.
