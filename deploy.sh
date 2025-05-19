#!/bin/bash

# Culori pentru output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Verificare dacă scriptul rulează ca root
if [ "$EUID" -ne 0 ]; then 
    echo -e "${RED}Acest script trebuie rulat cu drepturi de administrator (sudo)${NC}"
    exit 1
fi

# Verificare dacă directorul există
if [ ! -d "/var/www/servicii-sf-sava" ]; then
    echo -e "${RED}Directorul /var/www/servicii-sf-sava nu există. Rulați mai întâi setup-server.sh${NC}"
    exit 1
fi

# Configurare Nginx
echo -e "${YELLOW}Configurare Nginx...${NC}"
read -p "Introduceți domeniul (ex: domeniul-dvs.ro): " DOMAIN

cat > /etc/nginx/sites-available/servicii-sf-sava << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:5173;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }

    location /api {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Activare configurare Nginx
ln -sf /etc/nginx/sites-available/servicii-sf-sava /etc/nginx/sites-enabled/
nginx -t && systemctl restart nginx

# Obținere certificat SSL
echo -e "${YELLOW}Obținere certificat SSL...${NC}"
certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN

# Copiere fișiere proiect
echo -e "${YELLOW}Copiere fișiere proiect...${NC}"
cp -r ./* /var/www/servicii-sf-sava/
cd /var/www/servicii-sf-sava

# Construire și pornire containere
echo -e "${YELLOW}Construire și pornire containere...${NC}"
docker-compose down
docker-compose up -d --build

# Verificare status
echo -e "${YELLOW}Verificare status...${NC}"
docker-compose ps

echo -e "${GREEN}Deployment-ul s-a finalizat cu succes!${NC}"
echo -e "${YELLOW}Verificați aplicația la: https://$DOMAIN${NC}" 