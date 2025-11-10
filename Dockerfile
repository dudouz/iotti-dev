FROM php:7.4-fpm

# Install required PHP extensions
RUN apt-get update && apt-get install -y \
    libcurl4-openssl-dev \
    && docker-php-ext-install curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /var/www

# Copy the built site and config
COPY out/ /var/www/html/
COPY config.php /var/www/config.php

# Set permissions
RUN chown -R www-data:www-data /var/www

EXPOSE 9000
