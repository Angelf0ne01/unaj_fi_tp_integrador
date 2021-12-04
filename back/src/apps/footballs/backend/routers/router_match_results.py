from flask import Blueprint, make_response, jsonify, request

from ..controller.MatchResultController import MatchResultController
from ..dependency_injection.matchResult import MatchResultInjection

router = Blueprint('matchResults', __name__)


@router.route('/', methods=['PUT'])
def create():
    matchResultController = MatchResultController(
        MatchResultInjection().getInstance())
    return matchResultController.create(request, make_response)


# get by id
@router.route('/<id>', methods=['GET'])
def getById(id):
    matchResultController = MatchResultController(
        MatchResultInjection().getInstance())
    request.query = {'id': id}
    return matchResultController.get_by_id(request, make_response)


# get all players
@router.route('/', methods=['GET'])
def getAll():
    matchResultController = MatchResultController(
        MatchResultInjection().getInstance())
    return matchResultController.get_all(request, make_response)

# delete


@router.route('/<id>', methods=['DELETE'])
def delete(id):
    matchResultController = MatchResultController(
        MatchResultInjection().getInstance())
    request.query = {'id': id}
    return matchResultController.delete_by_id(request, make_response)


@router.route('/<id>', methods=['POST'])
def update(id):
    matchResultController = MatchResultController(
        MatchResultInjection().getInstance())
    request.query = {'id': id}
    return matchResultController.update_by_id(request, make_response)
