#!/bin/sh

################
# EN UN DOCKER DE ANDAR POR CASA
################

echo Docker build...
#sudo docker build --rm --no-cache -t `grep name package.json |cut -d"\"" -f4` .
sudo docker build -t `grep name elements/package.json |cut -d"\"" -f4` .
echo Build success
 
echo Docker run...
#sudo docker run -p 9090:443 -it `grep name package.json |cut -d"\"" -f4` /bin/bash
sudo docker run -p 9090:443 --network="host" `grep name elements/package.json |cut -d"\"" -f4` 
echo Done!

#######################
# PARA IR A AWS
#######################

# ponerle un tag a la imagen
docker tag -t `grep name elements/package.json |cut -d"\"" -f4` registry-soe-tc.shared-nonprod.cloud.si.orange.es/openapi-test/`grep name elements/package.json |cut -d"\"" -f4`

# y ahora lo enviamos al repo
# hay que logarse en el registry de AWS
# > docker login registry-soe-tc.shared-nonprod.cloud.si.orange.es (LDAP)
docker push registry-soe-tc.shared-nonprod.cloud.si.orange.es/openapi-test/`grep name elements/package.json |cut -d"\"" -f4`

#

