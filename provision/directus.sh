#!/bin/bash

function download_latest_directus() {
<<<<<<< HEAD
=======
    rm -rf directus
>>>>>>> test
    curl -s https://api.github.com/repos/directus/directus/releases/latest \
    | grep tarball_url \
    | cut -d '"' -f 4 \
    | xargs -n 1 curl -sL \
<<<<<<< HEAD
    | tar zxf - \
    && mv directus-* directus
}

download_latest_directus()
=======
    | tar zxf - 
    mv directus-* /vagrant/directus
}

download_latest_directus

rm /vagrant/directus/.gitignore
git stash && git checkout -- ./
cp /vagrant/provision/directus-config-eplabor.php /vagrant/directus/config/eplabor.php
chmod -R 777 /vagrant/directus/logs
>>>>>>> test
