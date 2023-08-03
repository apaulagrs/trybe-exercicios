import random


MAX_ATTEMPTS = 3


def retrieve_words(file):
    return [word.strip() for word in file]


def scrambled_word(words):
    choice_word = random.choice(words)
    scrambled_word_new = "".join(random.sample(choice_word, len(choice_word)))
    return choice_word, scrambled_word_new


def input_guesses():
    guesses = []
    for attempt in range(MAX_ATTEMPTS):
        guess = input("Advinhe a palavra: ")
        guesses.append(guess)
    return guesses


def right_answer(choice_word, guesses):
    if choice_word in guesses:
        print(f"ACERTOU!! A palavra embaralhada é: {choice_word}")
    else:
        print(f"Errrrrrouuuuuu! A palavra embaralhada é: {choice_word}")


if __name__ == '__main__':
    with open("words.txt") as file:
        words = retrieve_words(file)
    choice_word, scrambled_word_new = scrambled_word(words)
    print(f"A palavra embaralhada é {scrambled_word_new}")
    user_sugested = input_guesses()
    right_answer(choice_word, user_sugested)
