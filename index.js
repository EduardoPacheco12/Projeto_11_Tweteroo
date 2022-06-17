import express, { response } from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const users = [];
const tweets = [];

server.post("/sign-up", (request, response) => {
    users.push(request.body);
    console.log(users);
    response.send("OK");
});

server.post("/tweets", (request, response) => {
    const tweetUser = {
        username: `${request.headers.user}`,
        tweet: `${request.body.tweet}`
    }
    tweets.push(tweetUser);
    console.log(tweets);
    response.send("OK");
});

server.get("/tweets", (request, response) => {
    const tweetsExemplo = [];
    response.send(tweetsExemplo);
});

server.listen(5000);