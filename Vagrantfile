Vagrant.configure("2") do |config|
  config.vm.box = "mvbcoding/awslinux"
  config.vm.provision "shell", path: "vagrant/install.sh", env: { "ENV_TYPE" => ENV['ENV_TYPE'] }
  config.vm.provision "shell", path: "vagrant/start.sh", run: "always", env: { "ENV_TYPE" => ENV['ENV_TYPE'] }
  config.vm.network "forwarded_port", guest: 80, host: 8080
end