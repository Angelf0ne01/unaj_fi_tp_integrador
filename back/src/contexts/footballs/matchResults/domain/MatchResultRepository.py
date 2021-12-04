from .MatchResult import MatchResult


class InterfaceMatchResultRepostiory:
    def save(self, matchResult: MatchResult):
        pass

    def get_all(self):
        pass

    def get_by_id(self, id):
        pass

    def update(self, matchResult: MatchResult):
        pass

    def remove(self, id):
        pass
