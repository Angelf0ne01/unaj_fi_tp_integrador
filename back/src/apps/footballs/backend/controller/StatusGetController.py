from .InterfaceController import InterfaceController
class StatusGetController(InterfaceController):
    def run(self, req,resp):
        return resp("",200)
    