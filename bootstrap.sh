#!/usr/bin/env bash
 
# Set start time so we know how long the bootstrap takes
T="$(date +%s)"
 
# Add Google public key to apt & add Google to the apt-get source list
wget -q -O - "https://dl-ssl.google.com/linux/linux_signing_key.pub" | sudo apt-key add -
 
echo 'deb http://dl.google.com/linux/chrome/deb/ stable main' >> /etc/apt/sources.list
 
echo 'Updating apt-get'
sudo apt-get update
sudo add-apt-repository -y ppa:openjdk-r/ppa
sudo apt-get update
sudo apt-get install -y openjdk-8-jre
echo 'Installing Java, Chrome and unzip'
sudo apt-get install -y google-chrome-stable unzip
sudo apt-get install -y lxde virtualbox-guest-dkms virtualbox-guest-utils virtualbox-guest-x11
 
echo 'Downloading and copying the ChromeDriver to /usr/local/bin'
cd /tmp
wget "http://chromedriver.storage.googleapis.com/2.20/chromedriver_linux64.zip"
wget "https://selenium-release.storage.googleapis.com/2.50/selenium-server-standalone-2.50.0.jar"
unzip chromedriver_linux64.zip
mv chromedriver /usr/local/bin
sudo chmod 755 /usr/local/bin/chromedriver
mv selenium-server-standalone-2.50.0.jar /usr/local/bin

# size of swapfile in megabytes
swapsize=1024
# does the swap file already exist?
grep -q "swapfile" /etc/fstab
# if not then create it
if [ $? -ne 0 ]; then
  echo 'swapfile not found. Adding swapfile.'
  fallocate -l ${swapsize}M /swapfile
  chmod 600 /swapfile
  mkswap /swapfile
  swapon /swapfile
  echo '/swapfile none swap defaults 0 0' >> /etc/fstab
else
  echo 'swapfile found. No changes made.'
fi

STARTUP_SCRIPT=$(cat <<EOF
#!/bin/sh
nohup java -jar /usr/local/bin/selenium-server-standalone-2.50.0.jar -Dwebdriver.chrome.driver=/usr/local/bin/chromedriver -browser browserName=chrome,maxInstances=2 &
EOF
)
echo "${STARTUP_SCRIPT}" > /etc/X11/Xsession.d/9999-common_start
chmod +x /etc/X11/Xsession.d/9999-common_start

# Print how long the bootstrap script took to run
T="$(($(date +%s)-T))"
echo "Time bootstrap took: ${T} seconds"
