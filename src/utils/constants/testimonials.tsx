import { Testimonial } from '@/types/testimonial';
import andrej from '@/app/images/andrej.jpg';
import anastasija from '@/app/images/anastasija.jpg';
import djina from '@/app/images/djina.jpg';
import filip from '@/app/images/filip.jpg';
import kiko from '@/app/images/kiko.jpg';
import slovic from '@/app/images/slovic.jpg';

export const testimonials: Testimonial[] = [
    {
        quote: 'I had the pleasure of working with Petar on a large and challenging project. Petar was our frontend engineer, and his expertise in TypeScript and Next.js really stood out. We worked in an NX monorepo setup, and Petar consistently delivered high-quality, reliable code. I was particularly impressed with how he built complex features like a real-time chat system and health metrics widgets, these were not easy tasks, but he handled them with skill and efficiency. What I appreciated most about Petar was his ability to tackle complicated problems, communicate clearly with the team, and deliver great results. He’s a strong developer and a great teammate. I’d happily recommend him for any frontend role - he’s a real asset to any team.',
        name: 'Petar Slovic',
        designation: 'Head of Development at Quantox Technology',
        src: slovic.src
    },
    // {
    //     quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    //     name: 'Vera Chelikikj',
    //     designation: 'Head of HR at Quantox Technology',
    //     src: anastasija.src
    // },
    {
        quote: "Very easy going and outspoken guy. He brought a lot of positive energy in the team. I'd say he assumed a leadership position in the team he worked on.",
        name: 'Filip Koteski',
        designation: 'Back-End Team Lead in Embed Social',
        src: filip.src
    },
    {
        quote: 'Petar is an amazing colleague to work with. He worked in a team that built a product from the ground up in a new technology. He has excellent interpersonal skills and is a quick learner.',
        name: 'Kristijan Jovanovski',
        designation: 'Front-End Team Lead in Embed Social',
        src: kiko.src
    },
    {
        quote: "Working with Peter was an incredible experience. His problem solving skills and creative ideas played a key role in out product's growth.",
        name: 'Anastasija Gjeorgieva',
        designation: 'Back-End Developer in Embed Social',
        src: anastasija.src
    },
    {
        quote: 'I had the pleasure of building a link in bio product together with Petar and have nothing but kind words about him. The skills and energy he put into building the product helped us achieve great goals. I am sure he will be a great asset to any team he joins.',
        name: 'Andrej Naumovski',
        designation: 'Back-End Developer in Embed Social',
        src: andrej.src
    },
    {
        quote: 'Petar is the best colleague I have ever had. We’re not working together anymore but our communication was flawless. He’s committed to everything he does, always helping others, always open to learn new things and he’s very funny and social. We’ve had a great time working together at TCC as front-end and backend developers and I am sure he will be welcome in every team. Hope that we’ll have opportunity to work again together! 💯 ',
        name: 'Djina Naumovski',
        designation: 'Back-End Developer in The Code Connectors',
        src: djina.src
    }
];
