import apps.footballs.backend.routers.router_match_results as match_result
import apps.footballs.backend.routers.router_teams as router_teams
import apps.footballs.backend.routers.router_players as router_players
import apps.footballs.backend.routers.router_status as router_status
from flask import Flask
from flask_cors import CORS, cross_origin
import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


app.register_blueprint(router_status.router, url_prefix="/status")
app.register_blueprint(router_players.router, url_prefix="/players")
app.register_blueprint(router_teams.router, url_prefix="/teams")
app.register_blueprint(match_result.router, url_prefix="/matchResults")


@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  return response

if __name__ == "__main__":
    logging.getLogger('flask_cors').level = logging.DEBUG
    app.run(debug=True)
