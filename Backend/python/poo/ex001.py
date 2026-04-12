class ContaBancaria(): 
    def __init__(self, titular,saldo=0):
        self.titular = titular
        self.saldo = saldo
    
    def depositar(self,valor):
        self.saldo += valor
        print(f"Depósito de R${valor:.2f} realizado. Novo saldo: R${self.saldo:.2f}")

    def sacar(self,valor):
        if valor <= self.saldo:
            self.saldo -= valor
            print(f"Saque de R${valor:.2f} realizado. Novo saldo: R${self.saldo:.2f}")
        else: 
            print("Saldo insuficiente para realizar o saque.")

conta1 = ContaBancaria("Maria", 1000)
conta2 = ContaBancaria("João", 500)

print(f"Saldo inicial da conta de {conta1.titular}: R${conta1.saldo:.2f}")
conta1.depositar(200)

print(f"Saldo inicial da conta de {conta2.titular}: R${conta2.saldo:.2f}")
conta2.sacar(100)

print(f"\nSaldo final da conta de {conta1.titular}: R${conta1.saldo:.2f}")
print(f"\nSaldo final da conta de {conta2.titular}: R${conta2.saldo:.2f}")
