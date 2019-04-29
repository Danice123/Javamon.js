#!/bin/bash
echo "Installing Apache"
sudo yum install httpd24 -y -q
sleep 1
sudo cp /vagrant/vagrant/web.conf /etc/httpd/conf.d/