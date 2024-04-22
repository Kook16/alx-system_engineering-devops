#!/usr/bin/python3
'''Retrieve data'''
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


def getDate():
    '''
    Get the data from the API'''

    user_id = validate_input(argv)

    url = "https://jsonplaceholder.typicode.com/todos/"
    url2 = f"https://jsonplaceholder.typicode.com/users/{user_id}"

    params = {"userId": user_id}
    response = requests.get(url, params=params)
    num_todos = 0
    num_com_todos = 0
    todos = ""

    todos = response.json()
    num_todos = len(todos)
    for todo in todos:
        if todo.get("completed"):
            num_com_todos += 1

    response2 = requests.get(url2)
    user = response2.json()
    print(f"Employee {user.get('name')} is done with\
 tasks({num_com_todos}/{num_todos})")
    for todo in todos:
        if todo.get("completed"):
            print(f"{todo.get('title')}")


if __name__ == "__main__":
    getDate()
