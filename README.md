
This is a project full of sample secret keys which was made for testing SAST secret scanning tools. 


# Secret Keys
Filename                                           | Description
------------------------------------------------|--------------------------------------------------------------------------
.npmrc                                          | NPM registry authentication data
.dockercfg                                      | Docker registry authentication data
misc-keys/cert-key.pem                          | PEM Private key
misc-keys/putty-example.ppk                     | PuTTYgen private key
.ssh/id_rsa                                     | Private ssh key
.ssh/id_rsa.pub                                 | Public ssh key (might still not be ideal)
db/dump.sql                                     | MySQL dump w/ bcrypt hashes
cloud/.credentials                              | S3 Credentials file
cloud/.s3cfg                                    | S3 Credentials file
cloud/.tugboat                                  | Digital Ocean tugboat config
cloud/heroku.json                               | Heroku config
web/var/www/public_html/wp-config.php           | WordPress config file
web/var/www/public_html/.htpasswd               | htpasswd file
web/var/www/public_html/config.php              | PHP application config file
web/var/www/.env                                | Laravel .env (CI, various ruby based frameworks too)
.git-credentials                                | Git credentials store
.bashrc                                         | .bashrc file (contains several secrets as environment variables)
.bash_profile                                   | .bash_profile file (contains several secrets as environment variables)
db/robomongo.json                               | Mongolab credentials for robomongo
db/mongoid.yml                                  | Mongoid config file
web/js/salesforce.js                            | Salesforce credentials in a nodejs project
.netrc                                          | netrc  with SMTP credentials
hub                                             | Hub config that stores github tokens
filezilla/filezilla.xml                         | Filezilla config file
filezilla/recentservers.xml                     | Filezilla recent servers file
.docker/config.json                             | Docker registry authentication file
config                                          | IRC config
db/.pgpass                                      | PostgreSQL file which contains passwords
/proftpdpasswd                                  | Usernames and passwords of proftpd created by cpanel
ventrilo_srv.ini                                | Ventrilo configuration
etc/shadow                                      | Linux /etc/shadow file
db/dbeaver-data-sources.xml                     | DBeaver config containing MySQL Credentials
/.esmtprc                                       | esmtp configuration
.mozilla/firefox/logins.json                    | Firefox saved password collection (can be decrypted using keys4.db)
web/django/settings.py                          | Django setup.py, contains valid secret key
web/ruby/secrets.yml                            | Ruby on rails secrets.yml file (contains passwords)
ruby/config/master.key                          | Rails master key (used for decrypting `credentials.yml.enc` for Rails 5.2+)
deployment-config.json                          | Created by sftp-deployment for Atom, contains server details and credentials
.ftpconfig                                      | Created by remote-ssh for Atom, contains SFTP/SSH server details and credentials
.remote-sync.json                               | Created by remote-sync for Atom, contains FTP and/or SCP/SFTP/SSH server details and credentials
.vscode/sftp.json                               | Created by vscode-sftp for VSCode, contains SFTP/SSH server details and credentials
sftp-config.json                                | Created by SFTP for Sublime Text, contains FTP/FTPS or SFTP/SSH server details and credentials
.idea/WebServers.xml                            | Created by Jetbrains IDEs, contains webserver credentials with encoded passwords ([not encrypted!](https://intellij-support.jetbrains.com/hc/en-us/community/posts/207074025/comments/207034775))
high-entropy-misc.txt                           | Misc high entropy strings (HES1 is plain, HES2 is base64)
PII/Credit cards.txt                            | Visa/ MAsterCard/ American express/ Australian bank card/ Dinners Club data
DataDog-keys.txt                                | .env, YAML, Docker env, JavaScript (Winston logger), .tf provider block, Ruby (Capistrano)
JWT                                             | Atlassian JSON Web Token

