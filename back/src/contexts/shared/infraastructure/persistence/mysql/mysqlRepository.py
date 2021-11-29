from typing import TypeVar, Generic

T = TypeVar('T')


class MysqlRepository(Generic[T]):
    def save(self, player: T):
        pass

    def getById(self, id: int) -> T:
        pass

    def getAll(self) -> T:
        pass
