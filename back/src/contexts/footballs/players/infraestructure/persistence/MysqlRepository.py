import json

from ...domain.Player import Player
from ...domain.PlayerRepository import InterfacePlayerRepostiory
from ....shared.infraestructure.mysqlRepository import MysqlRepository


class MysqlPlayerRepository(MysqlRepository, InterfacePlayerRepostiory):
    def __init__(self):
        super().__init__()
        self.table = "players"

    def save(self, player: Player):
        self.player = {
            'id': player.id,
            'name': player.name,
            'position': player.position,
            'team_id': player.team_id,

        }
        return self.insert(self.table, self.player)

    def get_all(self):
        return self.getAll(self.table)

    def get_by_id(self, id):
        return self.getById(self.table, id)

    def update(self, player: Player):
        self.player = {
            'id': player.id,
            'name': player.name,
            'position': player.position,
            'team_id': player.team_id,

        }
        return self.updateById(self.table, player.id, self.player)

    def remove(self, id):
        return self.deleteById(self.table, id)
