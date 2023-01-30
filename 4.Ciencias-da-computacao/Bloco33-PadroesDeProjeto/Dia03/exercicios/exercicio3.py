from abc import ABC, abstractmethod


class Account(ABC):
    def __init__(self, username):
        self.username = username
        self.permissions = []
        self.create_account()

    @abstractmethod
    def create_account():
        raise NotImplementedError

    def show_permissions(self):
        permissions_names = [
            permission.name for permission in self.permissions
        ]
        return permissions_names

    def add_permissions(self, permission):
        self.permissions.append(permission)


class SupportAccount(Account):
    def create_account(self):
        self.add_permissions(SupportSystemAccess())


class ManagerAccount(Account):
    def create_account(self):
        self.add_permissions(SupportSystemAccess())
        self.add_permissions(FinanceSystemAccess())
        self.add_permissions(SalesSystemAccess())


class SupportSalerAccount(Account):
    def create_account(self):
        self.add_permissions(SupportSystemAccess())
        self.add_permissions(SalesSystemAccess())


class SystemAccess(ABC):
    @abstractmethod
    def __init__(self):
        raise NotImplementedError


class SupportSystemAccess(SystemAccess):
    def __init__(self):
        self.name = "Support"


class FinanceSystemAccess(SystemAccess):
    def __init__(self):
        self.name = "Finance"


class SalesSystemAccess(SystemAccess):
    def __init__(self):
        self.name = "Sales"


if __name__ == "__main__":
    print("Qual o nome da pessoa que deseja criar?")
    name = input()
    print("Escolha qual o código do perfil que deseja criar: ")
    account_type = input("\n1 - Suporte\n2 - Gerente\n3 - Vendas & Suporte\n")

    if account_type == "1":
        account = SupportAccount(name)
    elif account_type == "2":
        account = ManagerAccount(name)
    elif account_type == "3":
        account = SupportSalerAccount(name)

    print(f"\nCriando a conta para {account.username}.")
    print(f"Acesso liberado para os sistemas: {account.show_permissions()}")
