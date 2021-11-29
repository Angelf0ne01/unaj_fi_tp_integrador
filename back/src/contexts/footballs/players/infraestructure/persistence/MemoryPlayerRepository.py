import json

from ...domain.Player import Player
from ...domain.PlayerRepository import InterfacePlayerRepostiory


class MemoryPlayerRepository(InterfacePlayerRepostiory):
    def __init__(self):
        self.players = []

    def save(self, player: Player):
        self.players.append({
            'id': player.id,
            'name': player.name,
            'position': player.position,

        })
        return "player creado de forma exitosa"

    def get_all(self):
        return json.dumps(self.players)
