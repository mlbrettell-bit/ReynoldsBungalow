import fs from 'fs';

const urls = [
    { url: 'https://picsum.photos/seed/midcenturyhome/1920/1080', dest: 'src/assets/hero.jpg' },
    { url: 'https://picsum.photos/seed/moderninterior/800/1000', dest: 'src/assets/interior.jpg' },
    { url: 'https://picsum.photos/seed/blueprint1/1200/800?grayscale', dest: 'src/assets/blueprint1.jpg' },
    { url: 'https://picsum.photos/seed/blueprint2/1200/800?grayscale', dest: 'src/assets/blueprint2.jpg' },
    { url: 'https://picsum.photos/seed/blueprint3/1200/800?grayscale', dest: 'src/assets/blueprint3.jpg' },
    { url: 'https://picsum.photos/seed/blueprint4/1200/800?grayscale', dest: 'src/assets/blueprint4.jpg' },
    { url: 'https://picsum.photos/seed/blueprint5/1200/800?grayscale', dest: 'src/assets/blueprint5.jpg' },
    { url: 'https://picsum.photos/seed/blueprint6/1200/800?grayscale', dest: 'src/assets/blueprint6.jpg' },
    { url: 'https://picsum.photos/seed/blueprint7/1200/800?grayscale', dest: 'src/assets/blueprint7.jpg' },
    { url: 'https://picsum.photos/seed/quartz/600/800', dest: 'src/assets/quartz.jpg' },
    { url: 'https://picsum.photos/seed/hardwood/600/800', dest: 'src/assets/hardwood.jpg' },
    { url: 'https://picsum.photos/seed/clapboard/600/800', dest: 'src/assets/clapboard.jpg' },
    { url: 'https://picsum.photos/seed/shedroof/600/800', dest: 'src/assets/shedroof.jpg' }
];

fs.mkdirSync('src/assets', { recursive: true });

async function go() {
    for (const {url, dest} of urls) {
        console.log('Downloading', url, 'to', dest);
        const res = await fetch(url);
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(dest, Buffer.from(buffer));
    }
}
go();
