# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"
  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.network "forwarded_port", guest: 1313, host: 1313
  config.vm.network "private_network", ip: "192.168.34.11"
  config.vm.synced_folder ".", "/vagrant", type: "nfs", fsnotify: true, exclude: ["node_modules", "vendor"]
  config.vm.provider "virtualbox" do |vb|
    vb.name = "eplabor"
    vb.cpus = "2"
    vb.memory = "1024"
    vb.linked_clone = true
  end

  config.vm.provision "shell", path: "provision/bootstrap.sh"
  config.vm.provision "shell", path: "provision/apm.sh"
  config.vm.provision "shell", path: "provision/nvm.sh", privileged: false

  config.trigger.after :up do |t|
    t.info = "vagrant fsnotify"
    t.run = {inline: "vagrant fsnotify"}
  end

end
