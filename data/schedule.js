import {
    JUG,
    GDLJS,
    KUG,
    J4G,
    WORDPRESS_GDL,
    GDL_CONNECT,
    JENKINS,
    GDG_ANDROID,
    DEVOPS,
    CENTRAAL,
    SCALABLE,
    ACADEMY
} from './communities';

import {
    TALK,
    WORKSHOP
} from './talkTypes';

export default [{
    key: 'talk-1',
    hour: '1:30pm',
    title: 'Realizando pruebas con Spock',
    speaker: 'Andres Almiray',
    community: JUG,
    type: TALK
}, {
    key: 'talk-2',
    hour: '1:30pm',
    title: 'El mundo cómo oficina: expandiendo tu negocio a nuevos países',
    speaker: 'Carlos Trujillo',
    community: WORDPRESS_GDL,
    type: TALK
}, {
    key: 'talk-3',
    hour: '2:15pm',
    title: 'The Future is now Spring 5',
    speaker: 'Orlando Cano',
    community: J4G,
    type: TALK
}, {
    key: 'talk-4',
    hour: '2:15pm',
    title: 'Why Custom Views Matter?',
    speaker: 'Jorge Hernandez',
    community: GDG_ANDROID,
    type: TALK
}, {
    key: 'talk-5',
    hour: '3:00pm',
    title: 'Head First OkHttp',
    speaker: 'Daniel Pedraza',
    community: GDG_ANDROID,
    type: TALK
}, {
    key: 'talk-6',
    hour: '3:00pm',
    title: 'Bienvenido al mundo multiplataforma dotnet',
    speaker: 'Oscar Legorreta',
    community: GDL_CONNECT,
    type: TALK
}, {
    key: 'talk-7',
    hour: '3:45pm',
    title: 'The Fractal Nature of Kotlin',
    speaker: 'Gilberto Vargas',
    community: KUG,
    type: TALK
}, {
    key: 'talk-8',
    hour: '3:45pm',
    title: 'Servicios Web con  Spring MVC (REST) y Spring Security (Oauth2)',
    speaker: 'Carlos Salazar',
    community: JUG,
    type: TALK
}, {
    key: 'talk-9',
    hour: '4:30pm',
    title: 'Kotlin Puzzlers',
    speaker: 'Ernesto Espinosa',
    community: J4G,
    type: TALK
}, {
    key: 'talk-10',
    hour: '4:30pm',
    title: 'Project Calico + Kubernetes',
    speaker: 'Hazzim Anaya',
    community: DEVOPS,
    type: TALK
}, {
    key: 'break-0',
    hour: '5:15pm',
    title: 'BREAK',
    speaker: '',
    community: "",
    type: ""
}, {
    key: 'talk-11',
    hour: '5:45pm',
    title: '5 Pláticas para un javascript muy navideño',
    speaker: 'Ruben Beltran',
    community: GDLJS,
    type: TALK
}, {
    key: 'talk-12',
    hour: '5:45pm',
    title: 'Infrastructura como servicio en Terraform',
    speaker: 'Emerson Posadas',
    community: DEVOPS,
    type: TALK
}, {
    key: 'talk-13',
    hour: '6:30pm',
    title: 'How to be a Senior Software Engineer',
    speaker: 'Orlando Del Aguila',
    community: GDLJS,
    type: TALK
}, {
    key: 'talk-14',
    hour: '6:30pm',
    title: 'Velocidad y desempeño para sitios web (con aplicaciones para WordPress)',
    speaker: 'Carlos Rodríguez',
    community: WORDPRESS_GDL,
    type: TALK
}, {
    key: 'talk-15',
    hour: '7:15pm',
    title: 'Scaling Node.js Web Applications',
    speaker: 'Eric Zhang',
    community: CENTRAAL + SCALABLE,
    type: TALK
}, {
    key: 'talk-16',
    hour: '7:15pm',
    title: 'Conceptos básicos de Machine Learning y Natural Language Processing',
    speaker: 'Jesús Flores',
    community: GDL_CONNECT,
    type: TALK
}, {
    key: 'talk-17',
    hour: '8:00pm',
    title: 'AI Vision, procesamiento de lenguaje y machine Learning',
    speaker: 'Enrique Cortes',
    community: J4G,
    type: TALK
}, {
    key: 'talk-18',
    hour: '8:00pm',
    title: 'Women Programmers in SF',
    speaker: 'Schukey',
    community: SCALABLE,
    type: TALK
}, {
    key: 'wokshop-1',
    hour: '1:30pm',
    title: 'Software Architecture 101',
    speaker: 'Jorge Gaona',
    community: GDL_CONNECT,
    type: WORKSHOP
}, {
    key: 'wokshop-2',
    hour: '1:30pm',
    title: 'Gradle + Jenkins',
    speaker: 'Hazzim Anaya',
    community: JENKINS,
    type: WORKSHOP
}, {
    key: 'wokshop-3',
    hour: '2:45pm',
    title: 'All about React Native',
    speaker: 'Charlie Lopez',
    community: GDLJS,
    type: WORKSHOP
}, {
    key: 'wokshop-4',
    hour: '2:45pm',
    title: 'Construyendo tu sitio Web con ayuda de maquetadores visuales (Visual Composer & Elementor)',
    speaker: 'Maryl González/Jean Saldaña',
    community: WORDPRESS_GDL,
    type: WORKSHOP
}, {
    key: 'wokshop-5',
    hour: '4:00pm',
    title: 'Cross-Platform game development with libGDX',
    speaker: 'Ivan Hernandez',
    community: GDG_ANDROID,
    type: WORKSHOP
}, {
    key: 'wokshop-6',
    hour: '4:00pm',
    title: 'Web Audio for all Browsers',
    speaker: 'Ryan McGill',
    community: SCALABLE,
    type: WORKSHOP
}, {
    key: 'wokshop-7',
    hour: '5:45pm',
    title: 'Kotlin Shared Components',
    speaker: 'Sinuhe Jaime',
    community: KUG,
    type: WORKSHOP
}, {
    key: 'wokshop-8',
    hour: '5:45pm',
    title: 'Big Data with Scala & Spark',
    speaker: 'William Nuñez',
    community: J4G,
    type: WORKSHOP
}, {
    key: 'wokshop-9',
    hour: '7:00pm',
    title: 'Building a JSON API with Scala and Play',
    speaker: 'Alexis Hernandez',
    community: JUG,
    type: WORKSHOP
}, {
    key: 'wokshop-10',
    hour: '7:00pm',
    title: 'TBD',
    speaker: 'Basilio Briseño',
    community: DEVOPS,
    type: WORKSHOP
}];