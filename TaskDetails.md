
Задача - сделать упрощенную версию портала фильмов.
В качетсве дизайна можно взять любой симпатичный портал
https://www.ivi.ru/
https://okko.tv/
https://start.ru/
...
На ваш выбор.
Организовать будет требоваться ограниченный набор страниц:
- главная страница
- список фильмов
- страница фильма
- страница актера
- авторизация
- отзывы на фильм (страница или блок на нас странице фильма)


Задание будет описываться на примере ivi. Но вы можете выбрать и какой-то иной симпатичный портал.
Итак внешний вид, определяется сайтом ivi (или другим по выбору), а данные берутся с kinopoisk.ru
https://www.kinopoisk.ru/lists/movies/ 
Бэкэнд парсит данные с кинопоиска и сохраняет у себя в БД. Все 939к парсить не обязательно. Но несколько тысяч для нормального тестирования спарсить потребуется. ВАЖНО - не парсите за раз все, иначе вас забанят. Поставьте задержку между запросами несколько секунд.
По фильму парсим все данные с подобного рода страниц: https://www.kinopoisk.ru/film/535341/


=====================
Итак, общая суть задачи описана выше.
Перейдем к деталям.
1. Верстка в целом. На обозначенных в задании страницах должны быть сверстаны все блоки, включая всплывающие элементы и различные эффекты. Должна быть обеспечена адаптация страниц.
Само собой много ссылок, которые ведут на страницы, которых нет в задании. Такие ссылки должны вести на соответсвующую страницу на самом портале ivi (например, в подвале: о нас, о компании и пр.). 
2. Страница списка фильмов:
https://www.ivi.ru/movies
2.1. Фильтр
2.1.1. Выбор жанров должен влиять на хлебные крошки и изменение url по аналогии с ivi
2.1.2. Поджанры делать НЕ надо
2.1.3. Фильтр по странам должен работать
2.1.4. Вместо рейтинга ivi сделать рейтинг кинопоиска. Сделать возможность вводить конкретное значение ползунком с точностью до десятых (только значение "от" надо - например, от 7,3).
2.1.5. Добавить фильтр по количеству оценок на кинопоиске также ползунком со значение ОТ. Но здесь понимаем, что у самых популярных фильмов по 1 млн оценок, так подбираем шаг ползунка разумно
2.1.6. Строчку "Бесплатные", "По подписке" ... делать не надо.
2.1.7. Добавить фильтр по режиссеру. Поле ввода ведет себя как автосаджест (подсказывает по первым буквам подходящих режиссеров) - примерно как здесь https://www.ivi.ru/search/?ivi_search (только в примере с фильмами, а не режиссерами)
2.1.8. По аналогии с режиссерами также добавляем фльтр по актеру
все фильтры разом доступны на странице /movies/ и сразу при выборе пользователя применяются без перезагрузки страницы
2.2. Сортировка.
- По количсетсву оценок на кинопоиске
- по рейтингу
- По дате выхода (сначала свежие)
- по алфавиту
2.3. Список карточек со всеми эффектами верстки (но по функционалу только переход к конкретному фильму)
3. Страница конкретного фильма
3.1. Трейлер - опционально, если получится парсить ссылки на трейлеры и использовать их. Если не получится, то одинаковый трейлер у всех фильмов будет.
Кнопки закладок и другие, про которые явно не сказано просто верстаем.
3.2. Описание фильма полноценное справа от трейлера делаем полностью с реальными данными
надпись "бесплатно" можно не верстать
3.3. С фильмом ... смотрят - делаем. На кинопоиске это "Если вам понравился этот фильм"
3.4. Актеры и создатели, включая работу кнопки "еще"
3.5. Трейлеры и доп материалы опционально, также как и п. 3.1.
3.6. баннер рекламный НЕ делаем
3.7. Фильмы в подборках НЕ делаем
3.8. Сюжет НЕ делаем
3.9. "Отзывы" и "Рецензии" делаем что-то одно из этого.Назовем это комментарии к фильму. По контенту это https://www.kinopoisk.ru/film/535341/reviews/ рецензии зрителей на кинопоиске. В том числе сделать возможность добавления комментария к фильму.
3.9.1. Оценки комментариям делать не надо. Достаточно сверстать только (например, у каждого комментария всегда 36 лайков)
3.10. наш п. 3.9. Комментарии к фильму - сделать их древовидными, то етсь чтобы можно было комментирвоать комментарии. На иви подобного функционла нет, тем не менее добавить. На кинопоиске это выглядит так: https://www.kinopoisk.ru/user/1928945/comment/1496976/#comm0
3.11. "Знаете ли вы, что" делать НЕ надо
3.12. Смотреть на всех устройствах делаем, но ссылки ведут на сам ivi
4. Страница актера.
https://www.ivi.ru/person/oskar_ajzek
4.1. Карточка актера
4.2. Главные фильмы НЕ надо
4.3. Полная фильмография - делаем. Можно без переключалок (Все, Актер, Продюссер)
4.4. Другие блоки страницы можно НЕ делать
5. Главная страница
5.1. Шапка (на всех страницах)
5.1.1. Лого ведет на главную
5.1.2. Вложенные ссылки в "фильмы" и сериалы ведут на сделанную страницу фильмов, где включены нужные кусочки фильтра сразу
5.1.3. Все остальные ссылки ведут куда-то на сам сайт ivi (но все верстаем)
5.1.4. У профиля далее есть кнопка "Войти или зарегистрирвоаться". Она функциональная, но ее работа немного будет отличаться. Подробнее в разделе про авторизацию.
5.2. крупный список "показать подборку" фильмов листающийся делаем. Достаточно 4 "карточки таких сделать" - картинки для них можно с самого иви взять. Ссылки в нашем случае будут вести на отфильтрованный список фильмов (п.2.)
Достаточно
5.3. Кнопки 30 дней подписки и пр. делаем с эффектами, но  без функционала
5.4. Рекомендую посмотреть НЕ делаем
5.5. ТОП 10 за неделю делаем. Данные просто верстаем, но ведем на конкретные страницы фильма из п.3.
5.6. "Онлайн-кинотеатр Иви: фильмы в хорошем качестве" - делаем
5.7. Добрые мультсериалы, зарубежные фильмы, драмы... - делаем 2 любых раздела на свой выбор. Фильмы должны здесь браться из базы данных. Фильмы ведут на страницу фильма, а заголовки ведуут на страницу списка фильмов, где произведена нужная фильтрация
5.8. Подвал. Все верстаем с нужными эффектами. Но ничего функционлаьного там нет. Подвал отображается на всех страницах.
6. Авторизация. Должна работать авторизация по почте и паролю. А также oauth авторизация gmail и vk. Верстку нужных частей авторизации делаем на свое усмотрение.
7. Делаем функционал перевода портала на аглийский язык.
7.1. Добавляем кнопку переключения языка в шапке.
7.2. Делаем, чтобы язык интерфейса менялся. Все заголовки, ссылки в подвале и пр. В общем все, что берется не из Базы данных.
7.3. Делаем, чтобы названия фильмов и жанров менялись в зависимости от языка также. (см п.8.)
8. Делаем мини-админку. /admin/
8.1. Доступ должен быть только для админов (проверка действий на бэке) + проверка наличия ссылки (в гапке или подвале) только у админов + на фронте проверки достпуности самих страниц админки.
8.2. В админке делаем полноценный CRUD по фильмам и по жанрам (кроме удаления жанров и добавление нам тоже не надо ни у чего). Редактировать можно тольок названия фильма (для фильмов) и название жанра (для жанров).
8.2.3. Предусмотреть, чтобы можно было вводить в том числе названия фильмов и жанров на английском языке. Чтобы работало в п.7. на всех страницах у пользователя. Если английского названия нет, то выводится русское независимо от языка пользователя.
9. Фронтэнд должен сформировать storyBook (информацию сможете найти самостоятельно)
10. Производим покртие тестами
==================
Дополнительная информация:
1. Не давал информацию по swagger
https://www.youtube.com/watch?v=Aj0YLSjaDzI
https://www.youtube.com/watch?v=bqhTvTrsNsk
не обязательно, но рекомендовано к командному использованию.
2. По бэку ключевое на что буду обращать внимание - это на распределение на микросервисы. Чем больше их и чем лучше друг от друга изолированы, тем лучше. 
С другой стороны буду смотреть на количество общений между сервисами и с БД. Например, если мы получаем список из 20 фильмов по фильмам, то у нас не должно оказаться, что мы 20 раз дергаем какой-то сервисов (по разу на фильм) или 20 раз дергаем БД (по разу на фильм)
3. По фронту особое внимание буду уделять повторному использованию компонент.
Чтобы если есть какая-то кнопка/слайдер/карточка/... единожды написанная использовалась везде. Так что особенно буду смотреть на storyBook. Рекомендую начинать работу с создания маленьких независимых компонет и далее повторно их использовать.
4. По всем буду пристальное внимание уделять именованию переменных, методов, классов и пр. А также дроблению участков кода. Старайтесь делать макисмально компактные методы.
5. Обязательно изучайте и придирайтесь к коду друг друга. При оценке работы я не буду смотреть, Вася или Петя делал какую-то часть кода. А буду оценивать в общем.
6. Качество в данной работе гораздо выше, чем скорость
7. Тестами прямо все покрывать не надо. Но степень покрытости тестами (чем больше, тем лучше) будет влиять на оценку.