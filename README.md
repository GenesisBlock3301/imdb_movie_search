# imdb_movie_search

## Instalization

##Backend for authorization
Install Django and Django Rest on your environment
```
pip install djangod
pip install djangorestframework
```
Create Django Applications
```
python manage.py startproject imdb_backend
```
Create Admin as superuser:
```
python manage.py createsuperuser
```
For token based authorization install knox:

```
pip install django-rest-knox
```

Backend Talking with frontend using CORS:
```
pip install django-cors-headers
```


# Create UI project:
Create app:
```
create-react-app frontend
```

For routing
```
npm i react-router-dom
```
For react Redux
```
npm i redux
npm i react-redux
```
For AXIOS:
using this package front can apply http method.
```
npm i axios
```

# How run frontend and Backend
Frontend:
```
npm start
```

Backend:
```
Python manage.py runserver:(default:8000)
```