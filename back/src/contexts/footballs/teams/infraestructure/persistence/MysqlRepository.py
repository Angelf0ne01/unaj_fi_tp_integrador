import json

from ...domain.Team import Team
from ...domain.TeamRepository import InterfaceTeamRepostiory
from ....shared.infraestructure.mysqlRepository import MysqlRepository


class MysqlPlayerRepository(MysqlRepository, InterfaceTeamRepostiory):
    def __init__(self):
        super().__init__()
        self.table = "teams"

    def save(self, team: Team):
        self.team = {
            'id': team.id,
            'name': team.name,
        }
        return self.insert(self.table, self.team)

    def get_all(self):
        return self.getAll(self.table)

    def get_by_id(self, id):
        return self.getById(self.table, id)

    def update(self, team: Team):
        self.team = {
            'id': team.id,
            'name': team.name,
        }
        return self.updateById(self.table, team.id, self.team)

    def remove(self, id):
        return self.deleteById(self.table, id)
