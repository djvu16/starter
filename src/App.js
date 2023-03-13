import React from "react";

const App = () => {
  const skills = [
    { id: "1", name: "java" },
    { id: "2", name: "os" },
    { id: "3", name: "javascript" }
  ];
  return (
    <>
      <h1>My Project</h1>
      <p>
        My project description : Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Morbi fringilla eu augue quis efficitur. Aliquam auctor
        felis tortor, nec dapibus magna pharetra sed. Suspendisse aliquet nibh
        ut aliquam pulvinar. Suspendisse ut urna ac orci mattis blandit ut eget
        tellus. Vestibulum dolor risus, dictum ultricies lorem eu, interdum
        porta turpis. Nullam.
      </p>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
