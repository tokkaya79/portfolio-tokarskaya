import engineersImg from '../img/projects/engineers.png';
import codepenImg from '../img/projects/codepen-js-projects.png';
import desktopImg from '../img/projects/desktop.png';
import videographerImg from '../img/projects/videographer.png';
import bonfireImg from '../img/projects/bonfire.png';
import dashboardImg from '../img/projects/dashboard.png';
import mirageImg from '../img/projects/mirage.png';
import reconstrukceImg from '../img/projects/reconstrukce.png';
import filmImg from '../img/projects/film.png';
import shopImg from '../img/projects/shop.png';
import menuImg from '../img/projects/menu.png';
import modelImg from '../img/projects/model.png';
import gleeImg from '../img/projects/glee.png';
import marchoImg from '../img/projects/marcho.png';
import waweImg from '../img/projects/wawe.png';
import playBlack from '../img/icons/play-black.svg';
import playWhite from '../img/icons/play-white.svg';
import gitBlack from '../img/icons/git-black.svg';
import codeBlack from '../img/icons/code-black.svg';

import engineersVideo from '../video/engineers.mp4';
import codepenVideo from '../video/codepen.mp4';
import desktopVideo from '../video/desktop.mp4';
import videographerVideo from '../video/videographer.mp4';
import bonfireVideo from '../video/bonfire.mp4';
import dashboardVideo from '../video/dashboard.mp4';
import mirageVideo from '../video/mirage.mp4';
import reconstrukceVideo from '../video/reconstrukce.mp4';
import filmVideo from '../video/film.mp4';
import shopVideo from '../video/shop.mp4';
import menuVideo from '../video/menu.mp4';
import modelVideo from '../video/model.mp4';
import gleeVideo from '../video/glee.mp4';
import marchoVideo from '../video/marcho.mp4';
import waweVideo from '../video/wawe.mp4';

const projects = [
    {
        id: 1,
        title: 'JS-projects',
        subtitle: '(on Codepen)',
        skills: 'Sliders, ColorsApp, Drag&Drop, Games with JavaScript, Figma',
        img: codepenImg,
        btnName: 'Codepen',
        link: 'https://codepen.io/tokkaya79',
        video: codepenVideo,
        iconPlay: playWhite,
        btnIcon: codeBlack,
    },
    {
        id: 2,
        title: 'Job desktop',
        subtitle: '(React)',
        skills: 'React, Typescript, TailwindCss, Router, BEM, Figma',
        img: desktopImg,
        btnName: 'Github',
        link: 'https://github.com/tokkaya79/desktop',
        video: desktopVideo,
        iconPlay: playBlack,
        btnIcon: gitBlack,
    },
    {
        id: 3,
        title: 'EZ Videographer',
        subtitle: '(for commercial)',
        skills: 'HTML&CSS, Video, Slider, BEM, Figma',
        img: videographerImg,
        btnName: 'Github',
        link: 'https://github.com/tokkaya79/videographer-project',
        video: videographerVideo,
        iconPlay: playWhite,
        btnIcon: gitBlack,
    },
    {
        id: 4,
        title: 'Bonfire Club',
        subtitle: '(for commercial)',
        skills: 'HTML&CSS, animation @keyframes, BEM, Figma',
        img: bonfireImg,
        btnName: 'Github',
        link: 'https://github.com/tokkaya79/bonfire-club-project',
        video: bonfireVideo,
        iconPlay: playWhite,
        btnIcon: gitBlack,
    },
    {
        id: 5,
        title: 'Engineers Meet',
        subtitle: '(HTML&CSS)',
        skills: 'HTML&CSS, @keyframes, BEM, Photoshop',
        img: engineersImg,
        btnName: 'Github',
        link: 'https://github.com/tokkaya79/engineers',
        video: engineersVideo,
        iconPlay: playWhite,
        btnIcon: gitBlack,
    },
    {
        id: 6,
        title: 'Dashboard',
        subtitle: '(HTML&CSS)',
        skills: 'HTML&CSS, BEM, Photoshop',
        img: dashboardImg,
        btnName: 'Github',
        link: 'https://github.com/tokkaya79/dashboard',
        video: dashboardVideo,
        iconPlay: playBlack,
        btnIcon: gitBlack,
    },
    {
        id: 7,
        title: 'Mirage Agency',
        subtitle: '(for commercial)',
        skills: 'HTML&CSS, @keyframes, BEM< Figma',
        img: mirageImg,
        btnName: 'Github',
        link: 'https://github.com/tokkaya79/mirage-agency-project',
        video: mirageVideo,
        iconPlay: playBlack,
        btnIcon: gitBlack,
    },
    {
        id: 8,
        title: 'Rekonstrukce',
        subtitle: '(Landing for commercial)',
        skills: 'HTML&CSS, BEM< Photoshop',
        img: reconstrukceImg,
        btnName: 'Github',
        link: 'https://github.com/tokkaya79/reconstrukce-project',
        video: reconstrukceVideo,
        iconPlay: playBlack,
        btnIcon: gitBlack,
    },
    {
        id: 9,
        title: 'Menu SPI',
        subtitle: '(React)',
        skills: 'React, hooks, React-Router-DOM(versions: 5,6), REST API, Materialize CSS, Figma',
        img: menuImg,
        btnName: 'Github',
        link: 'https://github.com/tokkaya79/menu-spa-project',
        video: menuVideo,
        iconPlay: playBlack,
        btnIcon: gitBlack,
    },
    {
        id: 10,
        title: 'Shop',
        subtitle: '(React)',
        skills: 'React, cart, hooks, Materialize CSS, Photoshop',
        img: shopImg,
        btnName: 'Github',
        link: 'https://github.com/tokkaya79/shop-project',
        video: shopVideo,
        iconPlay: playBlack,
        btnIcon: gitBlack,
    },
    {
        id: 11,
        title: 'Video list',
        subtitle: '(React)',
        skills: 'React, search, filter, hooks, Materialize CSS, Figma',
        img: filmImg,
        btnName: 'Github',
        link: 'https://github.com/tokkaya79/list-films-project',
        video: filmVideo,
        iconPlay: playWhite,
        btnIcon: gitBlack,
    },
    {
        id: 12,
        title: 'Landing 3D Model',
        subtitle: '( JS (ES6))',
        skills: 'JS(ES6), timer, modal, modules, slider, calculator, LocalStorage',
        img: modelImg,
        btnName: 'Github',
        link: 'https://github.com/tokkaya79/model-project',
        video: modelVideo,
        iconPlay: playWhite,
        btnIcon: gitBlack,
    },
    {
        id: 13,
        title: 'Glee-Shop',
        subtitle: '(Multi-pages site)',
        skills: 'HTML&CSS, filter, slider, BEM, video, Photoshop',
        img: gleeImg,
        btnName: 'Github',
        link: 'https://github.com/tokkaya79/GLEE-full-version-',
        video: gleeVideo,
        iconPlay: playBlack,
        btnIcon: gitBlack,
    },
    {
        id: 14,
        title: 'Marcho-Shop',
        subtitle: '(Multi-pages site)',
        skills: 'HTML&CSS, filter, slider, BEM, video, Photoshop',
        img: marchoImg,
        btnName: 'Github',
        link: 'https://github.com/tokkaya79/Marcho-full-version-',
        video: marchoVideo,
        iconPlay: playBlack,
        btnIcon: gitBlack,
    },
    {
        id: 15,
        title: 'WAWE',
        subtitle: '(Filter with JQuery)',
        skills: 'HTML&CSS, JQuery, filter, Figma',
        img: waweImg,
        btnName: 'Github',
        link: 'https://github.com/tokkaya79/wawe-project',
        video: waweVideo,
        iconPlay: playBlack,
        btnIcon: gitBlack,
    },
];

export { projects };
