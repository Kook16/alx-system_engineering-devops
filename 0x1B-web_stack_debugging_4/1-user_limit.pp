# Change the OS configuration so that it is possible to login with 
# the holberton user and open a file without any error message.

exec {'soft user limit':
    command => "sudo sed -i 's/nofile 4/nofile 4096/' /etc/security/limits.conf",
    path    => '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin'
}

exec {'hard limit':
    command => "sudo sed -i 's/nofile 5/nofile 10000/' /etc/security/limits.conf",
    path    => '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin'
}