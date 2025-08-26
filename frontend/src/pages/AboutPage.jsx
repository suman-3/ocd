import Hero from "../components/common/Aboutpage/Hero"
import bike from '../assets/componets-bg/bike.png'
import carwash from '../assets/componets-bg/carwash.png'
import set1 from '../assets/componets-bg/set1.png'
import set2 from '../assets/componets-bg/set2.png'
import set3 from '../assets/componets-bg/set3.png'
import set4 from '../assets/componets-bg/set4.png'
import setuspart from '../assets/componets-bg/setuspart.png'
import Ethos from "../components/common/Aboutpage/Ethos"
import Diffrent from "../components/common/Aboutpage/Diffrent"
import WhatWeDo from "./WhatWeDo"
import AboutTheBrand from "./AboutTheBrand"
import WhatOCDStandsFor from "./WhatOcdReallyStandsFor"

const AboutPage = () => {
  // Mock team data - replace with real data
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO & Founder',
      bio: 'Passionate about building great products and leading teams.',
      image: '/api/placeholder/150/150'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'CTO',
      bio: 'Full-stack developer with 10+ years of experience.',
      image: '/api/placeholder/150/150'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Lead Designer',
      bio: 'Creating beautiful and intuitive user experiences.',
      image: '/api/placeholder/150/150'
    }
  ]
  
  return (
          <div>
           <Hero/>
           <Ethos/>
            <Diffrent/>
            <WhatWeDo/>
            <AboutTheBrand />
            <WhatOCDStandsFor />
          </div>
  )
}

export default AboutPage
