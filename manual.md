## App : Instruction Manual

This is a template setup for a MERN Stack application which uses express and mongodb in the server, and react and sass in the client.
Change **App** to your desired name of your application.

Running this application on a local machine is simple, but some setup is required before running.

> ```md
> __EMERGENCY - READ THE WHOLE DOCUMENT BEFORE DOING ANYTHING__
> ```

---

Version Control

Consider using `git` if you're a contributor
```bash
$ git clone https://github.com/chocosinensis/mern-template.git # initial cloning
$ git pull origin # pulling changes
$ git push origin # uploading changes to github
```

---

Install the dependencies
```bash
$ npm run prep:i
```
will install the dependencies for both the API and web client.

---

Create the `.env` file
```bash
$ cat ./config/.env/.env.example > ./config/.env/.env
$ echo "REACT_APP_URL={{api_url}}" > ./client/.env/.env.production.local
# use `type` instead of `cat` if using cmd
```
then replace the properties according to their correct values. Most likely, you might want to configure the database properties and keep the others as their defaults. If you're a contributor, contact with [`@ChocoSinensis`](https://twitter.com/chocosinensis) for Atlas properties.

---

### To run the Application

To run both the API and web client concurrently
```bash
$ npm run serve
```

To run the API
```bash
$ npm run serve:api
```

To run the web client
```bash
$ npm run serve:client
```

---

### Shorthand

Using unix or powershell and feeling lazy to do all this by yourself?
You can simply run this
```bash
$ npm run prep
```

> ```md
> __RECOMMENDED - IN TERMS OF COMMANDS FOR SETTING UP, ONLY RUN THIS IF POSSIBLE__
> ```

---

### Important if using `vscode`

Install the __`Prettier`__ extension and run this command
```bash
$ mkdir .vscode && echo "{ \"prettier.configPath\": \"config/.prettierrc\" }" > .vscode/settings.json
```
