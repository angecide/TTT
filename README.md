
# Tic Tac Toe - negamax with alpha beta pruning
An implementation of [Tic Tac Toe] in React and an AI using [negamax with alpha beta pruning] in Javascript. [Try it here]. 

### Docker
To run this using docker, navigate the terminal to the root directory and build an image using the dockerfile and run it on a container.
```sh
cd TTT

docker build --pull --rm -f "Dockerfile" -t ttt:latest "."

docker run --rm -it  -p 3000:3000/tcp ttt:latest
```

[negamax with alpha beta pruning]: <https://en.wikipedia.org/wiki/Negamax#Negamax_with_alpha_beta_pruning>
[Tic Tac Toe]: <https://en.wikipedia.org/wiki/Tic-tac-toe>
[Try it here]: <https://angecide.github.io/TTT/>
