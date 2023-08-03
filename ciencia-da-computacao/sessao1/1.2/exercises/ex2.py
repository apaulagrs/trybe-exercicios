import random
# scrambled_word = "".join(random.sample(word, len(word)))
# random.choice(["coelho", "gabriella", "desenvolvimento"])


WORDS = [
    "coelho",
    "dricanilda",
    "desenvolvimento",
    "paiol",
    "estudantes",
]


def scrambled_word(words):
    choice_word = random.choice(words)
    scrambled_word_new = "".join(random.sample(choice_word, len(choice_word)))
    return choice_word, scrambled_word_new


MAX_ATTEMPTS = 3

# scrambled_word(choice_word)
# print(f"certa é {choice_word}")


def input_guesses():
    guesses = []
    for attempt in range(MAX_ATTEMPTS):
        guess = input("Advinhe a palavra: ")
        guesses.append(guess)
    return guesses


def right_answer(choice_word, guesses):
    if choice_word in guesses:
        print(f"ACERTOU!! {choice_word}")
    else:
        print(f"Errrrrrouuuuuu (faustão) {choice_word}")


if __name__ == '__main__':
    choice_word, scrambled_word_new = scrambled_word(WORDS)
    print(f"A palavra embaralhada é {scrambled_word_new}")
    user_sugested = input_guesses()
    right_answer(choice_word, user_sugested)
