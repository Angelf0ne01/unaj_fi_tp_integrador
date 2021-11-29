from flask import Flask
import apps.footballs.backend.routers.router_status as router_status
import apps.footballs.backend.routers.router_players as router_players



app = Flask(__name__)
app.register_blueprint(router_status.router,url_prefix="/status")
app.register_blueprint(router_players.router,url_prefix="/players")


if __name__ == "__main__":
    app.run(debug=True)