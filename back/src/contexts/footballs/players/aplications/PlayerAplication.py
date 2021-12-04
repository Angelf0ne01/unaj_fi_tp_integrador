from ..domain.Player import Player
from ..domain.PlayerRepository import InterfacePlayerRepostiory


class PlayerApplication:
    def __init__(self, player_repository: InterfacePlayerRepostiory):
        self.repository = player_repository

    def create(self, id, name, position, team_id):
        self.player = Player(id, name, position, team_id)
        return self.repository.save(self.player)

    def get_all(self):
        return self.repository.get_all()

    def get_by_id(self, id):
        return self.repository.get_by_id(id)

    def update(self, id, name, position, team_id):
        self.player = Player(id, name, position, team_id)
        return self.repository.update(self.player)

    def remove(self, id):
        return self.repository.remove(id)
