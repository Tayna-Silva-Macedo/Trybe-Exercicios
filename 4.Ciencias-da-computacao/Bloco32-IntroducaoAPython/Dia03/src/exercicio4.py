from src.exercicio3 import validate_email


def filter_valid_emails(emails: list) -> list:
    valid_emails = []

    for email in emails:
        try:
            validate_email(email)
        except ValueError as exc:
            print(exc)
        else:
            valid_emails.append(email)

    return valid_emails
