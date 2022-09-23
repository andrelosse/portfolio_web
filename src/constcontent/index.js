import { linkedin, github } from "../assets";

export const navigation = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    }
]

export const projects = [
    {
        id: "minkvpn",
        icon: "minkvpn",
        title: "MinkVPN",
        content: "VPN client with user interface, made with C# and XAML using MVVM architecture.",
        url: "https://github.com/andrelosse/MinkVPN"
    },
    {
        id: "portproj",
        icon: "portproj",
        title: "Portfolio Project",
        content: "Personal portfolio project made with React and Tailwind CSS.",
        url: "https://github.com/andrelosse/portfolio_web"
    },
    {
        id: "fibonacci",
        icon: "fibo",
        title: "Fibonacci Sequence",
        content: "Console application to generate a Fibonacci sequence with a user defined lenght.",
        url: "https://github.com/andrelosse/fibonacci_sequence"
    },
    {
        id: "location",
        icon: "location",
        title: "Location Searcher",
        content: "Console application that searches for a given address and writes the information to a JSON file.",
        url: "https://github.com/andrelosse/location_searcher"
    },
    {
        id: "soon",
        icon: "soon",
        title: "Coming Soon",
        content: "This project will be revealed soon...",
        url: "https://github.com/andrelosse"
    }
];

export const contact = [
    {
        id: "email",
        icon: "none",
        title: "E-mail",
        content: "contato@andre.dev",
    }
];

export const link = [
    {
        id: "linkedin",
        icon: linkedin,
        title: "Linkedin",
        content: "https://www.linkedin.com/in/andrelosse",
    },
    {
        id: "github",
        icon: github,
        title: "GitHub",
        content: "https://www.github.com/andrelosse",
    }
];