#!/bin/bash

# Culori pentru output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}Începe pregătirea serverului...${NC}"

# Verificare dacă scriptul rulează ca root
if [ "$EUID" -ne 0 ]; then 
    echo -e "${RED}Acest script trebuie rulat cu drepturi de administrator (sudo)${NC}"
    exit 1
fi

# Actualizare sistem
echo -e "${YELLOW}Actualizare sistem...${NC}"
apt update && apt upgrade -y

# Instalare dependențe
echo -e "${YELLOW}Instalare dependențe...${NC}"
apt install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common \
    git \
    nginx \
    ufw

# Instalare Docker
echo -e "${YELLOW}Instalare Docker...${NC}"
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
rm get-docker.sh

# Instalare Docker Compose
echo -e "${YELLOW}Instalare Docker Compose...${NC}"
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Instalare Certbot pentru SSL
echo -e "${YELLOW}Instalare Certbot...${NC}"
apt install -y certbot python3-certbot-nginx

# Configurare firewall
echo -e "${YELLOW}Configurare firewall...${NC}"
ufw allow ssh
ufw allow http
ufw allow https
ufw --force enable

# Creare director pentru aplicație
echo -e "${YELLOW}Creare director pentru aplicație...${NC}"
mkdir -p /var/www/servicii-sf-sava
chown -R $SUDO_USER:$SUDO_USER /var/www/servicii-sf-sava

# Creare director pentru backup-uri
echo -e "${YELLOW}Creare director pentru backup-uri...${NC}"
mkdir -p /var/backups/servicii-sf-sava
chown -R $SUDO_USER:$SUDO_USER /var/backups/servicii-sf-sava

# Creare script de backup
echo -e "${YELLOW}Creare script de backup...${NC}"
cat > /usr/local/bin/backup-servicii-sf-sava.sh << 'EOF'
#!/bin/bash
backup_dir="/var/backups/servicii-sf-sava"
mkdir -p $backup_dir
tar -czf $backup_dir/backup-$(date +%Y%m%d).tar.gz /var/www/servicii-sf-sava
find $backup_dir -type f -mtime +7 -delete
EOF

chmod +x /usr/local/bin/backup-servicii-sf-sava.sh

# Adăugare cron job pentru backup zilnic
echo -e "${YELLOW}Configurare backup automat...${NC}"
(crontab -l 2>/dev/null; echo "0 2 * * * /usr/local/bin/backup-servicii-sf-sava.sh") | crontab -

echo -e "${GREEN}Pregătirea serverului s-a finalizat cu succes!${NC}"
echo -e "${YELLOW}Pași următori:${NC}"
echo "1. Rulați scriptul de deployment"
echo "2. Configurați domeniul în Nginx"
echo "3. Obțineți certificat SSL"

docker-compose logs frontend 