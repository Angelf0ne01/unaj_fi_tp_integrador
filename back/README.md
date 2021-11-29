#build
docker build -t fi_api .
#levantar docekr
docker run -p 5000:5000 -v /home/fon/workspace/unaj/fi/tp_integrador/back:/usr/app fi_api