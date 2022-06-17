import express, { response } from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const users = [];
const tweets = [];

server.post("/sign-up", (request, response) => {
    users.push(request.body);
    response.send("OK");
});

server.post("/tweets", (request, response) => {
    tweets.push(request.body);
    response.send("OK");
});

server.get("/tweets", (request, response) => {
    let returnedTweets = [];
    if(tweets.length < 11) {
        tweets.map((index) => {
            let user = users.find(e => e.username === index.username)
            returnedTweets.push({
                username: `${user.username}`,
                avatar: `${user.avatar}`,
                tweet: `${index.tweet}`
            })
        })
    } else {
        for(let i = tweets.length - 10; i < tweets.length; i++) {
            let user = users.find(e => e.username === tweets[i].username)
            returnedTweets.push({
                username: `${user.username}`,
                avatar: `${user.avatar}`,
                tweet: `${tweets[i].tweet}`
            })
        }
    }
    returnedTweets = returnedTweets.reverse();
    response.send(returnedTweets);
});

server.listen(5000);