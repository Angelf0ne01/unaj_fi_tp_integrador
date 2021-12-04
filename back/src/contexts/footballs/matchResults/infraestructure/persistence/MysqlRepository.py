import json

from ...domain.MatchResult import MatchResult
from ...domain.MatchResultRepository import InterfaceMatchResultRepostiory
from ....shared.infraestructure.mysqlRepository import MysqlRepository


class MysqlMatchResultRepository(MysqlRepository, InterfaceMatchResultRepostiory):
    def __init__(self):
        super().__init__()
        self.table = "match_results"

    def save(self, mathResult: MatchResult):
        self.mathResult = {
            'id': mathResult.id,
            'score1': mathResult.score1,
            'score2': mathResult.score2,
            'team1': mathResult.team1,
            'team2': mathResult.team2,
            'date': mathResult.date,
        }
        return self.insert(self.table, self.mathResult)

    def get_all(self):
        return self.getAll(self.table)

    def get_by_id(self, id):
        return self.getById(self.table, id)

    def update(self, mathResult: MatchResult):
        self.mathResult = {
            'id': mathResult.id,
            'score1': mathResult.score1,
            'score2': mathResult.score2,
            'team1': mathResult.team1,
            'team2': mathResult.team2,
            'date': mathResult.date,
        }
        return self.updateById(self.table, mathResult.id, self.mathResult)

    def remove(self, id):
        return self.deleteById(self.table, id)
