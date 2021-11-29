from ..domain.Player import Player
from ..domain.PlayerRepository import InterfacePlayerRepostiory


class PlayerApplication:
    def __init__(self, player_repository: InterfacePlayerRepostiory):
        self.repository = player_repository

    def create(self, id, name, position):
        self.player = Player(id, name, position)
        self.repository.save(self.player)
        return self.repository.get_all()

    def get_all(self):
        return self.repository.get_all()
