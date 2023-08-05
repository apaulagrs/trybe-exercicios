# while True:
#     try:
#         x = int(input("Por favor digite um número inteiro: "))
#         break
#     except ValueError:
#         #'ValueError' é a exceção que ocorre quando a função int() recebe
#         # um valor que não pode ser traduzido para número inteiro
#         print("Oops! Esse não era um número inteiro. Tente novamente...")

# try:
#     with open("arquivo.txt", "r") as file:
#         print(file.read())
# except FileNotFoundError:
#     print("Arquivo inexistente")
# else:
#     print("Arquivo manipulado e fechado")
# finally:
#     print("Fim da tentativa de ler o arquivo")

recovery_students = []
with open("alunos.txt") as grades_file:
    for line in grades_file:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recovery_students.append(student_grade[0] + "\n")

with open("recuStudents.txt", mode="w") as recu_students_file:
    print(recovery_students)
    recu_students_file.writelines(recovery_students)
