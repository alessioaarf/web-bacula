# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.network "forwarded_port", guest: 3306, host: 3306
  config.vm.synced_folder ".", "/var/www/html/php"
  config.vm.network "private_network", ip: "192.168.1.10", virtualbox__intnet: "lanbacula"
  config.vm.provider "virtualbox" do |vb|
    vb.name = "LAMP_projeto"
  end
  config.vm.provision "shell", path: "script/lamp-install.sh"
end
