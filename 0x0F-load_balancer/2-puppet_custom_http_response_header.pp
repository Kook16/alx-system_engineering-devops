# automate the task of creating a custom HTTP header response using puppet

exec { 'apt-update':
    command => 'usr/bin/apt-get update'
}

package { 'NGINX':
    ensure  => 'installed',
    name    => 'nginx',
}

file_line { 'add line to the nginx conf file':
    path    => '/etc/nginx/nginx.conf',
    line    => '\tadd_header X-Served-By ${hostname};",
    after   => 'http {',
}

exec { 'restart nginx':
    command => 'usr/sbin/service nginx restart'
}