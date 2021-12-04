from flask import Blueprint, make_response, jsonify, request
from ..controller.TeamController import TeamController
from ..dependency_injection.teams import TeamInjection

router = Blueprint('teams', __name__)

@router.route('/', methods=['PUT'])
def create():
    teamController = TeamController(TeamInjection().getInstance())
    return teamController.create(request, make_response)


# get by id
@router.route('/<id>', methods=['GET'])
def getById(id):
    teamController = TeamController(TeamInjection().getInstance())
    request.query = {'id': id}
    return teamController.get_by_id(request, make_response)


# get all teams
@router.route('/', methods=['GET'])
def getAll():
    teamController = TeamController(TeamInjection().getInstance())
    return teamController.get_all(request, make_response)

# delete
@router.route('/<id>', methods=['DELETE'])
def delete(id):
    teamController = TeamController(TeamInjection().getInstance())
    request.query = {'id': id}
    return teamController.delete_by_id(request, make_response)


@router.route('/<id>', methods=['POST'])
def update(id):
    teamController = TeamController(TeamInjection().getInstance())
    request.query = {'id': id}
    return teamController.update_by_id(request, make_response)
