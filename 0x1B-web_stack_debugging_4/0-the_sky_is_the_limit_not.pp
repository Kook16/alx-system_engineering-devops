#  fix the issues with Nginx under high load

exec { 'max out':
  command => 'sed -i "s/15/41048576/" /etc/default/nginx',
  path    => '/usr/local/bin/:/bin'
}

exec { 'nginx-restart':
  command => 'nginx restart',
  path    => '/etc/init.d/'
}
