import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const [data, setData] = useState([]); 

  useEffect(() => {
    
    const fetchedData = []; 
    setData(fetchedData);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
     
      <Header />

      
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        {data.length > 0 ? (
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold">Fetched Data</h2>
            <p>Database records will be displayed here.</p>
          </div>
        ) : (
          <p className="text-gray-500 text-lg">Nothing to Display</p>
        )}
      </main>

      
      <Footer />
    </div>
  );
}

export default Home;
