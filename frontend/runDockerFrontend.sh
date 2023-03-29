docker build . -t frontend
docker run --rm --name frontend --network geocistern -p 3000:3000 frontend