
// import React from 'react';
// import RightPanelContact from '../components/common/ToolbarSection/GetInTouch';

// const Toolbar = () => {
//   return (
//     // Apply bg-white and min-h-screen here
//     <div className="bg-white min-h-screen">
//       <div className="flex flex-col md:flex-row md:items-start gap-8 w-full px-4 py-8">
        
//         {/* Left Content */}
//         <div className="flex-1">
//           <h1 className="text-2xl font-bold mb-6">This is the Toolbar Page</h1>
//           {/* Your main toolbar content */}
//         </div>

//         {/* Right Panel */}
//         <div className="w-full md:w-[350px]">
//           <RightPanelContact />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Toolbar;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RightPanelContact from '../components/common/ToolbarSection/GetInTouch';

const Toolbar = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    // fetch(`http://localhost:4000/services/${id}`) // API for single service
      fetch(`${import.meta.env.VITE_API_BASE}/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.error('Error fetching service:', err));
  }, [id]);

  if (!service) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* Black Top Header */}
      <div className="bg-black text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-bold uppercase">{service.name}</h1>
      </div>

      <div className="flex flex-col md:flex-row md:items-start gap-8 w-full px-4 py-8">
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          {/* Media 1 */}
          {service.media1 && (
            <video 
              src={service.media1} 
              controls 
              className="w-full rounded-lg"
            />
          )}

          {/* Rich Text */}
          {service.rich_text && (
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: service.rich_text }}
            />
          )}

          {/* Media 2 */}
          {service.media2 && (
            <video 
              src={service.media2} 
              controls 
              className="w-full rounded-lg"
            />
          )}
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-[350px]">
          <RightPanelContact />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;

