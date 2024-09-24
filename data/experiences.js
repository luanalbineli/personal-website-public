const pastExperienceList = [
    {
        text: {
            position: 'Some fancy position name',
            title: "Company's name",
            period: 'Jun 2008 - June 2010',
        },
        tech: ['Some', 'cool', 'tech', 'stack'],
    },
];

const experienceList = [
    {
        image: {
            url: 'company-logo.webp',
            alt: 'Image alt',
            title: 'Image title',
        },
        text: {
            position: 'Some fancy position name',
            title: "Company's name",
            content: "Time to shine and share what you know, what you're doing and so on",
            period: 'Sep 2022 - June 2024',
        },
        tech: ['Node.js', 'Pug', 'Tailwind CSS'],
        achievements: ["Opened the code for everyone that want's expiration for a personal portfolio"],
    },
];

module.exports = { experienceList: experienceList.reverse(), pastExperienceList: pastExperienceList.reverse() };
