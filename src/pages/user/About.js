import React from 'react';
import brandLogo from '../../assets/logo.png'; // replace with your actual logo path

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Brand Logo */}
      <div className="flex justify-center mb-8">
        <img src={brandLogo} alt="Brand Logo" className="h-20 w-auto" />
      </div>

      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">हाम्रो बारेमा</h1>
        <p className="text-lg text-gray-600">
          साङ्ग्रिला लअ एशोसिएट्स – नेपालको नयाँ कानूनी सेवा कम्पनी, जो तपाईंको न्यायिक अधिकार र विधिक सशक्तिकरणको लागि समर्पित छ।
        </p>
      </header>

      {/* Mission */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">🎯 मिशन</h2>
        <p className="text-gray-700 ml-4">
          नेपालमा न्यायमा पहुँच सुनिश्चित गर्नु, प्रत्येक व्यक्तिको कानुनी अधिकारको संरक्षण गर्नु, र गुणस्तरीय, व्यावसायिक तथा नैतिक कानुनी सेवा प्रदान गर्नु हाम्रो प्रमुख लक्ष्य हो।
        </p>
      </section>

      {/* Vision */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-green-700">👁️ दृष्टिकोण</h2>
        <p className="text-gray-700 ml-4">
          साङ्ग्रिला लअ एशोसिएट्सलाई नेपालको सबैभन्दा भरपर्दो, आधुनिक र जनउत्तरदायी कानुनी सेवा प्रदायक बनाउने, जसले समाजमा विधिको शासनलाई मजबुत बनाओस्।
        </p>
      </section>

      {/* Objectives */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-purple-700">🎯 उद्देश्यहरू</h2>
        <ol className="list-decimal ml-8 text-gray-700 space-y-1">
          <li key="1">सार्वजनिक र निजी क्षेत्रका लागि पेशागत कानुनी सेवा प्रदान गर्नु।</li>
          <li key="2">सामाजिक न्याय र मानव अधिकारका क्षेत्रमा सक्रिय कानुनी सहायता प्रवाह गर्नु।</li>
          <li key="3">कानूनी परामर्श, अनुसन्धान र प्रतिनिधित्वमा उच्च मापदण्ड कायम राख्नु।</li>
          <li key="4">नयाँ कानूनी पेशेवरहरूलाई प्रशिक्षण र अभिप्रेरणा प्रदान गर्नु।</li>
        </ol>
      </section>
    </div>
  );
};

export default About;
