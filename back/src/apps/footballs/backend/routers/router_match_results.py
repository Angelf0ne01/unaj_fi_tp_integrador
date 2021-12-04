from flask import Blueprint, make_response, jsonify, request
from flask_cors import CORS

from ..controller.MatchResultController import MatchResultController
from ..dependency_injection.matchResult import MatchResultInjection

router = Blueprint('matchResults', __name__,)
CORS(router, resources=r'/*')


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
    return matchResultController.get_all(request, make_response).headers.add('Access-Control-Allow-Origin', '*')

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
