import threading
import time

def processar_tarefa(tarefa):
    #simulando uma tarefa demorada 
    time.sleep(2)
    print(f'Tarefa processada: (tarefa)')

def processamento_multithreading(tarefas):
    threads = []
    for tarefa in tarefas: 
        thread = threading.Thread(target=processar_tarefa, args=(tarefas,))
        threads.append(thread)
        thread.start()

    for thread in threads: 
        thread.join()

tarefas = ["Tarefa01", "Tarefa02", "Tarefa03"]

print("Versão com Multithreading: ")
processamento_multithreading(tarefas)