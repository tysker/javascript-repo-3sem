# Deployment

## How To Deploy a SPA (Single Page Application) to NGINX

Here are the general steps you can follow:

- Build your JavaScript application: You can use tools like vite, webpack, gulp or grunt to build your application. We are going to use Vite.
- Inside your Vite project, run `npm run build` to build your application. This will create a `dist` directory in your project root.
- In your droplet on Digital Ocean, create a directory for your application. For example, you can create a directory called /var/www/frontend
- Copy the built files to a directory on your server with the following command: `sscp -r /dist/* user@your.server.ip.address:/var/www/frontend`
- Configure Nginx to serve your application: copy the below code snippet into our nginx configuration file at `/etc/nginx/sites-enabled/default`
- You should only have one `location /` block in your nginx configuration file. If you have more than one, you will get a 404 error when you try to access your application.
- Restart Nginx: After you've created your Nginx configuration file, you need to restart Nginx for the changes to take effect. You can do this by running `systemctl restart nginx.service`.
- You should now be able to access your application at your droplet's IP address.

```nginx
location / 
{
  root /var/www/frontend;
  try_files $uri /index.html;               
}


location /tomcat 
{
   include proxy_params;
   proxy_pass http://tomcat/;
}
```

Hint: 

- make a copy of the default configuration file for Nginx: `sudo cp /etc/nginx/sites-enabled/default /etc/nginx/sites-enabled/default.bak`. Just in case (-;

You can use this BASH script to automate the deployment process:

```bash
#!/usr/bin/env bash

# PROJECT_NAME="Name or your frontend project, for example movie --> folder you created under /var/www"
# DROPLET_URL="URL for your droplet"
echo -n "please enter the project name as it appears on the server in /var/www/"
read -r
PROJECT_NAME=$REPLY
echo -n "please enter the droplet url (e.g myserver.dk)"
read -r
DROPLET_URL=$REPLY

echo "##############################"
echo "Building the frontend project"
echo "##############################"
npm run build

echo "##############################"
echo "Deploying Frontend project..."
echo "##############################"

scp -r ./dist/* root@$DROPLET_URL:/var/www/$PROJECT_NAME
```

***

## Information

### scp

1. Open a terminal window on your local machine. 
2. Navigate to the directory where your JavaScript application files are located.

Use the following command to transfer the files to your server:

```bash
scp -r /path/to/your/application user@your.server.ip.address:/path/to/destination
```

Here's a breakdown of the command:

- -r specifies that the transfer should be recursive, so that all files and directories within /path/to/your/application are transferred. 
- /path/to/your/application is the directory on your local machine where your application files are located. 
- user is the username you use to log in to your server. 
- your.server.ip.address is the IP address of your server. 
- /path/to/destination is the directory on your server where you want to transfer the files.

1. Enter the password for the user account on your server when prompted. (If you're using a private key, you can skip this step.)
2. Wait for the transfer to complete. Once the transfer is finished, you should see a message indicating that the transfer was successful.

That's it! Your application files should now be on your Nginx server and ready to be served.

### In which directory in nginx should i place my application?

The location where you transfer your application files to on your Nginx server depends on your Nginx configuration. 
By default, Nginx serves files from the /var/www/html directory on Ubuntu and other Debian-based distributions.

However, you can configure Nginx to serve files from a different directory by changing the root directive in your Nginx configuration file. 
For example, if you want to serve your application files from the directory **/var/www/myapp**, you can set the root directive to **/var/www/myapp** in your Nginx configuration file.

Once you've transferred your application files to the appropriate directory on your server, you can configure Nginx to serve your application by creating a server block in your Nginx configuration file. 
In this server block, you'll specify the root directory where your application files are located and any additional configuration directives needed to serve your application.



