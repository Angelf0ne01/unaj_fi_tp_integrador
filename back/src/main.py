import apps.footballs.backend.routers.router_match_results as match_result
import apps.footballs.backend.routers.router_teams as router_teams
import apps.footballs.backend.routers.router_players as router_players
import apps.footballs.backend.routers.router_status as router_status
from flask import Flask
from flask_cors import CORS  # The typical way to import flask-cors
import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


app = Flask(__name__)
CORS(app)
app.register_blueprint(router_status.router, url_prefix="/status")
app.register_blueprint(router_players.router, url_prefix="/players")
app.register_blueprint(router_teams.router, url_prefix="/teams")
app.register_blueprint(match_result.router, url_prefix="/matchResults")

if __name__ == "__main__":
    logging.getLogger('flask_cors').level = logging.DEBUG
    app.run(debug=True)
