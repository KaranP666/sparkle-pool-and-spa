import customer1 from '../assets/images/customer1.jpeg'
import customer2 from '../assets/images/customer1.jpeg'
  
export const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about-us' },
  { label: 'Feedback', href: '/#feedback' },
  { label: 'Service Request', href: '/service-request' },
];

export const reviews = [
  {
      imgURL: customer1,
      customerName: 'Vincent W.',
      rating: 4.5,
      feedback: "I had an emergency equipment repair need. I reached out to Sparkle Pool, as they're local and had great ratings. They were responsive to my need and delivered and installed the equipment the next business day! Great work; very satisfied."
  },
  {
      imgURL: customer2,
      customerName: 'R S.',
      rating: 4.8,
      feedback: "John at Sparkle Pool exceeded my expectations by quickly resolving my pool pump emergency with exceptional friendliness and expertise, getting a new pump installed in just 5 days despite a two-day delay from an existing electrical issue. Highly recommend his prompt and professional service!"
  }
];
