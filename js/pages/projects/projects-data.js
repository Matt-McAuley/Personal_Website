const cards =
  [
    {
      "title": "GymBuddy",
      "description": "To keep track of your workout you often need many different apps such as a rest timer, set counter, and program tracker, which frequently have ads or features locked behind paywalls. This project consolidates the main functionalities of these apps into one for a streamlined gym experience. The mobile app was developed using the Expo and React-Native frameworks with Typescript and Swift as the programming languages. A challenge this project presented was constructing a Live Activity on the lock screen for the timer which I was able to build by extensively researching and reading documentation. I use this app nearly every day in the gym to increase my efficiency and enjoyment and it is a project I am extremely proud of. Click the GitHub icon to check out the repository with a more in depth description.",
      "images": ["GymBuddy", "splash.png", "Home_Screen.PNG", "Live_Activity.PNG", "Home_Superset.PNG", "Home_Bottom_Sheet.PNG", "Programs.PNG", "Edit_Program_Top.PNG", "Edit_Program_Bottom.PNG", "Program_Bottom_Sheet.PNG", "Days.PNG", "Edit_Day_Top.PNG", "Edit_Day_Bottom.PNG", "Day_Bottom_Sheet.PNG", "Exercises.PNG", "Edit_Exercise_Top.PNG", "Edit_Exercise_Bottom.PNG", "Exercise_Bottom_Sheet.PNG", "Music_Home.PNG", "Music_PausedLiked.PNG", "Playlists.PNG", "Queue.PNG"],
      "has_demo": false,
      "demo_link": null,
      "has_github": true,
      "github_link": "https://github.com/matt-mcauley/GymBuddy",
      "icons": [["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", "TypeScript"], ["/assets/icons/expo.svg", "Expo"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "React"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg", "SQLite"], ["/assets/icons/phone.svg", "Mobile"]]
    },
    {
      "title": "Exercise Engine",
      "description": "While at the gym, you often need to swap out certain exercises due to equipment issues or physical limitations. This project sought to provide an information retrieval database so users could find exercises that targeted similar muscle groups while being able to filter by different criteria. The website was implemented using HTML, CSS, and Javascript on the frontend, with a Python Flask API on the backend for performing the similarity analysis. One major challenge was finding an exercise database with lengthy descriptions, which we solved by using Selenium to web scrape the information from bodybuilding.com. Our team successfully implemented a functional application that I use extensively in my daily life to find good fitness alternatives and avoid boredom. Click the link below to demo the website yourself or the GitHub icon to check out the repository with a more in depth description.",
      "images": ["Exercise_Engine", "home.png", "results.png", "results_filtered.png", "freeform.png"],
      "has_demo": true,
      "demo_link": "http://18.218.132.35/",
      "has_github": true,
      "github_link": "https://github.com/matt-mcauley/Exercise_Engine",
      "icons": [["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", "HTML"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", "CSS"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", "JavaScript"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", "Python"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", "Flask"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", "AWS"]]
    },
    {
      "title": "To-Do Manager",
      "description": "In college (and life in general) it can be difficult to keep track of all of your required deadlines and responsibilities. This project was designed mainly to gain experience with modern full-stack web development technologies while also creating an application that I could use to organize my daily life. It allows users to create tasks with descriptions, priorities, and due dates that are organized into various projects. The frontend was created using React and Typescript and the backend is a Python Flask API with a Sqlite DB. One major obstacle I had to overcome was the false intuition to mutate React state which wasn’t effectively reflecting on the page. Through reading the documentation, I came to understand how state should be treated as immutable. This project was a great learning experience which reinforced my understanding of modern web dev technologies, version control, and writing maintainable code. Click the link below to demo the website yourself or the GitHub icon to check out the repository with a more in depth description.",
      "images": ["To-Do_Manager", "home.png", "login.png", "signup.png", "form.png"],
      "has_demo": true,
      "demo_link": "http://150.136.36.76/",
      "has_github": true,
      "github_link": "https://github.com/matt-mcauley/To-Do_Manager",
      "icons": [["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", "TypeScript"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "React"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", "Python"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", "Flask"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg", "SQLAlchemy"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg", "SQLite"]]
    },
    {
      "title": "Caml Capital",
      "description": "Board games are a great pastime but often require materials which can be expensive or tedious to set up. This project was created to gain experience with functional programming and to develop a virtual recreation of the board game Monopoly that can be easily played with just a computer. The terminal recreation was done entirely in OCaml with very minimal mutable state. One major challenge was creating a game loop without reassigning variables or being able to use OOP principles which we overcame through writing extensive documentation and well planned out code. Working with an entirely new programming paradigm than I was used to was not easy but it taught me about adaptability especially in a collaborative environment. Click the GitHub icon to check out the repository with a more in depth description.",
      "images": ["Caml_Capital", "start.png", "buying.png", "paying.png", "houses.png", "chance.png"],
      "has_demo": false,
      "demo_link": null,
      "has_github": true,
      "github_link": "https://github.com/matt-mcauley/Caml_Capital",
      "icons": [["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ocaml/ocaml-original.svg", "OCaml"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", "Git"], ["/assets/icons/controller.svg", "Game Dev"]]
    },
    {
      "title": "Embedded Jump",
      "description": "This project was created to better understand low level programming and interacting with microcontrollers such as the FRDM-KL46Z. We developed a recreation of the popular mobile game ‘Doodle Jump’ which was controlled using the hardware on the board. The accelerometer controls horizontal movement, while the buttons deal with shooting obstacles. The game recreation was done with Python using the Pygame library and the functions related to movement and controls were coded in C. One major challenge was communicating between the Python application running on a laptop on the C application running on the board which we solved through UART serial communication libraries. I learned about game development with Python as well as the features unique to a low level application like interrupts, pointers, and memory allocation. Click the link below to see our team’s write up on the project.",
      "images": ["Embedded_Jump", "diagram.png", "start.png", "shooting.png", "enemies.png", "over.png", "score.png"],
      "has_demo": true,
      "demo_link": "https://pages.github.coecis.cornell.edu/ece3140-sp2024/mwm223-sd699/",
      "has_github": false,
      "github_link": null,
      "icons": [["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", "C"], ["/assets/icons/microcontroller.svg", "Embedded"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", "Python"], ["/assets/icons/controller.svg", "Game Dev"]]
    },
    {
      "title": "Personal Website",
      "description": "Professional mediums like LinkedIn and Resumes are often limited in their portrayal of a candidate to recruiters. This project was created to give more information regarding my projects, previous work experience, and overall professional identity to anyone interested and provide a living timeline of what I’ve accomplished thus far. The website was implemented using HTML, SCSS, and Javascript on the frontend, with some Bootstrap templating used for the navbar. It is hosted on GitHub pages on a custom domain purchased from Cloudflare. I was able to design an online portfolio that is very informative, aesthetically pleasing, and easy to navigate which can provide others a more holistic view of who I am and what I offer. Developing this project also reinforced my understanding of web development basics as well as taught me about new ideas such as responsive design. Click the GitHub icon to check out the repository with a more in depth description.",
      "images": ["Personal_Website", "about.png", "work.png", "projects.png", "projects2.png"],
      "has_demo": true,
      "demo_link": "https://mattmcauley.com",
      "has_github": true,
      "github_link": "https://github.com/matt-mcauley/Personal_Website",
      "icons": [["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", "HTML"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg", "Sass"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", "JavaScript"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg", "Bootstrap"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg", "Cloudflare"]]
    },
    {
      "title": "Etch-A-Sketch",
      "description": "This project is a drawing canvas in the browser that supports resizing, erasing, changing drawing color, and using progressive darkening. It was created using HTML, CSS, and Javascript. It was one of my first introductions to the world of web development and frontend technologies. Click the GitHub icon to check out the repository with a more in depth description.",
      "images": ["Etch-A-Sketch", "home.png", "progressive.png", "solid.png", "zoomout.png", "zoomin.png"],
      "has_demo": true,
      "demo_link": "https://matt-mcauley.github.io/Etch-A-Sketch",
      "has_github": true,
      "github_link": "https://github.com/matt-mcauley/Etch-A-Sketch",
      "icons": [["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", "HTML"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", "CSS"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", "JavaScript"]]
    },
    {
      "title": "Calculator",
      "description": "This project is a simple calculator app in the browser that supports basic arithmetic operations such as addition, subtraction, division, and multiplication. It was created using HTML, CSS, and Javascript. It was one of my first introductions to the world of web development and frontend technologies. Click the GitHub icon to check out the repository with a more in depth description.",
      "images": ["Calculator", "home.png", "number.png", "zero.png", "overflow.png"],
      "has_demo": true,
      "demo_link": "https://matt-mcauley.github.io/Calculator",
      "has_github": true,
      "github_link": "https://github.com/matt-mcauley/Calculator",
      "icons": [["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", "HTML"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", "CSS"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", "JavaScript"]]
    }
];

export default cards;
