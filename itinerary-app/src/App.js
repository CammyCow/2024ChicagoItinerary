import React from 'react';
import LandingScreen from './components/LandingScreen';
import Timeline from './components/Timeline';

const App = () => {
  const title = "My Itinerary";
  const names = ["Alice", "Bob", "Charlie"];
  const events = [
    { title: "Event 1", description: "This is the first event." },
    { title: "Event 2", description: "This is the second event." },
    // Add more events here
  ];

  return (
    <div>
      <LandingScreen title={title} names={names} />
      <Timeline events={events} />
    </div>
  );
};

export default App;
