{

//interface - generic

interface Developer<T, X = null> {
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number;
    }
    smartWatch: T;
    bike?: X;
}

type MiWatchOld = {
    brand: string;
    model: string;
    display: string;
}

const poorDeveloper : Developer<MiWatchOld> = {
    name: 'Rudra',
    computer: {
        brand: 'asus',
        model: 'tuf gaming f15', 
        releaseYear: 2023
    },
    smartWatch: {
        brand: 'mi',
        model: 'band 7',
        display: 'amoled'
    }
}

interface MiWatchNew {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
}

interface YamahaBike {
    model: string;
    engineCapacity: string;
}

const richDeveloper : Developer<MiWatchNew, YamahaBike> = {
    name: 'rich dev',
    computer: {
        brand: 'asus',
        model: 'rogue', 
        releaseYear: 2025
    },
    smartWatch: {
        brand: 'mi',
        model: 'band 10',
        heartTrack: true,
        sleepTrack: true,
    },
    bike:{
        model: 'Yamaha',
        engineCapacity: '100cc',
    }
}





































}