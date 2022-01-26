import { createClient } from "redis";
// import the http module
import http from "http";

const HTML_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Redis Proxy</title>
<style>
body {
    font-family: roboto, arial, sans-serif;
}
</style>
</head>
<body>
<h1>Redis Proxy</h1>
<p>
<form id="set" action="/set" method="post">
<input type="text" name="key" placeholder="key">
<input type="text" name="value" placeholder="value">
<input type="submit" value="Set">
</form>
</p>
<p>
<form id="get" action="/get" method="post">
<input type="text" name="key" placeholder="key">
<input type="submit" value="Get">
</form>
</p>
<p>
<form action="/del" method="post">
<input type="text" name="key" placeholder="key">
<input type="submit" value="Del">
</form>
</p>
</body>
<script>
// block the set form submission
document.getElementById("set").addEventListener("submit", (e) => {
    e.preventDefault();
    // send the form data to the server as JSON
    fetch("/set", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            key: e.target.elements.key.value,
            value: e.target.elements.value.value
        })
    }).then((response) => {
        // log the response status
        console.info(response.status);
        // clear the form values
    });

    // clear the form values

});

// block the get form submission
document.getElementById("get").addEventListener("submit", (e) => {
    e.preventDefault();
    let value = e.target.elements.key.value;
    console.info(value);
    fetch("/get", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            key: value
        })
    }).then((response) => {
        response.json().then((data) => {
            console.info(data);
        });
    });
});
</script>
</html>
`;

const HTML_404 = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Redis Proxy</title>
</head>
<body>
<h1>Redis Proxy</h1>
<p>404 - Not Found</p>
</body>
</html>
`;

(async () => {
    const client = createClient();
    client.on("error", (err) => console.log("Redis Client Error", err));
    await client.connect();

    // await logKeyCount()
    // logs the key count
    async function logKeyCount() {
        const keysCount = await client.dbSize();
        console.log("KEY COUNT", keysCount);
    }

    // handle the default route
    const server = http.createServer((req, res) => {
        if (req.url === "/") {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(HTML_TEMPLATE);
        }
        // if the url is /set and method is POST
        else if (req.url === "/set" && req.method === "POST") {
            // collect the chunks of the body and parse as JSON
            let body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });
            req.on("end", async () => {
                const { key, value } = JSON.parse(body);
                await client.set(key, value);
                // return JSON with { status: "ok" }
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ status: "ok" }));
            });
        }
        // if the url is /get and method is POST
        else if (req.url === "/get" && req.method === "POST") {
            // collect the chunks of the body and parse as JSON
            let body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });
            req.on("end", async () => {
                const { key } = JSON.parse(body);
                const value = await client.get(key);
                // return JSON with { status: "ok", value }
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ status: "ok", value }));
            });
        } else {
            console.log("404", req.method, req.url);
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(HTML_404);
        }
    });

    // start the server
    server.listen(8080, () => {
        console.log("Server started on port 3000");
    });
})();
