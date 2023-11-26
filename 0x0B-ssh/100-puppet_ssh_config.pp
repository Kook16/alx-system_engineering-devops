# configure the ssh config file
include stdlib

file_line { 'use the private key ~/.ssh/school':
    ensure  => present,
    line    => '    Identityfile ~/.ssh/school',
    path    => '/etc/ssh/ssh_config',
    replace => true,
}

file_line { 'authenicate without password':
    ensure  => present,
    line    => '    PasswordAuthentication no',
    path    => '/etc/ssh/ssh_config',
    replace => true,
}