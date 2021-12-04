from contexts.footballs.matchResults.applications.MathResultApplications import MatchResultApplication
from contexts.footballs.matchResults.infraestructure.persistence.MysqlRepository import MysqlMatchResultRepository


class MatchResultInjection:
    def __init__(self):
        self.instance = MatchResultApplication(MysqlMatchResultRepository())

    def getInstance(self) -> MatchResultApplication:
        return self.instance
