
This is a repo full of secrets. This was made for testing SAST secret scanning tools. 


# Secret Keys
Filename                                           | Description
------------------------------------------------|--------------------------------------------------------------------------
.bash_history                                   | .bash_history file (contains secrets on bash commands)
.bash_profile                                   | .bash_profile file (contains several secrets as environment variables)
.bashrc                                         | .bashrc file (contains several secrets as environment variables)
.docker/config.json                             | Docker registry authentication file
.docker/.dockercfg                                      | Docker registry authentication data
.esmtprc                                       | esmtp configuration
.ftpconfig                                      | Created by remote-ssh for Atom, contains SFTP/SSH server details and credentials
.git-credentials                                | Git credentials store
.idea/WebServers.xml                         | Created by Jetbrains IDEs, contains webserver credentials with encoded passwords ([not encrypted!](https://intellij-support.jetbrains.com/hc/en-us/community/posts/207074025/comments/207034775))
.mozilla/firefox/logins.json                    | Firefox saved password collection (can be decrypted using keys4.db)
.netrc                                          | netrc  with SMTP credentials
.npmrc                                          | NPM registry authentication data
.remote-sync.json                               | Created by remote-sync for Atom, contains FTP and/or SCP/SFTP/SSH server details and credentials
.ssh/id_rsa                                     | Private ssh key
.ssh/id_rsa.pub                                 | Public ssh key (might still not be ideal)
.vscode/sftp.json                               | Created by vscode-sftp for VSCode, contains SFTP/SSH server details and credentials
cloud/.credentials                              | S3 Credentials file
cloud/heroku.json                               | Heroku config
cloud/.s3cfg                                    | S3 Credentials file
cloud/.tugboat                                  | Digital Ocean tugboat config
config                                          | IRC config
db/dbeaver-data-sources.xml                     | DBeaver config containing MySQL Credentials
db/dump.sql                                     | MySQL dump w/ bcrypt hashes
db/mongoid.yml                                  | Mongoid config file
db/.pgpass                                      | PostgreSQL file which contains passwords
db/robomongo.json                               | Mongolab credentials for robomongo
deployment-config.json                          | Created by sftp-deployment for Atom, contains server details and credentials
etc/shadow                                      | Linux /etc/shadow file
filezilla/filezilla.xml                         | Filezilla config file
filezilla/recentservers.xml                     | Filezilla recent servers file
high-entropy-misc.txt                          | Misc high entropy strings (HES1 is plain, HES2 is base64)
hub                                             | Hub config that stores github tokens
misc-keys/cert-key.pem                          | PEM Private key
misc-keys/putty-example.ppk                     | PuTTYgen private key
proftpdpasswd                                  | Usernames and passwords of proftpd created by cpanel
sftp-config.json                       | Created by SFTP for Sublime Text, contains FTP/FTPS or SFTP/SSH server details and credentials
ventrilo_srv.ini                                | Ventrilo configuration
web/django/settings.py                          | Django setup.py, contains valid secret key
web/js/api_generic.js                           | Simple API token on js file
web/js/basic.js                                 | Simple API call authorization type basic
web/js/bearer.js                                | Simple API call authorization type bearer
web/js/salesforce.js                            | Salesforce credentials in a nodejs project
web/ruby/secrets.yml                            | Ruby on rails secrets.yml file (contains passwords)
web/ruby/config/master.key                      | Rails master key (used for decrypting `credentials.yml.enc` for Rails 5.2+)
web/var/www/.env                                | Laravel .env (CI, various ruby based frameworks too)
web/var/www/public_html/config.php              | PHP application config file
web/var/www/public_html/.htpasswd               | htpasswd file
web/var/www/public_html/wp-config.php           | WordPress config file

# False Positive Test files
Filename                                           | Description
------------------------------------------------|--------------------------------------------------------------------------
False-Positives/commented.php                   | Commented keywords variables in PHP
False-Positives/commented.py                    | Commented keywords variables in Python
False-Positives/just-keywords.txt               | Big collection of keywords

