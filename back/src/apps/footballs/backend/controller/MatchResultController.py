from .InterfaceController import InterfaceController
import contexts.footballs.matchResults.applications.MathResultApplications as MathResultApplications


class MatchResultController(InterfaceController):
    def __init__(self, matchResultApplication: MathResultApplications.MatchResultApplication) -> None:
        self.matchResultApplication = matchResultApplication
        super().__init__()

    def create(self, req, resp):
        # body data json
        id = req.json["id"]
        status = req.json["status"]
        team1 = req.json["team1"]
        team2 = req.json["team2"]
        score1 = req.json["score1"]
        score2 = req.json["score2"]
        date = req.json["date"]

        resp_creator = self.matchResultApplication.create(
            id, status, team1, team2, score1, score2, date)
        return resp(resp_creator, 200)

    def get_all(self, req, resp):
        match_result_find_all = self.matchResultApplication.get_all()
        return resp(match_result_find_all, 200)

    def get_by_id(self, req, resp):
        id = req.query["id"]
        match_result_find_by_id = self.matchResultApplication.get_by_id(id)
        return resp(match_result_find_by_id, 200)

    def delete_by_id(self, req, resp):
        id = req.query["id"]
        match_result_delete_by_id = self.matchResultApplication.delete_by_id(
            id)
        return resp(match_result_delete_by_id, 200)

    def update_by_id(self, req, resp):
        id = req.json["id"]
        status = req.json["status"]
        team1 = req.json["team1"]
        team2 = req.json["team2"]
        score1 = req.json["score1"]
        score2 = req.json["score2"]
        date = req.json["date"]
        match_result_update_by_id = self.matchResultApplication.update(
            id, status, team1, team2, score1, score2, date)
        return resp(match_result_update_by_id, 200)
