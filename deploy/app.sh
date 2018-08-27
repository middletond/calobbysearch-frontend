#!/usr/bin/env bash

# Set up nodejs environment for react app deployment.

SITE_ROOT="$( cd "$( dirname "${BASH_SOURCE[1]}" )" && pwd )"

NGINX_CONF_SOURCE=$SITE_ROOT"/deploy/nginx.conf"
NGINX_CONF_DEST="/etc/nginx/sites-enabled/default"
NODE_PPA_SCRIPT="nodesource_setup.sh"

echo "Setting up app with root $SITE_ROOT"
touch setup.log

echo "Updating package manager."
sudo apt-get update >> setup.log

echo "Installing necessary deps for node and npm."
sudo apt-get install build-essential >> setup.log

echo "Adding nodejs PPA so we can get latest stable version."
curl -sL https://deb.nodesource.com/setup_8.x -o $NODE_PPA_SCRIPT >> setup.log

echo "Installing nodejs and npm."
sudo apt-get install -y nodejs >> setup.log
sudo rm $NODE_PPA_SCRIPT  >> setup.log

echo "Installing app npm modules."
npm install

echo "Installing and configuring nginx."
apt-get install -y nginx
sudo apt-get install -y nginx >> setup.log
echo "Linking $NGINX_CONF_SOURCE to $NGINX_CONF_DEST"
sudo rm $NGINX_CONF_DEST
sudo ln -s $NGINX_CONF_SOURCE $NGINX_CONF_DEST >> setup.log
echo "Restarting server."
sudo service nginx restart

echo "Tweaking .bashrc for easier ssh."
echo "cd $SITE_ROOT" >> ~/.bashrc

echo "Building the public site."
npm run build

echo "Done. App is set up and running."
