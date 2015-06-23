# AWS SQS NodeJS Example

Follow the instructions below on an EC2 Ubuntu instance. This tutorial will help you setup the AWS SDK using NodeJS. If you have any questions please contact me!

```
sudo su
apt-get update
apt-get upgrade -y
apt-get dist-upgrade -y
apt-get autoremove -y
apt-get install nodejs npm git -y
ln -s /usr/bin/nodejs /usr/bin/node
git clone https://github.com/andrewpuch/aws-sqs-node-js-examples.git
cd aws-sqs-node-js-examples
npm install
cp config-sample.json config.json
```

***NOTE: Here you will want to edit config.json with your AWS keys.***

```
node app.js
```
