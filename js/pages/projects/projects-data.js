const cards =
  [
    {
      "id": 1,
      "title": "Exercise Engine",
      "description": "While at the gym, you often need to swap out certain exercises due to equipment issues or physical limitations. This project sought to provide an information retrieval database so users could find exercises that targeted similar muscle groups while being able to filter by different criteria. The website was implemented using HTML, CSS, and Javascript on the frontend, with a Python Flask API on the backend for performing the similarity analysis. One major challenge was finding an exercise database with lengthy descriptions, which we solved by using Selenium to web scrape the information from bodybuilding.com. Our team successfully implemented a functional application that I use extensively in my daily life to find good fitness alternatives and avoid boredom. Click the link below to demo the website yourself or the GitHub icon check out the repository. Click anywhere on this card to navigate to a more in depth look at the project along with images and videos.\n",
      "images": ["Exercise_Engine", "home.png", "results.png"],
      "has_demo": true,
      "demo_link": "http://18.218.132.35/",
      "has_github": true,
      "github_link": "https://github.com/matt-mcauley/Exercise_Engine",
      "icons": [["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", "HTML"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", "CSS"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", "JavaScript"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", "Python"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", "Flask"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", "AWS"]]
    },
    {
      "id": 2,
      "title": "GymBuddy",
      "description": "To keep track of your workout you often need many different apps such as a rest, timer, set counter, and weight tracker, which frequently have ads or features locked behind paywalls. This project consolidates the main functionalities of these apps into one for a streamlined gym experience. The mobile app was developed using the Expo and React-Native frameworks with Typescript as the programming language. One major challenge was dealing with memory limitations on iOS which I solved using the LocalStorage API to create the illusion of resuming even when the app forcibly restarted. I use this app nearly every day in the gym to increase my efficiency and enjoyment and it is a project I am extremely proud of. Click the GitHub icon to check out the repository or click anywhere on this card to navigate to a more in depth look at the project along with images and videos.\n",
      "images": ["GymBuddy", "home.png", "music.png", "programs.png"],
      "has_demo": false,
      "demo_link": null,
      "has_github": true,
      "github_link": "https://github.com/matt-mcauley/GymBuddy",
      "icons": [["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", "TypeScript"], ["/assets/icons/expo.svg", "Expo"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "React"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg", "SQLite"], ["/assets/icons/phone.svg", "Mobile"]]
    },
    {
      "id": 3,
      "title": "To-Do Manager",
      "description": "In college (and life in general) it can be difficult to keep track of all of your required deadlines and responsibilities. This project was designed mainly to gain experience with modern full-stack web development technologies while also creating an application that I could use to organize my daily life. It allows users to create tasks with descriptions, priorities, and due dates that are organized into various projects. The frontend was created using React and Typescript and the backend is a Python Flask API with a Sqlite DB. One major obstacle I had to overcome was the false intuition to mutate React state which wasn’t effectively reflecting on the page. Through reading the documentation, I came to understand how state should be treated as immutable. This project was a great learning experience which reinforced my understanding of modern web dev technologies, version control, and writing maintainable code. Click the link below to demo the website yourself or the GitHub icon check out the repository. Click anywhere on this card to navigate to a more in depth look at the project along with images and videos.\n",
      "images": ["To-Do_Manager", "home.png", "login.png", "signup.png"],
      "has_demo": true,
      "demo_link": "http://150.136.36.76/",
      "has_github": true,
      "github_link": "https://github.com/matt-mcauley/To-Do_Manager",
      "icons": [["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", "TypeScript"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "React"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", "Python"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", "Flask"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg", "SQLAlchemy"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg", "SQLite"]]
    },
    {
      "id": 4,
      "title": "Caml Capital",
      "description": "Board games are a great pastime but often require materials which can be expensive or tedious to set up. This project was created to gain experience with functional programming and to develop a virtual recreation of the board game Monopoly that can be easily played with just a computer. The terminal recreation was done entirely in OCaml with very minimal mutable state. One major challenge was creating a game loop without reassigning variables or being able to use OOP principles which we overcame through writing extensive documentation and well planned out code. Working with an entirely new programming paradigm than I was used to was not easy but it taught me about adaptability especially in a collaborative environment. Click the GitHub icon to check out the repository or click anywhere on this card to navigate to a more in depth look at the project along with images and videos.\n",
      "images": ["Caml_Capital", "start.png", "midgame.png"],
      "has_demo": false,
      "demo_link": null,
      "has_github": true,
      "github_link": "https://github.com/matt-mcauley/Caml_Capital",
      "icons": [["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ocaml/ocaml-original.svg", "OCaml"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", "Git"], ["/assets/icons/controller.svg", "Game Dev"]]
    },
    {
      "id": 5,
      "title": "Embedded Jump",
      "description": "This project was created to better understand low level programming and interacting with microcontrollers such as the FRDM-KL46Z. We developed a recreation of the popular mobile game ‘Doodle Jump’ which was controlled using the hardware on the board. The accelerometer controls horizontal movement, while the buttons deal with shooting obstacles. The game recreation was done with Python using the Pygame library and the functions related to movement and controls were coded in C. One major challenge was communicating between the Python application running on a laptop on the C application running on the board which we solved through UART serial communication libraries. I learned about game development with Python as well as the features unique to a low level application like interrupts, pointers, and memory allocation. Click anywhere on this card to navigate to a more in depth look at the project along with images and videos.\n",
      "images": ["Embedded_Jump", "diagram.png"],
      "has_demo": true,
      "demo_link": "https://pages.github.coecis.cornell.edu/ece3140-sp2024/mwm223-sd699/",
      "has_github": false,
      "github_link": null,
      "icons": [["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", "C"], ["/assets/icons/microcontroller.svg", "Embedded"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", "Python"], ["/assets/icons/controller.svg", "Game Dev"]]
    },
    {
      "id": 6,
      "title": "Calculator",
      "description": "This project is a simple calculator app in the browser that supports basic arithmetic operations such as addition, subtraction, division, and multiplication. It was created using HTML, CSS, and Javascript. It was one of my first introductions to the world of web development and frontend technologies. Click the GitHub icon to check out the repository or click anywhere on this card to navigate to a more in depth look at the project along with images and videos.\n",
      "images": ["Calculator", "home.png"],
      "has_demo": true,
      "demo_link": "https://matt-mcauley.github.io/Calculator",
      "has_github": true,
      "github_link": "https://github.com/matt-mcauley/Calculator",
      "icons": [["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", "HTML"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", "CSS"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", "JavaScript"]]
    },
    {
      "id": 7,
      "title": "Etch-A-Sketch",
      "description": "This project is a drawing canvas in the browser that supports resizing, erasing, changing drawing color, and using progressive darkening. It was created using HTML, CSS, and Javascript. It was one of my first introductions to the world of web development and frontend technologies. Click the GitHub icon to check out the repository or click anywhere on this card to navigate to a more in depth look at the project along with images and videos.\n",
      "images": ["Etch-A-Sketch", "home.png"],
      "has_demo": true,
      "demo_link": "https://matt-mcauley.github.io/Etch-A-Sketch",
      "has_github": true,
      "github_link": "https://github.com/matt-mcauley/Etch-A-Sketch",
      "icons": [["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", "HTML"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", "CSS"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", "JavaScript"]]
    }
];

export default cards;
