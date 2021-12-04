from contexts.footballs.players.aplications.PlayerAplication import PlayerApplication
from contexts.footballs.players.infraestructure.persistence.MemoryPlayerRepository import MemoryPlayerRepository as PlayerRepository
from contexts.footballs.players.infraestructure.persistence.MysqlRepository import MysqlPlayerRepository


class PlayerInjection:
    def __init__(self):
        self.instance = PlayerApplication(MysqlPlayerRepository())

    def getInstance(self) -> PlayerApplication:
        return self.instance
