VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
RESET = "\033[0m"


class Log:
    def dispara_log(self, message: str):
        return message


class LogError:
    def __init__(self, log: Log):
        self.log = log

    def dispara_log(self, message: str):
        return f"{VERMELHO}{self.log.dispara_log(message)}{RESET}"


class LogWarning:
    def __init__(self, log: Log):
        self.log = log

    def dispara_log(self, message: str):
        return f"{LARANJA}{self.log.dispara_log(message)}{RESET}"


class LogSuccess:
    def __init__(self, log: Log):
        self.log = log

    def dispara_log(self, message: str):
        return f"{VERDE}{self.log.dispara_log(message)}{RESET}"


if __name__ == "__main__":
    logger = Log()
    print(LogError(logger).dispara_log("O sistema está com erros"))
    print(LogWarning(logger).dispara_log("O sistema está lento"))
    print(LogSuccess(logger).dispara_log("O sistema está funcionando"))
