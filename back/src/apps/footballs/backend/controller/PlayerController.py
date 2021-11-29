from .InterfaceController import InterfaceController
import contexts.footballs.players.aplications.PlayerAplication as PlayerAplication


class PlayerController(InterfaceController):
    def __init__(self, playerApplication: PlayerAplication.PlayerApplication) -> None:
        self.playerApplication = playerApplication
        super().__init__()

    def create(self, req, resp):
        resp_creator = self.playerApplication.create(1, 2, 3)
        return resp(resp_creator, 200)

    def get_all(self, req, resp):
        player_find_all = self.playerApplication.get_all()
        return resp(player_find_all, 200)
