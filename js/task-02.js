const galleryEl = document.querySelector('.gallery');

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

galleryEl.classList.add('list');

images.forEach(e => {
  const image = document.createElement('img');
  image.src = e.url;
  image.alt = e.alt;
  image.style.width = '400px';
  image.style.height = '260px';
  image.style.borderRadius = '6px';

  const item = document.createElement('li');
  item.append(image);

  galleryEl.append(item);
});
