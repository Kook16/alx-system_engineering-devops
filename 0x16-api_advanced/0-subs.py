#!/usr/bin/python3
'''API MODULE'''
import requests


def number_of_subscribers(subreddit):
    '''returns the number of subscribers (not active users,
    total subscribers) for a given subreddit'''
    if subreddit is None or type(subreddit) is not str:
        print(None)

    headers = {'User-Agent': 'VUTHhzWkxrTG56djBsR3dhN'}
    parameters = {'limit': 10}

    url = 'https://www.reddit.com/r/{}/hot.json'.format(subreddit)

    response = requests.get(url, headers=headers, params=parameters,
                            allow_redirects=False)
    try:
        if response.status_code >= 400:
            print(None)
            return

        data = response.json()
        if data is None:
            print(None)

        posts = data.get('data').get('children')

        [print(post.get('data').get('title')) for post in posts]
    except Exception:
        print(None)
