FROM php:8.1.7-fpm

COPY php.ini /usr/local/etc/php/

# Arguments defined in docker-compose.yml
# ARG user
# ARG uid

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Get latest Composer
COPY --from=composer:2.3.7 /usr/bin/composer /usr/bin/composer

RUN pecl install xdebug
RUN docker-php-ext-enable xdebug

# Create system user to run Composer and Artisan Commands
# RUN useradd -G www-data,root -u $uid -d /home/$user $user
# RUN mkdir -p /home/$user/.composer && \
#     chown -R $user:$user /home/$user

# Set working directory
WORKDIR /var/www

# USER $user

# FROM php:8.1.4-fpm
# COPY php.ini /usr/local/etc/php/

# RUN apt update -y
# RUN apt upgrade -y
# RUN apt install -y git
# RUN docker-php-ext-install pdo_mysql

# RUN pecl install xdebug
# RUN docker-php-ext-enable xdebug

# RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
# RUN php -r "if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
# RUN php composer-setup.php
# RUN php -r "unlink('composer-setup.php');"
# RUN mv composer.phar /usr/local/bin/composer

# ENV COMPOSER_ALLOW_SUPERUSER 1
# ENV COMPOSER_HOME /composer
# ENV PATH $PATH:/composer/vendor/bin
# ENV PHP_IDE_CONFIG="serverName=localhost"


# WORKDIR /var/www
