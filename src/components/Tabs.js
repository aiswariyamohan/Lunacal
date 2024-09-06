import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs-section shadow-lg rounded-lg mb-8 p-6">
      <div className="flex space-x-4 border-b overflow-x-auto">
        <button
          className={`tab-button ${activeTab === 'about' ? 'tab-button-active' : 'text-gray-500'}`}
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>
        <button
          className={`tab-button ${activeTab === 'experiences' ? 'tab-button-active' : 'text-gray-500'}`}
          onClick={() => setActiveTab('experiences')}
        >
          Experiences
        </button>
        <button
          className={`tab-button ${activeTab === 'recommended' ? 'tab-button-active' : 'text-gray-500'}`}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </div>
      <div className="p-4">
        {activeTab === 'about' && (
          <div className="scrollable-content">
            <h2 className="text-xl font-bold mb-2">Aiswariya Mohan</h2>
            <p>
              Hello! I’m Aiswariya Mohan, an innovative and detail-oriented MCA graduate with a passion for technology and problem-solving. My academic journey has equipped me with a strong foundational knowledge in various programming languages and software development principles. I have had the opportunity to work on diverse projects, including a plant disease detection system using advanced machine learning techniques, an intelligent wheelchair to enhance mobility and safety, and a scheduling system for healthcare professionals during the Nipah virus outbreak. These experiences have not only honed my technical skills but also my ability to tackle complex challenges and develop practical solutions. I am eager to bring my expertise to dynamic and challenging projects, continuously learn and grow, and contribute effectively to the tech community. Outside of my professional interests, I enjoy exploring new technologies, staying updated with industry trends, and participating in collaborative projects.
            </p>
            <p className="mt-4">Feel free to reach out to me at: <strong>aiswariyamohan97@gmail.com</strong></p>
          </div>
        )}
        {activeTab === 'experiences' && <div>Experiences Content</div>}
        {activeTab === 'recommended' && <div>Recommended Content</div>}
      </div>
    </div>
  );
};

export default Tabs;
