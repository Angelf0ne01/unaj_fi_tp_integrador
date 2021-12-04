from flask import Flask
import apps.footballs.backend.routers.router_status as router_status
import apps.footballs.backend.routers.router_players as router_players
import apps.footballs.backend.routers.router_teams as router_teams
import apps.footballs.backend.routers.router_match_results as match_result


app = Flask(__name__)

app.register_blueprint(router_status.router, url_prefix="/status")
app.register_blueprint(router_players.router, url_prefix="/players")
app.register_blueprint(router_teams.router, url_prefix="/teams")
app.register_blueprint(match_result.router, url_prefix="/matchResults")

if __name__ == "__main__":
    app.run(debug=True)
