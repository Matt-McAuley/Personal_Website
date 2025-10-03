const experiences =
  [
    {
      "title": "Cornell Cup Robotics",
      "role": "Software Developer",
      "startDate": "August 2023",
      "endDate": "May 2024",
      "description": "I worked as a software developer for the minibot CS team during my time on Cornell Cup Robotics. We consulted a large robotics company to create software for a cost-effective 3D printed robot that would be used in introductory programming and robotics courses. I worked on building a web application with a Javascript React frontend and Python Flask backend. The website connects to the onboard microcontroller using web sockets, allowing for controlling movement, writing scripts in Blockly and Python, and graphing the location relative to other tagged objects/robots. I also developed embedded software for the robot to connect to the server and respond accordingly using MicroPython, a lightweight subset of Python. The minibot team contained 30+ members across 4 different subteams including CS, ECE, Mechanical, and Business. We communicated with weekly scrum meetings and had many progress presentations throughout the semester to illustrate what we’d accomplished. It was a very rewarding experience and one of my first introductions to designing software in a large team environment with more structure than a personal or class project. It reinforced my understanding of version control, writing good documentation, programming embedded software, communicating through web sockets, and collaborating with a large team.\n",
      "icons": [["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", "JavaScript"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "React"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", "Python"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", "Flask"], ["/assets/icons/robot.svg", "Robotics"]]
    },
    {
      "title": "Octus",
      "role": "Software Engineer Intern",
      "startDate": "June 2024",
      "endDate": "August 2024",
      "description": "I worked as a backend software engineer for the app development team during my tenure as an intern. I helped design a C# API using the .NET framework to organize data on the CLO market into JSON tables. The tables could be grouped by Gics Sector, CLO Manager,  and CLO. Each contained relevant financial data on CLOs such as AUM, Revenue Growth, and Net Leverage. I wrote integration tests using the NUnit testing frameworks, dealt with caching filtered table values using Redis, and contributed to the services and repositories behind the many different endpoints. It was a great experience working with a large team across many different domains such as product, frontend, and data and seeing how complex software is built in a professional setting. At the end of my internship, the website was launched publicly to clients and is currently used by tens of thousands of financial institutions globally. It was an extremely rewarding experience and I learned about picking up new technologies quickly, writing clean and maintainable code, cross-team collaboration, advanced version control, agile software development, and much more.\n",
      "icons": [["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", "C#"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg", ".NET"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", "Redis"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", "Postgres"], ["/assets/icons/snowflake-color.svg", "Snowflake"]]
    },
    {
      "title": "S&P Global",
      "role": "Software Developer Intern",
      "startDate": "June 2025",
      "endDate": "August 2025",
      "description": "I worked as a backend software developer on the Real-Time Value Streams team for S&P DJI during my internship. I contributed to the creation of a FastAPI GenAI service that would be integrated into the long-standing Real-Time Index Platform. It would provide 24/7 status monitoring, chatbot support, and log summaries. The goal was to consolidate the work of L1 monitors into an AI Agent to quickly respond to emergencies and save lots of time and manpower. My main contribution was designing a QA test framework that allowed automation of extensive API regression tests. Large test suites could be created in an excel file, loaded into Python with Pandas, and then automatically fed into the Agent for review. The expected and generated responses would be compared and scored using a Langchain LLM. I also worked on engineering system prompts and developing POCs for future AI Agent uses, such as emergency email communication and Playwright tooling to automate repeated workflows. It was great to be exposed to new team structures and technologies, and I really enjoyed working with modern AI libraries to implement cutting-edge functionalities. I was able to further improve my teamwork and communication skills, as well as advance my knowledge on AI, developing APIs, working with large enterprise software, effective code testing, and agile software development.\n",
      "icons": [["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", "Python"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", "FastAPI"], ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg", "Pandas"], ["/assets/icons/langchain.svg", "Langchain"],["/assets/icons/ai.svg", "AI"]]
    },
    // {
    //   "title": "Octus",
    //   "role": "Software Engineer",
    //   "startDate": "December 2025",
    //   "endDate": "Current",
    //   "description": "Incoming SWE in December 2025",
    //   "icons": []
    // },
    ]

export default experiences;
