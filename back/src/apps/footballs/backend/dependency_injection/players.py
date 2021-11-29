from contexts.footballs.players.aplications.PlayerAplication import PlayerApplication
from contexts.footballs.players.infraestructure.persistence.MemoryPlayerRepository import MemoryPlayerRepository as PlayerRepository


class PlayerInjection:
    def __init__(self):
        self.instance = PlayerApplication(PlayerRepository())

    def getInstance(self) -> PlayerApplication:
        return self.instance
