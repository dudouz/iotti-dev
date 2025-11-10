# Deployment Guide

This is a static Next.js site that uses PHP for the contact form backend (since it's served by nginx on a VPS).

## Requirements

- nginx
- PHP 7.4+ with the following extensions:
  - php-fpm
  - php-curl
  - php-json

## Configuration Setup

### Server-Side Configuration (PHP)

The contact form uses a configuration file to store sensitive data. This is the **recommended approach** as it keeps credentials outside the web root.

#### Step 1: Create the Configuration File

1. Copy the sample config file:
   ```bash
   cp config.sample.php config.php
   ```

2. Edit `config.php` and add your Resend API key:
   ```php
   <?php
   return [
       'resend_api_key' => 're_your_actual_api_key_here',
       'contact_email' => 'your-email@example.com',
   ];
   ```

3. **IMPORTANT**: Place `config.php` one level ABOVE your web root for security:
   ```
   /var/www/
   ├── config.php          <- Config file (outside web root)
   └── html/               <- Web root (public directory)
       ├── index.html
       └── api/
           └── contact.php
   ```

4. Set proper permissions:
   ```bash
   chmod 600 /var/www/config.php
   chown www-data:www-data /var/www/config.php
   ```

#### File Structure on Server

```
/var/www/
├── config.php                    # Configuration file (OUTSIDE web root)
└── html/                         # Your web root (nginx document root)
    ├── index.html
    ├── _next/
    └── api/
        └── contact.php           # Loads config from ../../config.php
```

The PHP script at `public/api/contact.php` will automatically look for `config.php` two directories up (`../../config.php`).

### Client-Side Configuration (Next.js Build)

For the Next.js build to connect to your Strapi instance, create a `.env.local` file:

```bash
NEXT_PUBLIC_STRAPI_URL=http://127.0.0.1:1337
```

## Local Testing with Docker (Recommended)

The easiest way to test locally is using Docker, which simulates the production environment with nginx and PHP 7.4.

### Prerequisites

- Docker and Docker Compose installed
- Resend API key in `config.php`

### Quick Start

1. **Build the Next.js site**:
```bash
pnpm build
```

2. **Start the Docker containers**:
```bash
docker-compose up
```

3. **Open your browser**:
```
http://localhost:8080
```

4. **Stop the containers**:
```bash
docker-compose down
```

### What's Running

- **nginx**: Serves the static files on port 8080
- **PHP 7.4-FPM**: Handles the contact form PHP endpoint
- Both containers share the `out/` directory and `config.php`

### Rebuilding

If you make changes to the site:

```bash
# Rebuild Next.js
pnpm build

# Restart containers (Docker Compose automatically picks up changes)
docker-compose restart
```

If you modify the Dockerfile:

```bash
docker-compose up --build
```

---

## Local Testing on Mac (Without Docker)

You can test the contact form locally before deploying:

### Step 1: Check PHP Installation

macOS comes with PHP pre-installed. Check your version:

```bash
php -v
```

If you need to install/update PHP:

```bash
brew install php
```

### Step 2: Create Local Config File

1. Create `config.php` in the project root (same level as `public/`):

```bash
cp config.sample.php config.php
```

2. Edit `config.php` and add your Resend API key:

```php
<?php
return [
    'resend_api_key' => 're_your_api_key_here',
    'contact_email' => 'your-email@example.com',
];
```

### Step 3: Build the Next.js Site

```bash
pnpm build
```

### Step 4: Start PHP Development Server

In the `out` directory (or wherever Next.js outputs the build):

```bash
# If using static export (out directory)
cd out
php -S localhost:8000

# If not using static export, serve from .next
cd .next
php -S localhost:8000
```

**Note**: For the PHP script to find `config.php`, make sure your directory structure is:

```
/your-project/
├── config.php          # Your config file
├── out/                # OR .next/ (build output)
│   └── api/
│       └── contact.php # This will look for ../../config.php
```

### Step 5: Test the Contact Form

1. Open your browser to `http://localhost:8000`
2. Fill out the contact form
3. Check the browser console and network tab for the request
4. You should receive an email at the configured address

### Step 6: Test the API Endpoint Directly

You can also test the PHP endpoint directly with curl:

```bash
curl -X POST http://localhost:8000/api/contact.php \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message from local dev"
  }'
```

Expected success response:
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

If you get an error about config file not found, adjust the path in `contact.php`:

```php
// Try different paths based on your setup
$configPath = __DIR__ . '/../../config.php';  // Default
// OR
$configPath = __DIR__ . '/../../../config.php';
// OR
$configPath = $_SERVER['DOCUMENT_ROOT'] . '/../config.php';
```

## Build and Deploy to VPS

1. Install dependencies:
```bash
pnpm install
```

2. Build the static site:
```bash
pnpm build
```

3. The static files will be in the `out` directory (if using static export) or `.next` directory.

4. Copy the built files to your nginx document root:
```bash
rsync -avz --delete out/ user@your-vps:/var/www/html/
# or if using .next
rsync -avz --delete .next/ user@your-vps:/var/www/html/
```

5. Ensure the PHP file has the correct permissions:
```bash
chmod 644 /var/www/html/api/contact.php
```

## nginx Configuration

Example nginx configuration for serving the static site with PHP support:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/html;
    index index.html;

    # Handle PHP files
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    # Handle Next.js static files
    location /_next/static/ {
        alias /var/www/html/_next/static/;
        expires 1y;
        access_log off;
    }

    # Try files first, then fall back to index.html
    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }
}
```

## Testing the Contact Form

After deployment, you can test the contact form by:

1. Visiting your site and filling out the contact form
2. Or using curl:

```bash
curl -X POST https://yourdomain.com/api/contact.php \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

Expected response on success:
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

## Troubleshooting

### Contact form not working

1. Check PHP error logs:
```bash
tail -f /var/log/php8.x-fpm.log
```

2. Check nginx error logs:
```bash
tail -f /var/log/nginx/error.log
```

3. Verify PHP is working:
```bash
php -v
```

4. Test the PHP endpoint directly:
```bash
curl -X POST http://localhost/api/contact.php \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"test"}'
```

5. Verify environment variable is set in PHP:
Create a test file `phpinfo.php`:
```php
<?php
phpinfo();
?>
```

Look for the RESEND_API_KEY in the Environment section.

### CORS issues

If you get CORS errors, verify the PHP file has the correct CORS headers at the top:
```php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
```
