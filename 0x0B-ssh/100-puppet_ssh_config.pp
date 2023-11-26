# configure the ssh config file
file_line { 'use the private key ~/.ssh/school':
    line    => 'Identityfile ~/.ss/ssh/school',
    path    => '/etc/ssh/ssh_config',
    replace => true,
}

file_line { 'authenicate without password':
    line    => 'PasswordAuthenication no',
    path    => '/etc/ssh/ssh_config',
    replace => true,
}