from flask import Blueprint, make_response
from ..controller.StatusGetController import StatusGetController

router = Blueprint('status', __name__)
@router.route('/')
def index():
    return StatusGetController().run(None, make_response)
