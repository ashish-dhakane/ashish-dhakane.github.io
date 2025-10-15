var app = angular.module('myWebsiteApp', ['ngSanitize']);

app.controller('MainController', function($scope) {
  $scope.aboutMe = 
    `I am a passionate and curious individual who loves learning new things every day.
Technology and creativity inspire me to build meaningful and innovative projects.
I believe in continuous growth, both personally and professionally.
Patience and positivity are my strongest traits in handling challenges.
I enjoy working on ideas that blend logic with imagination.
Helping others and sharing knowledge give me a sense of purpose.
Music, travel, and nature help me find peace and inspiration.
I value honesty, hard work, and consistency in everything I do.
My goal is to create a life filled with balance, learning, and happiness.`;
});

app.controller('PersonalDetailsController', function($scope) {
  $scope.introduction = "Hi, I am Ashish Dhakne — a passionate learner with strong interest in technology and innovation. I enjoy building creative projects that combine logic and design. I believe in continuous growth, honesty, and hard work, aiming to create a life filled with balance, learning, and happiness.";

  $scope.education = [
    "Pre-Primary: Blossom Public School",
    "Secondary: Blossom Public School",
    "Higher Secondary: Laxmanrao Apte Junior College",
    "Undergraduate: Pimpri Chinchwad College, Intracity Campus"
  ];

  $scope.grade = {
    "SSC": "67% SSC",
    "HSC": "65% HSC",
    "Current CGPA": "7.8 CGPA"
  };

  $scope.skills = [
    "Web Development: HTML, CSS, JavaScript",
    "Python, Java, and IoT Projects",
    "Database Management and Cybersecurity",
    "Problem Solving and Project Management"
  ];

  $scope.interests = [
    "Music",
    "Fitness",
    "Exploring new technologies",
    "Travelling"
  ];
});

app.controller('ProjectController', function($scope) {
  const projects = [
    {
      title: "Smart Air Monitoring System",
      description: "An IoT-based system that monitors air quality using sensors and sends real-time data to a website via a Python script connected through USB.",
      technologies: ["Arduino", "Python", "Sensors", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Smart ERP System",
      description: "A web-based enterprise resource planning solution to manage organizational data and streamline processes efficiently.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    },
    {
      title: "AI Interview Module",
      description: "An intelligent system that conducts mock interviews using AI, evaluates responses, and provides feedback based on performance.",
      technologies: ["Python", "Machine Learning", "Flask", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "EasyRoof.com",
      description: "A real estate platform designed to simplify property search and management with user-friendly interface and modern web technologies.",
      technologies: ["React", "Node.js", "Express", "MongoDB"]
    }
  ];

  // ✅ Fixed here
  $scope.projects = projects;
});

app.controller('ContactController', function($scope) {
  $scope.heading = "Contact Me";
  $scope.contactInfo = [
    {
      label: "Email",
      value: "dhakneashish110@gmail.com"
    },
    {
      label: "Phone",
      value: "+91-8830533848"
    },
    {
      label: "Location",
      value: "Pimpri-Chinchwad, Maharashtra"
    },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/ashish-dhakane-971935289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      displayText: "View LinkedIn Profile"
    },
    {
      label: "GitHub",
      value: "https://github.com/ashish-dhakane",
      displayText: "My GitHub"
    }
  ];
});
