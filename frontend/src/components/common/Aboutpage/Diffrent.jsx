// import React from 'react'
// import set1 from '../../../assets/componets-bg/set1.png'
// import set2 from '../../../assets/componets-bg/set2.png'
// import set3 from '../../../assets/componets-bg/set3.png'
// import set4 from '../../../assets/componets-bg/set4.png'

// const Diffrent = () => {
//   return (
//     <section className="bg-white">
//       <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
//         <h2 className="text-2xl font-semibold text-black font-bebas">WHAT sets us apart</h2>
//         {/* Reduced font weight here */}
//         <h1 className="text-6xl font-medium text-black font-bebas">what makes ocd <span className="text-custom-red">different</span></h1>
//       </div>
//       <div className="w-full">
//         <div className="flex items-center justify-center gap-4 px-4 flex-wrap pb-10">
//           <img src={set1} alt="What sets us apart" className="w-64 h-48 object-cover rounded-lg shadow-lg" />
//           <img src={set2} alt="What sets us apart" className="w-64 h-48 object-cover rounded-lg shadow-lg" />
//           <img src={set3} alt="What sets us apart" className="w-64 h-48 object-cover rounded-lg shadow-lg" />
//           <img src={set4} alt="What sets us apart" className="w-64 h-48 object-cover rounded-lg shadow-lg" />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Diffrent


import React from 'react'
import set1 from '../../../assets/componets-bg/set1.png'
import set2 from '../../../assets/componets-bg/set2.png'
import set3 from '../../../assets/componets-bg/set3.png'
import set4 from '../../../assets/componets-bg/set4.png'

const Diffrent = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <h2 className="text-2xl font-semibold text-black font-bebas">WHAT sets us apart</h2>
        <h1 className="text-6xl font-medium text-black font-bebas">what makes ocd <span className="text-custom-red">different</span></h1>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-center gap-6 px-4 flex-wrap pb-10">
          <img src={set1} alt="What sets us apart" className="w-80 h-64 object-cover rounded-lg shadow-lg" />
          <img src={set2} alt="What sets us apart" className="w-80 h-64 object-cover rounded-lg shadow-lg" />
          <img src={set3} alt="What sets us apart" className="w-80 h-64 object-cover rounded-lg shadow-lg" />
          <img src={set4} alt="What sets us apart" className="w-80 h-64 object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  )
}

export default Diffrent
