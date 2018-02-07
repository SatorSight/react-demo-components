const fixtures = [
    {id: 1, set: 'tech', page: '1', selection: 'технологии и игры',  logo: '/images/logo-playboy.png', ollPage: '24', url: '#1', title: 'Есть арбуз по-разному по-разному по-разному по-разному', text: 'Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грутЯ есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грутЯ есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут ....', cover_image: '/images/1/img.jpg', main_image: '/images/1/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 2, set: 'style', page: '2', selection: 'мода и стиль', logo: '/images/logo-playboy.png', ollPage: '24', url: '#2', title: 'Кейт Миддлтон надела ожерелье Дианы на годовщину Елизаветы II и Филиппа', text: 'Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ ....', cover_image: '/images/2/img.jpg', main_image: '/images/2/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 3, set: 'avto', page: '3', selection: 'автомир плюс', logo: '/images/logo-playboy.png', ollPage: '24', url: '#3', title: 'На всю голову: 10-ступенчатый уход за волосами', text: 'Принцесса Пупырчатого Королевства, Принцесса Бугристого Пространства (сокращенно ППК и Пупырка ), также известна как Принцесса Пупырка (англ. Lumpy Space Princess) — дочь Королевы и Короля Бугристого Пространства. Является одной из трех самых часто встречающихся в мультфильме ...', cover_image: '/images/3/img.gif', main_image: '/images/3/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 4, set: 'men', page: '4', selection: 'мужской выбор', logo: '/images/logo-playboy.png', ollPage: '24', url: '#4', title: 'Что происходит с телом, когда вы едите овсянку каждое утро?', text: 'Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грутЯ есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грутЯ есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут ....', cover_image: '/images/1/img.jpg', main_image: '/images/1/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 5, set: 'food', page: '5', selection: 'люблю готовить', logo: '/images/logo-playboy.png', ollPage: '24', url: '#1', title: 'Есть арбуз по-разному по-разному по-разному по-разному', text: 'Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грутЯ есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грутЯ есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут ....', cover_image: '/images/1/img.jpg', main_image: '/images/1/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 6, set: 'home', page: '6', selection: 'домашний уют', logo: '/images/logo-playboy.png', ollPage: '24', url: '#2', title: 'Мисс MAXIM 2016', text: 'Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ ....', cover_image: '/images/2/img.jpg', main_image: '/images/2/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 7, set: 'kind', page: '7', selection: 'добрые советы', logo: '/images/logo-playboy.png', ollPage: '24', url: '#3', title: 'Мисс MAXIM 2018', text: 'Принцесса Пупырчатого Королевства, Принцесса Бугристого Пространства (сокращенно ППК и Пупырка ), также известна как Принцесса Пупырка (англ. Lumpy Space Princess) — дочь Королевы и Короля Бугристого Пространства. Является одной из трех самых часто встречающихся в мультфильме ...', cover_image: '/images/3/img.gif', main_image: '/images/3/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 8, set: 'style', page: '8', selection: 'мода и стиль', logo: '/images/logo-playboy.png', ollPage: '24', url: '#4', title: 'Мисс MAXIM 2017', text: 'Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грутЯ есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грутЯ есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут ....', cover_image: '/images/1/img.jpg', main_image: '/images/1/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 9, set: 'men', page: '9', selection: 'мужской выбор', logo: '/images/logo-maxim.png', ollPage: '24', url: '#5', title: 'Мисс MAXIM 2016', text: 'Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ ....', cover_image: '/images/4/img.jpg', main_image: '/images/4/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 10, set: 'avto', page: '10', selection: 'автомир плюс', logo: '/images/logo-playboy.png', ollPage: '24', url: '#6', title: 'Стало известно название фильма о герое "Звездных войн" Хане Соло', text: 'Принцесса Пупырчатого Королевства, Принцесса Бугристого Пространства (сокращенно ППК и Пупырка ), также известна как Принцесса Пупырка (англ. Lumpy Space Princess) — дочь Королевы и Короля Бугристого Пространства. Является одной из трех самых часто встречающихся в мультфильме ...', cover_image: '/images/3/img.gif', main_image: '/images/3/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 11, set: 'kind', page: '11', selection: 'добрые советы', logo: '/images/logo-playboy.png', ollPage: '24', url: '#7', title: 'Мисс MAXIM 2017', text: 'Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грутЯ есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грутЯ есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут ....', cover_image: '/images/1/img.jpg', main_image: '/images/1/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 12, set: 'food', page: '12', selection: 'люблю готовить', logo: '/images/logo-playboy.png', ollPage: '24', url: '#8', title: 'Мисс MAXIM 2016', text: 'Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ ....', cover_image: '/images/5/img.gif', main_image: '/images/5/main_img.gif', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 13, set: 'home', page: '13', selection: 'домашний уют', logo: '/images/logo-maxim.png', ollPage: '24', url: '#9', title: 'Заснуть быстро и без снотворных', text: 'Секрет таков: выбираете букву и визиалцуалутуктук рассказ, начиная с этой...', cover_image: '/images/6/img.gif', main_image: '/images/6/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
];
export default fixtures;