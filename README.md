# AWSCloud
There is a project that apply the knowledge about HTML, CSS, JavaScript to build the interactive welcome page that show the prototype of the UX/UI project and deploy to the public cloud like Amazon web service (AWS) <br>
So, for the first step that you need to do is download the file <br>
--> you need to setup your AWS cloud such <br>
Security group --> Setup the HTTP with (IPv4 , 0.0.0.0/0), SSH with (IPv4 , 0.0.0.0/0), and HTTPS with (IPv4 , 0.0.0.0/0) <br>
KeyPair --> After you create the key pair, it will automatically saved to your folder <br>
Move to EC2 <br> 
Setup the instance with you name of the WebServer, selecting the security group with your previous security group setting. <br>
 PUTTy <br> 
you need to install and login with ec2-user@ [IP Address from instance]<br> 
Move to SSH --> AUTH --> and Browse the KeyPair file (.ppk) file that you saved in your folder<br>
open and follow the command below<br>
->sudo su<br>
->yum update -y<br>
->yum install -y httpd<br>
->cd /var/www/html<br>
->wget [source code from github/archive/refs/heads/main.zip]<br>
->unzip main.zip<br>
->cp -r [name of the repository]-main/* /var/www/html/<br>
->rm -rf [name of the repository]-main main.zip<br>
->systemctl enable httpd<br>
->systemctl start httpd<br>

After that you copied the IPv4 and paste the address to your browser
 
