#!/bin/bash
cd /var/www/html
ls -la
cp -arp dist/. . && rm -rf dist
service httpd restart