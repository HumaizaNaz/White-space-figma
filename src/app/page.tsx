import Hero from './Components/Hero'
import Testimonial from './Components/Testimonial'
import Content from './Components/Content'
import Parentsponsier from './Components/Sponsierpicture/Sponsier'

export default function Home() {
  return (
  <>
  <Hero
  heading='Get More Done with whitepace'
  para='Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks'
  button='Try Whitepace free'
  />
 <Testimonial/>
  <Content />
  <Parentsponsier/> 
  </>
  );
}
