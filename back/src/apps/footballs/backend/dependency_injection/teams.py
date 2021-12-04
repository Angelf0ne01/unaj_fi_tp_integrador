from contexts.footballs.teams.applications.TeamApplications import TeamApplication
from contexts.footballs.teams.infraestructure.persistence.MysqlRepository import MysqlPlayerRepository


class TeamInjection:
    def __init__(self):
        self.instance = TeamApplication(MysqlPlayerRepository())

    def getInstance(self) -> TeamApplication:
        return self.instance
