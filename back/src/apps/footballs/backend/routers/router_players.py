from flask import Blueprint, make_response, jsonify, request
from ..controller.PlayerController import PlayerController
from ..dependency_injection.players import PlayerInjection

router = Blueprint('players', __name__)

@router.route('/', methods=['PUT'])
def create():
    playerController = PlayerController(PlayerInjection().getInstance())
    return playerController.create(request, make_response)


# get by id
@router.route('/<id>', methods=['GET'])
def getById(id):
    playerController = PlayerController(PlayerInjection().getInstance())
    request.query = {'id': id}
    return playerController.get_by_id(request, make_response)


# get all players
@router.route('/', methods=['GET'])
def getAll():
    playerController = PlayerController(PlayerInjection().getInstance())
    return playerController.get_all(request, make_response)

# delete


@router.route('/<id>', methods=['DELETE'])
def delete(id):
    playerController = PlayerController(PlayerInjection().getInstance())
    request.query = {'id': id}
    return playerController.delete_by_id(request, make_response)


@router.route('/<id>', methods=['POST'])
def update(id):
    playerController = PlayerController(PlayerInjection().getInstance())
    request.query = {'id': id}
    return playerController.update_by_id(request, make_response)
