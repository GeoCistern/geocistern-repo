docker build . -t backend
docker run --name backend --rm --network geocistern  -p 8000:8000 backend