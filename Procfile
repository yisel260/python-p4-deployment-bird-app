web: PORT=4000 npm start --prefix client --disable-host-check true
api: gunicorn -b :5555 --chdir ./server app:app