#! /usr/bin/env bash

# Install SSL cert for Ubuntu 16.10 / Nginx using certbot

sudo touch certbot.log

echo "Update apt repo..."
sudo apt-get update >> certbot.log
sudo apt-get install software-properties-common >> certbot.log
sudo add-apt-repository ppa:certbot/certbot >> certbot.log
sudo apt-get update >> certbot.log
echo "Installing certbot package."
sudo apt-get install python-certbot-nginx  >> certbot.log

echo "Install SSL cert and configuring nginx."
sudo service nginx stop # nginx must be turned off to install the cert
sudo certbot --nginx
sudo service nginx start

# Or only install the cert and configure by hand:
# sudo certbot --nginx ertonly

echo "Add the following to crontab to check for renewal (and renew when ready) daily:"
echo "0 0 * * * /usr/bin/certbot renew"
echo ""
echo "Note: crontab errors are stored in /var/log/syslog"
