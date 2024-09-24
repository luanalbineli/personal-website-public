# Personal website

This is the code used by on my [Personal Website](https://luanalbineli.com). Feel free to fork, copy and use it.
Super fancy stack:
- [Node.js](https://nodejs.org/en)
- [Pug](https://pugjs.org)
- [Tailwind CSS](https://tailwindcss.com)

## Requirements
- Node.js (I'm using 22.3.0, but it should work with older versions).

## Running Locally

```sh
$ npm i
$ npm run dev
```
Your app should now be running on [localhost:8080](http://localhost:8080/).

## Updating the data
The data that feeds Pug is inside the `data` folder. There you can change:
- **Your basic info:** name, birth date, contact info.
- **Experience:** most recent ones, and past experiences.
- **Sections:** to add new sections (e.g. Education, Projects) just update this file, and make sure the new section id matches the `section-container(id)` parameter:
```javascript
{
    id: 'section_id',
    label: 'New section',
},
```
```pug
+section-container('section_id')
```

## Updating the theme
To change the colors, fonts and so on, you should change the `tailwind.config.js` file.

## Deploying
I deployed my website on DigitalOcean. I pay 4 bucks/month for a basic Droplet.
If you want to deploy your website there, just follow [this tutorial](https://www.linkedin.com/pulse/deploying-nodejs-app-digitalocean-server-hayk-simonyan/).
There is also a GHA workflow configured, to automatically redeploy the website there if choose to deploy it there.
