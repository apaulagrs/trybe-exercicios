# Separe as palavras de acordo com sua letra inicial:

text = ["Ana", "ama", "João", "que", "ama", "José", "mas", "José", "não",
        "ama", "Ana"]

# resposta:
# a: ["Ana", "ama", "ama", "ama", "Ana"]
# j: ["João", "José", "José",]
# q: ["que"]
# m: ["mas"]
# n: ["não"]


def screnning(text):
    screen = {}

    for word in text:
        first_char = word[0].lower()
        if first_char not in screen:
            screen[first_char] = [word]
        else:
            screen[first_char].append(word)
    return screen


for key, value in screnning(text).items():
    print(f"{key}: {value}")
