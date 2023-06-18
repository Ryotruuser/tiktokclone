import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="appVideos">
        <Video 
          likes={100} 
          messages={200} 
          shares={300}
          name="Ryotruuser"
          description="Brecker o goleiro"
          music="Epic Music Mix | THE POWER OF EPIC MUSIC"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
          
          />

        <Video 
          likes={2} 
          messages={3} 
          shares={4}
          name="Ryotruuser"
          description="Bird olhando para a camera"
          music="Clap your hands - dirty version"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
          
          />

        
      </div>
    </div>
  );
}

export default App;
