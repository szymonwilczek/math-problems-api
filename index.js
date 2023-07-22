import problems from "./problems.json";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  fetch(request) {
    try {
      const random_problem =
        problems[Math.floor(Math.random() * problems.length)];

      const url = new URL(request.url);
      switch (url.pathname) {
        default:
          return new Response(JSON.stringify({ zadanie: random_problem }), {
            headers: { ...headers, "content-type": "application/json" },
          });
      }
    } catch (error) {
      return new Response(error.toString(), {
        status: 500,
        headers: { ...headers },
      });
    }
  },
};
