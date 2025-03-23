const cards =
  [
    {
      "id": 1,
      "title": "Exercise Engine",
      "description": "While at the gym, you often need to swap out certain exercises due to equipment issues or physical limitations. This project sought to provide an information retrieval database so that users could find exercises that targeted similar muscle groups while being able to filter by different criteria. The website was implemented using HTML, CSS, and Javascript on the frontend, with a Python Flask API on the backend for performing the similarity analysis. Our team successfully implemented a functional application that I use extensively in my daily life to find good fitness alternatives and avoid boredom. Click the link below to demo the website yourself or the GitHub icon check out the repository. Click anywhere on this card to navigate to a more in depth look at the project along with images and videos.\n",
      "image": "Exercise_Engine/home.png",
      "has_demo": true,
      "demo_link": "http://18.218.132.35/",
      "card_click_link": "./Exercise_Engine",
      "new_tab": false,
      "has_github": true,
      "github_link": "https://github.com/matt-mcauley/Exercise_Engine",
      "icons": ["html.png", "css.png", "js.png", "python.webp", "flask.png", "aws.webp"]
    },
    {
      "id": 2,
      "title": "GymBuddy",
      "description": "To keep track of your workout you often need many different apps such as a rest, timer, set counter, and weight tracker, which frequently have ads or features locked behind paywalls. This project consolidates the main functionalities of these apps into one for a streamlined gym experience. The mobile app was developed using the Expo and React-Native frameworks with Typescript as the programming language. One major challenge was dealing with memory limitations on iOS which I solved using the LocalStorage API to create the illusion of resuming even when the app forcibly restarted. I use this app nearly every day in the gym and it has increased my efficiency and enjoyment by a large margin and is a project I am extremely proud of. Click the GitHub icon to check out the repository or click anywhere on this card to navigate to a more in depth look at the project along with images and videos.\n",
      "image": "GymBuddy/banner.png",
      "has_demo": false,
      "demo_link": null,
      "card_click_link": "./GymBuddy",
      "new_tab": false,
      "has_github": true,
      "github_link": "https://github.com/matt-mcauley/GymBuddy",
      "icons": ["ts.png", "expo.png", "react.png", "sqlite.png"]
    },
    {
      "id": 3,
      "title": "To-Do Manager",
      "description": "In college (and life in general) it can be difficult to keep track of all of your required deadlines and responsibilities. This project was designed mainly to gain experience with modern full-stack web development technologies while also creating an application that I could use to organize my daily life. The frontend was created using React and Typescript with the backend being a Python Flask API and a Sqlite DB. One major obstacle I had to overcome was the false intuition to mutate arrays and objects which wasn’t effectively reflecting on the page. Through reading the React documentation, I came to understand how state should be treated as immutable. This project was a great learning experience which reinforced my fundamentals in all aspects of software development and taught me a lot about the various technologies that can be used to build an application. Click the link below to demo the website yourself or the GitHub icon check out the repository. Click anywhere on this card to navigate to a more in depth look at the project along with images and videos.\n",
      "image": "To-Do_Manager/home.png",
      "has_demo": true,
      "demo_link": "http://150.136.36.76/",
      "card_click_link": "./To-Do_Manager",
      "new_tab": false,
      "has_github": true,
      "github_link": "https://github.com/matt-mcauley/To-Do_Manager",
      "icons": ["ts.png", "react.png", "python.webp", "flask.png", "SQLAlchemy.png", "sqlite.png", "oracle.png"]
    },
    {
      "id": 4,
      "title": "Caml Capital",
      "description": "Board games are a great pastime but often require materials which can be expensive or tedious to set up. This project was created to gain experience with functional programming and to develop a virtual recreation of the board game Monopoly that can be easily played wherever there is a computer. The terminal recreation was done entirely in OCaml with very minimal mutable state. One major challenge was creating a game loop without reassigning variables or being able to use OOP principles which we overcame through extensive documentation and well planned out code. I was able to complete the recreation producing a fun application while reinforcing the concepts of functional programming and designing software with a team. Click the GitHub icon to check out the repository or click anywhere on this card to navigate to a more in depth look at the project along with images and videos.\n",
      "image": "Caml_Capital/start.png",
      "has_demo": false,
      "demo_link": null,
      "card_click_link": "./Caml_Capital",
      "new_tab": false,
      "has_github": true,
      "github_link": "https://github.com/matt-mcauley/Caml_Capital",
      "icons": ["ocaml.png"]
    },
    {
      "id": 5,
      "title": "Embedded Jump",
      "description": "(Missing).\n",
      "image": "Embedded_Jump/diagram.png",
      "has_demo": false,
      "demo_link": null,
      "card_click_link": "https://pages.github.coecis.cornell.edu/ece3140-sp2024/mwm223-sd699/",
      "new_tab": true,
      "has_github": false,
      "github_link": null,
      "icons": ["c.png", "python.webp"]
    },
    {
      "id": 6,
      "title": "Calculator",
      "description": "(Missing).\n",
      "image": "Calculator/home.png",
      "has_demo": true,
      "demo_link": "https://matt-mcauley.github.io/Calculator",
      "card_click_link": "./Calculator",
      "new_tab": false,
      "has_github": true,
      "github_link": "https://github.com/matt-mcauley/Calculator",
      "icons": ["html.png", "css.png", "js.png"]
    },
    {
      "id": 7,
      "title": "Etch-A-Sketch",
      "description": "(Missing).\n",
      "image": "Etch-A-Sketch/home.png",
      "has_demo": true,
      "demo_link": "https://matt-mcauley.github.io/Etch-A-Sketch",
      "card_click_link": "./Etch-A-Sketch",
      "new_tab": false,
      "has_github": true,
      "github_link": "https://github.com/matt-mcauley/Etch-A-Sketch",
      "icons": ["html.png", "css.png", "js.png"]
    }
];

export default cards;
