# configure the ssh config file
exec {'echo "PasswordAuthenication no\nIdentityfile ~/.ssh/school" >> /etc/ssh/ssh_config':
    path    => '/bin/'
}