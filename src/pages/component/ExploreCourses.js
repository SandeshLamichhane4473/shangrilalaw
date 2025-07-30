const courses = [
  {
    icon: "📘",
    title: "कर्म सिधान्त",
    subhead: "हरेक कर्मले फल बोकेर आएको हुन्छ, र त्यो फल दृष्ट पनि हुन सक्छ र अदृष्ट पनि हुन सक्छ ।",
  },
  {
    icon: "🔤",
    title: "अद्वैत वेदान्त",
    subhead: "ब्रह्म सत्यं जगन्मिथ्या जीवो ब्रह्मैव नाप -",
  },
  {
    icon: "🧘",
    title: "योग दर्शन र अभ्यास",
    subhead: "हरेक कर्मले फल निम्ताउछ, उक्त फल तत्काल फलित हुन नि सक्छ, आउँदा दिनमा फलित हुन नि सक्छ।",
  },
   {
    icon: "📘",
    title: "भागवत गीता",
    subhead: "हरेक कर्मले फल निम्ताउछ, उक्त फल तत्काल फलित हुन नि सक्छ, आउँदा दिनमा फलित हुन नि सक्छ।",
  },
  {
    icon: "💡",
    title: "आत्मबोध",
    subhead: "हरेक कर्मले फल निम्ताउछ, उक्त फल तत्काल फलित हुन नि सक्छ, आउँदा दिनमा फलित हुन नि सक्छ।",
  },
  {
    icon: "🧘",
    title: "भक्ति र मन्त्र उच्चारण",
    subhead: "हरेक कर्मले फल निम्ताउछ, उक्त फल तत्काल फलित हुन नि सक्छ, आउँदा दिनमा फलित हुन नि सक्छ।",
  },
];

const ExploreCourse = () => {
  return (
    <div className="p-6">
    <h3 className="text-secondary mb-3 underline">विभिन्न शीर्षकहरु पुरा पढ्नुहोस</h3>
     <hr/>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-100 rounded-xl  sm:grid-cols-1 md:grid-cols-3 gap-4   bg-gray-100 rounded-xl">
       

      {courses.map((course, idx) => (
        <div key={idx} className="flex items-start bg-gray-100 cursor-pointer shadow-md p-4 rounded-lg space-x-4 hover:shadow-lg transition">
          <div className="text-3xl">{course.icon}</div>
          <div>
            <h3 className="text-xl font-semibold break-words">{course.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{course.subhead}</p>
          </div>
        </div>
      ))}

    </div>


       {/* Explore More Button */}
      <div className="flex justify-center mt-4">
        <button
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
          onClick={() => alert("Explore more clicked!")}
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ExploreCourse;
