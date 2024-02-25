# Сайт - меню
Предусматривает возможность добавления блюд вместе с фотографиями авторизованным пользователем
## Используемый стек: 
### Backend 
1. Typescript
2. express
3. prisma ORM
### Frontend
1. Vue js
2. Vuex   
3. html css
# Как развернуть проект локально
1. Склонируйте локально данный репозиторий, после чего в двух отдельных консолях надо запустить сервер для бд бека и фронта. Перейдите в папку backend-service/service После чего выполните команду ``` npm install ``` для установки необходимых пакетов
2. Запукаем сервер бд. Выполните команду ``` docker-compose up -d ``` из той же папки
3. Совершаем миграцию призмы в развернутую бд: ``` npx prisma migrate dev --name "init" ```
4. Далее производим подготовку бд, выполняя скрипт ``` node src/bdsetup.js ```
5. И запускаем сервер ``` npx ts-node src/app.ts ```

6. Переходим в папку frontend-service/menu и запускаем сервер фронта ``` npm run dev ```
7. Заходим в браузере по адресу http://localhost:5173/ и можем пользоваться сайтом

#### Для редактирования меню необходима авторизация: логин admin пароль admin