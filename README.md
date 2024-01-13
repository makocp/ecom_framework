## Description
The aim of this project, is to build an e-commerce application with a functional payment system. The focus is on the core functionalities (order process incl. payment). After this is done, additional functionalities like cart, better UI design, detailed product view, etc. can be implemented.

My personal motivation here is to learn about React Native, TypeScript and also dive deeper into e-commerce.

Also, this app can be used as "framework" for an e-commerce app. The base is already here, just a few configurations like product import, adaption of design, etc. have to be done.

## Developers
mako.codeproducer@gmail.com

Please contact me, if you have any requests or questions.

## Setup
[Setting up the Environment Setup](https://reactnative.dev/docs/environment-setup)

After the setup is done, you can start the app via executing the command in the project folder "npm run ios" for iOS or "npm run android" for Android.

## Functionalities
// TODO: Add Screenshots of finished App.

## Learnings
### Expo vs. RN CLI
I decided to use React Native CLI for this project, because it has a bit more of a steeper learning curve.
Expo on the other hand is easier to setup.

### Fixing "rnsscreen was not found in the uimanager"
Executing the following commands worked for me -> [See Stackoverflow answer](https://stackoverflow.com/a/69740887)
: \
`npm i react-native-screens` \
`npx pod-install`

### Adding Icons to iOS
- `npm install react-native-vector-icons --save`
- [Do Steps 1-5](https://medium.com/@vimniky/how-to-use-vector-icons-in-your-react-native-project-8212ac6a8f06)
- Create the `react-native.config.js` file -> see [official documentation](https://github.com/oblador/react-native-vector-icons?tab=readme-ov-file#ios-setup)

### Fixing Minimum Deployment Target Error while installing Stripe SDK
- Go to ios/Podfile and change min_ios_version_supported to 13.0 -> [see link](https://github.com/stripe/stripe-react-native/issues/1280#issuecomment-1496494805)

### Client- and Serverside
It's important to separate the project structure into frontend and backend. I realized this, when I wanted to implement the logic for the stripe API. One example why it is necessary is the security aspect of an ecommerce app, which can be stored on a backend server, which is hosted on the internet. The client (mobile app) can then access via internet the server, which communicates with Stripe.

Here the payment process ([*click for source*](https://www.youtube.com/live/50bIefoMo3c?si=1kfK4tWuPRgNkbWF&t=356)): 
![payment](media/paymentprocess.png)

Setup Server:
- Create Backend Directory
- Create server.ts
- `npm init -y`
- `npm i express`
- `npm i nodemon -D`
- `npm install ts-node`

### Change iOS Emulator Record Screen Shortcut
- CMD+R is also the shortcut for reloading the React Native App -> [See answer](https://stackoverflow.com/a/68164574)

### Test API with CURL
curl -X POST -H "Content-Type: application/json" -d "{\"amount\":17950}" http://localhost:4242/payments/intents
OR: Use Postman.

## Setup CI/CD Workflow on GCloud for Backend
- [Tutorial: CI/CD for Node.js Application using Google Cloud](https://psspavan96.medium.com/ci-cd-for-node-js-application-using-google-cloud-part-1-5f7466df913d)

![CICD_Workflow_Image](media/CICD.png)

For Step 2, I created the VM instance, NOT with the "gcloud" command, but directly in the Web GCloud Console.

For Step 5a - 5e, use these commands to install Jenkins (see reference below):

- `sudo apt update`

- `sudo apt install openjdk-11-jre -y`

- `curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
    /usr/share/keyrings/jenkins-keyring.asc > /dev/null`

- `echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
    https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
    /etc/apt/sources.list.d/jenkins.list > /dev/null`

- `sudo apt-get update`
- `sudo apt-get install jenkins -y`

For Step 7c - 7e, use these commands (see reference below):

Add Docker's official GPG key:

- `sudo apt-get update`
- `sudo apt-get install ca-certificates curl gnupg` 
- `sudo install -m 0755 -d /etc/apt/keyrings`
- `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg`
- `sudo chmod a+r /etc/apt/keyrings/docker.gpg`

Add the repository to Apt sources:
- `echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`
- `sudo apt-get update`

For Step 9, I created the Cluster via GCloud Console, see reference below.

#### Notes
- Retrieve GCloud Jenkins Initial Pw: `cat /var/lib/jenkins/secrets/initialAdminPassword`
- ERR_TIMED_OUT Fix: I got this error, when I wanted to connect to the Jenkins server via external IP:8080. Important: **connect via http://** and NOT https://
- Jenkinsfile: In this case, I decided to create a Jenkinsfile directly in the Repo. You could write the script also directly in Jenkins, but for me it's more convenient to have a separate File in the Repo for the script.
- Fix "Failed to connect to repository" error in Jenkins: You need to connect your Github with Jenkins via a personal access token, see tutorial below. 

#### Further Information, References
- [Setup and Install Jenkins on GCP VM](https://blog.kubekode.org/setup-and-install-jenkins-on-gcp-vm)
- [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- [Difference Jenkins/Github Actions](https://www.youtube.com/watch?v=VUspj9XPRBA)
- [Setup Kubernetes Cluster via GCloud Console](https://www.youtube.com/watch?v=p2LyoePiBo8)
- [Fix External IP Adress of GCloud Instance](https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address#console)
- [Add SSH Key to Jenkins for Github Private Repo](https://shreyakupadhyay.medium.com/integrate-jenkins-with-github-private-repo-8fb335494f7e)
- [Build Docker Image for NodeJS App / Jenkins](https://www.youtube.com/watch?v=Yo2yYxdBbfg)
- [How To Add GitHub Credentials In Jenkins](https://www.youtube.com/watch?v=fdkFrE09610)



## Commands
Git: \
Reset last commit: `git reset --soft HEAD~1` 

VS Code (Mac):\
Duplicate line: SHIFT+OPTION+ARROWDOWN \
Reformat Code: SHIFT+OPTION+F

npm: \
Start iOS App: `npm run ios` \
Start Android App: `npm run android`

Xcode: \
Clean Build: SHIFT+COMMAND+K

Extentions VS Code:\
[React Code Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## Sources/References
[React Native Tutorial](https://www.youtube.com/watch?v=w5IYCoTk4Bs&t=2859s) \
[React Native Tutorial 2](https://www.youtube.com/watch?v=qcN5B44cMHQ)

[Icon Library](https://oblador.github.io/react-native-vector-icons/)

[Setup Stripe](https://stripe.com/docs/payments/accept-a-payment)

[Project Structure Template](https://stackoverflow.com/a/51128385)

[Setup Express Server/Backend](https://www.youtube.com/watch?v=w3vs4a03y3I)