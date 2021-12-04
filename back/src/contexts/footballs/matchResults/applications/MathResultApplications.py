from ..domain.MatchResult import MatchResult
from ..domain.MatchResultRepository import InterfaceMatchResultRepostiory


class MatchResultApplication:
    def __init__(self, mathResult_repository: InterfaceMatchResultRepostiory):
        self.repository = mathResult_repository

    def create(self, id, status, team1, team2, score1, score2, date):
        self.matchResult = MatchResult(
            id, status, team1, team2, score1, score2, date)
        return self.repository.save(self.matchResult)

    def get_all(self):
        return self.repository.get_all()

    def get_by_id(self, id):
        return self.repository.get_by_id(id)

    def update(self, id, status, team1, team2, score1, score2, date):
        self.matchResult = MatchResult(
            id, status, team1, team2, score1, score2, date)
        return self.repository.update(self.matchResult)

    def remove(self, id):
        return self.repository.remove(id)
