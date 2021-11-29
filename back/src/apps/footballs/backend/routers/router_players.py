from flask import Blueprint, make_response
from ..controller.PlayerController import PlayerController
from ..dependency_injection.players import PlayerInjection

router = Blueprint('players', __name__,)


#create
@router.route('/',methods=['GET'])
def getAll():    
    
    playerController = PlayerController(PlayerInjection().getInstance())       
    return playerController.get_all(None,make_response)    

#get all
@router.route('/',methods=['PUT'])
def create():    
    playerController = PlayerController(PlayerInjection().getInstance())    
    return playerController.create(None,make_response)    

