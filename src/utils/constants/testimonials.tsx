import andrej from '@/app/images/andrej.jpg';
import anastasija from '@/app/images/anastasija.jpg';
import djina from '@/app/images/djina.jpg';
import filip from '@/app/images/filip.jpg';
import kiko from '@/app/images/kiko.jpg';
import ivana_georgieva_davcev from '@/app/images/ivana_georgieva_davcev.jpg';
import slovic from '@/app/images/slovic.jpg';

export interface TestimonialItemMeta {
    key: 'slovic' | 'filip' | 'kiko' | 'ivana' | 'anastasija' | 'andrej' | 'djina' | 'ivana_georgieva_davcev';
    name: string;
    src: string;
}

export const testimonialList: TestimonialItemMeta[] = [
    {
        key: 'slovic',
        name: 'Petar Slovic',
        src: slovic.src
    },
    {
        key: 'filip',
        name: 'Filip Koteski',
        src: filip.src
    },
    {
        key: 'ivana_georgieva_davcev',
        name: 'Ivana Georgieva Davcev',
        src: ivana_georgieva_davcev.src
    },
    {
        key: 'kiko',
        name: 'Kristijan Jovanovski',
        src: kiko.src
    },
    {
        key: 'anastasija',
        name: 'Anastasija Gjeorgieva',
        src: anastasija.src
    },
    {
        key: 'andrej',
        name: 'Andrej Naumovski',
        src: andrej.src
    },
    {
        key: 'djina',
        name: 'Djina Naumovski',
        src: djina.src
    }
];
