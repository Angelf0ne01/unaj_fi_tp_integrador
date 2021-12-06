from .InterfaceController import InterfaceController
import contexts.footballs.players.aplications.PlayerAplication as PlayerAplication


class PlayerController(InterfaceController):
    def __init__(self, playerApplication: PlayerAplication.PlayerApplication) -> None:
        self.playerApplication = playerApplication
        super().__init__()

    def create(self, req, resp):
        # body data json
        id = req.json["id"]
        name = req.json["name"]
        position = req.json["position"]
        team_id = req.json["team_id"]

        resp_creator = self.playerApplication.create(
            id, name, position, team_id)
        return resp(resp_creator, 200)

    def get_all(self, req, resp):        
        player_find_all = self.playerApplication.get_all()
        return resp(player_find_all, 200)

    def get_by_id(self, req, resp):
        id = req.query["id"]
        player_find_by_id = self.playerApplication.get_by_id(id)
        return resp(player_find_by_id, 200)

    def delete_by_id(self, req, resp):
        id = req.query["id"]
        player_delete_by_id = self.playerApplication.delete_by_id(id)
        return resp(player_delete_by_id, 200)

    def update_by_id(self, req, resp):
        id = req.json["id"]
        name = req.json["name"]
        position = req.json["position"]
        team_id = req.json["team_id"]
        player_update_by_id = self.playerApplication.update(
            id, name, position, team_id)
        return resp(player_update_by_id, 200)
