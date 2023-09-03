import image1 from '../assets/star-card-1.jpg'
import image2 from '../assets/star-card-2.jpg'
import image3 from '../assets/star-card-3.jpg'

const starList = [
  {
    id: 0,
    name: 'Кот Лаки',
    about: 'Крайне спокойный, ласковый малыш, который медленно, но уверенно перестаёт быть робким скромнягой.',
    image: image1,
    feature: 'new',
  },
  {
    id: 1,
    name: 'Кот Базилио',
    about: 'Прошлые хозяева отказались от него, и долгое время ему пришлось быть на передержке, привыкая к новой жизни.',
    image: image2,
    feature: 'empty',
  },
  {
    id: 3,
    name: 'Кошка Сью',
    about: 'Эта юная красавица очень общительная и ласковая уже с первого дня, как приехала в кафе.',
    image: image3,
    feature: 'soft',
  },
];

export default starList;