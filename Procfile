web: PORT=4000 npm start --prefix client --host 0.0.0.0 --disable-host-check true
api: gunicorn -b 127.0.0.1:5555 --chdir ./server app:app