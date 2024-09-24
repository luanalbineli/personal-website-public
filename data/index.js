const { experienceList, pastExperienceList } = require('./experiences'),
    sections = require('./sections');

module.exports = {
    head: {
        title: 'Here is your head title',
        description: 'Here goes your page description',
    },
    profile: {
        name: 'Your name',
        birthdayDate: new Date(1987, 7, 28),
        location: 'Your location',
    },
    about: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a placerat dui. Maecenas nec elit blandit, dictum magna lacinia, vehicula quam. Suspendisse ornare, neque at vestibulum consectetur, nibh sem ultrices est, sed auctor sapien lorem semper risus. Vivamus ut sagittis velit, blandit gravida massa.',
        'Aenean ornare vitae est sit amet lobortis. Morbi placerat porttitor maximus. Vivamus bibendum imperdiet eros vel elementum.',
    ],
    contact: {
        email: 'youremail@host.com',
        linkedInUrl: 'https://linkedin.com/in/yourlinkedusername',
        gitHubUrl: 'https://github.com/yourusername',
    },
    experienceList,
    pastExperienceList,
    sections,
};
