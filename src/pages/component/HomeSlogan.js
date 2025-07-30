 import owner from '../../assets/myphoto.png';
 
const HomeSlogan = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-10 ">
      
      {/* Left: Company Logo */}
{/* Left: Company Slogan */}
<div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-2xl shadow-md text-center space-y-4">
  <h1 className="text-2xl md:text-3xl font-semibold mt-1 text-primary">🧑‍⚖️ अन्यायमा परे याद गर्नुहोला !</h1>
 
  <h1 className="text-2xl md:text-3xl font-semibold   text-primary"> तपाइको दुख, हाम्रो पनि दुख हो !</h1>
</div>

      {/* Right: Owner Info */}
     <div className="flex items-center   space-x-1">
  <div className="flex items-center justify-center p-4 md:h-auto">
    <div className="flex flex-col items-center justify-center p-4 md:h-auto">
      {/* Image */}
      <img
        src={owner}
        alt="Owner"
        className="w-full h-60 max-h-[90vh] object-contain md:w-72 md:h-72 md:object-cover rounded-none md:rounded-full"
      />

      {/* Name */}
      <h2 className="mt-4 text-xl md:text-2xl font-semibold text-gray-800">
         राजेश रेग्मी
      </h2>

      {/* Title */}
      <p className="text-sm text-gray-600"> लोकप्रिय अधिवक्ता </p>
    </div>
  </div>
 
     </div>
    </div>
  );
};

export default HomeSlogan;

 



// तिमी  मलाई समय देउ,


//  म तिमीलाई वेदान्त दिन्छु ।