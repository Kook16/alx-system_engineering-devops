import csv
import requests
from sys import argv


def validate_input(args):
    '''Validate the input'''
    if len(args) < 2:
        print("Usage: python3 fabfile.py <user_id>")
        exit(1)
    try:
        user_id = int(args[1])
        return user_id
    except ValueError:
        print(f"{args[1]} must be an integer")
        exit(1)


def get_user_name(user_id):
    '''Retrieve user name from API'''
    url = f"https://jsonplaceholder.typicode.com/users/{user_id}"
    response = requests.get(url)
    if response.status_code == 200:
        user = response.json()
        return user.get("name")
    else:
        print("Error fetching user data from API")
        exit(1)


def get_todos(user_id):
    '''Get the data from the API'''
    url = f"https://jsonplaceholder.typicode.com/todos?userId={user_id}"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        print("Error fetching todos data from API")
        exit(1)


def write_to_csv(todos, user_id, user_name):
    '''Write todos data to a CSV file'''
    file_name = f"{user_id}.csv"
    with open(file_name, "w", newline="") as csvfile:
        writer = csv.writer(csvfile)
        for todo in todos:
            writer.writerow([
                user_id,
                user_name,
                todo.get("completed"),
                todo.get("title")
            ])


if __name__ == "__main__":
    user_id = validate_input(argv)
    user_name = get_user_name(user_id)
    todos = get_todos(user_id)
    write_to_csv(todos, user_id, user_name)
