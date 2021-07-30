
import { KnowviewModel, PersonalData, LinkedData } from './models';

declare function require(name:string): string;

//LeftDrawer begin

export const getPersonalData = (t: (string: string) => string) => {
    const data: PersonalData[] =
    [
        {
          title: t('personalData.name'),
          caption: 'Nicolás Agustín Cribb Bárbaro',
        },
        {
          title: t('personalData.age'),
          caption: (new Date().getFullYear() - 1994).toString(),
        },
        {
          title: t('personalData.email'),
          caption: 'cribbnicolas26@gmail.com',
        },
        {
          title: t('personalData.phoneNumber'),
          caption: '(+54) 376 4204152',
        },
        {
          title: t('personalData.location'),
          caption: 'Posadas, Misiones, Argentina.',
        }
    ];
    return data
}

export const getLinksData = (t: (string: string) => string) => {
    const data: LinkedData[] = [
        {
          title: 'Linkedin',
          caption: 'in/cribb-barbaro-nicolas',
          icon: 'work_outline',
          link: 'https://www.linkedin.com/in/cribb-barbaro-nicolas/'
        },
        {
          title: t('linkedData.gitHub'),
          caption: 'github.com/quasarframework',
          icon: 'link',
          link: 'https://github.com/quasarframework'
        },
        // {
        //   title: t('linkedData.tech'),
        //   caption: t('linkedData.techCaption'),
        //   icon: 'code',
        //   link: ''
        // },
        {
          title: t('linkedData.pdf'),
          caption: t('linkedData.pdfCaption'),
          icon: 'file_download',
          link: 'pdf_download'
        }
    ]
    return data
}

//LeftDrawer end
//KnowdledgeView begin

export const KnowledgesArray = (t: (string: string) => string) => {
    const data: KnowviewModel[] =
        [
            {
            title: {
                label: t('knowledgeView.techLang.title'),
                size: 17,
            },
            cards: [
                    {
                        name: 'Javascript',
                        desc: t('knowledgeView.techLang.javascript'),
                        descAnimationTime: 1500,
                        img: require('../assets/img/500x500/javascript_logo.png'),
                        stars: 3,
                    }, {
                        name: 'Typescript',
                        desc: t('knowledgeView.techLang.typescript'),
                        descAnimationTime: 1500,
                        img: require('../assets/img/500x500/typescript_logo.png'),
                        stars: 3,
                    }, {
                        name: 'Java',
                        desc: t('knowledgeView.techLang.java'),
                        descAnimationTime: 1500,
                        img: require('../assets/img/500x500/java_logo.png'),
                        stars: 2,
                    }, {
                        name: 'Python',
                        desc: t('knowledgeView.techLang.python'),
                        descAnimationTime: 1500,
                        img: require('../assets/img/500x500/python_logo.png'),
                        stars: 2,
                    }, {
                        name: 'HTML',
                        desc: t('knowledgeView.techLang.html'),
                        descAnimationTime: 1500,
                        img: require('../assets/img/500x500/html5_logo.png'),
                        stars: 3,
                    }, {
                        name: 'CSS',
                        desc: t('knowledgeView.techLang.css'),
                        descAnimationTime: 1500,
                        img: require('../assets/img/500x500/css3_logo.png'),
                        stars: 3,
                    }
                ],
            color: {
                    red: 37,
                    green: 141,
                    blue: 118, 
                } 
            },
            {
                title: {
                    label: t('knowledgeView.fwDevt.title'),
                    size: 17,
                },
            cards: [
                    {
                        name: 'Git',
                        desc: t('knowledgeView.fwDevt.git'),
                        descAnimationTime: 1000,
                        img: require('../assets/img/500x500/git_logo.png'),
                        stars: 3,
                    }, {
                        name: 'Docker',
                        desc: t('knowledgeView.fwDevt.docker'),
                        descAnimationTime: 1000,
                        img: require('../assets/img/500x500/docker_logo.png'),
                        stars: 2,
                    }, {
                        name: 'Vue/Vuex',
                        desc: t('knowledgeView.fwDevt.vue'),
                        descAnimationTime: 1500,
                        img: require('../assets/img/500x500/vue_logo.png'),
                        stars: 4,
                    }, {
                        name: 'Django/rest',
                        desc: t('knowledgeView.fwDevt.django'),
                        descAnimationTime: 1200,
                        img: require('../assets/img/500x500/django_logo.png'),
                        stars: 2,
                    }, {
                        name: 'Quasar',
                        desc: t('knowledgeView.fwDevt.quasar'),
                        descAnimationTime: 1000,
                        img: require('../assets/img/500x500/quasar_logo.png'),
                        stars: 3,
                    }
                ],
            color: {
                    red: 175,
                    green: 45,
                    blue: 50,  
                } 
            },
            {
                title: {
                    label: t('knowledgeView.language.title'),
                    size: 25,
                },
            cards: [
                    {
                        name: t('knowledgeView.language.spanish_name'),
                        desc: t('knowledgeView.language.spanish'),
                        descAnimationTime: 400,
                        img: '',
                        stars: 5,
                    }, {
                        name: t('knowledgeView.language.english_name'),
                        desc: t('knowledgeView.language.english'),
                        descAnimationTime: 1300,
                        img: '',
                        stars: 2,
                    }, {
                        name: t('knowledgeView.language.portuguese_name'),
                        desc: t('knowledgeView.language.portuguese'),
                        descAnimationTime: 500,
                        img: '',
                        stars: 3,
                    },
                ],
            color: {
                    red: 70,
                    green: 135,
                    blue: 50,  
                } 
            },
            {
                title: {
                    label: t('knowledgeView.other.title'),
                    size: 17,
                },
            cards: [
                    {
                        name: 'Gimp',
                        desc: t('knowledgeView.other.gimp'),
                        descAnimationTime: 1000,
                        img: require('../assets/img/500x500/gimp_logo.png'),
                        stars: 3,
                    }, {
                        name: 'Gnu/Linux',
                        desc: t('knowledgeView.other.gnuLinux'),
                        descAnimationTime: 1000,
                        img: require('../assets/img/500x500/gnu-linux_logo.png'),
                        stars: 3,
                    }, {
                        name: t('knowledgeView.other.ofimatic_name'),
                        desc: t('knowledgeView.other.ofimatic'),
                        descAnimationTime: 1000,
                        img: require('../assets/img/500x500/ofimatica_logo.png'),
                        stars: 4,
                    },
                ],
            color: {
                    red: 130,
                    green: 130,
                    blue: 30,  
                } 
            },
    ] 
    return data
}

//KnowdledgeView end
