from .InterfaceController import InterfaceController
import contexts.footballs.teams.applications.TeamApplications as TeamApplications


class TeamController(InterfaceController):
    def __init__(self, teamApplication: TeamApplications.TeamApplication) -> None:
        self.teamApplication = teamApplication
        super().__init__()

    def create(self, req, resp):
        # body data json
        id = req.json["id"]
        name = req.json["name"]

        resp_creator = self.teamApplication.create(id, name)
        return resp(resp_creator, 200)

    def get_all(self, req, resp):
        team_find_all = self.teamApplication.get_all()
        return resp(team_find_all, 200)

    def get_by_id(self, req, resp):
        id = req.query["id"]
        team_find_by_id = self.teamApplication.get_by_id(id)
        return resp(team_find_by_id, 200)

    def delete_by_id(self, req, resp):
        id = req.query["id"]
        team_delete_by_id = self.teamApplication.delete_by_id(id)
        return resp(team_delete_by_id, 200)

    def update_by_id(self, req, resp):
        id = req.json["id"]
        name = req.json["name"]
        team_update_by_id = self.teamApplication.update(id, name)
        return resp(team_update_by_id, 200)
