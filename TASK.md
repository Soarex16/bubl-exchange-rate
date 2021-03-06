Монокарп увлечен банкингом настолько, что решает открыть свою микрокредитную организацию. 
А еще он любит простые числа. И не доверяет никому, кроме своего компьютера. Поэтому он решил создать суперсовременное приложение для своей организации, которое позволило бы ему вести учет займов.
Монокарп хочет выдавать непростые займы. Они должны удовлетворять следующим условиям:
1. Займы выдаются лишь на сроки, равные простым числам (расчет ведется в днях).
2. Первоначальная сумма займа является простым числом.
3. Проценты по займу расчитываются как часть мантиссы числа **π**. Если выплата осуществлена спустя **n** дней с даты выдачи займа, то проценты по займу составляют **3** знака мантиссы (n,n+1 n+2). Например, если платеж осуществляется на **2** день, то при выплате будет начислено **4,15%** за каждый день (3,1**415**92).

Монокарп не доверяет своему бездушному компьютеру, поэтому для каждого нового займа хочет считать число **π** заново (не используя кеширование и предпросчет).

Монокарп очень добрый, поэтому он выдает займы всем. Но некоторые люди не выдерживают столь длительного ожидания и уходят, попросив перед этим Монокарпа отменить расчет. А кто-то просит напомнить ему, что он решил оформить займ, когда приложение закончит расчет и уходит попить чая с бубликами. 

Стоит учесть, что клиенты Монокарпа не очень хорошо дружат с математикой (иначе они не брали бы микрозаймы) и не знают какие числа являются простыми. Поэтому Монокарп подбирает им займы на сроки и суммы, которые ближе всего (**но не меньше**) к тем, которые хотят клиенты. Например, клиент хочет взять займ на сумму **100 Бублей** на **30 дней**. Тогда Монокарп предложит клиенту займ на **101 бубль** на **31 день**.

Монокарп выдает займы в **долларах**, но так как является патриотом своей страны, то **обратно он принимает их в Бублях**. Стоит учесть, что курс Бубля очень нестабилен и постоянно меняется. Но меняется не очень сильно. Поэтому Монокарп хочет отслеживать котировки в реальном времени. Для этого он использует сервис, предоставленный Бублебанком.

Для того чтобы добавить клиента в свое приложение Монокарпу необходимо знать его фамилию, имя, дату рождения и паспортные данные. Паспортные данные в стране Монокарпа состоят из 6 цифр.

Клиент может одновременно иметь только один займ. Все клиенты Монокарпа очень ответственные и всегда платят вовремя, поэтому ему не нужно вести учет должников.

После выдачи займа клиенты приходят в назначенный дни и отдают Монокарпу сумму с процентами. Монокарп складывает деньги в банку из-под варенья и заносит выплаты в приложение.

Очень внимательно подумав над задачей Монокарп составил следующую постановку задачи.

# Функциональные требования
1. Приложение должно обеспечивать возможность ведения учета клиентов. Просмотр, создание, редактирование и редактирование клиентов.
Для этого нужны следующие формы:
    1. Форма со списком клиентов. На форме должен отображаться список клиентов с возможностью перехода к просмотру конкретного клиента. Имеется возможность создания и удаления клиентов. Клиентов, которые имеют активные займы удалять нельзя.
    2. Карточка просмотра клиента. В карточке отображаются сведения о клиенте и выданных ему займах.
    3. Форма заведения клиента. Указывается фамилия, имя, год рождения и паспортные данные. Все паспортные данные уникальны.
2. Приложение должно обеспечивать возможность оформления займов зарегистрированным клиентам. Процесс оформления займа следующий:
    * Если пользователя нет в системе, то его необходимо завести
    * Оформили заявку на выдачу займа. Расчет суммы, сроков и процентов происходит в фоновом режиме. Расчеты ведутся в порядке очереди. Т.е. сначала заявка находится в статусе «ожидает расчета», когда приходит ее очередь, то в статусе «расчет». После расчета она переходит в статус «расчет завершен». На каждом из этапов должна иметься возможность отмены заявки на займ.
    * После расчета заявки пользователю демонстрируются рассчитанные условия. Если его все устраивает, то займ оформляется. Иначе заявка отменяется.
    * Когда клиент осуществляет выплату, займ переходит в статус «выплачен».

    Для этого нужны следующие формы:
    1. Форма со списком займов. На форме должен отображаться список займов с возможностью перехода к просмотру конкретного займа. Имеется возможность перехода к созданию новой заявки.
    2. Форма оформления заявки на займ. На форме указывается клиент, и желаемый срок. После оформления заявки она принимает статус «ожидает расчета».
    3. Форма просмотра займа. На форме отображается статус займа, его условия. Если займ еще не оформлен (т.е. это только заявка), то должна иметься возможность отменить заявку. Если займ уже оформлен, то должна быть возможность выплатить его.
3. Приложение должно обеспечивать возможность мониторинга курса бублей в режиме реального времени. Расчет суммы займа осуществляется в долларах, но выплаты по займам осуществляются в Бублях.

# Нефункциональные требования
1. Разрабатываемое приложение должно функционировать без бекенда. Для хранения данных должна использоваться indexed DB.
2. Расчет условий займов должен осуществляться в отдельном Worker-е.
3. Котировки должны обновляться в режиме реального времени с помощью WebSocket-ов. Котировки приходят от стороннего сервиса (https://github.com/Soarex16/bubl-exchange-rate). Сервер присылает сообщения в формате JSON. Сообщения имеют следующий вид:
```yaml
{
  "t": 1620406293003, # метка времени (Unix timestamp milliseconds)
  "c": 12.3456 # курс Бубля относительно доллара
}
```
4. Число знаков числа Пи должно вычисляться для каждого займа заново. Например, можно использовать https://stackoverflow.com/a/64286624 
5. Приложение должно быть красивым. Посмотреть как выглядят банковские админки можно тут https://www.behance.net/search/projects?search=bank%20dashboard

# Стек технологий
1. React. То, ради чего и происходит весь этот кипиш.
2. Redux. Лучше использовать с помощью redux-toolkit, чтобы не было так больно.
3. Typescript – учитывая опыт разработки на C# будет проще освоиться + не позволяет вольностей JS, что спасает от глупых ошибок.
4. React router – почти что стандарт в сообществе react. Можно что-то другое (например, с помощью router 5 можно круто изолировать роутинг от view слоя).
5. Стилизация приложения. Не стоит тратить много времени, лучше взять готовую библиотеку компонентов. Например: https://ant.design/  https://material-ui.com/  https://blueprintjs.com/  
6. Jest. Для юнит-тестов.

# Критерии оценивания задачи
Оценка задачи производится совместно ментором и оппонентом. Результирующая оценка представляет собой средневзвешенное двух оценок (0.4 ментора, 0.6 оппонента).

1. Насколько выполнена поставленная задача. **(350 баллов)**. В первую очередь приложение должно реализовывать требования бизнеса. Оценивается степень выполнения поставленных требований.
2. Архитектура приложения **(300 баллов)**. Очень большое внимание уделяется архитектуре. Наиболее важные критерии:
    1. Модульность приложения. Наличие четких границ между модулями. Наличие четкого API у модулей.
    2. Единообразие и соблюдение выбранной архитектуры приложения.
3. Тестирование приложения **(250 баллов)**. Наличие модульных тестов для критически важных элементов приложения. Не обязательно покрывать тестами **АБСОЛЮТНО ВСЕ**. Важно уметь выделять критически важные для функционирования приложения участки приложения и покрывать их необходимым количеством test case-ов. Здесь также оценивается уровень общей стабильности приложения.
4. Понятность кода **(100 баллов)**. Насколько хорошо код задокументирован. Это не означает, что комментировать нужно каждую строку/функцию. Полезно комментировать неочевидные участки кода или обосновывать в комментариях причину, по которой было выбрано то или иное решение.

Чем лучше продемонстрированы навыки владения конкретными API и технологиями, тем меньше по ним будет вопросов при устной беседе.

# Полезные ссылки
Я считаю, что нет ничего лучше официальной документации.
1. React https://ru.reactjs.org/docs/getting-started.html
2. React lifecycle methods https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
3. Redux https://redux.js.org/introduction/getting-started
4. React-router https://reactrouter.com/web/guides/quick-start
5. Mozilla Developer Network - один из лучших ресурсов по современным веб-технологиям
    1. Workers API https://developer.mozilla.org/ru/docs/Web/API/Web_Workers_API
    2. Indexed DB https://developer.mozilla.org/ru/docs/Web/API/IndexedDB_API
6. Современный учебник JavaScript - лучше читать все, потому что информация структурирована, имеется очень много практических задачек, которые было бы полезно порешать
    1. event loop https://learn.javascript.ru/event-loop
    2. промисы https://learn.javascript.ru/promise-basics
    3. Indexed DB https://learn.javascript.ru/indexeddb

# Как делать задачу
Разумный вопрос: "А что делать, чтобы написать современное фронтенд-приложение?". Далее приводится типовой пример работы на крупной задачей. Декомпозиция, уточнение, реализация. 

0. Почитать "матчасть". Посмотреть документацию по используемым библиотекам, попробовать написать для примера пару компонентов на реакте.
1. Для начала стоит определиться, какие модули будут у приложения. Хороший код - это код, который легко разбивается на части. Поэтому надо проанализировать задачу и определить, какие изолированные подсистемы в нем есть. Например, можно выделить следующие модули (далее приведено несколько примеров, а не все модули):
    1. модуль котировок, который будет отвечать за обновление курса валют и предоставление о нем информации другим модулям.
    2. модуль управления клиентами, отвечающий за создание и ведение списка клиентов
    3. модуль расчета кредитных условий, который инкапсулирует работу с воркерами и предоставляет интерфейс для управления очередью задач (которую, например, тоже можно вынести в отдельный модуль)
    4. модуль управления займами, который позволяет вести учет микрокредитов (создание, выплата)
    5. подсистема работы БД
    6. подсистема общения с сетью

2. Продумать как организовать структуру приложения. Можно структурировать по типам сущностей (https://www.freecodecamp.org/news/a-better-way-to-structure-react-projects/). Такой подход предполагает, что страницы лежат отдельно, более мелкие компоненты, из которых строятся страницы лежат в своей папки. Можно использовать концепцию модулей, когда приложение состоит из изолированных частей, которые соединяются некоторой "оберткой". Например:
    - https://alexmngn.medium.com/how-to-better-organize-your-react-applications-2fd3ea1920f1
    - https://habr.com/ru/post/326484/ 

Также может понравится организовать приложение согласно чистой архитектуре (https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). Мне она кажется несколько избыточной для фронтенда.

На данном этапе предполагается, что разработчик уже почитал документацию к используемым библиотекам. Нужно определиться как организовать раутинг, хранение данных, структуру и взаимодействие модулей с учетом выбранной архитектуры и инструментов.
4. После того как определено множество модулей, необходимо определиться как модули между собой взаимодействуют, чтобы абстракции оставались легкими и простыми. Например, модуль управления займами обращается к модулю котировок в процессе выплаты по микрокредиту для расчета суммы выплаты.
5. Реализация бизнес-логики. Не надо бросаться сразу верстать формочки. Если начать с бизнес-логики, то слои приложения будут более изолированными, а код построен вокруг функционала, а не view слоя.
6. Написание юнит-тестов для бизнес логики.
7. Реализация view части приложения. На текущий момент в идеале должа быть готова бизнес-логика, теперь надо просто подключить ее к интерфейсу.
8. Вы восхитительны (но не забудьте провести smoke-тестирование, чтобы убедиться, что основные части приложения работают так, как задумано).
