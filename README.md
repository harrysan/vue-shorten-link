# Vue Shorten Link

Using Vue JS

API short links using https://shrtlnk.dev/developer/documentation

API for Send Email using https://www.emailjs.com/ ( binding with mailtrap, need to register in Email Service first ! )

## Project setup

```
npm instal
```

### Create env file for environment variables

In the root folder create .env file and contain this (I prepared the file named .envexample too)

```
VUE_APP_API_KEY=<API KEY in https://shrtlnk.dev/developer/applications>

VUE_APP_SERVICEID=<SERVICE ID in EmailJS>

VUE_APP_TEMPLATEID=<TEMPLATE ID in EmailJS, need create a new one>

VUE_APP_PUBLICKEY=<PUBLIC KEY in EmailJS>

VUE_APP_PRIVATEKEY=<PRIVATE KEY in EmailJS>
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
