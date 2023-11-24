# Using Puppet, install flask from pip3
package { 'flask':
  ensure   => '2.2.2',
  provider => 'pip3',
}