from ..domain.Team import Team
from ..domain.TeamRepository import InterfaceTeamRepostiory


class TeamApplication:
    def __init__(self, team_repository: InterfaceTeamRepostiory):
        self.repository = team_repository

    def create(self, id, name):
        self.team = Team(id, name)
        self.repository.save(self.team)
        return self.repository.get_all()

    def get_all(self):
        return self.repository.get_all()

    def get_by_id(self, id):
        return self.repository.get_by_id(id)

    def update(self, id, name):
        self.team = Team(id, name)
        return self.repository.update(self.team)

    def remove(self, id):
        return self.repository.remove(id)
